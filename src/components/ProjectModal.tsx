"use client";

import { useEffect, useMemo, useState } from "react";
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
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";
import { Project } from "../types/types";
import { LiveNoticeModal } from "./LiveNoticeModal";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [liveNoticeOpen, setLiveNoticeOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);
  const [slideDirection, setSlideDirection] = useState(0);
  const gallery = project.gallery || [];
  const viewerImages = useMemo(() => {
    const images = [
      {
        src: project.screenshot,
        alt: project.title,
        caption: `${project.title} 대표 이미지`,
      },
      ...(project.gallery || []),
      ...(project.evidence || []),
    ];

    return images.reduce<typeof images>((unique, image) => {
      const duplicateIndex = unique.findIndex((item) => item.src === image.src);
      if (duplicateIndex >= 0) {
        unique[duplicateIndex] = image;
      } else {
        unique.push(image);
      }
      return unique;
    }, []);
  }, [project]);

  const getViewerIndex = (src: string) =>
    viewerImages.findIndex((image) => image.src === src);

  const openViewer = (index: number) => {
    if (index < 0) return;
    setSlideDirection(0);
    setGalleryIndex(index);
  };

  const showPreviousImage = () => {
    setSlideDirection(-1);
    setGalleryIndex((current) =>
      current === null
        ? null
        : (current - 1 + viewerImages.length) % viewerImages.length,
    );
  };

  const showNextImage = () => {
    setSlideDirection(1);
    setGalleryIndex((current) =>
      current === null ? null : (current + 1) % viewerImages.length,
    );
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    if (galleryIndex === null || viewerImages.length === 0) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setGalleryIndex(null);
      if (event.key === "ArrowLeft") {
        setSlideDirection(-1);
        setGalleryIndex((current) =>
          current === null
            ? null
            : (current - 1 + viewerImages.length) % viewerImages.length,
        );
      }
      if (event.key === "ArrowRight") {
        setSlideDirection(1);
        setGalleryIndex((current) =>
          current === null ? null : (current + 1) % viewerImages.length,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [galleryIndex, viewerImages.length]);

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
            aria-label="프로젝트 상세 닫기"
          >
            <X className="w-4 h-4 md:w-5 md:h-5" />
          </button>

          <div className="overflow-y-auto max-h-[90vh] custom-scrollbar">
            <button
              type="button"
              onClick={() => openViewer(0)}
              className="group relative block h-48 w-full cursor-zoom-in overflow-hidden border-b border-[#c9a77c]/30 bg-black md:h-64 lg:h-72"
              aria-label={`${project.title} 대표 이미지 크게 보기`}
            >
              <img
                src={project.screenshot}
                alt={project.title}
                className="h-full w-full object-contain object-center p-2 opacity-85 transition-opacity group-hover:opacity-100 md:p-4"
              />
              <div className="absolute inset-0 scanlines opacity-20" />
              <span className="absolute bottom-3 right-3 flex items-center gap-2 rounded-md bg-slate-950/85 px-3 py-2 font-mono text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                <Maximize2 className="h-4 w-4" /> 확대
              </span>
            </button>

            <div className="p-4 md:p-6 lg:px-8 lg:py-6 border-b-2 border-[#c9a77c]/30">
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

                {(project.github || project.liveUrl || project.liveNotice) && (
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
                    {project.liveNotice ? (
                      <button
                        onClick={() => setLiveNoticeOpen(true)}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-black border-2 border-[#c9a77c]/50 hover:bg-[#c9a77c]/10 transition-colors font-mono text-sm text-[#c9a77c]"
                      >
                        <ExternalLink className="w-4 h-4" />
                        [VISIT_SITE]
                      </button>
                    ) : project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-black border-2 border-[#c9a77c]/50 hover:bg-[#c9a77c]/10 transition-colors font-mono text-sm text-[#c9a77c]"
                      >
                        <ExternalLink className="w-4 h-4" />
                        [VISIT_SITE]
                      </a>
                    ) : null}
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

              {gallery.length > 0 && (
                <div>
                  <div className="mb-3 md:mb-4">
                    <h3 className="text-lg md:text-xl font-mono text-[#c9a77c]">
                      [PROJECT_ARTIFACTS]
                    </h3>
                    <p className="mt-1 font-mono text-xs text-[#c9a77c]/55">
                      이미지를 선택하면 크게 보고 좌우로 이동할 수 있습니다.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {gallery.map((item, index) => (
                      <figure
                        key={item.src}
                        className={
                          index === 0
                            ? "md:col-span-2 overflow-hidden border border-white/20 bg-[#f5f7fa]"
                            : "overflow-hidden border border-white/20 bg-[#f5f7fa]"
                        }
                      >
                        <button
                          type="button"
                          onClick={() => openViewer(getViewerIndex(item.src))}
                          className="group relative block w-full cursor-zoom-in bg-[#f5f7fa]"
                          aria-label={`${item.alt} 크게 보기`}
                        >
                          <img
                            src={item.src}
                            alt={item.alt}
                            className="w-full aspect-video object-contain object-center"
                          />
                          <span className="absolute right-3 top-3 flex items-center gap-2 rounded-md bg-slate-950/80 px-3 py-2 font-mono text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                            <Maximize2 className="h-4 w-4" /> 확대
                          </span>
                        </button>
                        <figcaption className="border-t border-white/10 bg-[#101010] p-3 font-mono text-xs leading-relaxed text-[#d8c2a5]">
                          {item.caption}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              )}

              {project.evidence && project.evidence.length > 0 && (
                <div>
                  <h3 className="text-lg md:text-xl mb-3 md:mb-4 font-mono text-[#c9a77c]">
                    [EVIDENCE]
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {project.evidence.map((item) => (
                      <figure
                        key={item.src}
                        className="overflow-hidden border-2 border-[#c9a77c]/30 bg-[#080808]"
                      >
                        <button
                          type="button"
                          onClick={() => openViewer(getViewerIndex(item.src))}
                          className="group relative block w-full cursor-zoom-in bg-white"
                          aria-label={`${item.alt} 크게 보기`}
                        >
                          <img
                            src={item.src}
                            alt={item.alt}
                            className="w-full aspect-[16/10] object-contain object-center"
                          />
                          <span className="absolute right-3 top-3 flex items-center gap-2 rounded-md bg-slate-950/80 px-3 py-2 font-mono text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                            <Maximize2 className="h-4 w-4" /> 확대
                          </span>
                        </button>
                        <figcaption className="p-3 font-mono text-xs leading-relaxed text-[#c9a77c]/75 border-t border-[#c9a77c]/20">
                          {item.caption}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              )}

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

        <AnimatePresence>
          {galleryIndex !== null && viewerImages[galleryIndex] && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[80] flex items-center justify-center bg-black/95 p-3 md:p-8"
              onClick={() => setGalleryIndex(null)}
            >
              <button
                type="button"
                onClick={() => setGalleryIndex(null)}
                className="absolute right-4 top-4 z-20 border border-[#c9a77c]/60 bg-black/80 p-2.5 text-[#c9a77c] shadow-[0_0_24px_rgba(201,167,124,0.12)] backdrop-blur transition-colors hover:bg-[#c9a77c] hover:text-black"
                aria-label="확대 이미지 닫기"
              >
                <X className="h-5 w-5" />
              </button>

              {viewerImages.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      showPreviousImage();
                    }}
                    className="absolute left-3 z-20 border border-[#c9a77c]/60 bg-black/80 p-2.5 text-[#c9a77c] shadow-[0_0_24px_rgba(201,167,124,0.12)] backdrop-blur transition-colors hover:bg-[#c9a77c] hover:text-black md:left-7"
                    aria-label="이전 이미지"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      showNextImage();
                    }}
                    className="absolute right-3 z-20 border border-[#c9a77c]/60 bg-black/80 p-2.5 text-[#c9a77c] shadow-[0_0_24px_rgba(201,167,124,0.12)] backdrop-blur transition-colors hover:bg-[#c9a77c] hover:text-black md:right-7"
                    aria-label="다음 이미지"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}

              <div className="pointer-events-none relative h-[calc(100vh-7rem)] w-[calc(100vw-5rem)] overflow-hidden md:h-[calc(100vh-8rem)] md:w-[calc(100vw-9rem)]">
                <AnimatePresence initial={false} mode="sync">
                  <motion.div
                    key={viewerImages[galleryIndex].src}
                    initial={{
                      x:
                        slideDirection > 0
                          ? "100%"
                          : slideDirection < 0
                            ? "-100%"
                            : 0,
                    }}
                    animate={{ x: 0 }}
                    exit={{
                      x: slideDirection > 0 ? "-100%" : "100%",
                    }}
                    transition={{ duration: 0.42, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <figure
                      className="pointer-events-auto flex max-h-full w-full max-w-6xl flex-col overflow-hidden border border-[#c9a77c]/40 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.55)]"
                      onClick={(event) => event.stopPropagation()}
                    >
                      <img
                        src={viewerImages[galleryIndex].src}
                        alt={viewerImages[galleryIndex].alt}
                        className="max-h-[calc(100vh-11rem)] w-full bg-white object-contain md:max-h-[calc(100vh-12rem)]"
                      />
                      <figcaption className="border-t border-[#c9a77c]/35 bg-[#080808] px-4 py-3 font-mono text-xs leading-relaxed text-[#c9a77c]/80 md:px-6">
                        <span className="mr-2 text-[#c9a77c]/45">[INFO]</span>
                        {viewerImages[galleryIndex].caption}
                      </figcaption>
                    </figure>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div
                className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-4 border border-[#c9a77c]/45 bg-black/85 px-4 py-2.5 shadow-[0_0_28px_rgba(201,167,124,0.1)] backdrop-blur md:bottom-5"
                onClick={(event) => event.stopPropagation()}
              >
                <span className="min-w-[4.5rem] whitespace-nowrap font-mono text-[0.65rem] tracking-[0.12em] text-[#c9a77c]/75">
                  [{String(galleryIndex + 1).padStart(2, "0")} / {String(viewerImages.length).padStart(2, "0")}]
                </span>
                <div className="flex items-center gap-2">
                  {viewerImages.map((image, index) => (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => {
                        if (index === galleryIndex) return;
                        setSlideDirection(index > galleryIndex ? 1 : -1);
                        setGalleryIndex(index);
                      }}
                      disabled={viewerImages.length === 1}
                      className={`h-1.5 transition-all ${
                        index === galleryIndex
                          ? "w-6 bg-[#c9a77c] shadow-[0_0_8px_rgba(201,167,124,0.55)]"
                          : "w-2 bg-[#c9a77c]/25 hover:bg-[#c9a77c]/55"
                      } ${viewerImages.length === 1 ? "cursor-default" : ""}`}
                      aria-label={`${index + 1}번째 이미지 보기`}
                      aria-current={
                        index === galleryIndex ? "true" : undefined
                      }
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <LiveNoticeModal
          open={liveNoticeOpen}
          message={project.liveNotice || ""}
          onClose={() => setLiveNoticeOpen(false)}
        />
      </div>
    </AnimatePresence>
  );
}
