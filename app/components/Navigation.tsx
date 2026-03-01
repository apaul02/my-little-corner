"use client";

const tabs = [
    { id: "home", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "books", label: "Books" },
    { id: "favs", label: "Favs" },
    { id: "x", label: "X", href: "https://x.com/thehiro02" },
    { id: "github", label: "GitHub", href: "https://github.com/apaul02" },
] as const;

type TabId = "home" | "experience" | "projects" | "books" | "favs";

export default function Navigation({
    activeTab,
    onTabChange,
}: {
    activeTab: TabId;
    onTabChange: (tab: TabId) => void;
}) {
    return (
        <nav
            className="flex flex-wrap items-center justify-end gap-x-3 gap-y-1 text-[10px] tracking-wide sm:gap-x-4 sm:text-xs sm:flex-nowrap"
            style={{
                fontFamily: "var(--font-libre-baskerville), Georgia, serif",
                fontStyle: "italic",
            }}
        >
            {tabs.map((tab) => {
                const isExternal = "href" in tab && tab.href;
                const isActive = !isExternal && activeTab === tab.id;

                if (isExternal) {
                    return (
                        <a
                            key={tab.id}
                            href={tab.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="nav-link"
                            style={{ color: "var(--card-subtext)" }}
                        >
                            {tab.label}
                        </a>
                    );
                }

                return (
                    <button
                        key={tab.id}
                        onClick={() => onTabChange(tab.id as TabId)}
                        className={`nav-link cursor-pointer bg-transparent border-none ${isActive ? "active" : ""
                            }`}
                        style={{
                            color: isActive ? "var(--card-text)" : "var(--card-subtext)",
                        }}
                    >
                        {tab.label}
                    </button>
                );
            })}
        </nav>
    );
}

export type { TabId };
