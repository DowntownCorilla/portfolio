'use client';

import Image from 'next/image';
import styles from './About.module.css';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// About Me 섹션 - 자기소개
export default function About() {
  // 스크롤 애니메이션 훅 사용
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="about" className={styles.about} ref={elementRef}>
      <div className={styles.container}>
        <h2 className={`${styles.title} ${isVisible ? styles.fadeInUp : ''}`}>About Me</h2>

        <div className={styles.grid}>
          {/* 프로필 이미지 */}
          <div className={`${styles.imageContainer} ${isVisible ? styles.scaleIn : ''}`}>
            <div className={styles.imageBackground}></div>
            <div className={styles.imageWrapper}>
              <Image src="/Corilla.png" alt="Corilla (이윤재) 프로필 사진" fill className={styles.profileImage} />
            </div>
          </div>

          {/* 설명 텍스트 */}
          <div className={`${styles.content} ${isVisible ? styles.fadeIn : ''}`}>
            <h3 className={styles.subtitle}>
              안녕하세요, 화면 뒤의 <span className={styles.highlight}>&apos;비즈니스 흐름&apos;</span>까지 설계하는
              개발자 <span className={styles.highlight}>이윤재</span>입니다.
            </h3>
            <p className={styles.description}>
              저는 예쁜 UI를 넘어, 실제 서비스가 작동하게 만드는{' '}
              <span className={styles.highlight}>&apos;데이터의 흐름&apos;</span>과{' '}
              <span className={styles.highlight}>&apos;운영 시스템&apos;</span>에 집중합니다. 사용자 서비스뿐만 아니라
              운영진을 위한 <span className={styles.highlight}>어드민(Admin) 시스템</span>을 직접 기획하고 개발하며,
              &quot;개발은 결국 비즈니스 문제를 해결하는 도구&quot;라는 것을 체득했습니다. 또한, 팀의 목표를 위해서라면
              어떤 난관이 있어도 <strong className={styles.highlight}>목표를 향해 나아가는 열정</strong>을 가지고
              있습니다. AI 도구를 활용한 빠른 프로토타이핑과 검증된 실행력으로, 아이디어를 가장 확실한
              &apos;결과물&apos;로 만들어내는 개발자가 되겠습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
