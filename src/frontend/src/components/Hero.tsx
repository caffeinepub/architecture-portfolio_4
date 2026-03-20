import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center"
      style={{ paddingTop: "80px" }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/generated/hero-bg.dim_1600x900.jpg')",
        }}
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.2) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p
              className="font-display text-xs font-light tracking-[0.3em] uppercase mb-6"
              style={{ color: "oklch(0.63 0.075 55)" }}
            >
              Architecture & Design
            </p>
            <h1
              className="font-display font-black text-5xl lg:text-7xl uppercase leading-none mb-6"
              style={{ color: "oklch(0.98 0 0)", letterSpacing: "-0.02em" }}
            >
              Designing
              <br />
              Spaces That
              <br />
              <span style={{ color: "oklch(0.70 0.075 58)" }}>Inspire</span>
            </h1>
            <p
              className="text-base lg:text-lg font-light leading-relaxed mb-10 max-w-lg"
              style={{ color: "oklch(0.84 0 0)" }}
            >
              We craft exceptional architectural experiences — from bold
              commercial landmarks to intimate residential retreats. Precision,
              purpose, and poetry in every project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center px-8 py-4 font-display text-xs font-semibold tracking-widest uppercase transition-all hover:opacity-90"
                style={{
                  backgroundColor: "oklch(0.63 0.075 55)",
                  color: "oklch(0.98 0 0)",
                }}
                data-ocid="hero.primary_button"
              >
                View Our Portfolio
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-8 py-4 font-display text-xs font-semibold tracking-widest uppercase border transition-all hover:bg-white/10"
                style={{
                  borderColor: "oklch(0.84 0 0)",
                  color: "oklch(0.98 0 0)",
                }}
                data-ocid="hero.secondary_button"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <span
          className="font-display text-xs tracking-widest uppercase"
          style={{ color: "oklch(0.84 0 0)" }}
        >
          Scroll
        </span>
        <ChevronDown size={16} style={{ color: "oklch(0.63 0.075 55)" }} />
      </motion.div>

      {/* Diagonal clip at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: "80px",
          background: "oklch(1 0 0)",
          clipPath: "polygon(0 100%, 100% 100%, 100% 80%, 0 0)",
        }}
      />
    </section>
  );
}
