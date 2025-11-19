import { FaGithub, FaLinkedin, FaDribbble } from 'react-icons/fa';
import styles from './Footer.module.css';

// Footer 컴포넌트
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* 저작권 */}
          <p className={styles.copyright}>
            © {currentYear} Corilla (이윤재). All rights reserved.
          </p>

          {/* 소셜 미디어 링크 */}
          <div className={styles.socialLinks}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub"
            >
              <FaGithub className={styles.socialIcon} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <FaLinkedin className={styles.socialIcon} />
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Dribbble"
            >
              <FaDribbble className={styles.socialIcon} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
