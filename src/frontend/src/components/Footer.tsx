import { Loader2, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubmitContactForm } from "../hooks/useQueries";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const {
    mutate: submitForm,
    isPending,
    isSuccess,
    isError,
  } = useSubmitContactForm();
  const year = new Date().getFullYear();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitForm(form, {
      onSuccess: () => {
        toast.success("Message sent! I'll be in touch soon.");
        setForm({ name: "", email: "", message: "" });
      },
      onError: () => {
        toast.error("Something went wrong. Please try again.");
      },
    });
  };

  return (
    <footer id="contact" style={{ backgroundColor: "oklch(0.18 0 0)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Column 1: Brand + Contact Info */}
          <div>
            <h3
              className="font-display font-bold text-lg tracking-widest uppercase mb-4"
              style={{ color: "oklch(0.96 0 0)" }}
            >
              Contact
            </h3>
            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: "oklch(0.72 0 0)" }}
            >
              Have a project in mind? Reach out and let's talk.
            </p>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-3">
                <Phone
                  size={14}
                  className="flex-shrink-0"
                  style={{ color: "oklch(0.63 0.075 55)" }}
                />
                <a
                  href="tel:+916361447772"
                  className="text-sm hover:underline"
                  style={{ color: "oklch(0.72 0 0)" }}
                >
                  +91 6361447772
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail
                  size={14}
                  className="flex-shrink-0"
                  style={{ color: "oklch(0.63 0.075 55)" }}
                />
                <a
                  href="mailto:rhythmwahan449@gmail.com"
                  className="text-sm hover:underline"
                  style={{ color: "oklch(0.72 0 0)" }}
                >
                  rhythmwahan449@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3
              className="font-display font-bold text-sm uppercase tracking-widest mb-6"
              style={{ color: "oklch(0.96 0 0)" }}
            >
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-display text-xs tracking-wider uppercase transition-colors hover:opacity-80"
                    style={{ color: "oklch(0.72 0 0)" }}
                    data-ocid="footer.link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Form */}
          <div>
            <h3
              className="font-display font-bold text-sm uppercase tracking-widest mb-6"
              style={{ color: "oklch(0.96 0 0)" }}
            >
              Get In Touch
            </h3>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3"
              data-ocid="contact.modal"
            >
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, name: e.target.value }))
                }
                className="w-full px-4 py-3 text-sm bg-transparent border outline-none focus:border-arch-bronze transition-colors"
                style={{
                  borderColor: "oklch(0.35 0 0)",
                  color: "oklch(0.96 0 0)",
                  backgroundColor: "oklch(0.22 0 0)",
                }}
                data-ocid="contact.input"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                value={form.email}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, email: e.target.value }))
                }
                className="w-full px-4 py-3 text-sm bg-transparent border outline-none transition-colors"
                style={{
                  borderColor: "oklch(0.35 0 0)",
                  color: "oklch(0.96 0 0)",
                  backgroundColor: "oklch(0.22 0 0)",
                }}
                data-ocid="contact.input"
              />
              <textarea
                placeholder="Your Message"
                required
                rows={4}
                value={form.message}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, message: e.target.value }))
                }
                className="w-full px-4 py-3 text-sm bg-transparent border outline-none resize-none transition-colors"
                style={{
                  borderColor: "oklch(0.35 0 0)",
                  color: "oklch(0.96 0 0)",
                  backgroundColor: "oklch(0.22 0 0)",
                }}
                data-ocid="contact.textarea"
              />
              <button
                type="submit"
                disabled={isPending}
                className="flex items-center justify-center gap-2 px-6 py-3 font-display text-xs font-semibold tracking-widest uppercase transition-all hover:opacity-90 disabled:opacity-60"
                style={{
                  backgroundColor: "oklch(0.63 0.075 55)",
                  color: "oklch(0.98 0 0)",
                }}
                data-ocid="contact.submit_button"
              >
                {isPending && <Loader2 size={14} className="animate-spin" />}
                {isPending ? "Sending..." : "Send Message"}
              </button>
              {isSuccess && (
                <p
                  className="text-xs text-center"
                  style={{ color: "oklch(0.72 0.12 145)" }}
                  data-ocid="contact.success_state"
                >
                  ✓ Message sent successfully!
                </p>
              )}
              {isError && (
                <p
                  className="text-xs text-center"
                  style={{ color: "oklch(0.65 0.2 27)" }}
                  data-ocid="contact.error_state"
                >
                  ✗ Failed to send. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: "oklch(0.28 0 0)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "oklch(0.55 0 0)" }}>
            © {year} Rhythm Wahan. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "oklch(0.45 0 0)" }}>
            Built with ♥ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-80 transition-colors"
              style={{ color: "oklch(0.55 0 0)" }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
