"use client"

import { Mail, Phone, MapPin, Send, Loader2, Github, Linkedin } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast.success("Message sent successfully!", {
      description: "Thank you for reaching out. I'll get back to you soon.",
    })
    
    setIsSubmitting(false)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none rounded-tl-[100%]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="space-y-4 mb-16 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-medium tracking-widest uppercase flex items-center justify-center md:justify-start gap-2">
            <span className="w-10 h-px bg-primary" /> Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Let&apos;s <span className="text-gradient">Connect</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground leading-relaxed text-lg">
              I am currently seeking internship and entry-level opportunities in ICT support 
              and web development. If you have an opportunity that matches my skills or would 
              like to discuss potential collaboration, I would love to hear from you.
            </p>

            <div className="space-y-4 pt-4">
              <a
                href="mailto:milkahmwangi002@gmail.com"
                className="flex items-center gap-5 p-5 glass-card rounded-2xl hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-primary/20 group"
              >
                <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl group-hover:scale-110 transition-transform shadow-inner ring-1 ring-primary/20">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1 tracking-wide uppercase">Email</p>
                  <p className="text-foreground text-lg group-hover:text-primary transition-colors font-medium">
                    milkahmwangi002@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:0111261195"
                className="flex items-center gap-5 p-5 glass-card rounded-2xl hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-primary/20 group"
              >
                <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl group-hover:scale-110 transition-transform shadow-inner ring-1 ring-primary/20">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1 tracking-wide uppercase">Phone</p>
                  <p className="text-foreground text-lg group-hover:text-primary transition-colors font-medium">
                    0111 261 195
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/Milkadev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-5 glass-card rounded-2xl hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-primary/20 group"
              >
                <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl group-hover:scale-110 transition-transform shadow-inner ring-1 ring-primary/20">
                  <Github className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1 tracking-wide uppercase">GitHub</p>
                  <p className="text-foreground text-lg group-hover:text-primary transition-colors font-medium">
                    Milkadev
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/milkah-mwangi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-5 glass-card rounded-2xl hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-primary/20 group"
              >
                <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl group-hover:scale-110 transition-transform shadow-inner ring-1 ring-primary/20">
                  <Linkedin className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1 tracking-wide uppercase">LinkedIn</p>
                  <p className="text-foreground text-lg group-hover:text-primary transition-colors font-medium">
                    Milkah Mwangi
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-5 p-5 glass-card rounded-2xl">
                <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl shadow-inner ring-1 ring-primary/20">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1 tracking-wide uppercase">Location</p>
                  <p className="text-foreground text-lg font-medium">Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32" />
              
              <h3 className="text-2xl font-bold text-foreground mb-8 relative z-10">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground ml-1">
                    Name
                  </label>
                  <Input
                    required
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="bg-background/50 border-white/10 dark:border-white/5 focus-visible:ring-primary py-6 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground ml-1">
                    Email
                  </label>
                  <Input
                    required
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="bg-background/50 border-white/10 dark:border-white/5 focus-visible:ring-primary py-6 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground ml-1">
                    Message
                  </label>
                  <Textarea
                    required
                    id="message"
                    rows={5}
                    placeholder="How can I help you?"
                    className="bg-background/50 border-white/10 dark:border-white/5 focus-visible:ring-primary px-4 py-4 rounded-xl resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-6 rounded-xl font-medium text-md shadow-lg shadow-primary/25 hover:scale-[1.02] transition-transform"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-24 pt-8 border-t border-border/50 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-muted-foreground text-sm font-medium">
            &copy; {new Date().getFullYear()} Milkah Wairimu Mwangi. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
