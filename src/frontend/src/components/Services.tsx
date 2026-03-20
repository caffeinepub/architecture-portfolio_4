import { BarChart3, Building2, Calculator } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const services = [
  {
    icon: Building2,
    title: "Architecture Design",
    description:
      "From concept sketches to construction documents, we deliver thoughtful architectural solutions that stand the test of time. Every project begins with deep listening and ends with extraordinary spaces.",
    link: "#contact",
  },
  {
    icon: Calculator,
    title: "Cost Estimation",
    description:
      "Accurate, transparent cost estimation is fundamental to project success. Our expert estimators use industry-leading tools to provide detailed breakdowns before ground is broken.",
    link: "#contact",
  },
  {
    icon: BarChart3,
    title: "Project Costing",
    description:
      "We manage comprehensive project costing throughout the entire build cycle — tracking budgets, forecasting variations, and ensuring financial clarity from feasibility to final handover.",
    link: "#contact",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "oklch(0.52 0.018 62)" }}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className="font-display text-xs font-light tracking-[0.3em] uppercase mb-4"
            style={{ color: "oklch(0.84 0 0)" }}
          >
            What We Do
          </p>
          <h2
            className="font-display font-bold text-4xl lg:text-5xl uppercase"
            style={{ color: "oklch(0.98 0 0)" }}
          >
            Our Services
          </h2>
        </motion.div>

        {/* Service cards */}
        <div
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
          data-ocid="services.list"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="p-8 flex flex-col gap-5"
                style={{ backgroundColor: "oklch(0.22 0 0)" }}
                data-ocid={`services.item.${index + 1}`}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center"
                  style={{ backgroundColor: "oklch(0.63 0.075 55 / 0.15)" }}
                >
                  <Icon
                    size={22}
                    style={{ color: "oklch(0.63 0.075 55)" }}
                    strokeWidth={1.5}
                  />
                </div>
                <h3
                  className="font-display font-bold text-lg uppercase tracking-wide"
                  style={{ color: "oklch(0.96 0 0)" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ color: "oklch(0.72 0 0)" }}
                >
                  {service.description}
                </p>
                <a
                  href={service.link}
                  className="inline-flex items-center gap-2 font-display text-xs font-semibold tracking-widest uppercase transition-all hover:gap-3"
                  style={{ color: "oklch(0.63 0.075 55)" }}
                  data-ocid="services.link"
                >
                  Learn More <span>→</span>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
