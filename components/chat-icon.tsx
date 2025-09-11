"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function ChatIcon() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Floating Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.3, type: "spring" }}
      >
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button
            size="icon"
            className="h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
              {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
            </motion.div>
          </Button>
        </motion.div>

        {/* Pulse animation ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-primary"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Chat Modal/Tooltip */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-40"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-background border rounded-lg shadow-lg p-4 max-w-xs">
              <div className="flex items-center gap-2 mb-2">
                <MessageCircle className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Chat with me</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Chat functionality coming soon! In the meantime, feel free to reach out via the contact form.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="w-full bg-transparent"
                onClick={() => {
                  setIsOpen(false)
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Go to Contact
              </Button>
            </div>
            {/* Arrow pointing to button */}
            <div className="absolute bottom-0 right-6 transform translate-y-1/2">
              <div className="w-3 h-3 bg-background border-r border-b rotate-45" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
