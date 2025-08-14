export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0b0e17] text-white relative overflow-hidden">
      {/* Google Font: Press Start 2P */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
        rel="stylesheet"
      />

      {/* CRT Scanlines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-10 mix-blend-soft-light"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 2px, transparent 4px)",
        }}
      />

      {/* Parallax Pixel Stars */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 animate-[float_18s_linear_infinite]" style={{backgroundImage:
          "radial-gradient(1px 1px at 20% 30%, #9aa4ff 99%, transparent 100%), radial-gradient(1px 1px at 60% 70%, #baffc9 99%, transparent 100%), radial-gradient(1px 1px at 80% 20%, #ffd6a5 99%, transparent 100%), radial-gradient(1px 1px at 35% 80%, #caffbf 99%, transparent 100%)"}}/>
        <div className="absolute inset-0 opacity-60 animate-[float_30s_linear_infinite_reverse]" style={{backgroundImage:
          "radial-gradient(1px 1px at 10% 50%, #a0c1ff 99%, transparent 100%), radial-gradient(1px 1px at 50% 40%, #ffadad 99%, transparent 100%), radial-gradient(1px 1px at 85% 85%, #ffd6a5 99%, transparent 100%)"}}/>
      </div>

      <style>{`
        @keyframes float { from { transform: translateY(0px);} to { transform: translateY(-30px);} }
        .pixel-font { font-family: 'Press Start 2P', system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; }
        .pixel-border { box-shadow: 0 0 0 4px #111827, 0 0 0 8px #35f2ff, 0 0 0 12px #111827; }
        .pixel-btn { box-shadow: inset -4px -4px 0 0 rgba(0,0,0,0.4), inset 4px 4px 0 0 rgba(255,255,255,0.08), 0 0 0 4px #111827, 0 0 0 8px #35f2ff; }
        .pixel-card { box-shadow: 0 0 0 4px #111827, 0 0 0 8px #7c3aed, 0 8px 0 0 #111827; }
      `}</style>

      {/* NAV */}
      <header className="sticky top-0 z-20 backdrop-blur bg-[#0b0e17]/70 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <PixelDogLogo className="w-10 h-10" />
            <span className="pixel-font text-sm sm:text-base tracking-wide">DOG WIF LOG</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-xs pixel-font">
            <a href="#about" className="hover:opacity-80">ABOUT</a>
            <a href="#roadmap" className="hover:opacity-80">QUEST LOG</a>
            <a href="#tokenomics" className="hover:opacity-80">TOKENOMICS</a>
            <a href="#community" className="hover:opacity-80">COMMUNITY</a>
          </nav>

          >
            BUY ON PUMP.FUN
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 py-16 sm:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-1">
          <h1 className="pixel-font text-3xl sm:text-4xl leading-tight">
            DOG WIF LOG
          </h1>
          <p className="mt-4 text-white/80 text-sm sm:text-base max-w-prose">
            A retro pixel adventure on Solana. No roadmap to nowhere—just a dog, a log, and a community wif impeccable vibes.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="https://pump.fun/coin/6fio8yzdrChgGTb54yCNVKoYYRFEzmbCXzdxNcEuc3tk" className="pixel-font text-[10px] sm:text-xs bg-[#22d3ee] text-black px-4 py-3 pixel-btn hover:brightness-110">INSERT COIN TO BUY</a>
            <a href="#tokenomics" className="pixel-font text-[10px] sm:text-xs bg-[#34d399] text-black px-4 py-3 pixel-btn hover:brightness-110">SEE TOKENOMICS</a>
          </div>
          <div className="mt-6 text-xs pixel-font text-white/70">
          </div>
        </div>
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="pixel-border rounded p-4 bg-gradient-to-b from-[#0f1322] to-[#0b0e17]">
            <img src="https://i.ibb.co/NXDnCw6/4bf0970e-4d0a-41a8-b583-ef465c5be71b.png" /> 
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-[#0f1322] border-y border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-14 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="pixel-font text-2xl">ABOUT</h2>
            <p className="mt-4 text-white/80 text-sm leading-6">
              Legend says the log chooses the dog. We’re here for pure meme energy — no rug, no nonsense. Just wholesome chaos, pixel charm, and a community that loves to build, remix, and hodl wif iron paws.
            </p>
          </div>
          <div className="pixel-card rounded p-6 bg-[#0b0e17]">
            <ul className="pixel-font text-[11px] space-y-3">
              <li>✔ FIXED SUPPLY • FAIR LAUNCH</li>
              <li>✔ MEME-FIRST • LORE-POWERED</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ROADMAP / QUEST LOG */}
      <section id="roadmap" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="pixel-font text-2xl">QUEST LOG</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <QuestCard level="LEVEL 1" title="SPAWN" text="Launch on Pump.fun. Flood the feed with dog + log memes." />
          <QuestCard level="LEVEL 2" title="GRIND" text="Raydium pool. Community contests. Meme raids." />
          <QuestCard level="LEVEL 3" title="LEVEL UP" text="Tooling mini-site. Pixel NFTs. Merch mockups." />
        </div>
      </section>

      {/* TOKENOMICS */}
      <section id="tokenomics" className="bg-[#0f1322] border-y border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="pixel-font text-2xl">TOKENOMICS</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
            <div className="pixel-card rounded p-6 bg-[#0b0e17]">
              <ul className="space-y-3 text-sm">
                <li><span className="pixel-font text-[11px]">SUPPLY:</span> 1,000,000,000 $DWLOG</li>
                
               
              
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <PixelPie className="w-64 h-64" />
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section id="community" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="pixel-font text-2xl">COMMUNITY</h2>
        <p className="mt-3 text-white/80 text-sm">Join the pack, bring a log.</p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href="https://x.com/dogwiflog" className="pixel-font text-[10px] bg-[#1DA1F2] text-black px-4 py-3 pixel-btn hover:brightness-110">TWITTER / X</a>
          <a href="https://t.me/+Ju9GFVVV7CdkOThh" className="pixel-font text-[10px] bg-[#30a3e6] text-black px-4 py-3 pixel-btn hover:brightness-110">TELEGRAM</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#0b0e17]">
        <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <PixelDogLogo className="w-8 h-8" />
            <span className="pixel-font text-[10px]">© {new Date().getFullYear()} DOG WIF LOG — PRESS START TO CONTINUE</span>
          </div>
          <div className="pixel-font text-[10px] text-white/60">Built with ❤️ + pixels</div>
        </div>
      </footer>
    </div>
  );
}

