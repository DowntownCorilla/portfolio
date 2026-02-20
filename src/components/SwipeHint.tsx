"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export function SwipeHint() {
  const [show, setShow] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // 모바일 디바이스 체크
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;

    // 3초 후 힌트 표시
    const showTimer = setTimeout(() => {
      if (!hasInteracted) {
        setShow(true);
      }
    }, 3000);

    // 10초 후 자동으로 숨김
    const hideTimer = setTimeout(() => {
      setShow(false);
    }, 13000);

    // 사용자 인터랙션 감지
    const handleInteraction = () => {
      setHasInteracted(true);
      setShow(false);
    };

    window.addEventListener('scroll', handleInteraction, { passive: true });
    window.addEventListener('touchstart', handleInteraction, { passive: true });
    window.addEventListener('wheel', handleInteraction, { passive: true });

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('wheel', handleInteraction);
    };
  }, [hasInteracted]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.5 }}
          className="fixed right-4 bottom-24 z-40 md:hidden pointer-events-none"
        >
          <div className="bg-black/90 border-2 border-[#c9a77c]/50 px-4 py-3 rounded-none backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="font-mono text-xs text-[#c9a77c]">
                [ SWIPE RIGHT → ]
              </div>
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              >
                <ChevronRight className="w-5 h-5 text-[#c9a77c]" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
