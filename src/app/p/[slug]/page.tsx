import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PAGE_SLUGS } from "@/lib/site";

export function generateStaticParams() {
  return Object.keys(PAGE_SLUGS).map((slug) => ({ slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = PAGE_SLUGS[slug];
  if (!title) notFound();
  return (
    <>
      <Header />
      <main>
        <section className="wrap py-20">
          <div className="eyebrow text-[var(--red)]">DataFoundry</div>
          <h1 className="h-xl mt-4">{title}</h1>
          <p className="mt-6 max-w-2xl text-[20px] text-[#1b3139]">Placeholder page. Full content for “{title}” is on the build checklist (see BLUEPRINT.md).</p>
          <div className="mt-8 flex gap-4"><Link href="/signup" className="btn btn-red">Try DataFoundry</Link><Link href="/pricing" className="btn btn-line">See pricing</Link></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
