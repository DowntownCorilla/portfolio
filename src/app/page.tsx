import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import styles from './page.module.css';

// 메인 홈페이지 - 모든 섹션을 포함
export default function Home() {
  return (
    <div className={styles.main}>
      {/* 헤더 네비게이션 */}
      <Header />

      {/* 메인 컨텐츠 */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* 푸터 */}
      <Footer />
    </div>
  );
}
