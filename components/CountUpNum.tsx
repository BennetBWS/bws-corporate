"use client";

import { useEffect, useRef, useState } from "react";

/**
 * 数値で始まる文字列（例: "4+", "100+", "8"）の数値部分を 0 からカウントアップする。
 * 数値で始まらない文字列（例: "Est. 2023"）はそのまま表示する。
 * ビューポートに入った時点で開始し、prefers-reduced-motion を尊重する。
 */
export default function CountUpNum({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!match) return; // 数値で始まらない場合はアニメーションしない

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) {
      setDisplay(target);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
    const run = () => {
      const duration = 1500;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / duration);
        setDisplay(Math.round(easeOut(p) * target));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            run();
            obs.disconnect();
          }
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [match, target]);

  if (!match) {
    return <span ref={ref}>{value}</span>;
  }
  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
