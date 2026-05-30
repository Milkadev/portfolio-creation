"use client"

import { Calendar, Building2 } from "lucide-react"
import { motion } from "framer-motion"

const experiences = [
  {
    title: "Web Development Attachment",
    company: "Kenyatta University Teaching, Referral and Research Hospital",
    period: "May - August 2025",
    description: [
      "Supported web development tasks and interface updates",
      "Collaborated with ICT team on daily technical operations",
      "Assisted in updating the hospital website using WordPress",
    ],
  },
  {
    title: "ICT Support Attachment",
    company: "Kenyatta University Teaching, Referral and Research Hospital",
    period: "May - August 2024",
    description: [
      "Assisted hospital staff with ICT support and troubleshooting",
      "Helped maintain computer systems and resolve hardware/software issues",
      "Helped in solving printer issues",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-accent/10 via-background to-background pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="space-y-4 mb-20 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-medium tracking-widest uppercase flex items-center justify-center md:justify-start gap-2">
            <span className="w-10 h-px bg-primary" /> Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Where I Have <span className="text-gradient">Worked</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Animated Timeline line */}
          <motion.div 
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-primary via-accent to-background md:-translate-x-1/2 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "circOut" }}
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <motion.div 
                  className="absolute left-[-6px] md:left-1/2 w-4 h-4 rounded-full bg-background border-4 border-primary z-10 md:-translate-x-1/2 mt-6 shadow-[0_0_15px_rgba(var(--primary),0.5)]"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.2, type: "spring", stiffness: 300, damping: 20 }}
                />

                <motion.div 
                  className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="glass-card rounded-2xl p-8 hover:border-primary/50 transition-colors group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500" />
                    
                    <div className="flex flex-wrap items-center gap-3 text-secondary text-sm mb-4 bg-secondary/10 w-fit px-3 py-1.5 rounded-full border border-secondary/20 font-medium">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-6">
                      <Building2 size={16} />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <ul className="space-y-3 relative z-10">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="text-muted-foreground text-sm flex items-start gap-3"
                        >
                          <span className="w-1.5 h-1.5 bg-primary/70 rounded-full mt-2 shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
