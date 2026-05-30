"use client"

import { ExternalLink, Milk, Flame, Wheat } from "lucide-react"
import { motion } from "framer-motion"

const projects = [
  {
    title: "SmartDairy Milk Products and Transaction System",
    description:
      "A comprehensive system for managing dairy products inventory and transactions. Streamlines the process of tracking milk products and sales.",
    icon: Milk,
    tags: ["Web Application", "Database", "Inventory Management"],
  },
  {
    title: "Online Gas Booking System",
    description:
      "An online platform that allows customers to book gas cylinders conveniently. Features user registration, booking management, and delivery tracking.",
    icon: Flame,
    tags: ["Web Application", "E-commerce", "Booking System"],
  },
  {
    title: "Fresh & Quality Cereals Delivered",
    description:
      "A delivery platform for fresh cereals and grains. Connects farmers with consumers, ensuring quality products reach customers efficiently.",
    icon: Wheat,
    tags: ["Web Application", "E-commerce", "Delivery Platform"],
  },
]

export function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  }

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto z-10 relative">
        <motion.div 
          className="space-y-4 mb-16 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-secondary font-medium tracking-widest uppercase flex items-center justify-center md:justify-start gap-2">
            <span className="w-10 h-px bg-secondary" /> Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            What I Have <span className="text-gradient">Built</span>
          </h2>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group glass-card rounded-2xl overflow-hidden flex flex-col h-full hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300"
            >
              <div className="p-8 flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 ring-1 ring-primary/20 group-hover:scale-110 transition-transform duration-300">
                    {(() => {
                      const Icon = project.icon
                      return <Icon className="text-primary" size={28} />
                    })()}
                  </div>
                  <ExternalLink size={20} className="text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div className="px-8 pb-8 pt-4 border-t border-border/50 bg-black/5 dark:bg-white/5 line-clamp-1">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-background/50 backdrop-blur-md text-foreground text-xs font-medium rounded-full border border-border/50 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
