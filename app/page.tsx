"use client";

import { useState } from "react";
import Image from "next/image";
import Navigation, { type TabId } from "./components/Navigation";
import HomeTab from "./components/HomeTab";
import ExperienceTab from "./components/ExperienceTab";
import ProjectsTab from "./components/ProjectsTab";
import BooksTab from "./components/BooksTab";
import FavsTab from "./components/FavsTab";
import { useTheme } from "./ThemeProvider";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>("home");
  const { dark, toggle } = useTheme();

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden sm:justify-start">
      {/* Background Image */}
      <Image
        src="/500229ldsdl.jpg"
        alt="Dramatic glacier landscape"
        fill
        priority
        className="object-cover"
        quality={90}
      />

      {/* Overlay gradient */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(135deg, var(--overlay-from) 0%, var(--overlay-to) 100%)",
        }}
      />

      {/* Card */}
      <main className="relative z-20 mx-4 w-full max-w-xl py-6 sm:mx-6 sm:py-0 sm:ml-[10%] md:ml-[12%] lg:ml-[15%]">
        <div
          className="flex flex-col rounded-lg border p-6 sm:p-10 md:p-12"
          style={{
            height: "min(750px, calc(100vh - 48px))",
            background: "var(--card-bg)",
            borderColor: "var(--card-border)",
            boxShadow:
              "0 4px 24px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04)",
          }}
        >
          {/* Top row: theme toggle (left) + nav tabs (right) */}
          <div className="-mt-1 mb-6 flex items-center justify-between sm:-mt-2 sm:mb-8">
            {/* Classical theme toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle dark mode"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border cursor-pointer transition-all duration-300 hover:scale-110"
              style={{
                borderColor: "var(--card-border)",
                color: "var(--card-subtext)",
                background: "var(--btn-bg)",
              }}
            >
              {dark ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
          </div>

          {/* Tab content — scrollable + animated */}
          <div key={activeTab} className="tab-content flex-1 overflow-y-auto pr-1 sm:pr-2">
            {activeTab === "home" && <HomeTab />}
            {activeTab === "experience" && <ExperienceTab />}
            {activeTab === "projects" && <ProjectsTab />}
            {activeTab === "books" && <BooksTab />}
            {activeTab === "favs" && <FavsTab />}
          </div>
        </div>
      </main>
    </div>
  );
}
