"use client";

import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

export function HeroSection() {
  const scrollToProjects = () => {
    const wrapper = document.querySelector(".horizontal-scroll-wrapper");
    if (wrapper) {
      wrapper.scrollTo({
        left: window.innerWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="section-panel">
      <div className="h-screen flex items-center justify-center bg-black relative w-screen flex-shrink-0">
        {/* Retro grid background */}
        <div className="absolute inset-0 retro-grid opacity-20" />

        {/* Scanlines effect */}
        <div className="absolute inset-0 scanlines opacity-10" />

        <div className="text-center px-4 md:px-6 relative z-10 section-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 md:mb-8"
          >
            <div className="text-[#c9a77c] text-xs md:text-sm mb-2 tracking-widest">
              [ SYSTEM INITIALIZED ]
            </div>
            <div className="border-2 border-[#c9a77c] inline-block p-1 mb-4">
              <div className="border border-[#c9a77c] px-3 md:px-4 py-2">
                <span className="text-xs tracking-wider">
                  FRONTEND_DEV_v2.0
                </span>
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-7xl mb-4 md:mb-6 font-mono text-[#c9a77c] retro-text"
          >
            &gt; CORILLA_
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6 md:mb-8"
          >
            <div className="text-base md:text-lg lg:text-xl text-[#c9a77c]/80 font-mono mb-2">
              $ cat profile.txt
            </div>
            <div className="text-sm md:text-base lg:text-lg text-[#c9a77c]/60 font-mono max-w-2xl mx-auto px-4">
              &gt; 사용자의 작은 불편을 발견하고 해결하는 개발자 이윤재입니다.
              <br />
              &gt; 더 나은 사용 경험을 고민하며 서비스를 만들겠습니다.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-3 md:gap-4 justify-center flex-wrap"
          >
            <button
              onClick={scrollToProjects}
              className="px-4 md:px-6 py-2 md:py-3 bg-[#c9a77c] text-black font-mono text-sm md:text-base border-2 border-[#c9a77c] hover:bg-transparent hover:text-[#c9a77c] transition-all duration-300 retro-button"
            >
              [ VIEW_PROJECTS ]
            </button>
            <a
              href="#contact"
              className="px-4 md:px-6 py-2 md:py-3 border-2 border-[#c9a77c] text-[#c9a77c] font-mono text-sm md:text-base hover:bg-[#c9a77c] hover:text-black transition-all duration-300 retro-button"
            >
              [ CONTACT_ME ]
            </a>
          </motion.div>

          {/* Blinking cursor */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
            className="text-[#c9a77c] text-xl md:text-2xl mt-6 md:mt-8 font-mono"
          >
            _
          </motion.div>
        </div>

        {/* Right side navigation indicator */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute right-8 lg:right-12 top-1/2 -translate-y-1/2 hidden lg:block"
        >
          <button onClick={scrollToProjects} className="group relative">
            {/* Outer border frame */}
            <div className="absolute -inset-4 border border-[#c9a77c]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="flex flex-col items-center gap-2 relative">
              {/* Top label */}
              <motion.div
                className="text-[#c9a77c]/50 group-hover:text-[#c9a77c]/80 font-mono text-[10px] tracking-wider transition-colors"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                [SCROLL]
              </motion.div>

              {/* Main indicator container */}
              <div className="relative flex flex-col items-center">
                {/* Top gradient line */}
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#c9a77c]/30 to-[#c9a77c]/50 group-hover:via-[#c9a77c]/50 group-hover:to-[#c9a77c]/70 transition-all"></div>

                {/* Center arrow with multiple animations */}
                <div className="relative my-2">
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 blur-sm"
                    animate={{
                      opacity: [0, 0.5, 0],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <ChevronRight className="w-5 h-5 text-[#c9a77c]" />
                  </motion.div>

                  {/* Main arrow */}
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative"
                  >
                    <ChevronRight className="w-5 h-5 text-[#c9a77c]/70 group-hover:text-[#c9a77c] transition-colors" />
                  </motion.div>

                  {/* Trail effect */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      x: [0, 10, 0],
                      opacity: [0, 0.3, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.1,
                    }}
                  >
                    <ChevronRight className="w-5 h-5 text-[#c9a77c]/50" />
                  </motion.div>
                </div>

                {/* Bottom gradient line */}
                <div className="w-px h-12 bg-gradient-to-b from-[#c9a77c]/50 via-[#c9a77c]/30 to-transparent group-hover:from-[#c9a77c]/70 group-hover:via-[#c9a77c]/50 transition-all"></div>
              </div>

              {/* Project count indicator */}
              <div className="mt-1 text-[#c9a77c]/30 group-hover:text-[#c9a77c]/50 font-mono text-[9px] transition-colors">
                [6 PROJECTS]
              </div>
            </div>

            {/* Side decoration lines */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-8 h-px bg-gradient-to-r from-transparent via-[#c9a77c]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-8 h-px bg-gradient-to-r from-transparent via-[#c9a77c]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </motion.div>

        {/* Mobile scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 lg:hidden"
        >
          <button
            onClick={scrollToProjects}
            className="flex flex-col items-center gap-2 group"
          >
            <div className="text-[#c9a77c]/60 group-hover:text-[#c9a77c] font-mono text-xs">
              [VIEW PROJECTS]
            </div>
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronRight className="w-5 h-5 text-[#c9a77c]/60 group-hover:text-[#c9a77c]" />
            </motion.div>
          </button>
        </motion.div>

        {/* Corner decorations */}
        <div className="absolute top-16 md:top-20 left-2 md:left-4 text-[#c9a77c]/40 font-mono text-xs">
          [0x00]
        </div>
        <div className="absolute top-16 md:top-20 right-2 md:right-4 text-[#c9a77c]/40 font-mono text-xs">
          [STATUS: ONLINE]
        </div>
        <div className="absolute bottom-16 md:bottom-4 left-2 md:left-4 text-[#c9a77c]/40 font-mono text-xs">
          [2026.02.10]
        </div>
      </div>

      <style>{`
        .retro-grid {
          background-image:
            linear-gradient(rgba(201, 167, 124, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201, 167, 124, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: grid-move 20s linear infinite;
        }

        @keyframes grid-move {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(50px);
          }
        }

        .scanlines {
          background: linear-gradient(
            transparent 50%,
            rgba(201, 167, 124, 0.05) 50%
          );
          background-size: 100% 4px;
          pointer-events: none;
        }

        .retro-text {
          text-shadow:
            0 0 10px rgba(201, 167, 124, 0.5),
            0 0 20px rgba(201, 167, 124, 0.3);
        }

        .retro-button {
          box-shadow:
            3px 3px 0 rgba(201, 167, 124, 0.3);
          transition: all 0.2s;
        }

        .retro-button:hover {
          transform: translate(2px, 2px);
          box-shadow:
            1px 1px 0 rgba(201, 167, 124, 0.3);
        }

        .retro-nav-box {
          box-shadow:
            3px 3px 0 rgba(201, 167, 124, 0.2);
          transition: all 0.3s;
        }

        .retro-nav-box:hover {
          box-shadow:
            5px 5px 0 rgba(201, 167, 124, 0.3);
        }
      `}</style>
    </section>
  );
}
