export default function ProjectsTab() {
    const projects = [
        {
            title: "CoreVec",
            tech: "Rust · Python · Memory Mapping · PyO3 · HNSW",
            date: "March 2026",
            description:
                "An out-of-core vector database built in Rust that memory-maps massive ML datasets instead of loading them into RAM — with a custom HNSW index for sub-millisecond nearest-neighbor search and zero-overhead Python bindings via PyO3.",
            github: "https://github.com/apaul02/Vector-Database-in-Rust",
        },
        {
            title: "Retrosnap",
            tech: "Next.js · TypeScript · PostgreSQL · Drizzle · GCP",
            date: "December 2025",
            description:
                "A social platform with event-driven image processing — GCP Cloud Functions handle optimization on upload, Canvas API powers real-time filters, and Better Auth keeps sessions secure across Vercel deployments.",
            github: "https://github.com/apaul02/Retrosnap",
            live: "https://retrosnappy.vercel.app/",
        },
        {
            title: "Vakil AI",
            tech: "Python · FastAPI · LangChain · RAG · Llama 3 · Next.js",
            date: "December 2025",
            description:
                "A RAG-powered NDA auditor that cross-references contract clauses against a vector database of Indian statutes — classifying risk in real time through a FastAPI backend and a context-aware legal chatbot.",
            github: "https://github.com/justysssss/Vakil.ai",
            live: "https://vakil-legal.vercel.app/",
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
                Projects
            </h2>

            <hr className="mb-6 w-16 border-t-2" style={{ borderColor: "var(--accent)" }} />

            <div className="flex flex-col gap-7">
                {projects.map((project) => (
                    <div key={project.title}>
                        <div className="mb-1 flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                            <h3
                                className="text-base font-bold"
                                style={{
                                    color: "var(--card-text)",
                                    fontFamily: "var(--font-merriweather), Georgia, serif",
                                }}
                            >
                                {project.title}
                            </h3>
                            <span
                                className="text-xs italic tracking-wide"
                                style={{
                                    color: "var(--card-subtext)",
                                    fontFamily: "var(--font-libre-baskerville), Georgia, serif",
                                }}
                            >
                                {project.date}
                            </span>
                        </div>

                        <p
                            className="mb-2 text-xs font-semibold uppercase tracking-wider"
                            style={{ color: "var(--accent)" }}
                        >
                            {project.tech}
                        </p>

                        <p
                            className="mb-3 text-sm leading-relaxed"
                            style={{
                                color: "var(--card-subtext)",
                                fontFamily: "var(--font-libre-baskerville), Georgia, serif",
                            }}
                        >
                            {project.description}
                        </p>

                        <div className="flex gap-3 text-xs">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="nav-link italic"
                                style={{ color: "var(--card-subtext)" }}
                            >
                                GitHub ↗
                            </a>
                            {"live" in project && project.live && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="nav-link italic"
                                    style={{ color: "var(--card-subtext)" }}
                                >
                                    Live ↗
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
