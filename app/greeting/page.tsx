import { connection } from "next/server";

// NEXT_PUBLIC_* variables are inlined at build time, so the full
// `process.env.NEXT_PUBLIC_GREETING` expression must appear literally here.
const greeting = process.env.NEXT_PUBLIC_GREETING?.trim() || "Hello from Vercel";

const dateFormat: Intl.DateTimeFormatOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  // Pinned so the rendered date does not shift with the deploy region's clock.
  timeZone: "UTC",
};

export default async function GreetingPage() {
  // Without this the route is prerendered at build time and `new Date()` would
  // freeze the build date into the HTML. See next/dist/docs -> functions/connection.
  await connection();
  const today = new Date().toLocaleDateString("en-US", dateFormat);

  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="px-8 py-32 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
          {greeting}
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">{today}</p>
      </main>
    </div>
  );
}
