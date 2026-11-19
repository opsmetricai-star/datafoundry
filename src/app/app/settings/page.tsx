import { createClient } from "@/lib/supabase/server";
import PasswordForm from "./PasswordForm";

export default async function Settings() {
  const sb = await createClient();
  const { data: { user } } = await sb.auth.getUser();
  return (
    <div className="max-w-lg">
      <h1 className="h-lg">Settings</h1>
      <p className="mt-4">Signed in as <b>{user?.email}</b></p>
      <h2 className="mt-8 text-[20px] font-medium">Change password</h2>
      <PasswordForm />
    </div>
  );
}
