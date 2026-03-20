import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
      style={{ backgroundColor: "oklch(0.22 0 0)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3"
            data-ocid="nav.link"
          >
            <div
              className="w-8 h-8 flex items-center justify-center text-xs font-bold font-display"
              style={{
                backgroundColor: "oklch(0.63 0.075 55)",
                color: "oklch(0.98 0 0)",
              }}
            >
              AA
            </div>
            <span
              className="font-display font-bold text-sm tracking-widest uppercase"
              style={{ color: "oklch(0.96 0 0)" }}
            >
              Arcus Architects
            </span>
          </a>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-display text-xs font-light tracking-widest uppercase transition-colors hover:text-arch-bronze"
                style={{ color: "oklch(0.84 0 0)" }}
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 font-display text-xs font-semibold tracking-widest uppercase transition-all hover:opacity-90"
              style={{
                backgroundColor: "oklch(0.63 0.075 55)",
                color: "oklch(0.98 0 0)",
              }}
              data-ocid="nav.primary_button"
            >
              Start a Project
            </a>

            <button
              type="button"
              className="lg:hidden p-2"
              style={{ color: "oklch(0.96 0 0)" }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              data-ocid="nav.toggle"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t"
            style={{
              backgroundColor: "oklch(0.22 0 0)",
              borderColor: "oklch(0.30 0 0)",
            }}
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-display text-xs font-light tracking-widest uppercase py-2"
                  style={{ color: "oklch(0.84 0 0)" }}
                  onClick={() => setMenuOpen(false)}
                  data-ocid="nav.link"
                >
                  {link.label}
                </a>
              ))}
              <button
                type="button"
                className="inline-flex items-center justify-center px-5 py-3 font-display text-xs font-semibold tracking-widest uppercase mt-2"
                style={{
                  backgroundColor: "oklch(0.63 0.075 55)",
                  color: "oklch(0.98 0 0)",
                }}
                onClick={() => {
                  setMenuOpen(false);
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                data-ocid="nav.primary_button"
              >
                Start a Project
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
