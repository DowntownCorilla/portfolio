'use client';

import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFigma,
  SiGit,
  SiPython,
  SiFastapi,
  SiDocker,
  SiAmazons3,
  SiGithub,
} from 'react-icons/si';
import { CgGirl } from 'react-icons/cg';
import { FaMasksTheater } from 'react-icons/fa6';
import { TbBeta } from 'react-icons/tb';

import LogoLoop from './LogoLoop';
import styles from './Skills.module.css';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// Skills 섹션 - 기술 스택 무한 루프 애니메이션
export default function Skills() {
  // 스크롤 애니메이션 훅 사용
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  // 기술 스택 데이터 - 각 기술의 공식 브랜드 색상 적용
  const skills = [
    { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'React Native', icon: SiReact, color: '#61DAFB' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Emotion', icon: CgGirl, color: '#D26AC2' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
    { name: 'Playwright', icon: FaMasksTheater, color: '#2EAD33' },
    { name: 'Beautiful Soup', icon: TbBeta, color: '#43B02A' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'AWS S3', icon: SiAmazons3, color: '#569A31' },
    { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
  ];

  // LogoLoop에 전달할 로고 데이터 변환
  const logoItems = skills.map((skill) => {
    const Icon = skill.icon;
    return {
      node: (
        <div className={styles.logoItem}>
          <Icon className={styles.logoIcon} style={{ color: skill.color }} />
          <span className={styles.logoName}>{skill.name}</span>
        </div>
      ),
      title: skill.name,
      ariaLabel: skill.name,
    };
  });

  return (
    <section id="skills" className={styles.skills} ref={elementRef}>
      <div className={styles.container}>
        <h2 className={`${styles.title} ${isVisible ? styles.fadeInUp : ''}`}>My Skills</h2>

        {/* react-bits LogoLoop 컴포넌트 사용 */}
        <div className={`${styles.logoWrapper} ${isVisible ? styles.fadeIn : ''}`}>
          <LogoLoop
            logos={logoItems}
            speed={60}
            direction="left"
            logoHeight={80}
            gap={32}
            pauseOnHover
            ariaLabel="기술 스택"
          />
        </div>
      </div>

      {/* 배경 그라디언트 효과 */}
      <div className={styles.backgroundGradient}></div>
    </section>
  );
}
