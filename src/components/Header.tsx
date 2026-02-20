"use client";

import { useState } from "react";
import { motion } from "motion/react";

export function Header() {
  const [isHovered, setIsHovered] = useState(false);

  const handleLogoClick = () => {
    window.location.reload();
  };

  const scrollToSection = (sectionId: string) => {
    const wrapper = document.querySelector(".horizontal-scroll-wrapper");
    if (!wrapper) return;

    const target = document.getElementById(sectionId);
    if (target) {
      const wrapperRect = wrapper.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      const left = targetRect.left - wrapperRect.left + wrapper.scrollLeft;
      wrapper.scrollTo({
        left,
        behavior: "smooth",
      });
      return;
    }

    const sections = ["hero", "projects", "contact"];
    const sectionIndex = sections.indexOf(sectionId);
    if (sectionIndex !== -1) {
      wrapper.scrollTo({
        left: sectionIndex * window.innerWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b-2 border-[#c9a77c]/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        <motion.div
          className="relative cursor-pointer font-mono text-s md:text-sm select-none font-semibold"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleLogoClick}
        >
          <div className="flex items-center">
            <span className="text-[#c9a77c]/60 font-semibold">&lt;</span>
            <span className="text-[#c9a77c] font-semibold">Corilla</span>

            {/* Space before onClick - only visible when hovered */}
            {isHovered && <span className="font-semibold"> </span>}

            {/* onClick text that gets revealed character by character */}
            <motion.span
              className="text-s md:text-sm overflow-hidden inline-block whitespace-nowrap font-semibold"
              initial={{ width: 0 }}
              animate={{
                width: isHovered ? "auto" : 0,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ minWidth: 0 }}
            >
              <span className="text-[#61afef] ml-2">onClick</span>
              <span className="text-white/70">=</span>
              <span className="text-[#e5c07b] mr-2">&#123;reload&#125;</span>
            </motion.span>

            {/* Space after onClick - only visible when hovered */}
            {isHovered && <span className="font-semibold"> </span>}

            <span className="text-[#c9a77c] font-semibold">/&gt;</span>
          </div>
        </motion.div>

        <nav className="flex gap-3 md:gap-6 lg:gap-8">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xs md:text-sm font-mono text-[#c9a77c]/60 hover:text-[#c9a77c] transition-colors border border-transparent hover:border-[#c9a77c]/30 px-2 py-1"
          >
            [HOME]
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-xs md:text-sm font-mono text-[#c9a77c]/60 hover:text-[#c9a77c] transition-colors border border-transparent hover:border-[#c9a77c]/30 px-2 py-1"
          >
            [PROJECTS]
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-xs md:text-sm font-mono text-[#c9a77c]/60 hover:text-[#c9a77c] transition-colors border border-transparent hover:border-[#c9a77c]/30 px-2 py-1"
          >
            [CONTACT]
          </button>
        </nav>
      </div>
    </header>
  );
}
