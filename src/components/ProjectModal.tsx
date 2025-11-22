'use client';

import { useEffect, useState } from 'react';
import { FaGithub, FaTimes, FaExternalLinkAlt } from 'react-icons/fa';
import { Project } from '@/types/project';
import ImageCarousel from './ImageCarousel';
import ImageModal from './ImageModal';
import styles from './ProjectModal.module.css';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

// 프로젝트 상세 정보를 보여주는 모달 컴포넌트
export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  // 이미지 모달 상태
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // 이미지 클릭 핸들러
  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setIsImageModalOpen(true);
  };

  // 이미지 모달 닫기
  const handleCloseImageModal = () => {
    setIsImageModalOpen(false);
  };

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !isImageModalOpen) {
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
  }, [isOpen, isImageModalOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {/* 모달 헤더 */}
        <div className={styles.modalHeader}>
          {/* 닫기 버튼 */}
          <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
            <FaTimes />
          </button>
          <h2 className={styles.modalTitle}>{project.title}</h2>
          {project.period && <p className={styles.period}>{project.period}</p>}
        </div>

        {/* 모달 바디 */}
        <div className={styles.modalBody}>
          {/* 프로젝트 이미지 캐러셀 */}
          {project.detailImages && project.detailImages.length > 0 && (
            <div style={{ marginBottom: '2rem' }}>
              <ImageCarousel images={project.detailImages} alt={project.title} onImageClick={handleImageClick} />
            </div>
          )}

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
              <p className={styles.description}>{project.detailedDescription}</p>
            </div>
          )}

          {/* 주요 기여 및 담당 업무 */}
          {project.contributions && project.contributions.length > 0 && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>
                주요 기여 및 담당 업무
                {project.contributionRate && (
                  <span className={styles.contributionBadge}>{project.contributionRate}</span>
                )}
              </h3>
              <ul className={styles.list}>
                {project.contributions.map((contribution, index) => (
                  <li key={index} className={styles.listItem}>
                    {contribution}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 기술적 도전과제 및 해결방안 */}
          {project.challenges && project.challenges.length > 0 && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>기술적 도전과제 및 해결방안</h3>
              <div className={styles.challengesList}>
                {project.challenges.map((challenge, index) => (
                  <div key={index} className={styles.challengeItem}>
                    <div className={styles.challengeProblem}>
                      <strong className={styles.challengeLabel}>🚨 문제:</strong>
                      <p className={styles.challengeText}>{challenge.problem}</p>
                    </div>
                    <div className={styles.challengeSolution}>
                      <strong className={styles.challengeLabel}>✅ 해결:</strong>
                      <p className={styles.challengeText}>{challenge.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 링크 버튼들 */}
          <div className={styles.links}>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
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

      {/* 이미지 전체화면 모달 */}
      {project.detailImages && project.detailImages.length > 0 && (
        <ImageModal
          images={project.detailImages}
          alt={project.title}
          isOpen={isImageModalOpen}
          onClose={handleCloseImageModal}
          initialIndex={selectedImageIndex}
        />
      )}
    </div>
  );
}
