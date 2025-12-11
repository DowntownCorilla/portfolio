// 스크롤 애니메이션을 위한 커스텀 훅
// Intersection Observer API를 활용하여 요소가 뷰포트에 들어올 때 애니메이션 트리거

import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number; // 0~1 사이 값, 얼마나 보일 때 트리거할지
  rootMargin?: string; // 뷰포트 마진 설정
  triggerOnce?: boolean; // 한 번만 트리거할지 여부
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const {
    threshold = 0.1, // 10% 보이면 트리거
    rootMargin = '0px 0px -100px 0px', // 하단에서 100px 전에 트리거
    triggerOnce = true, // 기본적으로 한 번만 실행
  } = options;

  const elementRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Intersection Observer 생성
    const observer = new IntersectionObserver(
      ([entry]) => {
        // 요소가 뷰포트에 들어오면
        if (entry.isIntersecting) {
          setIsVisible(true);
          // 한 번만 트리거하는 경우 observer 해제
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          // 반복 트리거인 경우 나갈 때도 처리
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    // 클린업
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { elementRef, isVisible };
}
