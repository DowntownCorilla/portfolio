"use client";

import React, { useEffect, useMemo, useState } from "react";

type Phase = "typing-whoami" | "output-whoami" | "typing-profile" | "output-profile" | "done";

const WHOAMI_CMD = "$ whoami";
const WHOAMI_OUT = "> CORILLA_";
const PROFILE_CMD = "$ cat profile.txt";
const PROFILE_OUT = [
  "> 서비스를 만든 개발자의 시선으로 위험을 찾는 보안 엔지니어 이윤재입니다.",
  "> 현재에 안주하지 않고 항상 발전해 나가겠습니다.",
];

const CHAR_DELAY_MS = 50;
const LINE_DELAY_MS = 400;
const WHOAMI_TO_OUT_DELAY_MS = 1000;

export function TerminalIntro() {
  const [phase, setPhase] = useState<Phase>("typing-whoami");
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;

    if (phase === "typing-whoami") {
      if (typed.length < WHOAMI_CMD.length) {
        timer = setTimeout(() => {
          setTyped(WHOAMI_CMD.slice(0, typed.length + 1));
        }, CHAR_DELAY_MS);
      } else {
        timer = setTimeout(() => {
          setPhase("output-whoami");
          setTyped("");
        }, WHOAMI_TO_OUT_DELAY_MS);
      }
    }

    if (phase === "typing-profile") {
      if (typed.length < PROFILE_CMD.length) {
        timer = setTimeout(() => {
          setTyped(PROFILE_CMD.slice(0, typed.length + 1));
        }, CHAR_DELAY_MS);
      } else {
        timer = setTimeout(() => {
          setPhase("output-profile");
          setTyped("");
        }, LINE_DELAY_MS);
      }
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [phase, typed]);

  useEffect(() => {
    if (phase === "output-whoami") {
      const timer = setTimeout(() => {
        setPhase("typing-profile");
      }, LINE_DELAY_MS);
      return () => clearTimeout(timer);
    }

    if (phase === "output-profile") {
      const timer = setTimeout(() => {
        setPhase("done");
      }, LINE_DELAY_MS);
      return () => clearTimeout(timer);
    }

    return undefined;
  }, [phase]);

  const showCursor = useMemo(() => {
    return phase === "typing-whoami" || phase === "typing-profile";
  }, [phase]);

  return (
    <div
      className="font-mono text-sm md:text-base lg:text-lg text-[#c9a77c]/80"
      aria-live="polite"
    >
      <div className="mb-3 text-[#c9a77c]">
        <div>
          {phase === "typing-whoami" && (
            <>
              <span className="text-4xl md:text-5xl lg:text-7xl retro-text leading-none">
                {typed}
              </span>
              {showCursor && (
                <span className="terminal-caret terminal-caret--hero text-4xl md:text-5xl lg:text-7xl retro-text leading-none align-baseline">
                  █
                </span>
              )}
            </>
          )}
          {(phase === "output-whoami" ||
            phase === "typing-profile" ||
            phase === "output-profile" ||
            phase === "done") && (
            <span className="text-4xl md:text-5xl lg:text-7xl retro-text">
              {WHOAMI_OUT}
            </span>
          )}
        </div>
        <div className="mt-1">
          {phase === "typing-profile" && (
            <>
              {typed}
              {showCursor && <span className="terminal-caret">█</span>}
            </>
          )}
          {(phase === "output-profile" || phase === "done") && PROFILE_CMD}
        </div>
      </div>

      {(phase === "output-profile" || phase === "done") && (
        <div className="mt-1 pl-6 text-[#c9a77c]/60">
          {PROFILE_OUT.map((line) => (
            <div key={line}>{line}</div>
          ))}
        </div>
      )}
    </div>
  );
}
