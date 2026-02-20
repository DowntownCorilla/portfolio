"use client";

import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import { Project } from "../types/types";
import { projects } from "../data/prodects";
import { ExternalLink, Code } from "lucide-react";

interface ProjectsSectionProps {
  onProjectClick: (project: Project) => void;
}

function TechStackRow({
  techStack,
  onMore,
}: {
  techStack: string[];
  onMore: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const moreButtonRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [visibleCount, setVisibleCount] = useState(techStack.length);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const measure = () => {
      const containerWidth = container.clientWidth;
      if (containerWidth <= 0) return;

      const win = globalThis as Window & typeof globalThis;
      const styles = win.getComputedStyle(container);
      const gap = parseFloat(styles.columnGap || styles.gap || "0") || 0;

      let used = 0;
      let count = 0;

      for (let i = 0; i < techStack.length; i += 1) {
        const w = itemRefs.current[i]?.offsetWidth ?? 0;
        const next = (count === 0 ? 0 : gap) + w;
        if (used + next > containerWidth) break;
        used += next;
        count += 1;
      }

      setVisibleCount(Math.max(1, count));
    };

    const raf = requestAnimationFrame(measure);
    const win = globalThis as Window & typeof globalThis;
    const timeoutId = win.setTimeout(measure, 50);
    const fontReady =
      "fonts" in document
        ? (document as Document & { fonts: FontFaceSet }).fonts.ready
        : null;
    if (fontReady) {
      fontReady.then(measure).catch(() => {});
    }
    let ro: ResizeObserver | null = null;

    if ("ResizeObserver" in globalThis) {
      ro = new ResizeObserver(measure);
      ro.observe(container);
    } else {
      win.addEventListener("resize", measure);
    }

    return () => {
      cancelAnimationFrame(raf);
      win.clearTimeout(timeoutId);
      if (ro) ro.disconnect();
      else win.removeEventListener("resize", measure);
    };
  }, [techStack]);

  const hasMore = visibleCount < techStack.length;
  const visibleTechs = techStack.slice(0, visibleCount);
  const moreLabel = `[+${techStack.length - visibleCount} more...]`;

  return (
    <div className="relative">
      <div className="flex items-center gap-2">
        <div
          ref={containerRef}
          className="flex-1 min-w-0 flex flex-nowrap gap-2 content-start overflow-hidden"
        >
          {visibleTechs.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 border border-[#c9a77c]/40 font-mono text-[clamp(0.6rem,0.8vw,0.7rem)] text-[#c9a77c]/80 whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>
        {hasMore && (
          <button
            ref={moreButtonRef}
            onClick={(e) => {
              e.stopPropagation();
              onMore();
            }}
            className="px-2 py-1 border border-[#c9a77c]/30 font-mono text-[clamp(0.6rem,0.85vw,0.75rem)] text-[#c9a77c]/60 hover:text-[#c9a77c] whitespace-nowrap"
          >
            {moreLabel}
          </button>
        )}
      </div>
      <div className="absolute left-0 top-0 h-0 overflow-hidden opacity-0 pointer-events-none">
        <div className="flex flex-nowrap gap-2">
          {techStack.map((tech, idx) => (
            <span
              key={`${tech}-${idx}`}
              ref={(el) => {
                itemRefs.current[idx] = el;
              }}
              className="px-2 py-1 border border-[#c9a77c]/40 font-mono text-[clamp(0.6rem,0.8vw,0.7rem)] text-[#c9a77c]/80 whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function KeyContributions({
  contributions,
  onMore,
}: {
  contributions: string[];
  onMore: () => void;
}) {
  const maxLines = 5;
  const visibleItems = useMemo(
    () => contributions.slice(0, maxLines),
    [contributions]
  );

  return (
    <>
      <div className="flex-1 min-h-0 flex flex-col">
        <ul className="space-y-1 md:space-y-1.5">
          {visibleItems.map((contribution, idx) => (
            <li
              key={idx}
              className="text-[clamp(0.6rem,0.85vw,0.75rem)] font-mono text-[#c9a77c]/70 flex items-start gap-2 leading-tight"
            >
              <span className="text-[#c9a77c] flex-shrink-0">&gt;</span>
              <span className="flex-1 line-clamp-1">{contribution}</span>
            </li>
          ))}
        </ul>
        {contributions.length > maxLines && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onMore();
            }}
            className="mt-2 text-[clamp(0.6rem,0.85vw,0.75rem)] font-mono text-[#c9a77c]/60 hover:text-[#c9a77c] border border-[#c9a77c]/30 px-2 py-1 self-start"
          >
            [+{contributions.length - maxLines} more...]
          </button>
        )}
      </div>
    </>
  );
}

export function ProjectsSection({ onProjectClick }: ProjectsSectionProps) {
  const scrollToProject = (projectIndex: number) => {
    const wrapper = document.querySelector(".horizontal-scroll-wrapper");
    if (wrapper) {
      // First panel + project panels (projectIndex + 1 because first panel is overview)
      wrapper.scrollTo({
        left: (projectIndex + 2) * window.innerWidth, // +2 because: hero(0) + projects overview(1) + project index
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="projects" className="section-panel flex">
      {/* Header Panel */}
      <div className="h-screen py-20 pb-24 bg-black w-screen flex-shrink-0 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6 w-full text-center section-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-[#c9a77c]/60 font-mono text-[clamp(0.65rem,1vw,0.75rem)] mb-2 tracking-widest">
              [ PORTFOLIO ]
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.75rem)] mb-4 font-mono text-[#c9a77c] retro-text">
              &gt; PROJECTS_
            </h2>
            <p className="text-[clamp(0.85rem,1.4vw,1.1rem)] text-[#c9a77c]/60 font-mono mb-8">
              $ ls -la ~/projects/
            </p>

            <div className="border-2 border-[#c9a77c]/30 p-6 md:p-8 lg:p-12 retro-box mb-8">
              <div className="text-[#c9a77c]/80 font-mono text-[clamp(0.75rem,1.2vw,0.95rem)] mb-6">
                &gt; Total: {projects.length} projects
                <br />
                &gt; Tech Stack: React, TypeScript, Node.js, etc.
                <br />
                &gt; Status: Production Ready
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {projects.map((project, index) => (
                  <button
                    key={project.id}
                    onClick={() => scrollToProject(index)}
                    className="border border-[#c9a77c]/40 p-3 md:p-4 hover:border-[#c9a77c] hover:bg-[#c9a77c]/5 transition-all cursor-pointer group retro-project-card"
                  >
                    <div className="text-[#c9a77c]/60 group-hover:text-[#c9a77c] font-mono text-[clamp(0.65rem,1vw,0.75rem)] mb-1 transition-colors">
                      [{String(index + 1).padStart(2, "0")}]
                    </div>
                    <div className="text-[#c9a77c] group-hover:text-shadow-glow font-mono text-[clamp(0.7rem,1vw,0.85rem)] truncate transition-all">
                      {project.title.split(" ")[0]}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="text-[#c9a77c]/40 font-mono text-[clamp(0.65rem,1vw,0.8rem)]">
              [CLICK projects above or SCROLL_RIGHT to view details →]
            </div>
          </motion.div>
        </div>
      </div>

      {/* Project Detail Panels */}
      {projects.map((project, index) => (
        <div
          key={project.id}
          className="h-screen py-[clamp(48px,6vh,80px)] pb-[clamp(48px,6vh,80px)] bg-black w-screen flex-shrink-0 flex items-center justify-center px-[0px]"
        >
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 w-full h-full flex items-center section-content">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full flex flex-col h-[calc(100vh-10rem)] md:h-[calc(100vh-11rem)]"
            >
              {/* Header */}
              <div className="mb-[clamp(0.75rem,2vh,1.5rem)] flex-shrink-0">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-[#c9a77c]/60 font-mono text-[clamp(0.65rem,0.9vw,0.75rem)]">
                    [PROJECT_{String(index + 1).padStart(2, "0")} /{" "}
                    {projects.length}]
                  </div>
                  <div className="text-[#c9a77c]/40 font-mono text-[clamp(0.65rem,0.9vw,0.75rem)] hidden md:block">
                    {index < projects.length - 1
                      ? "[SCROLL_RIGHT for next →]"
                      : "[END - SCROLL for contact →]"}
                  </div>
                </div>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-[clamp(1.15rem,2vw,1.8rem)] font-mono text-[#c9a77c] retro-text">
                    &gt; {project.title}_
                  </h3>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[clamp(0.6rem,0.85vw,0.75rem)] font-mono text-[#c9a77c]/60 hover:text-[#c9a77c] border border-[#c9a77c]/30 px-2 py-1"
                      >
                        [GITHUB]
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[clamp(0.6rem,0.85vw,0.75rem)] font-mono text-[#c9a77c]/60 hover:text-[#c9a77c] border border-[#c9a77c]/30 px-2 py-1"
                      >
                        [LIVE]
                      </a>
                    )}
                  </div>
                </div>
                <div className="text-[clamp(0.7rem,1vw,0.9rem)] font-mono text-[#c9a77c]/80">
                  {project.role} • {project.teamSize} • {project.period}
                </div>
              </div>

              {/* Mobile: Simplified Layout */}
              <div className="lg:hidden flex-1 flex flex-col gap-3 justify-center overflow-hidden">
                {/* Image */}
                <div
                  className="relative overflow-hidden border-2 border-[#c9a77c]/30 transition-all cursor-pointer retro-card group flex-shrink-0"
                  onClick={() => onProjectClick(project)}
                >
                  <div className="aspect-video relative">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                    />
                    <div className="absolute inset-0 scanlines opacity-20" />
                    <div className="absolute inset-0 bg-[#c9a77c]/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="text-[#c9a77c] font-mono text-[clamp(0.7rem,1vw,0.85rem)] border-2 border-[#c9a77c] px-3 py-2 bg-black flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" />[ OPEN_DETAILS ]
                      </div>
                    </div>
                  </div>
                </div>

                {/* Overview */}
                <div className="border-2 border-[#c9a77c]/30 p-[clamp(0.5rem,1vw,0.75rem)] flex-shrink-0">
                  <div className="text-[clamp(0.65rem,0.9vw,0.75rem)] font-mono text-[#c9a77c] mb-2">
                    [OVERVIEW]
                  </div>
                  <p className="text-[clamp(0.65rem,0.9vw,0.75rem)] font-mono text-[#c9a77c]/70 leading-relaxed line-clamp-2">
                    {project.overview}
                  </p>
                </div>

                {/* Tech Stack - Compact */}
                <div className="border-2 border-[#c9a77c]/30 p-[clamp(0.5rem,1vw,0.75rem)] flex-shrink-0">
                  <div className="flex items-center gap-2 mb-2">
                    <Code className="w-3.5 h-3.5 text-[#c9a77c]" />
                    <div className="text-[clamp(0.65rem,0.9vw,0.75rem)] font-mono text-[#c9a77c]">
                      [TECH_STACK]
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 border border-[#c9a77c]/40 font-mono text-[clamp(0.55rem,0.8vw,0.65rem)] text-[#c9a77c]/80"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="px-2 py-0.5 font-mono text-[clamp(0.55rem,0.8vw,0.65rem)] text-[#c9a77c]/60">
                        +{project.techStack.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => onProjectClick(project)}
                  className="w-full px-4 py-3 bg-[#c9a77c] text-black font-mono text-[clamp(0.7rem,1vw,0.85rem)] border-2 border-[#c9a77c] hover:bg-transparent hover:text-[#c9a77c] transition-all duration-300 retro-button flex-shrink-0"
                >
                  [ VIEW_FULL_DETAILS ]
                </button>

                {/* Navigation Hint */}
                <div className="text-center text-[#c9a77c]/40 font-mono text-[clamp(0.6rem,0.9vw,0.7rem)] flex-shrink-0">
                  {index < projects.length - 1
                    ? "[SWIPE for next project →]"
                    : "[SWIPE for contact →]"}
                </div>
              </div>

              {/* Desktop: Full Layout */}
              <div className="hidden lg:grid flex-1 grid-cols-2 gap-[clamp(0.75rem,1.5vw,1.5rem)] overflow-hidden">
                {/* Left: Image & Tech Stack */}
                <div className="flex flex-col gap-3 md:gap-4 h-full overflow-hidden">
                  <div
                    className="relative overflow-hidden border-2 border-[#c9a77c]/30 transition-all cursor-pointer retro-card group flex-shrink-0"
                    onClick={() => onProjectClick(project)}
                  >
                    <div className="aspect-video relative">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                      />
                      <div className="absolute inset-0 scanlines opacity-20" />
                      <div className="absolute inset-0 bg-[#c9a77c]/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="text-[#c9a77c] font-mono text-[clamp(0.7rem,1vw,0.9rem)] border-2 border-[#c9a77c] px-3 md:px-4 py-2 bg-black flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" />[ OPEN_DETAILS ]
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-2 border-[#c9a77c]/30 p-[clamp(0.5rem,1vw,0.75rem)] md:p-[clamp(0.6rem,1.2vw,0.9rem)] flex-1 overflow-hidden flex flex-col">
                    <div className="flex items-center gap-2 mb-[clamp(0.2rem,0.8vh,0.4rem)] flex-shrink-0">
                      <Code className="w-4 h-4 text-[#c9a77c]" />
                      <div className="text-[clamp(0.65rem,0.9vw,0.8rem)] font-mono text-[#c9a77c]">
                        [TECH_STACK]
                      </div>
                    </div>
                    <TechStackRow
                      techStack={project.techStack}
                      onMore={() => onProjectClick(project)}
                    />
                  </div>
                </div>

                {/* Right: Details */}
                <div className="flex flex-col gap-3 md:gap-4 h-full overflow-hidden">
                  <div className="border-2 border-[#c9a77c]/30 p-[clamp(0.5rem,1vw,0.75rem)] md:p-[clamp(0.6rem,1.2vw,0.9rem)] flex-shrink-0 min-h-[clamp(5.5rem,15.1vh,7.5rem)] max-h-[clamp(5.5rem,15.1vh,7.5rem)]">
                    <div className="text-[clamp(0.65rem,0.9vw,0.8rem)] font-mono text-[#c9a77c] mb-[clamp(0.2rem,0.8vh,0.4rem)]">
                      [OVERVIEW]
                    </div>
                    <p className="text-[clamp(0.6rem,0.85vw,0.75rem)] font-mono text-[#c9a77c]/70 leading-relaxed line-clamp-3">
                      {project.overview}
                    </p>
                  </div>

                  <div className="border-2 border-[#c9a77c]/30 overflow-hidden flex flex-col relative p-[clamp(0.5rem,1vw,0.75rem)] md:p-[clamp(0.6rem,1.2vw,0.9rem)] min-h-[clamp(9rem,24.9vh,12.5rem)] max-h-[clamp(9rem,24.9vh,12.5rem)]">
                    <div className="text-[clamp(0.65rem,0.9vw,0.8rem)] font-mono text-[#c9a77c] mb-[clamp(0.2rem,0.8vh,0.4rem)] flex-shrink-0">
                      [KEY_CONTRIBUTIONS]
                    </div>
                    <KeyContributions
                      contributions={project.contributions}
                      onMore={() => onProjectClick(project)}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3 md:gap-4 flex-shrink-0">
                    <div className="border-2 border-[#c9a77c]/50 p-[clamp(0.5rem,1vw,0.75rem)] md:p-[clamp(0.6rem,1.2vw,0.9rem)]">
                      <div className="text-[clamp(0.65rem,0.9vw,0.8rem)] font-mono text-[#c9a77c] mb-[clamp(0.2rem,0.8vh,0.4rem)]">
                        [CHALLENGES]
                      </div>
                      <div className="text-[clamp(0.6rem,0.85vw,0.75rem)] font-mono text-[#c9a77c]/60">
                        {project.problems.length} issues solved
                      </div>
                    </div>
                    <div className="border-2 border-[#c9a77c]/50 p-[clamp(0.5rem,1vw,0.75rem)] md:p-[clamp(0.6rem,1.2vw,0.9rem)]">
                      <div className="text-[clamp(0.65rem,0.9vw,0.8rem)] font-mono text-[#c9a77c] mb-[clamp(0.2rem,0.8vh,0.4rem)]">
                        [SOLUTIONS]
                      </div>
                      <div className="text-[clamp(0.6rem,0.85vw,0.75rem)] font-mono text-[#c9a77c]/60">
                        {project.solutions.length} implemented
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop: Footer Action */}
              <div className="hidden lg:block mt-[clamp(0.75rem,2vh,1.5rem)] flex-shrink-0">
                <button
                  onClick={() => onProjectClick(project)}
                  className="w-full px-4 py-2 md:py-3 bg-[#c9a77c] text-black font-mono text-[clamp(0.7rem,1vw,0.9rem)] border-2 border-[#c9a77c] hover:bg-transparent hover:text-[#c9a77c] transition-all duration-300 retro-button"
                >
                  [ VIEW_FULL_DETAILS ]
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      ))}

      <style>{`
        .retro-text {
          text-shadow:
            0 0 10px rgba(201, 167, 124, 0.5),
            0 0 20px rgba(201, 167, 124, 0.3);
        }

        .retro-card {
          box-shadow:
            4px 4px 0 rgba(201, 167, 124, 0.2);
          transition: all 0.3s;
        }

        .retro-card:hover {
          transform: translate(-2px, -2px);
          box-shadow:
            4px 4px 0 rgba(201, 167, 124, 0.3);
        }

        .retro-box {
          box-shadow:
            4px 4px 0 rgba(201, 167, 124, 0.2);
        }

        .retro-project-card {
          box-shadow:
            2px 2px 0 rgba(201, 167, 124, 0.2);
          transition: all 0.3s;
        }

        .retro-project-card:hover {
          transform: translate(-1px, -1px);
          box-shadow:
            3px 3px 0 rgba(201, 167, 124, 0.3);
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

        .scanlines {
          background: linear-gradient(
            transparent 50%,
            rgba(201, 167, 124, 0.05) 50%
          );
          background-size: 100% 4px;
          pointer-events: none;
        }

        .text-shadow-glow {
          text-shadow:
            0 0 10px rgba(201, 167, 124, 0.8);
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(201, 167, 124, 0.4);
          border: 1px solid rgba(201, 167, 124, 0.6);
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(201, 167, 124, 0.6);
        }
      `}</style>
    </section>
  );
}
