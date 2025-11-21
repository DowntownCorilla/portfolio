'use client';

import { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import ImageCarousel from './ImageCarousel';
import styles from './ImageModal.module.css';

interface ImageModalProps {
  images: string[];
  alt: string;
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

/**
 * 전체 화면 이미지 모달
 * - 클릭한 이미지를 크게 볼 수 있음
 * - 캐러셀로 다른 이미지 탐색 가능
 * - ESC 키 또는 닫기 버튼으로 닫기
 */
export default function ImageModal({
  images,
  alt,
  isOpen,
  onClose,
  initialIndex = 0,
}: ImageModalProps) {
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

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {/* 닫기 버튼 */}
        <button className={styles.closeButton} onClick={onClose} aria-label="닫기">
          <FaTimes />
        </button>

        {/* 이미지 캐러셀 */}
        <ImageCarousel
          images={images}
          alt={alt}
          initialIndex={initialIndex}
          fullscreen
        />
      </div>
    </div>
  );
}

