'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './ImageCarousel.module.css';

interface ImageCarouselProps {
  images: string[];
  alt: string;
  onImageClick?: (index: number) => void;
  initialIndex?: number;
  className?: string;
  // 전체 화면 모드 여부
  fullscreen?: boolean;
}

/**
 * 재사용 가능한 이미지 캐러셀 컴포넌트
 * - 좌우 버튼으로 이미지 전환
 * - 인디케이터(dots)로 현재 위치 표시 및 이동
 * - 키보드 화살표 키로 제어
 * - 이미지 카운터 표시
 */
export default function ImageCarousel({
  images,
  alt,
  onImageClick,
  initialIndex = 0,
  className = '',
  fullscreen = false,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // initialIndex가 변경되면 현재 인덱스 업데이트
  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  // 이전 이미지로 이동
  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // 다음 이미지로 이동
  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // 특정 이미지로 이동
  const handleDotClick = (index: number, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex(index);
  };

  // 이미지 클릭 핸들러
  const handleImageClick = () => {
    if (onImageClick) {
      onImageClick(currentIndex);
    }
  };

  // 이미지가 없으면 렌더링하지 않음
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className={`${styles.carouselContainer} ${className}`}>
      {/* 캐러셀 래퍼 */}
      <div
        className={`${styles.carouselWrapper} ${fullscreen ? styles.fullscreen : ''}`}
        onClick={handleImageClick}
        style={{ cursor: onImageClick ? 'pointer' : 'default' }}
      >
        {/* 이미지 트랙 */}
        <div
          className={styles.carouselTrack}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((img, index) => {
            // GIF 파일인지 확인 (애니메이션 이미지는 최적화 비활성화)
            const isGif = img.toLowerCase().endsWith('.gif');

            return (
              <div key={index} className={styles.carouselSlide}>
                <Image
                  src={img}
                  alt={`${alt} - 이미지 ${index + 1}`}
                  width={fullscreen ? 1200 : 800}
                  height={fullscreen ? 675 : 450}
                  className={styles.carouselImage}
                  style={{ objectFit: fullscreen ? 'contain' : 'cover' }}
                  priority={index === 0}
                  unoptimized={isGif}
                />
              </div>
            );
          })}
        </div>

        {/* 좌우 네비게이션 버튼 */}
        {images.length > 1 && (
          <>
            <button
              className={`${styles.carouselButton} ${styles.carouselButtonPrev}`}
              onClick={handlePrev}
              aria-label="이전 이미지"
            >
              <FaChevronLeft />
            </button>
            <button
              className={`${styles.carouselButton} ${styles.carouselButtonNext}`}
              onClick={handleNext}
              aria-label="다음 이미지"
            >
              <FaChevronRight />
            </button>
          </>
        )}

        {/* 이미지 카운터 */}
        {images.length > 1 && (
          <div className={styles.carouselCounter}>
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* 인디케이터 (dots) */}
      {images.length > 1 && (
        <div className={styles.carouselIndicators}>
          {images.map((_, index) => (
            <button
              key={index}
              className={`${styles.carouselDot} ${index === currentIndex ? styles.carouselDotActive : ''}`}
              onClick={(e) => handleDotClick(index, e)}
              aria-label={`이미지 ${index + 1}로 이동`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
