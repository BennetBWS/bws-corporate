# 株式会社Bennet BWS — コーポレートサイト

Next.js 14 (App Router) + TypeScript + Tailwind CSS で実装したコーポレートサイトです。

## 技術スタック

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **next/font** で Geist / Geist Mono を読み込み
- **next/image** で画像最適化（Unsplash + ローカル `/public`）
- **Resend** でコンタクトフォームのメール送信

## ページ構成

| パス | 内容 |
| --- | --- |
| `/` | ホーム（Hero / 実績 / サービス / CEOメッセージ / 事業内容 / 沿革 / 会社概要 / CTA） |
| `/contact` | お問い合わせ（会社情報 + フォーム） |

## セットアップ

```bash
# 1. 依存パッケージをインストール
npm install

# 2. 環境変数を設定（.env.example をコピー）
cp .env.example .env.local
#   RESEND_API_KEY      … https://resend.com/api-keys で取得
#   CONTACT_TO_EMAIL    … 送信先（デフォルト info@bws-bennet.com）
#   CONTACT_FROM_EMAIL  … 検証済み送信元（テスト時は onboarding@resend.dev）

# 3. 開発サーバー起動
npm run dev
# → http://localhost:3000
```

## プロジェクト構成

```
bennet-bws/
├── app/
│   ├── layout.tsx           # ルートレイアウト + next/font (Geist)
│   ├── globals.css          # Tailwind + デザイントークン + コンポーネントCSS
│   ├── page.tsx             # ホーム
│   ├── contact/page.tsx     # お問い合わせ
│   └── api/contact/route.ts # Resend 送信エンドポイント
├── components/
│   ├── Nav.tsx / Footer.tsx
│   ├── Hero.tsx / Services.tsx / CeoSection.tsx
│   ├── Sections.tsx         # 事業内容・沿革・会社概要
│   ├── CtaSection.tsx
│   ├── ContactForm.tsx      # クライアントフォーム（fetch → /api/contact）
│   ├── Reveal.tsx           # IntersectionObserver フェードイン
│   └── Icons.tsx            # SVG アイコン
├── lib/
│   └── constants.ts         # ★ 全コンテンツテキストを集約
├── public/
│   └── Logo.png             # 透過ロゴ（白背景Navで brightness(0) → 黒表示）
└── ...
```

## デザイントークン（CSS変数）

`app/globals.css` の `:root` にアクセントカラー（Vercel グラデーション）を定義しています。

```css
--gradient-develop: linear-gradient(135deg, #007cf0, #00dfd8);
--gradient-preview: linear-gradient(135deg, #7928ca, #ff0080);
--gradient-ship:    linear-gradient(135deg, #ff4d4d, #f9cb28);
```

## コンテンツの編集

文言・会社情報・サービス・沿革などはすべて **`lib/constants.ts`** に集約しています。
表示テキストを変更する場合はこのファイルを編集してください。

## 画像について

- ロゴはプレースホルダーの幾何学的な「B」マークです。正式なロゴ画像を `public/Logo.png` に差し替えてください（透過PNG推奨）。
- Hero / Services / CEO 背景は指定の Unsplash 画像を使用しています（`lib/constants.ts` の `IMAGES`）。`next.config.mjs` で `images.unsplash.com` を許可済みです。

## メール送信（Resend）

`app/api/contact/route.ts` で Resend を使用します。
本番では送信元ドメインを Resend で検証し、`CONTACT_FROM_EMAIL` に検証済みアドレスを設定してください。
未検証の場合はテスト用に `onboarding@resend.dev` が利用できます。

## ビルド

```bash
npm run build
npm run start
```
