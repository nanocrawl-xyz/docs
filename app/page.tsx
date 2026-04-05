import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">NanoCrawl Docs</h1>
      <p className="text-fd-muted-foreground text-lg mb-8 max-w-lg">
        Pay-per-page web browsing for AI agents. Content providers earn, agents pay, humans browse free.
      </p>
      <Link
        href="/docs"
        className="bg-fd-primary text-fd-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
      >
        Read the Docs
      </Link>
    </main>
  );
}
