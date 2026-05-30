"use client"

import { ArrowDown, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 pt-20 overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-[128px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="space-y-2">
              <p className="text-primary font-medium tracking-widest uppercase flex items-center gap-2">
                <span className="w-10 h-px bg-primary" /> Hello, I am
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Milkah Wairimu
                <span className="block text-gradient">Mwangi</span>
              </h1>
            </motion.div>

            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-foreground/80 font-medium">
              ICT Support Specialist & Web Developer
            </motion.p>

            <motion.p variants={itemVariants} className="text-muted-foreground max-w-md leading-relaxed text-lg">
              Fresh graduate passionate about technology, problem-solving, and creating 
              digital solutions. Ready to bring enthusiasm and technical skills to your team.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:scale-105 transition-transform shadow-lg shadow-primary/25"
              >
                Get in Touch
              </Link>
              <Link
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-4 border border-border bg-card/50 backdrop-blur-sm text-foreground rounded-full font-medium hover:bg-secondary transition-all hover:scale-105"
              >
                View Projects
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-6 pt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
                <MapPin size={16} className="text-primary" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
                <Mail size={16} className="text-primary" />
                <span>milkahmwangi002@gmail.com</span>
              </div>
            </motion.div>
          </motion.div>

          <div className="hidden lg:flex justify-center items-center">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="w-80 h-80 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20 flex items-center justify-center animate-pulse duration-[3000ms]">
                <div className="w-64 h-64 rounded-full bg-card/80 backdrop-blur-sm border border-white/10 flex items-center justify-center shadow-2xl">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-inner">
                    <span className="text-7xl font-bold text-white tracking-tighter">MW</span>
                  </div>
                </div>
              </div>
              
              <motion.div 
                className="absolute -top-4 -right-4 w-28 h-28 glass-card rounded-2xl flex items-center justify-center border border-white/20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-center">
                  <p className="text-3xl font-bold text-gradient">2+</p>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Attachments</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 w-28 h-28 glass-card rounded-2xl flex items-center justify-center border border-white/20"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="text-center">
                  <p className="text-3xl font-bold text-gradient">3+</p>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Projects</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Link href="#about" aria-label="Scroll to about section" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs uppercase tracking-widest font-medium">Scroll down</span>
          <ArrowDown size={20} />
        </Link>
      </motion.div>
    </section>
  )
}
