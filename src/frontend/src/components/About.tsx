import { motion, useInView } from "motion/react";
import { useRef } from "react";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "120+", label: "Projects Completed" },
  { value: "12", label: "Design Awards" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative bg-white py-24 lg:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="/assets/generated/about-img.dim_800x600.jpg"
              alt="Arcus Architects studio"
              className="w-full object-cover aspect-[4/3]"
            />
            {/* Bronze accent bar */}
            <div
              className="absolute -bottom-4 -right-4 w-32 h-1"
              style={{ backgroundColor: "oklch(0.63 0.075 55)" }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <p
              className="font-display text-xs font-light tracking-[0.3em] uppercase mb-4"
              style={{ color: "oklch(0.63 0.075 55)" }}
            >
              Who We Are
            </p>
            <h2
              className="font-display font-bold text-4xl lg:text-5xl uppercase leading-tight mb-6"
              style={{ color: "oklch(0.20 0 0)" }}
            >
              About Arcus
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "oklch(0.41 0 0)" }}
            >
              Arcus Architects is a full-service architecture and design firm
              committed to shaping environments that balance beauty with
              function. Founded in 2009, we have delivered award-winning
              projects across commercial, residential, and cultural sectors.
            </p>
            <p
              className="text-base leading-relaxed mb-10"
              style={{ color: "oklch(0.41 0 0)" }}
            >
              Our integrated approach combines architectural design, precise
              cost estimation, and detailed project costing to ensure every
              vision is realized on time and within budget — without compromise.
            </p>

            {/* Stats */}
            <div
              className="grid grid-cols-3 gap-6 pt-8 border-t"
              style={{ borderColor: "oklch(0.90 0 0)" }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="font-display font-black text-3xl lg:text-4xl mb-1"
                    style={{ color: "oklch(0.63 0.075 55)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="font-display text-xs font-light tracking-wider uppercase"
                    style={{ color: "oklch(0.41 0 0)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
