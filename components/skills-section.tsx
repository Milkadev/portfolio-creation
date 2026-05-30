"use client"

import { Monitor, Code, Network, Wrench } from "lucide-react"
import { motion } from "framer-motion"

const skills = [
  {
    category: "ICT Support",
    icon: Monitor,
    items: [
      "Hardware Troubleshooting",
      "Software Troubleshooting",
      "Computer Setup & Configuration",
      "System Maintenance",
      "Printer Support",
    ],
  },
  {
    category: "Web Development",
    icon: Code,
    items: [
      "HTML",
      "CSS",
      "Basic Web Design",
      "Website Maintenance",
      "WordPress",
    ],
  },
  {
    category: "Networking",
    icon: Network,
    items: [
      "Basic Network Setup",
      "Network Troubleshooting",
      "Connectivity Solutions",
    ],
  },
  {
    category: "Technical Skills",
    icon: Wrench,
    items: [
      "Technical Documentation",
      "User Support",
      "Problem Solving",
      "Team Collaboration",
    ],
  },
]

export function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  }

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="space-y-4 mb-16 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-medium tracking-widest uppercase flex items-center justify-center md:justify-start gap-2">
            <span className="w-10 h-px bg-primary" /> Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            What I <span className="text-gradient">Can Do</span>
          </h2>
        </motion.div>

        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.category}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="glass-card rounded-2xl p-6 group hover:border-primary/50 hover:shadow-primary/20 transition-all duration-300"
            >
              <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 w-fit mb-6 ring-1 ring-primary/20 group-hover:scale-110 transition-transform duration-300">
                {(() => {
                  const Icon = skill.icon
                  return <Icon className="text-primary" size={28} />
                })()}
              </div>
              <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
              <ul className="space-y-3">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="text-muted-foreground text-sm flex items-start gap-3 group/item"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0 group-hover/item:scale-150 transition-transform" />
                    <span className="group-hover/item:text-foreground transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
