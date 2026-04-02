"use client";

const tabs = [
    { id: "home", label: "Home" },
    { id: "experience", label: "Work" },
    { id: "projects", label: "Projects" },
] as const;

type TabId = "home" | "experience" | "projects";

export default function Navigation({
    activeTab,
    onTabChange,
}: {
    activeTab: TabId;
    onTabChange: (tab: TabId) => void;
}) {
    return (
        <nav
            className="flex flex-wrap items-center justify-end gap-x-4 gap-y-1 text-xs tracking-wide sm:gap-x-5 sm:text-sm sm:flex-nowrap"
            style={{
                fontFamily: "var(--font-libre-baskerville), Georgia, serif",
            }}
        >
            {tabs.map((tab) => {
                const isActive = activeTab === tab.id;

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
