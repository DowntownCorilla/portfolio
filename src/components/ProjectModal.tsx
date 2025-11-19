'use client';

import { useEffect } from 'react';
import { FaGithub, FaTimes, FaExternalLinkAlt } from 'react-icons/fa';
import { Project } from '@/types/project';
import styles from './ProjectModal.module.css';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

// 프로젝트 상세 정보를 보여주는 모달 컴포넌트
export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // 모달이 열릴 때 body 스크롤 방지
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {/* 닫기 버튼 */}
        <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
          <FaTimes />
        </button>

        {/* 모달 헤더 */}
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>{project.title}</h2>
          {project.period && (
            <p className={styles.period}>{project.period}</p>
          )}
        </div>

        {/* 모달 바디 */}
        <div className={styles.modalBody}>
          {/* 프로젝트 메타 정보 */}
          <div className={styles.metaInfo}>
            {project.role && (
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>역할:</span>
                <span className={styles.metaValue}>{project.role}</span>
              </div>
            )}
            {project.teamSize && (
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>팀 규모:</span>
                <span className={styles.metaValue}>{project.teamSize}</span>
              </div>
            )}
          </div>

          {/* 기술 스택 */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>기술 스택</h3>
            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* 상세 설명 */}
          {project.detailedDescription && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>프로젝트 개요</h3>
              <p className={styles.description}>
                {project.detailedDescription}
              </p>
            </div>
          )}

          {/* 주요 기능 */}
          {project.features && project.features.length > 0 && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>주요 기능</h3>
              <ul className={styles.list}>
                {project.features.map((feature, index) => (
                  <li key={index} className={styles.listItem}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 기술적 도전과제 */}
          {project.challenges && project.challenges.length > 0 && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>기술적 도전과제 및 해결</h3>
              <ul className={styles.list}>
                {project.challenges.map((challenge, index) => (
                  <li key={index} className={styles.listItem}>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 링크 버튼들 */}
          <div className={styles.links}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkButton}
            >
              <FaGithub />
              <span>GitHub Repository</span>
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.linkButton} ${styles.liveButton}`}
              >
                <FaExternalLinkAlt />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

