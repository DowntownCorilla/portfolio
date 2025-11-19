'use client';

import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import styles from './Header.module.css';

// 헤더 컴포넌트 - 네비게이션과 로고 포함
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 네비게이션 메뉴 항목들
  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          {/* 로고 - 코드 스타일 */}
          <button onClick={() => window.location.reload()} className={styles.logo}>
            <span className={styles.tagBracket}>&lt;</span>
            <span className={styles.logoText}>Corilla</span>
            {/* onClick={reload} 부분 - 호버 시 나타남 */}
            <span className={styles.hoverProps}>
              &nbsp;
              <span className={styles.propName}>onClick</span>
              <span className={styles.tagBracket}>=</span>
              <span className={styles.propValue}>
                {'{'}reload{'}'}
              </span>
            </span>
            {/* 닫는 태그 - 항상 표시 */}
            <span className={styles.tagBracket}>&nbsp;/&gt;</span>
          </button>

          {/* 데스크톱 메뉴 */}
          <div className={styles.desktopMenu}>
            {menuItems.map((item) => (
              <a key={item.name} href={item.href} className={styles.menuLink}>
                {item.name}
              </a>
            ))}
            <a href="#contact" className={styles.ctaButton}>
              Get In Touch
            </a>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button
            className={styles.mobileMenuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className={styles.mobileMenu}>
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={styles.mobileMenuLink}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a href="#contact" className={styles.mobileCtaButton} onClick={() => setIsMenuOpen(false)}>
              Get In Touch
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
