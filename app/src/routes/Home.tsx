import { Sparkles } from 'lucide-react'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="flex flex-col items-center gap-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 text-sm font-medium text-accent-foreground">
          <Sparkles className="size-4" />
          Welcome
        </span>
        <h1
          className="font-heading text-6xl font-bold tracking-tight text-primary text-balance sm:text-7xl"
          style={{
            color: "#061A14"
          }}>
          Hello, world
        </h1>
        <p className="max-w-md text-lg text-muted-foreground text-pretty">
          A tiny, friendly starting point. Everything begins somewhere.
        </p>
      </div>
    </main>
  );
}
