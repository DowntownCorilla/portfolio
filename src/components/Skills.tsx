import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiFigma,
  SiGit,
  SiNodedotjs,
} from 'react-icons/si';
import styles from './Skills.module.css';

// Skills 섹션 - 기술 스택 표시
export default function Skills() {
  // 기술 스택 데이터
  const skills = [
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
    { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}>My Skills</h2>

        {/* 스킬 그리드 */}
        <div className={styles.grid}>
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className={styles.skillCard}
              >
                <div className={styles.skillContent}>
                  {/* 아이콘 */}
                  <Icon 
                    className={styles.icon}
                    style={{ color: skill.color }}
                  />
                  {/* 스킬 이름 */}
                  <span className={styles.skillName}>
                    {skill.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
