"use client";

import { useState } from "react";
import Image from "next/image";
import Navigation, { type TabId } from "./components/Navigation";
import HomeTab from "./components/HomeTab";
import ExperienceTab from "./components/ExperienceTab";
import ProjectsTab from "./components/ProjectsTab";

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

          </div>

          {/* Bottom bar — socials left, contact right */}
          <div className="mt-4 flex items-center justify-between sm:mt-5">
            <div className="flex items-center gap-3">
              {/* GitHub */}
              <a
                href="https://github.com/apaul02"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition-all duration-200 hover:scale-110"
                style={{ color: "var(--card-subtext)" }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              {/* X (Twitter) */}
              <a
                href="https://x.com/thehiro02"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="transition-all duration-200 hover:scale-110"
                style={{ color: "var(--card-subtext)" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ankan-paul02/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-all duration-200 hover:scale-110"
                style={{ color: "var(--card-subtext)" }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>

            {/* Contact Me */}
            <a
              href="mailto:ankan.paul837@gmail.com"
              className="group rounded-md border-2 px-4 py-1.5 text-xs font-semibold tracking-wide italic transition-all duration-300 hover:scale-105"
              style={{
                borderColor: "var(--accent)",
                color: "var(--accent)",
                background: "transparent",
                fontFamily: "var(--font-libre-baskerville), Georgia, serif",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--accent)";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--accent)";
              }}
            >
              Contact Me <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
