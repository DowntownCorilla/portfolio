"use client";

import { useState, useRef, useEffect } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { ProjectModal } from "../components/ProjectModal";
import { SwipeHint } from "../components/SwipeHint";
import { Project } from "../types/types";

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const handleWheel = (e: WheelEvent) => {
      // 모달이 열려있으면 기본 스크롤 동작 허용
      if (selectedProject) return;

      e.preventDefault();
      // deltaY (상하 휠)와 deltaX (좌우 휠) 모두 좌우 스크롤로 변환
      wrapper.scrollLeft += e.deltaY + e.deltaX;
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProject) return;
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;

      e.preventDefault();
      const screenWidth = window.innerWidth;
      const currentIndex = Math.round(wrapper.scrollLeft / screenWidth);
      const direction = e.key === "ArrowRight" ? 1 : -1;
      const panels = wrapper.querySelectorAll(".section-panel").length;
      const maxIndex = Math.max(0, panels - 1);
      const targetIndex = Math.max(
        0,
        Math.min(currentIndex + direction, maxIndex),
      );

      wrapper.scrollTo({
        left: targetIndex * screenWidth,
        behavior: "smooth",
      });
    };

    let scrollTimeout: NodeJS.Timeout;
    const handleScrollEnd = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollLeft = wrapper.scrollLeft;
        const screenWidth = window.innerWidth;
        const nearestPanel = Math.round(scrollLeft / screenWidth);

        wrapper.scrollTo({
          left: nearestPanel * screenWidth,
          behavior: "smooth",
        });
      }, 50);
    };

    wrapper.addEventListener("wheel", handleWheel, { passive: false });
    wrapper.addEventListener("scroll", handleScrollEnd);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      wrapper.removeEventListener("wheel", handleWheel);
      wrapper.removeEventListener("scroll", handleScrollEnd);
      clearTimeout(scrollTimeout);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-black text-[#c9a77c] overflow-hidden">
      <Header />

      <div ref={wrapperRef} className="horizontal-scroll-wrapper">
        <div ref={containerRef} className="horizontal-scroll-container">
          <HeroSection />
          <ProjectsSection onProjectClick={setSelectedProject} />
          <ContactSection />
        </div>
      </div>

      <Footer />

      <SwipeHint />

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <style>{`
        body {
          overflow: hidden;
        }

        .horizontal-scroll-wrapper {
          height: 100vh;
          width: 100vw;
          overflow-x: auto;
          overflow-y: hidden;
          position: fixed;
          top: 0;
          left: 0;
        }

        .horizontal-scroll-wrapper::-webkit-scrollbar {
          height: 8px;
        }

        .horizontal-scroll-wrapper::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.5);
          border-top: 1px solid rgba(201, 167, 124, 0.3);
        }

        .horizontal-scroll-wrapper::-webkit-scrollbar-thumb {
          background: rgba(201, 167, 124, 0.5);
          border: 1px solid rgba(201, 167, 124, 0.7);
        }

        .horizontal-scroll-wrapper::-webkit-scrollbar-thumb:hover {
          background: rgba(201, 167, 124, 0.7);
        }

        .horizontal-scroll-container {
          display: flex;
          height: 100vh;
          width: max-content;
        }

        .section-panel {
          flex: 0 0 100vw;
          height: 100vh;
        }
      `}</style>
    </div>
  );
}

export default App;
