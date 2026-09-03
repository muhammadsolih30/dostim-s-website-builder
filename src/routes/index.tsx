import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Check,
  LineChart,
  MessageCircle,
  Send,
  Sparkles,
  Target,
  Timer,
  TrendingDown,
  Wallet,
} from "lucide-react";

import { brands, cases, packages, portraitUrl, problems } from "@/components/site/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marjona Rabbimova — targetolog | Sifatli lidlar" },
      {
        name: "description",
        content:
          "Qurilish, ta'lim va B2B biznesi uchun AI va analitikaga asoslangan target. 35 000$+ boshqarilgan byudjet, 38 000+ lid, 70% sifatli lid.",
      },
      { property: "og:title", content: "Marjona Rabbimova — targetolog" },
      {
        property: "og:description",
        content:
          "Reklamaga pul sarflash emas, natija olish muhim. Sifatli lidlarga yo‘naltirilgan reklama tizimlari.",
      },
    ],
  }),
  component: Home,
});

const TELEGRAM = "https://t.me/";

const nav = [
  { label: "Muammo", href: "#muammo" },
  { label: "Natijalar", href: "#natijalar" },
  { label: "Men haqimda", href: "#men-haqimda" },
  { label: "Brendlar", href: "#brendlar" },
  { label: "Paketlar", href: "#paketlar" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Problems />
        <Results />
        <About />
        <Brands />
        <Packages />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 sm:px-6 ${
          scrolled
            ? "border-border bg-card/80 backdrop-blur-xl shadow-[var(--shadow-soft)]"
            : "border-transparent bg-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-xl bg-[image:var(--gradient-gold)] text-primary-foreground">
            <Target className="size-4.5" strokeWidth={2.4} />
          </span>
          <span className="font-semibold tracking-tight">Marjona Rabbimova</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#aloqa"
          className="rounded-xl bg-[image:var(--gradient-gold)] px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
        >
          Maslahat olish
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute -right-40 top-10 size-[34rem] rounded-full bg-accent/20 blur-[140px]" />
      <div className="relative mx-auto max-w-6xl px-5">
        <p className="animate-rise text-xs font-semibold uppercase tracking-[0.28em] text-primary">
          Marjona Rabbimova — targetolog
        </p>
        <h1 className="animate-rise mt-6 max-w-4xl text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
          Reklamaga pul sarflash emas,{" "}
          <span className="text-gold">natija olish</span> muhim
        </h1>
        <p className="animate-rise mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Biznesingiz uchun reklama kampaniyalarini AI, analitika va real ko‘rsatkichlar
          asosida ishlab chiqaman va optimallashtiraman.
        </p>
        <div className="animate-rise mt-9 flex flex-wrap gap-3">
          <a
            href="#aloqa"
            className="group inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-gold)] px-6 py-3.5 font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
          >
            Bepul maslahat olish
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#natijalar"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/50 px-6 py-3.5 font-semibold backdrop-blur transition-colors hover:bg-card"
          >
            Portfolio bilan tanishish
          </a>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          1,5 yillik tajriba · Sifatli lidlar · Sotuvga yo‘naltirilgan reklama
        </p>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { k: "$35K+", v: "boshqarilgan byudjet" },
            { k: "38,000+", v: "jami lidlar" },
            { k: "70%", v: "sifatli lid ulushi" },
            { k: "$1.30", v: "eng arzon lid narxi" },
          ].map((s) => (
            <div
              key={s.k}
              className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur"
            >
              <div className="text-3xl font-bold text-gold">{s.k}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {["Qurilish", "Ta’lim", "B2B"].map((t) => (
            <span
              key={t}
              className="rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionTitle({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-bold sm:text-4xl">{title}</h2>
      {desc ? <p className="mt-4 text-muted-foreground">{desc}</p> : null}
    </div>
  );
}

const problemIcons: Record<string, typeof Target> = {
  wallet: Wallet,
  target: Target,
  "trending-down": TrendingDown,
  timer: Timer,
  chart: BarChart3,
};

function ProblemIcon({ name }: { name: string }) {
  const Icon = problemIcons[name] ?? Target;
  return (
    <span className="grid size-11 place-items-center rounded-xl border border-border bg-secondary text-primary transition-colors group-hover:border-primary/40">
      <Icon className="size-5" />
    </span>
  );
}

function Problems() {
  return (
    <section id="muammo" className="scroll-mt-28 border-t border-border/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          eyebrow="Muammo"
          title="Reklamangiz ishlayapti, lekin natija siz kutgandek emasmi?"
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((p) => (
            <div
              key={p.title}
              className="group rounded-2xl border border-border bg-card/50 p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:bg-card"
            >
              <ProblemIcon name={p.icon} />
              <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </div>
          ))}
          <div className="rounded-2xl border border-primary/30 bg-[image:var(--gradient-hero)] p-6">
            <Sparkles className="size-6 text-primary" />
            <h3 className="mt-4 text-lg font-semibold">Yechim bor</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Strategiya → kreativ → target → analitika → CRM. Har bir bosqich raqamlar
              bilan nazorat qilinadi.
            </p>
            <a
              href="#aloqa"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Tizimni ko‘rish <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Results() {
  return (
    <section id="natijalar" className="scroll-mt-28 relative border-t border-border/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionTitle
            eyebrow="Isbotlangan natijalar"
            title="Real loyihalar, real raqamlar"
            desc="Qurilish, ta’lim va B2B yo‘nalishlarida boshqarilgan reklama kampaniyalari."
          />
          <div className="rounded-2xl border border-border bg-card/60 px-6 py-4">
            <div className="text-3xl font-bold text-gold">$35K+</div>
            <div className="text-sm text-muted-foreground">boshqarilgan reklama byudjeti</div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <article
              key={c.name}
              className="group overflow-hidden rounded-2xl border border-border bg-card/50 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                <img
                  src={c.logo}
                  alt={`${c.name} logotipi`}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium backdrop-blur">
                  {c.sphere}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{c.name}</h3>
                <dl className="mt-5 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <dt className="text-muted-foreground">Lidlar</dt>
                    <dd className="mt-0.5 text-lg font-bold text-gold">{c.leads}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">1 ta lid</dt>
                    <dd className="mt-0.5 text-lg font-bold">{c.cpl}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Byudjet</dt>
                    <dd className="mt-0.5 font-semibold">{c.budget}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Sifatli lid</dt>
                    <dd className="mt-0.5 font-semibold">{c.quality}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="men-haqimda" className="scroll-mt-28 border-t border-border/60 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[0.85fr_1fr]">
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-[image:var(--gradient-gold)] opacity-20 blur-2xl" />
          <img
            src={portraitUrl}
            alt="Marjona Rabbimova — targetolog"
            loading="lazy"
            className="relative aspect-[4/5] w-full rounded-[1.75rem] border border-border object-cover object-[50%_30%]"
          />
        </div>
        <div>
          <SectionTitle eyebrow="Men haqimda" title="Marjona Rabbimova" />
          <p className="mt-6 leading-relaxed text-muted-foreground">
            1,5 yillik tajribaga ega targetolog va sifatli lidlar bo‘yicha mutaxassisman.
            Turli sohalardagi reklama kampaniyalarini AI va analitika yordamida tahlil
            qilib, sifatli lid va sotuvga yo‘naltirilgan reklama tizimlarini ishlab
            chiqaman.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { icon: LineChart, t: "Qurilish" },
              { icon: BarChart3, t: "Ta’lim" },
              { icon: Bot, t: "B2B" },
            ].map((i) => (
              <div key={i.t} className="rounded-2xl border border-border bg-card/50 p-5">
                <i.icon className="size-5 text-primary" />
                <div className="mt-3 font-semibold">{i.t}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-primary/30 bg-card/60 p-6">
            <div className="text-3xl font-bold text-gold">$35 000+</div>
            <p className="mt-1 text-sm text-muted-foreground">
              boshqarilgan umumiy reklama byudjeti
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Brands() {
  const row = [...brands, ...brands];
  return (
    <section id="brendlar" className="scroll-mt-28 border-t border-border/60 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle eyebrow="Brendlar" title="Men ishlagan brendlar" />
      </div>
      <div className="relative mt-12 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <div className="marquee-track flex w-max gap-5">
          {row.map((b, i) => (
            <div
              key={`${b.name}-${i}`}
              className="flex size-32 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-border bg-card/50"
            >
              <img
                src={b.logo}
                alt={`${b.name} logotipi`}
                loading="lazy"
                className="size-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Packages() {
  return (
    <section id="paketlar" className="scroll-mt-28 border-t border-border/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          eyebrow="Paketlar"
          title="Biznesingizga mos hamkorlik formati"
          desc="Har bir paket strategiya, kreativ va analitikani o‘z ichiga oladi."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-2xl border p-7 transition-all hover:-translate-y-1 ${
                p.featured
                  ? "border-primary/50 bg-card shadow-[var(--shadow-glow)]"
                  : "border-border bg-card/50"
              }`}
            >
              {p.featured ? (
                <span className="absolute -top-3 left-7 rounded-full bg-[image:var(--gradient-gold)] px-3 py-1 text-xs font-bold text-primary-foreground">
                  Ommabop
                </span>
              ) : null}
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-bold text-gold">{p.price}</span>
                <span className="pb-1 text-muted-foreground">{p.period}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {p.tagline}
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#aloqa"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold transition-transform hover:scale-[1.02] ${
                  p.featured
                    ? "bg-[image:var(--gradient-gold)] text-primary-foreground"
                    : "border border-border bg-secondary text-foreground"
                }`}
              >
                Tanlash <ArrowRight className="size-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const budgetOptions = [
  "Standart — $200/oy",
  "Premium — $350/oy",
  "Vip — $500/oy",
  "Hali aniq emas",
];

function Cta() {
  const submit = useServerFn(submitLead);
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      business: String(fd.get("business") ?? "").trim(),
      budget: String(fd.get("budget") ?? "").trim(),
    };
    if (payload.name.length < 2 || payload.phone.length < 7) {
      setError("Ism va telefon raqamni to‘g‘ri kiriting.");
      return;
    }
    setError(null);
    setState("loading");
    try {
      const res = await submit({ data: payload });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  const inputCls =
    "w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60";

  return (
    <section id="aloqa" className="scroll-mt-28 border-t border-border/60 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">
            Bepul konsultatsiya
          </p>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Bepul maslahatga <span className="text-gold">yoziling</span>
          </h2>
          <p className="mt-5 max-w-md text-muted-foreground">
            Ismingiz va telefon raqamingizni qoldiring. Marjona siz bilan bog‘lanib,
            biznesingizga sifatli lid olib kelish bo‘yicha qisqa maslahat beradi.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={TELEGRAM}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/60 px-5 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-card"
            >
              <Send className="size-4" /> Telegram
            </a>
            <a
              href={TELEGRAM}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/60 px-5 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-card"
            >
              <MessageCircle className="size-4" /> Savol berish
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[1.75rem] border border-primary/25 bg-card/70 p-6 shadow-[var(--shadow-soft)] backdrop-blur sm:p-8">
          <div className="pointer-events-none absolute inset-0 bg-hero opacity-60" />
          {state === "done" ? (
            <div className="relative flex min-h-[320px] flex-col items-center justify-center text-center">
              <span className="grid size-14 place-items-center rounded-full bg-[image:var(--gradient-gold)] text-primary-foreground">
                <Send className="size-6" />
              </span>
              <h3 className="mt-5 text-2xl font-bold">Arizangiz qabul qilindi</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Tez orada siz bilan bog‘lanamiz. Rahmat!
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="relative space-y-4">
              <div>
                <label htmlFor="name" className="text-sm font-semibold">
                  Ism
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  maxLength={100}
                  placeholder="Masalan, Aziz"
                  className={`mt-2 ${inputCls}`}
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-sm font-semibold">
                  Telefon raqam
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  maxLength={30}
                  placeholder="+998 90 123 45 67"
                  className={`mt-2 ${inputCls}`}
                />
              </div>
              <div>
                <label htmlFor="business" className="text-sm font-semibold">
                  Biznes turi
                </label>
                <input
                  id="business"
                  name="business"
                  maxLength={120}
                  placeholder="Qurilish, ta’lim, B2B..."
                  className={`mt-2 ${inputCls}`}
                />
              </div>
              <div>
                <label htmlFor="budget" className="text-sm font-semibold">
                  Oyiga reklama uchun ajratadigan pulingiz
                </label>
                <select id="budget" name="budget" className={`mt-2 ${inputCls}`} defaultValue="">
                  <option value="">Tanlang</option>
                  {budgetOptions.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>
              {error && <p className="text-sm text-destructive">{error}</p>}
              {state === "error" && (
                <p className="text-sm text-destructive">
                  Xatolik yuz berdi. Iltimos, qayta urinib ko‘ring.
                </p>
              )}
              <button
                type="submit"
                disabled={state === "loading"}
                className="w-full rounded-xl bg-[image:var(--gradient-gold)] px-6 py-3.5 font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.01] disabled:opacity-60"
              >
                {state === "loading" ? "Yuborilmoqda..." : "Ro‘yxatdan o‘tish"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 text-sm text-muted-foreground">
        <span>© {new Date().getFullYear()} Marjona Rabbimova — targetolog</span>
        <span>Qurilish · Ta’lim · B2B</span>
      </div>
    </footer>
  );
}
