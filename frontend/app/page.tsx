import Link from "next/link";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";

const Check = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
);

const FEATURES = [
  { title: "Remembers your device", text: "Stores your laptop details, symptoms and fixes.", tone: "mint" },
  { title: "Tracks what you tried", text: "Keeps a timeline of problems and solutions.", tone: "brand" },
  { title: "Private to you", text: "Your data is only visible to you.", tone: "mint" },
];

const STEPS = [
  { n: "1", title: "Tell it about your laptop", text: "Brand, model, operating system and age. Once." },
  { n: "2", title: "Describe the problem", text: "Chat in plain words, or attach a photo of the issue." },
  { n: "3", title: "It remembers what happened", text: "Every symptom and every fix is saved, so the next chat starts with context." },
];

function Illustration() {
  return (
    <div className="relative mx-auto w-full max-w-md" aria-hidden>
      <svg viewBox="0 0 420 300" className="w-full">
        <ellipse cx="200" cy="150" rx="185" ry="125" fill="rgb(var(--il-glow))" />
        <rect x="80" y="55" width="240" height="160" rx="12" fill="rgb(var(--brand))" />
        <rect x="92" y="67" width="216" height="136" rx="6" fill="rgb(var(--il-screen))" />
        <path d="M50 232h300l-18-17H68z" fill="rgb(var(--il-floor))" />
        <line x1="200" y1="100" x2="200" y2="88" stroke="rgb(var(--brand))" strokeWidth="3" strokeLinecap="round" />
        <circle cx="200" cy="84" r="4" fill="rgb(var(--brand))" />
        <rect x="160" y="100" width="80" height="60" rx="20" fill="rgb(var(--brand))" />
        <circle cx="182" cy="128" r="6" fill="rgb(var(--il-screen))" />
        <circle cx="218" cy="128" r="6" fill="rgb(var(--il-screen))" />
        <path d="M186 145q14 9 28 0" stroke="rgb(var(--il-screen))" strokeWidth="3" strokeLinecap="round" fill="none" />
      </svg>
      {[
        ["Remembers your laptop", "right-0 top-[18%]"],
        ["Finds better fixes", "right-[-2%] top-[42%]"],
        ["Keeps your history", "right-[6%] top-[70%]"],
      ].map(([t, pos]) => (
        <span key={t} className={`absolute ${pos} rounded-md bg-surface px-2.5 py-1 text-[11px] font-semibold shadow-card`}>{t}</span>
      ))}
    </div>
  );
}

export default function Landing() {
  return (
    <div className="min-h-screen">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <Logo size={30} />
        <nav className="flex items-center gap-3 text-sm font-medium sm:gap-5">
          <a href="#features" className="hidden hover:text-brand sm:inline">Features</a>
          <a href="#how-it-works" className="hidden hover:text-brand sm:inline">How it works</a>
          <ThemeToggle />
          <Link href="/login" className="btn-outline !py-2">Log in</Link>
          <Link href="/signup" className="btn-primary !py-2">Get started</Link>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-5 sm:px-8">
        <section className="grid items-center gap-10 py-10 md:grid-cols-2 md:py-16">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              The support agent that <span className="text-brand">remembers your laptop.</span>
            </h1>
            <p className="mt-5 max-w-md text-ink-muted">
              Tell Engram about your laptop once. It remembers every symptom and every fix, so you never explain the same problem twice.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/signup" className="btn-primary">Get started</Link>
              <Link href="/login" className="btn-outline">Log in</Link>
            </div>
          </div>
          <Illustration />
        </section>

        <section id="features" className="grid scroll-mt-6 gap-4 pb-14 md:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="flex items-start gap-3 rounded-2xl border border-line bg-surface p-5">
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${f.tone === "mint" ? "bg-mint-soft text-mint-fg" : "bg-brand-soft text-brand"}`}><Check /></span>
              <div>
                <h3 className="text-sm font-bold">{f.title}</h3>
                <p className="mt-1 text-xs text-ink-muted">{f.text}</p>
              </div>
            </div>
          ))}
        </section>

        <section id="how-it-works" className="scroll-mt-6 pb-20">
          <h2 className="mb-6 text-2xl font-extrabold tracking-tight">How it works</h2>
          <ol className="grid gap-4 md:grid-cols-3">
            {STEPS.map((s) => (
              <li key={s.n} className="rounded-2xl border border-line bg-surface p-5">
                <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand text-sm font-bold text-white dark:text-[#0b0e1e]">{s.n}</span>
                <h3 className="text-sm font-bold">{s.title}</h3>
                <p className="mt-1 text-sm text-ink-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </section>
      </main>
    </div>
  );
}