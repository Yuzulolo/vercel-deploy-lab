// NEXT_PUBLIC_* variables are inlined at build time, so the full
// `process.env.NEXT_PUBLIC_GREETING` expression must appear literally here.
const greeting = process.env.NEXT_PUBLIC_GREETING?.trim() || "Hello from Vercel";

export default function GreetingPage() {
  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="px-8 py-32 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
          {greeting}
        </h1>
      </main>
    </div>
  );
}
