'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

// 히어로 섹션 - 메인 인트로 영역
export default function Hero() {
  // 페이드인 애니메이션을 위한 상태
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // 컴포넌트 마운트 후 애니메이션 시작
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* 왼쪽: 텍스트 컨텐츠 */}
          <div className={`${styles.content} ${isLoaded ? styles.fadeIn : ''}`}>
            <h1 className={styles.title}>
              <span className={styles.fadeInUp} style={{ animationDelay: '0.1s' }}>
                이윤재
              </span>
              <br />
              <span className={`${styles.codeName} ${styles.fadeInUp}`} style={{ animationDelay: '0.3s' }}>
                (Corilla)
              </span>
            </h1>
            <h2 className={`${styles.subtitle} ${styles.fadeInUp}`} style={{ animationDelay: '0.5s' }}>
              Frontend Developer
            </h2>
            <p className={`${styles.description} ${styles.fadeInUp}`} style={{ animationDelay: '0.7s' }}>
              기획부터 프로토타입, 그리고 실제 서비스 운영까지,
              <br /> 직접 만들어내며 문제를 해결해온 실무형 프론트엔드 개발자입니다.
            </p>
            <div className={`${styles.buttons} ${styles.fadeInUp}`} style={{ animationDelay: '0.9s' }}>
              <a href="#projects" className={styles.primaryButton}>
                View My Work
              </a>
              <a href="#contact" className={styles.secondaryButton}>
                Get In Touch
              </a>
            </div>
          </div>

          {/* 오른쪽: 프로필 이미지 */}
          <div className={`${styles.imageWrapper} ${isLoaded ? styles.scaleIn : ''}`}>
            <div className={styles.imageContainer}>
              {/* 배경 원형 */}
              <div className={styles.imageBackground}></div>
              {/* 프로필 이미지 */}
              <div className={styles.imageInner}>
                <Image
                  src="/profile.png"
                  alt="Corilla (이윤재) 프로필 사진"
                  fill
                  className={styles.profileImage}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
