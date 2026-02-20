"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Users,
  Code,
  AlertCircle,
  CheckCircle,
  Calendar,
  Github,
  ExternalLink,
} from "lucide-react";
import { Project } from "../types/types";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative bg-black rounded-none max-w-4xl w-full max-h-[90vh] overflow-hidden border-2 border-[#c9a77c] shadow-2xl retro-modal"
        >
          <button
            onClick={onClose}
            className="absolute top-2 md:top-4 right-2 md:right-4 z-10 p-2 bg-black border border-[#c9a77c] hover:bg-[#c9a77c] hover:text-black transition-colors font-mono"
          >
            <X className="w-4 h-4 md:w-5 md:h-5" />
          </button>

          <div className="overflow-y-auto max-h-[90vh] custom-scrollbar">
            <div className="relative h-48 md:h-64 lg:h-80 overflow-hidden">
              <img
                src={project.screenshot}
                alt={project.title}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 scanlines opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8">
                <div className="text-[#c9a77c]/60 font-mono text-xs mb-2">
                  [PROJECT_DETAILS]
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl mb-2 font-mono text-[#c9a77c] retro-text">
                  &gt; {project.title}_
                </h2>
                <p className="text-sm md:text-base lg:text-lg font-mono text-[#c9a77c]/80">
                  {project.role}
                </p>
              </div>
            </div>

            <div className="p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6 lg:space-y-8">
              <div className="grid grid-cols-1 gap-4 md:gap-6">
                <div className="p-3 md:p-4 bg-black border-2 border-[#c9a77c]/30">
                  <div className="flex items-center gap-2 mb-2 md:mb-3">
                    <Calendar className="w-4 h-4 md:w-5 md:h-5 text-[#c9a77c]" />
                    <h3 className="text-sm md:text-base font-mono text-[#c9a77c]">
                      [DURATION]
                    </h3>
                  </div>
                  <p className="font-mono text-xs md:text-sm text-[#c9a77c]/80">
                    {project.period}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 md:p-4 bg-black border-2 border-[#c9a77c]/30">
                    <div className="flex items-center gap-2 mb-2 md:mb-3">
                      <Users className="w-4 h-4 md:w-5 md:h-5 text-[#c9a77c]" />
                      <h3 className="text-sm md:text-base font-mono text-[#c9a77c]">
                        [TEAM_SIZE]
                      </h3>
                    </div>
                    <p className="font-mono text-xs md:text-sm text-[#c9a77c]/80">
                      {project.teamSize}
                    </p>
                  </div>

                  <div className="p-3 md:p-4 bg-black border-2 border-[#c9a77c]/30">
                    <div className="flex items-center gap-2 mb-2 md:mb-3">
                      <Code className="w-4 h-4 md:w-5 md:h-5 text-[#c9a77c]" />
                      <h3 className="text-sm md:text-base font-mono text-[#c9a77c]">
                        [TECH_STACK]
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 border border-[#c9a77c]/40 font-mono text-xs text-[#c9a77c]/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {(project.github || project.liveUrl) && (
                  <div className="flex flex-col sm:flex-row gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-black border-2 border-[#c9a77c]/50 hover:bg-[#c9a77c]/10 transition-colors font-mono text-sm text-[#c9a77c]"
                      >
                        <Github className="w-4 h-4" />
                        [VIEW_GITHUB]
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-black border-2 border-[#c9a77c]/50 hover:bg-[#c9a77c]/10 transition-colors font-mono text-sm text-[#c9a77c]"
                      >
                        <ExternalLink className="w-4 h-4" />
                        [VISIT_SITE]
                      </a>
                    )}
                  </div>
                )}
              </div>

              <div>
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-mono text-[#c9a77c]">
                  [OVERVIEW]
                </h3>
                <p className="font-mono text-xs md:text-sm text-[#c9a77c]/80 leading-relaxed">
                  {project.overview}
                </p>
              </div>

              <div>
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-mono text-[#c9a77c]">
                  [CONTRIBUTIONS]
                </h3>
                <ul className="space-y-2">
                  {project.contributions.map((contribution, index) => (
                    <li key={index} className="flex items-start gap-2 md:gap-3">
                      <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-[#c9a77c] mt-0.5 flex-shrink-0" />
                      <span className="font-mono text-xs md:text-sm text-[#c9a77c]/80">
                        {contribution}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg md:text-xl mb-4 md:mb-6 font-mono text-[#c9a77c]">
                  [PROBLEMS & SOLUTIONS]
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {(project.problems || []).map((problem, index) => {
                    const solution = project.solutions?.[index] ?? "";
                    return (
                      <div
                        key={index}
                        className="problem-solution-card overflow-hidden"
                      >
                        <button
                          onClick={() => toggleExpand(index)}
                          className="w-full p-4 md:p-5 text-left transition-all duration-300 group problem-section"
                        >
                          <div className="flex items-start gap-3 md:gap-4">
                            <div className="problem-icon-wrapper flex-shrink-0">
                              <AlertCircle className="w-5 h-5 md:w-6 md:h-6" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <div className="problem-label font-mono text-xs md:text-sm">
                                  [PROBLEM_{String(index + 1).padStart(2, "0")}]
                                </div>
                                <div className="expand-indicator font-mono text-sm md:text-base">
                                  {expandedIndex === index ? "[ ▼ ]" : "[ ▶ ]"}
                                </div>
                              </div>
                              <p className="problem-text font-mono text-sm md:text-base leading-relaxed">
                                &gt; {problem}
                              </p>
                            </div>
                          </div>
                        </button>
                        <AnimatePresence>
                          {expandedIndex === index && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{
                                duration: 0.4,
                                ease: [0.4, 0, 0.2, 1],
                              }}
                              className="solution-section overflow-hidden"
                            >
                              <div className="solution-divider" />
                              <div className="p-4 md:p-5 solution-content">
                                <div className="flex items-start gap-3 md:gap-4">
                                  <div className="solution-icon-wrapper flex-shrink-0">
                                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6" />
                                  </div>
                                  <div>
                                    <div className="solution-label font-mono text-xs md:text-sm mb-2">
                                      [SOLUTION_
                                      {String(index + 1).padStart(2, "0")}]
                                    </div>
                                    <p className="solution-text font-mono text-sm md:text-base leading-relaxed">
                                      ✓ {solution}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <style>{`
            .custom-scrollbar::-webkit-scrollbar {
              width: 8px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              background: rgba(0, 0, 0, 0.5);
              border-left: 1px solid rgba(201, 167, 124, 0.3);
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: rgba(201, 167, 124, 0.5);
              border: 1px solid rgba(201, 167, 124, 0.7);
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: rgba(201, 167, 124, 0.7);
            }

            .retro-text {
              text-shadow:
                0 0 10px rgba(201, 167, 124, 0.5);
            }

            .retro-modal {
              box-shadow:
                8px 8px 0 rgba(201, 167, 124, 0.3);
            }

            .scanlines {
              background: linear-gradient(
                transparent 50%,
                rgba(201, 167, 124, 0.05) 50%
              );
              background-size: 100% 4px;
              pointer-events: none;
            }

            .problem-solution-card {
              border: 2px solid rgba(201, 167, 124, 0.5);
              background: black;
            }

            .problem-section {
              background: rgba(201, 167, 124, 0.05);
            }

            .problem-section:hover {
              background: rgba(201, 167, 124, 0.1);
            }

            .problem-icon-wrapper {
              background: rgba(201, 167, 124, 0.1);
              padding: 4px;
              border-radius: 4px;
            }

            .problem-label {
              color: rgba(201, 167, 124, 0.6);
            }

            .expand-indicator {
              color: rgba(201, 167, 124, 0.6);
            }

            .problem-text {
              color: rgba(201, 167, 124, 0.8);
            }

            .solution-section {
              background: rgba(201, 167, 124, 0.05);
            }

            .solution-divider {
              border-top: 2px solid rgba(201, 167, 124, 0.3);
            }

            .solution-content {
              background: rgba(201, 167, 124, 0.05);
            }

            .solution-icon-wrapper {
              background: rgba(201, 167, 124, 0.1);
              padding: 4px;
              border-radius: 4px;
            }

            .solution-label {
              color: rgba(201, 167, 124, 0.6);
            }

            .solution-text {
              color: rgba(201, 167, 124, 0.8);
            }
          `}</style>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
