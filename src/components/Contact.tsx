'use client';

import { useState } from 'react';
import styles from './Contact.module.css';
import Toast from './Toast';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// 토스트 메시지 타입 정의
interface ToastMessage {
  message: string;
  type: 'success' | 'error' | 'info';
}

// Contact 섹션 - 연락 폼
export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<ToastMessage | null>(null);

  // 스크롤 애니메이션 훅 사용
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // API Route로 요청 전송
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // 성공 토스트 표시
        setToast({
          message: '메시지가 성공적으로 전송되었습니다! 곧 답변 드리겠습니다. 🎉',
          type: 'success',
        });
        // 폼 초기화
        setFormData({ fullName: '', email: '', message: '' });
      } else {
        // 실패 토스트 표시
        setToast({
          message: data.error || '메시지 전송에 실패했습니다. 다시 시도해주세요.',
          type: 'error',
        });
      }
    } catch (error) {
      console.error('전송 오류:', error);
      // 에러 토스트 표시
      setToast({
        message: '메시지 전송 중 오류가 발생했습니다. 네트워크 연결을 확인해주세요.',
        type: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* 토스트 알림 */}
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      <section id="contact" className={styles.contact} ref={elementRef}>
        <div className={styles.container}>
          <div className={`${styles.formWrapper} ${isVisible ? styles.visible : ''}`}>
            {/* 섹션 헤더 */}
            <div className={styles.header}>
              <h2 className={styles.title}>Get In Touch</h2>
              <p className={styles.subtitle}>
                함께 고민하고 해결해 나가는 과정을 좋아합니다.
                <br />
                재미있는 아이디어가 있거나 함께할 동료를 찾고 계시다면 편하게 연락 주세요.
                <br />
                보내주신 메시지는 24시간 이내에 확인하고 답변드리겠습니다.
              </p>
            </div>

            {/* 연락 폼 */}
            <form onSubmit={handleSubmit} className={styles.form}>
              {/* Full Name */}
              <div className={styles.formGroup}>
                <label htmlFor="fullName" className={styles.label}>
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  disabled={isSubmitting}
                  className={styles.input}
                />
              </div>

              {/* Email */}
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  disabled={isSubmitting}
                  className={styles.input}
                />
              </div>

              {/* Message */}
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  required
                  rows={6}
                  disabled={isSubmitting}
                  className={styles.textarea}
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
