"use client"

import { GraduationCap, Award, Heart } from "lucide-react"
import { motion } from "framer-motion"

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const slideLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const slideRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="space-y-4 mb-16 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-medium tracking-widest uppercase flex items-center justify-center md:justify-start gap-2">
            <span className="w-10 h-px bg-primary" /> About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Passionate About <span className="text-gradient">Technology</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div 
            className="space-y-6"
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <p className="text-muted-foreground leading-relaxed text-lg">
              I am a recent graduate with a <span className="text-foreground font-semibold bg-primary/10 px-2 py-0.5 rounded-md">Diploma in Information 
              Communication Technology</span> from Kiambu National Polytechnic. My journey in tech 
              has equipped me with hands-on experience in ICT support, web development, and networking.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              During my studies, I completed two attachments at Kenyatta University Teaching, 
              Referral and Research Hospital, where I gained practical experience in both ICT 
              support and web development roles. I am eager to continue learning and growing 
              in the tech industry.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              When I am not working with technology, I enjoy sports, training, and writing. 
              I believe in continuous improvement and am always looking for new challenges 
              to develop my skills further.
            </p>
          </motion.div>

          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={slideRight} className="glass-card rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-start gap-5">
                <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl shadow-inner ring-1 ring-primary/20">
                  <GraduationCap className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">Education</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Diploma in ICT <br/>
                    <span className="text-sm font-medium text-primary">Kiambu National Polytechnic (2023-2026)</span>
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={slideRight} className="glass-card rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-start gap-5">
                <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl shadow-inner ring-1 ring-primary/20">
                  <Award className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Achievements</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" />Certificate in Skills & Innovation Competition</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" />Certificate in Table Tennis</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" />Certificate in Exhibition of an Innovation</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div variants={slideRight} className="glass-card rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-start gap-5">
                <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl shadow-inner ring-1 ring-primary/20">
                  <Heart className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">Interests</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["Sports", "Training", "Writing"].map(interest => (
                      <span key={interest} className="px-3 py-1 bg-secondary/30 text-secondary-foreground rounded-full text-sm font-medium border border-secondary/20">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
