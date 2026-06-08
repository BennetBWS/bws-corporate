"use client";

import { useEffect, useState } from "react";
import Loading from "./Loading";

/**
 * ページ読み込み時のローディング画面 + コンテンツのフェードイン演出。
 * - 中央に3Dワイヤーフレームキューブ（辺のみ・グラデーション）を回転表示
 * - document の load を検知し、最低表示時間を確保してからトランジション
 * - prefers-reduced-motion 時はアニメーションなしで即表示（CSS側でも担保）
 */
export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loaded, setLoaded] = useState(false); // 演出開始（フェードアウト/イン）
  const [removed, setRemoved] = useState(false); // ローダー除去・演出完了

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) {
      setLoaded(true);
      setRemoved(true);
      return;
    }

    const MIN_MS = 1500; // キューブを見せる最低時間
    const start = performance.now();
    let exitTimer: ReturnType<typeof setTimeout>;
    let finishTimer: ReturnType<typeof setTimeout>;

    const finish = () => {
      const wait = Math.max(0, MIN_MS - (performance.now() - start));
      finishTimer = setTimeout(() => {
        setLoaded(true); // フェーズ1/2 開始
        exitTimer = setTimeout(() => setRemoved(true), 600); // 最長アニメ後に除去
      }, wait);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    return () => {
      window.removeEventListener("load", finish);
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, []);

  const contentClass = removed
    ? "page-content page-content--done"
    : loaded
      ? "page-content page-content--in"
      : "page-content";

  return (
    <>
      {/* JS無効時はコンテンツを常時表示しローダーを隠す */}
      <noscript>
        <style>{`.page-content{opacity:1!important;transform:none!important}.loader{display:none!important}`}</style>
      </noscript>

      <div className={contentClass}>{children}</div>

      {!removed && (
        <div
          className={`loader${loaded ? " loader--exit" : ""}`}
          aria-hidden="true"
        >
          <Loading />
        </div>
      )}
    </>
  );
}
