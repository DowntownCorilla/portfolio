import { Github, Mail } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-t-2 border-[#c9a77c]/30 py-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="font-mono text-xs text-[#c9a77c]/60 text-center md:text-left">
            <span className="text-[#c9a77c]/80">© 2026 Corilla (이윤재).</span>
            <span className="ml-2">All rights reserved.</span>
          </div>

          <div className="flex gap-4 items-center">
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-[#c9a77c]/60 hover:text-[#c9a77c] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="mailto:your.email@example.com"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-[#c9a77c]/60 hover:text-[#c9a77c] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </motion.a>
            <div className="hidden md:block w-px h-4 bg-[#c9a77c]/30 ml-1" />
            <div className="hidden md:block font-mono text-xs text-[#c9a77c]/40">
              [ 이윤재(Corilla) Portfolio ]
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
