export default function ProjectsTab() {
    const projects = [
        {
            title: "CoreVec",
            tech: "Rust · PyO3 · HNSW · Memory Mapping",

            description: "A vector database built from scratch in Rust with memory-mapped storage and sub-millisecond nearest-neighbor search.",
            github: "https://github.com/apaul02/CoreVec",
        },
        {
            title: "IronKV",
            tech: "Rust · LSM Tree · WAL",

            description: "A persistent key-value store with log-structured merge trees and write-ahead logging.",
            github: "https://github.com/apaul02/IronKV",
        },
        {
            title: "CoreBox",
            tech: "Rust · Linux Namespaces · cgroups",

            description: "A container runtime built from scratch using Linux namespaces and cgroups for process isolation.",
            github: "https://github.com/apaul02/CoreBox",
        },
        {
            title: "ru-shell",
            tech: "Rust · POSIX · Systems Programming",

            description: "A Unix shell implementation with piping, redirection, and job control.",
            github: "https://github.com/apaul02/ru-shell",
        },
        {
            title: "RAG.rs",
            tech: "Rust · Embeddings · Cosine Similarity",

            description: "A custom RAG pipeline built from scratch in Rust for retrieval-augmented generation.",
            github: "https://github.com/apaul02/RAG.rs",
        },
        {
            title: "Retrosnap",
            tech: "Next.js · TypeScript · PostgreSQL · GCP",

            description: "A social platform with event-driven image processing, real-time filters, and secure auth.",
            github: "https://github.com/apaul02/Retrosnap",
            live: "https://retrosnappy.vercel.app/",
        },
        {
            title: "Vakil AI",
            tech: "Python · FastAPI · LangChain · RAG · Llama 3",

            description: "A RAG-powered NDA auditor that classifies contract risk against Indian statutes in real time.",
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
                        <h3
                            className="mb-1 text-base font-bold"
                            style={{
                                color: "var(--card-text)",
                                fontFamily: "var(--font-merriweather), Georgia, serif",
                            }}
                        >
                            {project.title}
                        </h3>

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
