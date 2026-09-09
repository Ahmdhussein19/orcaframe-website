"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../../assets/logo/01.png";
import FloatingLogo from "@/assets/logo/Orcaframe Logo.svg";
import { assetSrc } from "@/lib/asset";
import { Moon, Sun } from "lucide-react";
import {
  Navbar,
  NavBody,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
} from "@/components/ui/resizable-navbar";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Solution", href: "/solution" },
  { name: "Pricing", href: "/pricing" },
];

export function SiteNavbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isFloating, setIsFloating] = useState(false);

  const isActive = (href: string) =>
    pathname === href || (href === "/" && pathname === "");

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    const nextTheme = stored === "dark" || (!stored && prefersDark) ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setIsFloating(window.scrollY > 100);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", nextTheme === "dark");
    }
    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", nextTheme);
    }
  };

  return (
    <Navbar className="top-0 animate-nav-fade-down">
      {/* Desktop navbar */}
      <NavBody className="px-6 ">
        <div className="relative flex w-full items-center justify-between gap-4">
          {/* Logo left */}
          <Link href="/" className="relative z-10 flex items-center">
            <div className="relative flex items-center h-8">
              <img
                src={assetSrc(Logo)}
                alt="Orcaframe logo"
                className={
                  "h-8 w-auto object-contain transition-opacity duration-300 " +
                  (isFloating ? "opacity-0" : "opacity-100")
                }
              />
              <img
                src={assetSrc(FloatingLogo)}
                alt="Orcaframe logo"
                className={
                  "absolute inset-0 h-8 w-auto object-contain transition-opacity duration-300 " +
                  (isFloating ? "opacity-100" : "opacity-0")
                }
              />
            </div>
          </Link>

          {/* Center links (pages) */}
          <nav className="absolute inset-0 flex items-center justify-center gap-6 text-sm text-muted-foreground">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  "transition-colors hover:text-primary" +
                  (isActive(item.href) ? " text-primary font-medium" : "")
                }
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Theme toggle + CTA right */}
          <div className="relative z-10 hidden items-center gap-2 md:flex">
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-background text-foreground shadow-sm transition-colors hover:bg-muted mr-1"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            <NavbarButton
              as="a"
              href="mailto:sales@orcaframe.com?subject=Book%2015-min%20call"
              className="whitespace-nowrap"
            >
              Book 15-min call
            </NavbarButton>
          </div>
        </div>
      </NavBody>

      {/* Mobile navbar */}
      <MobileNav>
        <MobileNavHeader className="px-4">
          <Link href="/" className="flex items-center">
            <div className="relative flex items-center h-8">
              <img
                src={assetSrc(Logo)}
                alt="Orcaframe logo"
                className={
                  "h-8 w-auto object-contain transition-opacity duration-300 " +
                  (isFloating ? "opacity-0" : "opacity-100")
                }
              />
              <img
                src={assetSrc(FloatingLogo)}
                alt="Orcaframe logo"
                className={
                  "absolute inset-0 h-8 w-auto object-contain transition-opacity duration-300 " +
                  (isFloating ? "opacity-100" : "opacity-0")
                }
              />
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-background text-foreground shadow-sm transition-colors hover:bg-muted text-xs mr-1"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            <NavbarButton
              as="a"
              href="mailto:sales@orcaframe.com?subject=Book%2015-min%20call"
              className="hidden text-xs sm:inline-block"
            >
              Book 15-min call
            </NavbarButton>
            <MobileNavToggle isOpen={open} onClick={() => setOpen((v) => !v)} />
          </div>
        </MobileNavHeader>

        <MobileNavMenu isOpen={open} onClose={() => setOpen(false)}>
          <nav className="flex w-full flex-col gap-3 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={
                  "rounded-md px-2 py-1.5 transition-colors hover:bg-muted" +
                  (isActive(item.href) ? " font-medium text-primary" : "")
                }
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
