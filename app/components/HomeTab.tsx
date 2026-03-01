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
                Hi, I&apos;m <span className="italic" style={{ color: "var(--accent)" }}>Hiro</span>
            </h1>

            {/* Tagline */}
            <p
                className="mb-4 text-xs font-semibold uppercase tracking-widest sm:mb-6 sm:text-sm"
                style={{
                    color: "var(--card-subtext)",
                    fontFamily: "var(--font-crimson-text), Georgia, serif",
                }}
            >
                CS Student · ML Enthusiast · Builder
            </p>

            {/* Divider — accent colored */}
            <hr className="mb-5 w-16 border-t-2 sm:mb-8" style={{ borderColor: "var(--accent)" }} />

            {/* Bio — Libre Baskerville for body text, more spacing */}
            <div
                className="flex flex-col gap-4 text-sm leading-[1.8] sm:gap-6 sm:text-base sm:leading-[1.85]"
                style={{
                    color: "var(--card-subtext)",
                    fontFamily: "var(--font-libre-baskerville), Georgia, serif",
                }}
            >
                <p>
                    I&apos;m a final-year <strong style={{ color: "var(--card-text)" }}>Computer Science</strong> student
                    from India, deeply drawn to the world of{" "}
                    <strong style={{ color: "var(--card-text)" }}>Machine Learning</strong> and{" "}
                    <strong style={{ color: "var(--card-text)" }}>Reinforcement Learning</strong> agents.
                </p>

                <p>
                    I love coding in general — I enjoy wandering through different corners
                    of the craft, exploring new ideas and paradigms,{" "}
                    <em style={{ color: "var(--accent)" }}>until I find the one that feels like home</em>.
                </p>

                <p>
                    When I&apos;m not writing code, you&apos;ll find me watching films,
                    binge-reading books, or losing hours in a good video game.
                </p>

                <p>
                    Most recently, I completed a{" "}
                    <strong style={{ color: "var(--card-text)" }}>research internship at IIT Kharagpur</strong>,
                    where I dived deep into Reinforcement Learning — an experience that
                    shaped how I think about{" "}
                    <em>agents, environments, and the art of learning from reward</em>.
                </p>
            </div>
        </div>
    );
}