function QuestCard({ level, title, text }) {
  return (
    <div className="bg-[#0b0e17] pixel-card rounded p-6">
      <div className="pixel-font text-xs text-[#22d3ee]">{level}</div>
      <div className="pixel-font text-lg mt-2">{title}</div>
      <p className="mt-3 text-sm text-white/80">{text}</p>
    </div>
  );
}


function PixelDogLogo({ className = "" }) {
  return (
    <svg viewBox="0 0 32 32" className={className} shapeRendering="crispEdges">
      <rect width="32" height="32" fill="#111827" />
      <rect x="6" y="12" width="10" height="8" fill="#f59e0b" />
      <rect x="18" y="14" width="8" height="6" fill="#8b5a2b" />
      <rect x="8" y="10" width="4" height="4" fill="#ea580c" />
      <rect x="9" y="14" width="2" height="2" fill="#000" />
    </svg>
  );
}

// --- Placeholder Pixel Pie ---
function PixelPie({ className = "" }) {
  return (
    <svg viewBox="0 0 128 128" className={className} shapeRendering="crispEdges">
      <rect width="128" height="128" fill="#0b0e17" />
      {/* Circle made of blocks */}
      <rect x="56" y="16" width="16" height="16" fill="#22d3ee" />
      <rect x="72" y="24" width="16" height="16" fill="#a78bfa" />
      <rect x="80" y="40" width="16" height="16" fill="#34d399" />
      <rect x="80" y="56" width="16" height="16" fill="#f472b6" />
      <rect x="72" y="72" width="16" height="16" fill="#fde047" />
      <rect x="56" y="80" width="16" height="16" fill="#fb7185" />
      <rect x="40" y="72" width="16" height="16" fill="#60a5fa" />
      <rect x="32" y="56" width="16" height="16" fill="#f59e0b" />
      <rect x="32" y="40" width="16" height="16" fill="#10b981" />
      <rect x="40" y="24" width="16" height="16" fill="#e879f9" />
    </svg>
  );
}
