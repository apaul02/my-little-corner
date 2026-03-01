export default function ExperienceTab() {
    const experiences = [
        {
            role: "Research Intern",
            org: "Indian Institute of Technology, Kharagpur",
            period: "June 2025 — August 2025",
            description:
                "Worked on Reinforcement Learning research, exploring agent behavior in complex environments. Gained hands-on experience with policy optimization, reward shaping, and simulation frameworks.",
        },
    ];

    return (
        <div>
            <h2
                className="mb-5 font-serif text-2xl font-bold tracking-tight sm:text-3xl"
                style={{
                    color: "var(--card-text)",
                    fontFamily: "var(--font-merriweather), Georgia, serif",
                }}
            >
                Experience
            </h2>

            <hr className="mb-6 w-16 border-t-2" style={{ borderColor: "var(--accent)" }} />

            <div className="flex flex-col gap-6">
                {experiences.map((exp) => (
                    <div key={exp.role + exp.org}>
                        <div className="mb-1 flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                            <h3
                                className="text-base font-bold"
                                style={{
                                    color: "var(--card-text)",
                                    fontFamily: "var(--font-merriweather), Georgia, serif",
                                }}
                            >
                                {exp.role}
                            </h3>
                            <span
                                className="text-xs italic tracking-wide"
                                style={{
                                    color: "var(--card-subtext)",
                                    fontFamily: "var(--font-libre-baskerville), Georgia, serif",
                                }}
                            >
                                {exp.period}
                            </span>
                        </div>
                        <p
                            className="mb-2 text-sm font-semibold italic"
                            style={{ color: "var(--accent)" }}
                        >
                            {exp.org}
                        </p>
                        <p
                            className="text-sm leading-relaxed"
                            style={{
                                color: "var(--card-subtext)",
                                fontFamily: "var(--font-libre-baskerville), Georgia, serif",
                            }}
                        >
                            {exp.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
