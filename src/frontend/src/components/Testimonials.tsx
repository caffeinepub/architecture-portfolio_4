import { Quote } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { useGetAllTestimonials } from "../hooks/useQueries";

const FALLBACK_TESTIMONIALS = [
  {
    quote:
      "Arcus delivered our headquarters building on time and under budget. Their attention to detail and cost transparency gave us complete confidence throughout the project.",
    author: "James Harrington",
    roleOrCompany: "CEO, Harrington Group",
    initials: "JH",
  },
  {
    quote:
      "The team at Arcus transformed our vision into something far beyond what we imagined. The design is stunning, and the estimation process meant no nasty surprises.",
    author: "Sophia Laurent",
    roleOrCompany: "Owner, Laurent Residence",
    initials: "SL",
  },
  {
    quote:
      "Professional, creative, and reliable. Arcus managed a complex mixed-use development with exceptional skill. The project costing service alone saved us hundreds of thousands.",
    author: "Marcus Webb",
    roleOrCompany: "Director, Webb Developments",
    initials: "MW",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { data: backendTestimonials } = useGetAllTestimonials();

  const testimonials =
    backendTestimonials && backendTestimonials.length > 0
      ? backendTestimonials.map((t) => ({
          ...t,
          initials: t.author
            .split(" ")
            .map((w) => w[0])
            .join("")
            .slice(0, 2)
            .toUpperCase(),
        }))
      : FALLBACK_TESTIMONIALS;

  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "oklch(0.96 0 0)" }}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className="font-display text-xs font-light tracking-[0.3em] uppercase mb-4"
            style={{ color: "oklch(0.63 0.075 55)" }}
          >
            Kind Words
          </p>
          <h2
            className="font-display font-bold text-4xl lg:text-5xl uppercase"
            style={{ color: "oklch(0.20 0 0)" }}
          >
            Client Testimonials
          </h2>
        </motion.div>

        <div
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
          data-ocid="testimonials.list"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="p-8 flex flex-col gap-5 bg-white"
              style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.06)" }}
              data-ocid={`testimonials.item.${index + 1}`}
            >
              <Quote
                size={28}
                style={{ color: "oklch(0.63 0.075 55)" }}
                strokeWidth={1.5}
              />
              <p
                className="text-sm leading-relaxed flex-1 italic"
                style={{ color: "oklch(0.41 0 0)" }}
              >
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div
                className="flex items-center gap-3 pt-4"
                style={{ borderTop: "1px solid oklch(0.92 0 0)" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-xs"
                  style={{
                    backgroundColor: "oklch(0.22 0 0)",
                    color: "oklch(0.63 0.075 55)",
                  }}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <div
                    className="font-display font-semibold text-sm uppercase tracking-wide"
                    style={{ color: "oklch(0.20 0 0)" }}
                  >
                    {testimonial.author}
                  </div>
                  <div
                    className="font-display text-xs font-light"
                    style={{ color: "oklch(0.63 0.075 55)" }}
                  >
                    {testimonial.roleOrCompany}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
