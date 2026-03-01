"use client";

import { createContext, useContext, useEffect, useState } from "react";

type ThemeContextType = {
    dark: boolean;
    toggle: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
    dark: false,
    toggle: () => { },
});

export function useTheme() {
    return useContext(ThemeContext);
}

export default function ThemeProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [dark, setDark] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem("theme");
        const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;
        const isDark = stored ? stored === "dark" : prefersDark;
        setDark(isDark);
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        const root = document.documentElement;
        if (dark) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        localStorage.setItem("theme", dark ? "dark" : "light");
    }, [dark, mounted]);

    const toggle = () => setDark((prev) => !prev);

    if (!mounted) return null;

    return (
        <ThemeContext.Provider value={{ dark, toggle }}>
            {children}
        </ThemeContext.Provider>
    );
}
