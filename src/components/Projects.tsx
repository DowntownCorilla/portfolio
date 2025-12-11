'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import styles from './Projects.module.css';
import { projects } from '@/data/projects';
import { Project } from '@/types/project';
import ProjectModal from './ProjectModal';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// Projects 섹션 - 프로젝트 갤러리
// 프로젝트 데이터는 src/data/projects.ts에서 관리됩니다
export default function Projects() {
  // 모달 상태 관리
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 스크롤 애니메이션 훅 사용
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  // 프로젝트 카드 클릭 핸들러
  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // 모달 닫기 핸들러
  const handleCloseModal = () => {
    setIsModalOpen(false);
    // 애니메이션이 끝난 후 선택된 프로젝트 초기화
    setTimeout(() => setSelectedProject(null), 200);
  };

  return (
    <section id="projects" className={styles.projects} ref={elementRef}>
      <div className={styles.container}>
        <h2 className={`${styles.title} ${isVisible ? styles.fadeInUp : ''}`}>Featured Projects</h2>

        {/* 프로젝트 그리드 */}
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`${styles.projectCard} ${isVisible ? styles.fadeInUp : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
              onClick={() => handleProjectClick(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleProjectClick(project);
                }
              }}
            >
              {/* 프로젝트 이미지 */}
              <div className={styles.imageWrapper}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={styles.projectImage}
                  style={{ objectFit: 'contain' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className={styles.imageOverlay}></div>
              </div>

              {/* 프로젝트 정보 */}
              <div className={styles.content}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>

                {/* 기술 태그 */}
                <div className={styles.tags}>
                  {project.preTags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* GitHub 링크 */}
                <div className={styles.linkWrapper}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.githubLink}
                    onClick={(e) => e.stopPropagation()} // 카드 클릭 이벤트 전파 방지
                  >
                    <FaGithub className={styles.githubIcon} />
                    <span>GitHub Repository</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 프로젝트 상세 모달 */}
      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
}
