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

import styles from './Skills.module.css';

// Skills 섹션 - 기술 스택 무한 루프 애니메이션
export default function Skills() {
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

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}>My Skills</h2>

        {/* 무한 스크롤 로고 루프 */}
        <div className={styles.logoLoop}>
          {/* 첫 번째 세트 */}
          <div className={styles.logoTrack}>
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={`${skill.name}-1-${index}`} className={styles.logoItem}>
                  <Icon className={styles.logoIcon} style={{ color: skill.color }} />
                  <span className={styles.logoName}>{skill.name}</span>
                </div>
              );
            })}
            {/* 두 번째 세트 (무한 루프를 위한 복제) */}
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={`${skill.name}-2-${index}`} className={styles.logoItem}>
                  <Icon className={styles.logoIcon} style={{ color: skill.color }} />
                  <span className={styles.logoName}>{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
