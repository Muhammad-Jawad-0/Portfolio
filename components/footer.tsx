"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { motion } from "framer-motion"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/johndoe",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/johndoe",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/johndoe",
    icon: Twitter,
  },
  {
    name: "Email",
    href: "mailto:john@example.com",
    icon: Mail,
  },
]

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
]

export function Footer() {
  return (
    <motion.footer
      className="bg-muted/30 border-t"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand and description */}
          <motion.div
            className="space-y-8 xl:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link href="#home" className="text-2xl font-bold text-foreground hover:text-primary transition-colors">
                John Doe
              </Link>
            </motion.div>
            <p className="text-sm leading-6 text-muted-foreground max-w-xs">
              Frontend Developer passionate about creating beautiful, functional web experiences with modern
              technologies.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ y: -2, scale: 1.1 }}
                    viewport={{ once: true }}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
                    >
                      <Link href={item.href} target="_blank" rel="noopener noreferrer">
                        <span className="sr-only">{item.name}</span>
                        <IconComponent className="h-5 w-5" />
                      </Link>
                    </Button>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Navigation links */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-sm font-semibold leading-6 text-foreground">Navigation</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.slice(0, 3).map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                className="mt-10 md:mt-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-sm font-semibold leading-6 text-foreground">More</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.slice(3).map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Theme toggle and additional info */}
            <motion.div
              className="mt-10 md:mt-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-semibold leading-6 text-foreground">Preferences</h3>
              <div className="mt-6">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Theme:</span>
                  <ModeToggle />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom section */}
        <motion.div
          className="mt-16 border-t pt-8 sm:mt-20 lg:mt-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs leading-5 text-muted-foreground">
              &copy; {new Date().getFullYear()} John Doe. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-muted-foreground">
              <Link href="/privacy" className="hover:text-foreground transition-colors hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-foreground transition-colors hover:underline">
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}
