/* Paper Moon Postcards: asymmetric editorial love-letter layout, tactile imagery, handwritten accents, gentle reveals. */
import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Heart, MapPin, Moon, Music2, Sparkles } from "lucide-react";

const heroImage = "/manus-storage/paper-moon-hero_421bef5a.jpg";
const nightImage = "/manus-storage/paper-moon-night_a3c68bb0.jpg";
const memoryImage = "/manus-storage/paper-moon-memory_0d6c41fc.jpg";
const markImage = "/manus-storage/paper-moon-mark_fe0eb4c6.png";
const spotifyEmbedUrl = "https://open.spotify.com/embed/track/3URe1bi21ftFK4zh5nO1P1?utm_source=generator&theme=0";

export default function Home() {
  const [showLetter, setShowLetter] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [playerOpen, setPlayerOpen] = useState(false);
  const [daysTogether, setDaysTogether] = useState(0);

  useEffect(() => {
    const start = new Date("2024-02-14T00:00:00");
    setDaysTogether(Math.max(1, Math.floor((Date.now() - start.getTime()) / 86400000)));
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="paper-page">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="A little place that's only ours">
          <img src={markImage} alt="" />
          <span>for us, across the miles</span>
        </a>
        <nav aria-label="Page navigation">
          <button onClick={() => scrollTo("letter")}>the letter</button>
          <button onClick={() => scrollTo("little-things")}>the little things</button>
          <button onClick={() => scrollTo("same-moon")}>same moon</button>
        </nav>
        <button className="sound-button" onClick={() => { setPlaying(!playing); setPlayerOpen(!playerOpen); }} aria-expanded={playerOpen} aria-controls="spotify-player" aria-label={playerOpen ? "Hide our song player" : "Open our song player"}>
          <Music2 size={16} /> <span>{playerOpen ? "close song" : playing ? "playing" : "our song"}</span>
        </button>
      </header>

      {playerOpen && <div className="spotify-player" id="spotify-player">
        <div className="spotify-player-heading"><span><Music2 size={13} /> our song</span><button onClick={() => setPlayerOpen(false)} aria-label="Close Spotify player">×</button></div>
        <iframe title="Our favorite song on Spotify" src={spotifyEmbedUrl} width="100%" height="80" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />
        <p>Press play, then let the letter keep you company.</p>
      </div>}

      <section className="hero" id="top">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span className="eyebrow-line" /> 14 / 02 / 2024 — another little milestone</p>
          <h1>For the girl<br /><em>who makes</em><br />the distance<br /><span>feel worth it.</span></h1>
          <p className="hero-dek">A small corner of the internet made for the two of us. Keep this open whenever you need a reminder that my heart is already there with you.</p>
          <button className="text-link" onClick={() => scrollTo("letter")}>open the letter <ArrowDown size={15} /></button>
        </div>
        <div className="hero-visual reveal-delay">
          <div className="hero-photo-wrap"><img src={heroImage} alt="A handwritten letter resting on a warm desk" /></div>
          <span className="photo-note note-one">one screen apart,<br />never heart apart</span>
          <span className="photo-note note-two">{daysTogether || "many"} days of choosing you</span>
          <div className="stamp">♡<br /><small>POSTMARK<br />VERMILION</small></div>
        </div>
        <div className="hero-footer"><span>volume 01</span><span className="thread-dot" /><span>a digital keepsake</span><span className="hero-scroll">scroll slowly <ArrowDown size={14} /></span></div>
      </section>

      <section className="letter-section section-shell" id="letter">
        <div className="section-kicker"><span>01</span><span className="long-line" /><span>the part i wish i could hand you</span></div>
        <div className="letter-grid">
          <div className="letter-side"><span className="side-note">written from wherever i am,<br />always written toward you</span><div className="vertical-rule" /><span className="side-location"><MapPin size={13} /> 14.5995° N, 120.9842° E</span></div>
          <article className="letter-copy">
            <p className="script-intro">My love,</p>
            <h2>I know a screen is not the same as a hand to hold.</h2>
            <p>It cannot warm your fingers when the night gets a little too quiet. It cannot steal a bite of your dessert or pull you into a hug before either of us has to say goodbye.</p>
            <p>But somehow, in all the ordinary little ways, you have made a home in my days. In the first message I look for. In the song I send without explaining. In the way a hard day feels softer just because I know I get to tell you about it.</p>
            <p>So here is my monthly reminder: I am still choosing you from here. Across the time zones, the bad signal, the missing-you kind of evenings. Especially then.</p>
            <button className="outline-button" onClick={() => setShowLetter(!showLetter)}>{showLetter ? "fold this part back up" : "there's one more thing"} <ArrowUpRight size={15} /></button>
            {showLetter && <p className="hidden-note">When we finally close the distance, I hope we still notice the tiny things. Your favorite mug. The exact way you say my name. The quiet after a long day when being near is enough.</p>}
            <p className="signature">always yours,<br /><strong>your favorite person</strong></p>
          </article>
        </div>
      </section>

      <section className="things-section" id="little-things">
        <div className="section-shell">
          <div className="section-kicker light"><span>02</span><span className="long-line" /><span>evidence that love lives in details</span></div>
          <div className="things-heading"><h2>The little things<br /><em>are the big things.</em></h2><p>Three small truths I keep coming back to when I miss you.</p></div>
          <div className="memory-layout">
            <div className="memory-image-card"><img src={memoryImage} alt="Two coffee cups and a folded postcard" /><span>still life no. 03<br /><i>things we'd share in person</i></span></div>
            <div className="memory-list">
              <div className="memory-item"><span className="memory-number">01</span><div><h3>the way you say “look”</h3><p>Like the whole world has just handed you a tiny secret, and I am the first person you want to tell.</p></div><Heart size={16} /></div>
              <div className="memory-item"><span className="memory-number">02</span><div><h3>our accidental traditions</h3><p>Same late-night snacks. Same “five more minutes.” Same promise that next time, we'll be in the same room.</p></div><Sparkles size={16} /></div>
              <div className="memory-item"><span className="memory-number">03</span><div><h3>how you stay</h3><p>Even when the day is messy. Even when the connection isn't. You find your way back, and I notice every time.</p></div><Moon size={16} /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="same-moon" id="same-moon">
        <img className="night-photo" src={nightImage} alt="A glowing moon over a dark blue horizon" />
        <div className="moon-overlay" />
        <div className="moon-copy"><p className="eyebrow light-text"><span className="eyebrow-line" /> the part where distance gets smaller</p><h2>Look up tonight.<br /><em>Same moon, okay?</em></h2><p>No matter where the day leaves us, there is still one moon above both of us. Consider this our oldest shared address.</p><button className="light-link" onClick={() => scrollTo("ending")}>keep this promise <ArrowDown size={15} /></button></div>
        <div className="coordinate-card"><span>our shared sky</span><strong>∞</strong><small>somewhere between here<br />and wherever you are</small></div>
      </section>

      <section className="ending section-shell" id="ending"><div className="ending-mark"><img src={markImage} alt="" /></div><p className="eyebrow centered"><span className="eyebrow-line" /> one last thing <span className="eyebrow-line" /></p><h2>Until the miles<br /><em>run out,</em></h2><p className="ending-copy">I will keep finding new ways to love you from here. Happy monthsary, my favorite girl. Thank you for making “us” feel so close, even when the map says otherwise.</p><div className="ending-date"><span>with all my heart</span><strong>14—02—∞</strong><span>and every day after</span></div><p className="footer-note">made with too much feeling · <button onClick={() => scrollTo("top")}>back to the beginning ↑</button></p></section>
    </main>
  );
}
