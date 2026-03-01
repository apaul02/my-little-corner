export default function ExperienceTab() {
    const experiences = [
        {
            role: "Research Intern",
            org: "Indian Institute of Technology, Kharagpur",
            period: "June 2025 — October 2025",
            points: [
                "Engineered semantic segmentation architectures to extract features from high-res imagery, achieving consistent accuracy gains over baselines.",
                "Developed a Deep RL framework to optimize sequential decision-making, stabilizing policy convergence in complex, constraint-heavy environments.",
                "Built a multimodal fusion pipeline integrating visual and numerical embeddings, improving model generalization across diverse test sets.",
            ],
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
                            className="mb-3 text-sm font-semibold italic"
                            style={{ color: "var(--accent)" }}
                        >
                            {exp.org}
                        </p>
                        <ul className="flex flex-col gap-2 pl-4 list-disc">
                            {exp.points.map((point, i) => (
                                <li
                                    key={i}
                                    className="text-sm leading-relaxed"
                                    style={{
                                        color: "var(--card-subtext)",
                                        fontFamily: "var(--font-libre-baskerville), Georgia, serif",
                                    }}
                                >
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
