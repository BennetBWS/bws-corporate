/**
 * ローディング画面のビジュアル。
 * 3つのドット（グラデーション）がバウンスし、影が連動する。
 * 下に "Now Loading..." テキスト（Geist Mono / ドット点滅）。
 * 配置・背景・トランジションは親の .loader（PageTransition）が担当する。
 */
export default function Loading() {
  return (
    <>
      <div className="wrapper">
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="shadow" />
        <div className="shadow" />
        <div className="shadow" />
      </div>
      <p className="loader-text">
        Now Loading
        <span className="dot">.</span>
        <span className="dot">.</span>
        <span className="dot">.</span>
      </p>
    </>
  );
}
