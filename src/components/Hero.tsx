import Image from 'next/image';
import styles from './Hero.module.css';

// 히어로 섹션 - 메인 인트로 영역
export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* 왼쪽: 텍스트 컨텐츠 */}
          <div className={styles.content}>
            <h1 className={styles.title}>
              이윤재
              <br />
              <span className={styles.codeName}>(Corilla)</span>
            </h1>
            <h2 className={styles.subtitle}>Frontend Developer</h2>
            <p className={styles.description}>
              기획부터 프로토타입, 그리고 실제 서비스 운영까지,
              <br /> 직접 만들어내며 문제를 해결해온 실무형 프론트엔드 개발자입니다.
            </p>
            <div className={styles.buttons}>
              <a href="#projects" className={styles.primaryButton}>
                View My Work
              </a>
              <a href="#contact" className={styles.secondaryButton}>
                Get In Touch
              </a>
            </div>
          </div>

          {/* 오른쪽: 프로필 이미지 */}
          <div className={styles.imageWrapper}>
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
