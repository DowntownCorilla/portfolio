"use client";

import { motion } from "motion/react";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="section-panel">
      <div className="h-screen py-20 pb-24 bg-black w-screen flex-shrink-0 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6 w-full section-content">
          <div className="text-center mb-8 md:mb-12">
            <div className="text-[#c9a77c]/60 font-mono text-xs md:text-sm mb-2 tracking-widest">
              [ COMMUNICATION ]
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-3 md:mb-4 font-mono text-[#c9a77c] retro-text">
              &gt; CONTACT_
            </h2>
            <p className="text-base md:text-lg text-[#c9a77c]/60 font-mono">
              $ echo &quot;Let&apos;s work together&quot;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
            <motion.a
              href="mailto:leeyunje96@gmail.com"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.02, x: -2, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 md:gap-4 p-4 md:p-6 bg-black border-2 border-[#c9a77c]/30 hover:border-[#c9a77c] transition-all retro-contact-card"
            >
              <div className="p-2 md:p-3 border border-[#c9a77c]/50">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#c9a77c]" />
              </div>
              <div>
                <div className="text-xs font-mono text-[#c9a77c]/60 mb-1">
                  [EMAIL]
                </div>
                <div className="text-xs md:text-sm font-mono text-[#c9a77c] break-all">
                  leeyunje96@gmail.com
                </div>
              </div>
            </motion.a>

            <motion.a
              href="tel:+821012345678"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.02, x: -2, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 md:gap-4 p-4 md:p-6 bg-black border-2 border-[#c9a77c]/30 hover:border-[#c9a77c] transition-all retro-contact-card"
            >
              <div className="p-2 md:p-3 border border-[#c9a77c]/50">
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#c9a77c]" />
              </div>
              <div>
                <div className="text-xs font-mono text-[#c9a77c]/60 mb-1">
                  [PHONE]
                </div>
                <div className="text-xs md:text-sm font-mono text-[#c9a77c]">
                  +82 10-5582-7539
                </div>
              </div>
            </motion.a>

            <motion.a
              href="https://github.com/DowntownCorilla"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.02, x: -2, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 md:gap-4 p-4 md:p-6 bg-black border-2 border-[#c9a77c]/30 hover:border-[#c9a77c] transition-all retro-contact-card"
            >
              <div className="p-2 md:p-3 border border-[#c9a77c]/50">
                <Github className="w-5 h-5 md:w-6 md:h-6 text-[#c9a77c]" />
              </div>
              <div>
                <div className="text-xs font-mono text-[#c9a77c]/60 mb-1">
                  [GITHUB]
                </div>
                <div className="text-xs md:text-sm font-mono text-[#c9a77c]">
                  @DowntownCorilla
                </div>
              </div>
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/윤재-이-5752a1391"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02, x: -2, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 md:gap-4 p-4 md:p-6 bg-black border-2 border-[#c9a77c]/30 hover:border-[#c9a77c] transition-all retro-contact-card"
            >
              <div className="p-2 md:p-3 border border-[#c9a77c]/50">
                <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-[#c9a77c]" />
              </div>
              <div>
                <div className="text-xs font-mono text-[#c9a77c]/60 mb-1">
                  [LINKEDIN]
                </div>
                <div className="text-xs md:text-sm font-mono text-[#c9a77c]">
                  이윤재
                </div>
              </div>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center p-6 md:p-8 bg-black border-2 border-[#c9a77c]/30 retro-message-box"
          >
            <div className="text-[#c9a77c]/60 font-mono text-xs mb-3 md:mb-4">
              [MESSAGE]
            </div>
            <p className="text-sm md:text-base font-mono text-[#c9a77c]/80 mb-3 md:mb-4">
              &gt; 새로운 프로젝트나 협업 기회에 대해
              <br />
              &gt; 이야기 나누고 싶습니다.
            </p>
            <p className="text-xs md:text-sm font-mono text-[#c9a77c]/60">
              $ Response time: &lt; 24 hours
            </p>
          </motion.div>
        </div>
      </div>

      <style>{`
        .retro-text {
          text-shadow:
            0 0 10px rgba(201, 167, 124, 0.5),
            0 0 20px rgba(201, 167, 124, 0.3);
        }

        .retro-contact-card {
          box-shadow:
            3px 3px 0 rgba(201, 167, 124, 0.2);
        }

        .retro-contact-card:hover {
          box-shadow:
            5px 5px 0 rgba(201, 167, 124, 0.3);
        }

        .retro-message-box {
          box-shadow:
            4px 4px 0 rgba(201, 167, 124, 0.2);
        }
      `}</style>
    </section>
  );
}
