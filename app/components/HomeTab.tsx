export default function HomeTab() {
    return (
        <div>
            {/* Greeting */}
            <h1
                className="mb-2 font-serif text-2xl font-bold leading-snug tracking-tight sm:text-3xl md:text-4xl"
                style={{
                    color: "var(--card-text)",
                    fontFamily: "var(--font-merriweather), Georgia, serif",
                }}
            >
                Hi, I&apos;m <span className="italic" style={{ color: "var(--accent)" }}>Ankan</span>
            </h1>

            {/* Tagline */}
            <p
                className="mb-4 text-xs font-semibold uppercase tracking-widest sm:mb-6 sm:text-sm"
                style={{
                    color: "var(--card-subtext)",
                    fontFamily: "var(--font-crimson-text), Georgia, serif",
                }}
            >
                Systems · Low-Level Engineering · RL
            </p>

            {/* Divider */}
            <hr className="mb-5 w-16 border-t-2 sm:mb-8" style={{ borderColor: "var(--accent)" }} />

            {/* Bio */}
            <div
                className="flex flex-col gap-4 text-sm leading-[1.8] sm:gap-6 sm:text-base sm:leading-[1.85]"
                style={{
                    color: "var(--card-subtext)",
                    fontFamily: "var(--font-libre-baskerville), Georgia, serif",
                }}
            >
                <p>
                    CS guy obsessed with{" "}
                    <strong style={{ color: "var(--card-text)" }}>systems</strong>,{" "}
                    <strong style={{ color: "var(--card-text)" }}>low-level engineering</strong>, and{" "}
                    <strong style={{ color: "var(--card-text)" }}>reinforcement learning</strong>.
                    Recently completed a research internship at{" "}
                    <a
                        href="https://www.iitkgp.ac.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-link font-semibold"
                        style={{ color: "var(--accent)" }}
                    >
                        IIT Kharagpur
                    </a>
                    , working on <strong style={{ color: "var(--card-text)" }}>RL</strong>-driven research.
                </p>

                <p>
                    I love building things{" "}
                    <strong style={{ color: "var(--card-text)" }}>from scratch</strong>, a{" "}
                    <a href="https://github.com/apaul02/CoreVec" target="_blank" rel="noopener noreferrer" className="underline underline-offset-3 transition-colors duration-200 hover:decoration-2" style={{ color: "var(--accent)" }}>vector database</a>,{" "}
                    a{" "}
                    <a href="https://github.com/apaul02/IronKV" target="_blank" rel="noopener noreferrer" className="underline underline-offset-3 transition-colors duration-200 hover:decoration-2" style={{ color: "var(--accent)" }}>key-value store</a>,{" "}
                    a{" "}
                    <a href="https://github.com/apaul02/CoreBox" target="_blank" rel="noopener noreferrer" className="underline underline-offset-3 transition-colors duration-200 hover:decoration-2" style={{ color: "var(--accent)" }}>container runtime</a>,{" "}
                    a{" "}
                    <a href="https://github.com/apaul02/ru-shell" target="_blank" rel="noopener noreferrer" className="underline underline-offset-3 transition-colors duration-200 hover:decoration-2" style={{ color: "var(--accent)" }}>shell</a>,{" "}
                    and{" "}
                    <a href="https://github.com/apaul02" target="_blank" rel="noopener noreferrer" className="underline underline-offset-3 transition-colors duration-200 hover:decoration-2">much more</a>.
                </p>

                <p>
                    When I&apos;m not coding, you can catch me watching films,
                    getting lost in video games, or honestly  just sleeping.
                </p>
            </div>
        </div>
    );
}
