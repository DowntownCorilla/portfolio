import Image from 'next/image';
import styles from './About.module.css';

// About Me 섹션 - 자기소개
export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>

        <div className={styles.grid}>
          {/* 프로필 이미지 */}
          <div className={styles.imageContainer}>
            <div className={styles.imageBackground}></div>
            <div className={styles.imageWrapper}>
              <Image src="/Corilla.png" alt="Corilla (이윤재) 프로필 사진" fill className={styles.profileImage} />
            </div>
          </div>

          {/* 설명 텍스트 */}
          <div className={styles.content}>
            <h3 className={styles.subtitle}>
              안녕하세요, <span className={styles.highlight}>프론트엔드 개발자 Corilla (이윤재)</span> 입니다.
            </h3>
            <p className={styles.description}>
              저는 단순히 개발만 하는 것이 아니라, 사용자의 흐름을 기획하고, 필요한 기능을 스스로 정의하며, 그걸 실제
              서비스로 구현하는 과정 전체를 경험해온 개발자입니다. 사수가 없는 환경에서 기획·UI 설계·기능
              구현·테스트·운영을 모두 직접 해오며 &apos;어떻게 해야 이 서비스가 실제 사용자에게 문제 없이 동작할까&apos;
              를 가장 현실적으로 고민할 수 있었습니다. 이 과정에서 저는 바이브 코딩(Vibe Coding) 을 통해 아이디어를
              빠르게 프로토타입으로 만들고, 기능 개선과 반복 개발을 통해 서비스를 실제 운영 수준까지 끌어올렸습니다.
              특히 제가 개발한 프로젝트들은 모두 실제 사용자들을 목표로한 서비스였으며, 그 속에서 다음과 같은 복잡한
              문제들을 해결해내며 성장했습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
