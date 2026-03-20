import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";

const LOCAL_PROJECTS = [
  {
    title: "Interior Design",
    category: "Interior",
    description:
      "Modern kitchen and dining space with marble finishes and premium lighting",
    image: "/assets/uploads/IMG-20260214-WA0029-1.jpg",
  },
  {
    title: "Architectural Section",
    category: "Technical",
    description: "Detailed building section drawn in Autodesk Revit 2021",
    image: "/assets/uploads/IMG-20251101-WA0023-2.jpg",
  },
  {
    title: "Residential Villa",
    category: "Residential",
    description: "Modern two-storey villa with landscaped garden and parking",
    image: "/assets/uploads/IMG-20251101-WA0022-1--3.jpg",
  },
  {
    title: "3D Building Model",
    category: "Technical",
    description:
      "3D model of a contemporary office building in Autodesk Revit 2021",
    image: "/assets/uploads/IMG-20251101-WA0033-4.jpg",
  },
];

const CATEGORIES = ["All", "Interior", "Residential", "Technical"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const filtered =
    activeCategory === "All"
      ? LOCAL_PROJECTS
      : LOCAL_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p
            className="font-display text-xs font-light tracking-[0.3em] uppercase mb-4"
            style={{ color: "oklch(0.63 0.075 55)" }}
          >
            Our Work
          </p>
          <h2
            className="font-display font-bold text-4xl lg:text-5xl uppercase mb-8"
            style={{ color: "oklch(0.20 0 0)" }}
          >
            Featured Projects
          </h2>

          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                type="button"
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 font-display text-xs font-semibold tracking-widest uppercase transition-all"
                style={{
                  backgroundColor:
                    activeCategory === cat
                      ? "oklch(0.63 0.075 55)"
                      : "oklch(0.96 0 0)",
                  color:
                    activeCategory === cat
                      ? "oklch(0.98 0 0)"
                      : "oklch(0.41 0 0)",
                  border: `1px solid ${
                    activeCategory === cat
                      ? "oklch(0.63 0.075 55)"
                      : "oklch(0.88 0 0)"
                  }`,
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden aspect-[4/3] cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p
                  className="font-display text-xs font-light tracking-widest uppercase mb-1"
                  style={{ color: "oklch(0.63 0.075 55)" }}
                >
                  {project.category}
                </p>
                <h3
                  className="font-display font-bold text-lg uppercase"
                  style={{ color: "oklch(0.98 0 0)" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: "oklch(0.84 0 0)" }}
                >
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p style={{ color: "oklch(0.41 0 0)" }}>
              No projects in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
