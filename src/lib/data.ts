export type Row = Record<string, string | number | null>;

/** Minimal RFC4180-style CSV parser (quotes, escaped quotes, CRLF). */
export function parseCsv(text: string): { columns: string[]; rows: Row[] } {
  const out: string[][] = [];
  let row: string[] = [], cell = "", q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) {
      if (c === '"' && text[i + 1] === '"') { cell += '"'; i++; }
      else if (c === '"') q = false;
      else cell += c;
    } else if (c === '"') q = true;
    else if (c === ",") { row.push(cell); cell = ""; }
    else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(cell); cell = "";
      if (row.some((x) => x !== "")) out.push(row);
      row = [];
    } else cell += c;
  }
  row.push(cell);
  if (row.some((x) => x !== "")) out.push(row);
  const columns = (out.shift() ?? []).map((c, i) => c.trim() || `column_${i + 1}`);
  const rows = out.map((r) => Object.fromEntries(columns.map((c, i) => {
    const v = (r[i] ?? "").trim();
    return [c, v === "" ? null : v !== "" && !isNaN(Number(v)) ? Number(v) : v];
  })));
  return { columns, rows };
}

/** Deterministic per-column statistics (never delegated to the LLM). */
export function columnStats(columns: string[], rows: Row[]) {
  return columns.map((c) => {
    const vals = rows.map((r) => r[c]).filter((v) => v !== null && v !== undefined);
    const nums = vals.filter((v): v is number => typeof v === "number");
    if (nums.length && nums.length === vals.length) {
      const sum = nums.reduce((a, b) => a + b, 0);
      return { column: c, type: "number", count: nums.length, nulls: rows.length - vals.length, min: Math.min(...nums), max: Math.max(...nums), sum, mean: sum / nums.length };
    }
    const freq = new Map<string, number>();
    vals.forEach((v) => freq.set(String(v), (freq.get(String(v)) ?? 0) + 1));
    const top = [...freq.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5).map(([value, count]) => ({ value, count }));
    return { column: c, type: "text", count: vals.length, nulls: rows.length - vals.length, distinct: freq.size, top };
  });
}
