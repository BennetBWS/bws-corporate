"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** 子要素として描画するタグ。デフォルトは div。 */
  as?: keyof JSX.IntrinsicElements;
};

/**
 * IntersectionObserver でスクロール時にフェードインさせるラッパー。
 * 表示後は監視を解除します。reduced-motion の場合は即時表示。
 */
export default function Reveal({ children, className = "", as = "div" }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as as React.ElementType;
  return (
    <Tag ref={ref} className={`reveal${shown ? " in" : ""} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
