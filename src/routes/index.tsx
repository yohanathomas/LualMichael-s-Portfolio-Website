import { createFileRoute } from "@tanstack/react-router";
import { ShaderBackdrop } from "@/components/shader-backdrop";
import { SouthSudanFlag } from "@/components/south-sudan-flag";
import heroAsset from "@/assets/hero.png.asset.json";
import portraitAsset from "@/assets/portrait.png.asset.json";
import galleryDankind from "@/assets/gallery-dankind.png.asset.json";
import handlesClip from "@/assets/Lual_s_Handles.mp4.asset.json";
import dunkClip from "@/assets/slow_mo.mp4.asset.json";
import blockClip from "@/assets/Lual_Block.mp4.asset.json";

const CLIPS = [
  {
    id: "handles",
    src: handlesClip.url,
    title: "Handles",
    caption: "Shaking defenders — crossover and pocket dribbles.",
    delay: "0.05s",
  },
  {
    id: "dunks",
    src: dunkClip.url,
    title: "Dunks",
    caption: "Rising above the rim — finishing through contact.",
    delay: "0.12s",
  },
  {
    id: "blocks",
    src: blockClip.url,
    title: "Blocks",
    caption: "Reading the drive — timing the help-side block.",
    delay: "0.19s",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lual Michael Aketch — #5 | Basketball Portfolio" },
      {
        name: "description",
        content:
          "Lual Michael Aketch, #5 — young basketball player from Bor, South Sudan. Dankind Academy. Career stats, timeline, and highlights.",
      },
      { property: "og:title", content: "Lual Michael Aketch — #5 | Basketball Portfolio" },
      {
        property: "og:description",
        content:
          "Young basketball player from Bor, South Sudan. #5 at Dankind Academy, building his game one fixture at a time.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const STATS = [
  { label: "Points (season)", value: "500" },
  { label: "Points / game", value: "25.0" },
  { label: "Assists / game", value: "5" },
  { label: "3-pointers / game", value: "3" },
  { label: "Games played", value: "~20" },
  { label: "Born", value: "24 Jul 2011" },
  { label: "Height", value: "6'7\" / 2.01 m" },
  { label: "Weight", value: "71 kg / 156 lb" },
];

const TIMELINE = [
  {
    year: "2019",
    title: "Inter-house competition",
    body: "First taste of competitive basketball, playing for his house in the school inter-house competition.",
    delay: "0.05s",
  },
  {
    year: "2021",
    title: "Captain — Gombe Junior school team",
    body: "Named captain of the Gombe Junior school team, leading his teammates through school fixtures.",
    delay: "0.12s",
  },
  {
    year: "2025",
    title: "Joined Dankind Academy",
    body: "Moved to Dankind Academy to develop his game and train against stronger competition.",
    delay: "0.19s",
  },
  {
    year: "2026",
    title: "Standout unofficial season",
    body: "Across around 20 unofficial games — friendlies and tournaments — scored 500 points, averaging 5 assists and 3 three-pointers per game.",
    delay: "0.26s",
  },
];

const GALLERY = [
  {
    src: heroAsset.url,
    caption: "No. 5 — Ask Sports kit",
    year: "2026",
    delay: "0.05s",
  },
  {
    src: galleryDankind.url,
    caption: "Dankind Academy",
    year: "2025",
    delay: "0.12s",
  },
];

function Index() {
  return (
    <div className="relative min-h-screen text-foreground antialiased overflow-x-hidden">
      <ShaderBackdrop />
      {/* Nav */}
      <nav className="sticky top-0 z-40 glass-panel">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-baseline gap-3">
            <span className="font-display text-2xl leading-none tracking-tight">
              LUAL AKETCH
            </span>
            <span className="font-mono text-[11px] text-beam tracking-[0.2em] hidden sm:inline">
              NO. 5 · G
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[13px] font-medium tracking-wide">
            <a href="#stats" className="text-muted-foreground hover:text-foreground transition-colors">
              Stats
            </a>
            <a href="#bio" className="text-muted-foreground hover:text-foreground transition-colors">
              Bio
            </a>
            <a href="#story" className="text-muted-foreground hover:text-foreground transition-colors">
              Story
            </a>
            <a href="#timeline" className="text-muted-foreground hover:text-foreground transition-colors">
              Career
            </a>
            <a href="#highlights" className="text-muted-foreground hover:text-foreground transition-colors">
              Highlights
            </a>
            <a href="#clips" className="text-muted-foreground hover:text-foreground transition-colors">
              Game tape
            </a>
            <a href="#gallery" className="text-muted-foreground hover:text-foreground transition-colors">
              Gallery
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
          <a
            href="#contact"
            className="rounded-md bg-beam text-background font-semibold text-[13px] px-4 py-2 ring-1 ring-black/5 transition-transform duration-200 hover:-translate-y-0.5"
          >
            Book
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative min-h-[88vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroAsset.url}
            alt="Lual Michael Aketch in a yellow #5 basketball jersey holding a ball"
            width={864}
            height={1080}
            className="w-full h-full object-cover object-[50%_18%] bg-board"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full ring-1 ring-beam/40 bg-beam/10 px-3 py-1 font-mono text-[10px] tracking-[0.2em] uppercase text-beam animate-[rise_0.5s_var(--ease)_both]">
              <span className="size-1.5 rounded-full bg-beam animate-pulse" />
              Open for trials & contracts
            </span>
            <h1 className="font-feasibly uppercase text-[clamp(3.5rem,13vw,10rem)] leading-[0.86] tracking-tight mt-4 [-webkit-text-stroke:0.05em_var(--color-foreground)] animate-[rise_0.55s_var(--ease)_0.05s_both]">
              Lual Michael
              <br />
              <span className="text-beam [-webkit-text-stroke:0.05em_var(--color-beam)]">
                Aketch
              </span>
            </h1>
            <p className="text-pretty text-lg text-muted-foreground mt-6 max-w-[44ch] animate-[rise_0.55s_var(--ease)_0.15s_both]">
              Young basketball player from Bor, South Sudan. #5 at Dankind
              Academy, building his game one unofficial fixture at a time.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 animate-[rise_0.55s_var(--ease)_0.25s_both]">
              <a
                href="#stats"
                className="rounded-md bg-beam text-background font-semibold px-5 py-3 ring-1 ring-black/5 transition-transform duration-200 hover:-translate-y-0.5"
              >
                See the numbers
              </a>
              <a
                href="#contact"
                className="rounded-md ring-1 ring-foreground/20 font-semibold px-5 py-3 transition-colors hover:bg-foreground/5"
              >
                Book the session
              </a>
            </div>
          </div>
        </div>
        <span className="absolute bottom-6 left-6 font-mono text-[11px] tracking-[0.2em] text-muted-foreground hidden sm:inline">
          BORN 2011 — BOR, SOUTH SUDAN
        </span>
        <span className="absolute bottom-6 right-6 font-mono text-[11px] tracking-[0.2em] text-muted-foreground hidden sm:inline">
          SCROLL ↓
        </span>
      </header>

      {/* Stat ticker */}
      <div className="glass-panel relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 whitespace-nowrap flex items-center h-14">
          <span className="font-mono text-[11px] tracking-[0.2em] text-beam shrink-0 mr-8">
            2026 SEASON
          </span>
          <span className="font-display text-2xl tracking-tight shrink-0 mr-8">
            500 PTS
          </span>
          <span className="text-beam mr-8">/</span>
          <span className="font-display text-2xl tracking-tight shrink-0 mr-8">
            25.0 PPG
          </span>
          <span className="text-beam mr-8">/</span>
          <span className="font-display text-2xl tracking-tight shrink-0 mr-8">
            5.0 APG
          </span>
          <span className="text-beam mr-8">/</span>
          <span className="font-display text-2xl tracking-tight shrink-0 mr-8">
            3.0 3PT
          </span>
          <span className="text-beam mr-8">/</span>
          <span className="font-display text-2xl tracking-tight shrink-0 mr-8">
            ~20 GAMES
          </span>
          <span className="text-beam mr-8">/</span>
          <span className="font-display text-2xl tracking-tight shrink-0">
            NO. 5
          </span>
          <span
            aria-hidden="true"
            className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-transparent via-beam/25 to-transparent animate-[sweep_5s_linear_infinite]"
          />
        </div>
      </div>

      {/* Stats */}
      <section id="stats" className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <p className="font-mono text-[11px] tracking-[0.3em] text-beam uppercase">
            The numbers
          </p>
          <h2 className="font-display uppercase text-5xl tracking-tight mt-3 max-w-[10ch]">
            Built on the box score
          </h2>
          <p className="text-pretty text-muted-foreground mt-5 max-w-[34ch]">
            2026 unofficial season stats across roughly 20 friendlies and
            tournaments. All figures are unofficial.
          </p>
        </div>
        <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="glass glass-lift rounded-2xl p-6 animate-[rise_0.5s_var(--ease)_both]"
              style={{ animationDelay: `${0.05 + i * 0.05}s` }}
            >
              <p className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground">
                {s.label}
              </p>
              <p className="font-display text-6xl tracking-tight mt-2">{s.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bio */}
      <section id="bio" className="glass-panel">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <img
              src={portraitAsset.url}
              alt="Portrait of Lual Michael Aketch in his Dankind Academy jersey"
              width={960}
              height={1280}
              loading="lazy"
              className="w-full aspect-[4/5] object-cover bg-background/60 rounded-2xl ring-1 ring-foreground/10 shadow-[0_30px_80px_-40px_oklch(0_0_0/0.9)]"
            />
          </div>
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] tracking-[0.3em] text-beam uppercase">
              The player
            </p>
            <h2 className="font-display uppercase text-5xl tracking-tight mt-3 max-w-[14ch]">
              From Bor to the court
            </h2>
            <p className="text-pretty text-muted-foreground text-lg mt-6 max-w-[52ch]">
              Lual Michael Aketch is a young basketball player from Bor, South
              Sudan, wearing #5. He first played competitively in 2019 in his
              school's inter-house competition, captained the Gombe Junior
              school team in 2021, and joined Dankind Academy in 2025 to take
              his game further.
            </p>
            <p className="text-pretty text-muted-foreground text-lg mt-5 max-w-[52ch]">
              In 2026, across around 20 unofficial games, friendlies and
              tournaments, he scored 500 points, averaging 5 assists and 3
              three-pointers per game. Still developing, still grinding.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
              <div>
                <p className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground">
                  FROM
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <SouthSudanFlag className="w-7 h-3.5 rounded-[2px] ring-1 ring-foreground/20 shadow-sm" />
                  <p className="font-semibold">Bor, South Sudan</p>
                </div>
              </div>
              <div>
                <p className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground">
                  BORN
                </p>
                <p className="font-semibold mt-1">24 July 2011</p>
              </div>
              <div>
                <p className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground">
                  ACADEMY
                </p>
                <p className="font-semibold mt-1">Dankind Academy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hear From Lual */}
      <section id="story" className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-[11px] tracking-[0.3em] text-beam uppercase">
              Hear from Lual
            </p>
            <h2 className="font-display uppercase text-5xl tracking-tight mt-3 max-w-[12ch]">
              In his own words
            </h2>
            <p className="text-pretty text-muted-foreground text-sm mt-5 max-w-[34ch]">
              The story behind the number, told by the player wearing it.
            </p>
          </div>
          <div className="lg:col-span-8">
            <figure className="glass glass-lift rounded-2xl p-8 sm:p-10 relative animate-[rise_0.5s_var(--ease)_both]">
              <span
                aria-hidden="true"
                className="absolute -top-6 left-8 font-serif text-[8rem] leading-none text-beam/25 select-none"
              >
                &ldquo;
              </span>
              <blockquote className="relative">
                <p className="font-hand text-2xl leading-relaxed text-foreground/90 text-pretty">
                  My name is Lual. Growing up I was too tall for my age, I swear.
                  Like every other person we wanted to play football, but this
                  height of mine, seriously it was disturbing me, my legs
                  couldn't even cooperate with my body. I was 6 when I finally
                  touched a basketball and from that day I never looked back,
                  you get me. Now I'm 15 and ball has done a lot for me, not just
                  physically but even mentally, it changed how I see things.
                  Life is hard when you're a South Sudanese from the war. I
                  wanted something to do and basketball became the remedy for
                  me.
                </p>
                <p className="font-hand text-2xl leading-relaxed text-foreground/90 text-pretty mt-6">
                  Growing up I always admired LeBron, like that's the man I want
                  to become one day, no cap. My peers call me Iverson and I used
                  to just laugh coz honestly I didn't even know who that guy
                  was. Then I found out he also started with football before he
                  crossed over to basketball and became one of the greatest
                  ever, so now that nickname kinda makes sense, you know.
                </p>
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <span className="h-px w-10 bg-beam" />
                <div>
                  <p className="font-display text-lg tracking-tight uppercase">
                    Lual Michael Aketch
                  </p>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-[11px] tracking-[0.3em] text-beam uppercase">
              Career
            </p>
            <h2 className="font-display uppercase text-5xl tracking-tight mt-3">
              The road so far
            </h2>
          </div>
          <p className="text-muted-foreground max-w-[30ch] text-sm hidden md:block">
            One path, one number. Here's how the journey started.
          </p>
        </div>
        <ol className="mt-12 border-l border-beam/30">
          {TIMELINE.map((t) => (
            <li
              key={t.year}
              className="relative pl-8 pb-10 animate-[rise_0.5s_var(--ease)_both]"
              style={{ animationDelay: t.delay }}
            >
              <span className="absolute -left-[5px] top-1 size-2.5 rounded-full bg-beam ring-4 ring-background" />
              <p className="font-mono text-[11px] tracking-[0.2em] text-beam">
                {t.year}
              </p>
              <p className="font-semibold text-lg mt-1">{t.title}</p>
              <p className="text-muted-foreground text-sm mt-1 max-w-[52ch]">
                {t.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Gallery */}
      <section id="gallery" className="glass-panel">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex items-end justify-between gap-6 mb-12">
            <div>
              <p className="font-mono text-[11px] tracking-[0.3em] text-beam uppercase">
                Gallery
              </p>
              <h2 className="font-display uppercase text-5xl tracking-tight mt-3">
                In the frame
              </h2>
            </div>
            <p className="text-muted-foreground text-sm hidden md:block">
              Hover a frame to move it.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {GALLERY.map((g) => (
              <figure
                key={g.caption}
                className="group glass glass-lift relative overflow-hidden rounded-2xl animate-[rise_0.5s_var(--ease)_both]"
                style={{ animationDelay: g.delay }}
              >
                <img
                  src={g.src}
                  alt={g.caption}
                  width={960}
                  height={1280}
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover bg-background/60 transition-transform duration-500 ease-[var(--ease)] group-hover:scale-105"
                />
                <figcaption className="absolute bottom-0 inset-x-0 bg-background/55 backdrop-blur-xl border-t border-foreground/10 px-4 py-3 flex items-center justify-between">
                  <span className="font-semibold text-sm">{g.caption}</span>
                  <span className="font-mono text-[11px] text-beam">{g.year}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section id="highlights" className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <p className="font-mono text-[11px] tracking-[0.3em] text-beam uppercase">
              Highlights
            </p>
            <h2 className="font-display uppercase text-5xl tracking-tight mt-3">
              On the tape
            </h2>
          </div>
          <a
            href="https://youtu.be/0gWW7rPVvgc?si=h8W3G9p5OpI04EEC"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground text-sm hidden md:block hover:text-foreground transition-colors"
          >
            Watch on YouTube ↗
          </a>
        </div>
        <div className="glass rounded-2xl overflow-hidden p-2">
          <div className="relative w-full aspect-video overflow-hidden rounded-xl">
            <iframe
              src="https://www.youtube-nocookie.com/embed/0gWW7rPVvgc?rel=0"
              title="Lual Michael Aketch — Highlights"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Game tape — individual clips */}
      <section id="clips" className="glass-panel">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex items-end justify-between gap-6 mb-12">
            <div>
              <p className="font-mono text-[11px] tracking-[0.3em] text-beam uppercase">
                Game tape
              </p>
              <h2 className="font-display uppercase text-5xl tracking-tight mt-3">
                Break it down
              </h2>
            </div>
            <p className="text-muted-foreground text-sm hidden md:block">
              Three clips. Three skill sets.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {CLIPS.map((c) => (
              <figure
                key={c.id}
                className="glass glass-lift rounded-2xl overflow-hidden animate-[rise_0.5s_var(--ease)_both]"
                style={{ animationDelay: c.delay }}
              >
                <div className="relative w-full aspect-video bg-background/60">
                  <video
                    src={c.src}
                    title={`${c.title} — Lual Michael Aketch`}
                    controls
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <figcaption className="px-4 py-4">
                  <p className="font-display text-2xl tracking-tight">{c.title}</p>
                  <p className="text-muted-foreground text-sm mt-1">{c.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-mono text-[11px] tracking-[0.3em] text-beam uppercase">
              Contact
            </p>
            <h2 className="font-display uppercase text-6xl tracking-tight mt-3 max-w-[10ch]">
              Let's make a shoot
            </h2>
            <p className="text-pretty text-muted-foreground text-lg mt-6 max-w-[44ch]">
              Open for trials and contract offers. Camps, appearances, or
              development sessions — send the brief and the team will get back
              within two business days.
            </p>
          </div>
          <form
            className="glass rounded-2xl p-6 sm:p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground">
                  NAME
                </span>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-md bg-background/40 ring-1 ring-foreground/10 px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-beam"
                />
              </label>
              <label className="block">
                <span className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground">
                  EMAIL
                </span>
                <input
                  type="email"
                  placeholder="you@brand.com"
                  className="mt-2 w-full rounded-md bg-background/40 ring-1 ring-foreground/10 px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-beam"
                />
              </label>
            </div>
            <label className="block mt-4">
              <span className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground">
                WHAT'S THE JOB?
              </span>
              <textarea
                rows={4}
                placeholder="A development camp, a tournament invite…"
                className="mt-2 w-full rounded-md bg-background/40 ring-1 ring-foreground/10 px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-beam"
              />
            </label>
            <button
              type="submit"
              className="mt-6 w-full rounded-md bg-beam text-background font-semibold py-3 ring-1 ring-black/5 transition-transform duration-200 hover:-translate-y-0.5"
            >
              Send the brief
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-panel">
        <div className="max-w-7xl mx-auto px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <span className="font-display text-3xl tracking-tight">LUAL MICHAEL AKETCH</span>
            <p className="text-muted-foreground text-sm mt-3 max-w-[38ch]">
              No. 5 at Dankind Academy. From Bor, South Sudan — building his game
              through friendlies and tournaments.
            </p>
          </div>
          <div>
            <p className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground">
              SITE
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href="#stats" className="text-muted-foreground hover:text-foreground transition-colors">
                  Stats
                </a>
              </li>
              <li>
                <a href="#timeline" className="text-muted-foreground hover:text-foreground transition-colors">
                  Career
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-muted-foreground hover:text-foreground transition-colors">
                  Gallery
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 py-6 border-t border-board-line flex flex-wrap items-center justify-between gap-3">
          <p className="font-mono text-[11px] tracking-[0.15em] text-muted-foreground">
            © 2026 LUAL MICHAEL AKETCH — ALL RIGHTS RESERVED
          </p>
          <p className="font-mono text-[11px] tracking-[0.15em] text-muted-foreground flex items-center gap-2">
            NO. 5 · BOR,
            <SouthSudanFlag className="w-6 h-3 rounded-[2px] ring-1 ring-foreground/20" />
            SOUTH SUDAN
          </p>
        </div>
      </footer>
    </div>
  );
}
