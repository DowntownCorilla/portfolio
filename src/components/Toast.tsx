'use client';

import { useEffect } from 'react';
import styles from './Toast.module.css';

// 토스트 알림 타입 정의
interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: () => void;
  duration?: number; // 자동으로 사라지는 시간 (밀리초)
}

// Toast 컴포넌트 - 메시지를 예쁘게 표시
export default function Toast({ message, type, onClose, duration = 5000 }: ToastProps) {
  // 일정 시간 후 자동으로 닫기
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    // 컴포넌트 언마운트 시 타이머 정리
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      <div className={styles.content}>
        {/* 아이콘 */}
        <div className={styles.icon}>
          {type === 'success' && '✓'}
          {type === 'error' && '✕'}
          {type === 'info' && 'ℹ'}
        </div>
        
        {/* 메시지 */}
        <p className={styles.message}>{message}</p>
        
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className={styles.closeButton}
          aria-label="Close notification"
        >
          ✕
        </button>
      </div>
      
      {/* 진행 바 */}
      <div className={styles.progressBar} style={{ animationDuration: `${duration}ms` }} />
    </div>
  );
}

