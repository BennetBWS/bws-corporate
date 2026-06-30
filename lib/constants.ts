// ============================================================================
// lib/constants.ts
// すべてのコンテンツテキストをこのファイルに集約しています。
// ============================================================================

/** 会社情報 */
export const COMPANY = {
  nameJa: "株式会社Bennet BWS",
  nameEn: "Bennet BWS, Inc.",
  wordmark: { lead: "Bennet", accent: "bws" },
  established: "2023年1月6日",
  postalCode: "〒100-0005",
  address: "東京都千代田区丸の内1-8-3 丸の内トラストタワー本館 20階",
  addressLines: [
    "〒100-0005",
    "東京都千代田区丸の内1-8-3",
    "丸の内トラストタワー本館 20階",
  ],
  tel: "03-6739-3711",
  representative: "代表取締役 社長執行役員 平野 亨",
  employees: "3名",
  revenue: "28,480,000円（連結）",
  email: "info@bws-bennet.com",
  hours: "平日 10:00 – 18:00",
  copyright: "© 2023 Bennet BWS, Inc. All Rights Reserved.",
} as const;

/** Vercel グラデーション（CSS変数のキーと対応） */
export const GRADIENTS = {
  develop: "var(--gradient-develop)",
  preview: "var(--gradient-preview)",
  ship: "var(--gradient-ship)",
} as const;

/** 画像（/public 配置 + Unsplash） */
export const IMAGES = {
  logo: "/Logo2.png",
  hero: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
  servicesBg: "https://images.unsplash.com/photo-1497366216548-37526070297c",
  ceoBg: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
} as const;

/** グローバルナビ */
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "サービス", href: "/#services" },
  { label: "会社概要", href: "/#company" },
  { label: "沿革", href: "/#history" },
] as const;

/** ヒーロー */
export const HERO = {
  eyebrow: "BENNET BWS",
  titleLines: ["卓越した豊かさを、", "すべての人に"],
  lead: "私たちは常にイノベーションを追い求め、革新的なサービスをすべてのお客様に提供します。",
  primaryCta: { label: "お問い合わせ", href: "/contact" },
  secondaryCta: { label: "サービスを見る", href: "/#services" },
} as const;

/** 実績スタッツ */
export const STATS = [
  { num: "4+", cap: "Years of Experience" },
  { num: "100+", cap: "Successful Projects" },
  { num: "8", cap: "Business Domains" },
  { num: "Est. 2023", cap: "Established" },
] as const;

/** サービス（3カード） */
export const SERVICES = {
  eyebrow: "Services",
  title: "弊社のサービス",
  items: [
    {
      icon: "code",
      gradient: "develop",
      title: "Web制作・開発",
      body: "コーポレートサイトからアプリ開発まで一気通貫で対応。",
      arrow: "right",
      href: "/contact",
      external: false,
    },
    {
      icon: "cap",
      gradient: "preview",
      title: "Next World Academy",
      body: "未経験からフリーランスへ。実践型プログラミングスクール。",
      arrow: "up-right",
      href: "https://next-world-academy.com/",
      external: true,
    },
    {
      icon: "chart",
      gradient: "ship",
      title: "コンサルティング",
      body: "Web・アプリ・SNSの戦略立案から実行支援まで。",
      arrow: "right",
      href: "/contact",
      external: false,
    },
  ],
} as const;

/** CEO / モットー（ダークセクション） */
export const CEO = {
  blocks: [
    {
      eyebrow: "Message from the CEO",
      titleLines: ["サービスを売るだけが", "仕事ではない"],
      accent: "#00dfd8",
      paragraphs: [
        "Bennet BWSは、テクノロジーの力で課題を解決することはもちろん、その先にある「人の幸せ」や「社会の豊かさ」まで見据えて支援することを大切にしています。",
      ],
    },
    {
      eyebrow: "Motto",
      titleLines: ["お客さまの人生を", "変える支援をしたい"],
      accent: "#ff0080",
      paragraphs: [
        "私たちが目指すのは、単なるプロジェクトではなく、その先にいる一人ひとりの人生です。",
        "お客さまと共に未来を描き、行動し、成果を生み出すことで、人生がより良い方向へ進むきっかけをつくりたい。それが、私たちの想いであり、存在意義です。",
      ],
    },
  ],
} as const;

/** 事業内容（8項目） */
export const BUSINESS = {
  eyebrow: "Business",
  title: "弊社の事業内容",
  items: [
    { icon: "consult", label: "各種コンサルティング" },
    { icon: "research", label: "マーケティングリサーチ" },
    { icon: "mega", label: "マーケティング活動" },
    { icon: "doc", label: "コンテンツ事業" },
    { icon: "seo", label: "SEO・MEO事業" },
    { icon: "media", label: "メディア制作" },
    { icon: "phone", label: "アプリ開発" },
    { icon: "users", label: "人材派遣" },
  ],
} as const;

/** 沿革 */
export const HISTORY = {
  eyebrow: "History",
  title: "会社設立から現在まで",
  items: [
    { date: "Jan 2023", text: "株式会社Bennet BWS 設立" },
    { date: "Jan 2023", text: "WSPコンサルティング リリース" },
    { date: "Apr 2023", text: "NWA（Next World Academy）開校" },
    { date: "Jul 2024", text: "Bennet Web Services リリース" },
  ],
} as const;

/** 会社概要テーブル */
export const COMPANY_TABLE = {
  eyebrow: "Company",
  title: "会社概要",
  rows: [
    { k: "商号", v: `${COMPANY.nameJa}（${COMPANY.nameEn}）` },
    { k: "設立", v: COMPANY.established },
    { k: "所在地", v: `${COMPANY.postalCode} ${COMPANY.address}` },
    { k: "電話", v: COMPANY.tel },
    { k: "従業員数", v: COMPANY.employees },
  ],
} as const;

/** 下部 CTA */
export const CTA = {
  title: "プロジェクトについて相談する",
  body: "課題やご要望に合わせて、最適なご提案をいたします。お気軽にご相談ください。",
  button: { label: "お問い合わせはこちら", href: "/contact" },
} as const;

/** フッター */
export const FOOTER = {
  columns: [
    {
      title: "サービス",
      links: [
        { label: "Web制作・開発", href: "/#services" },
        {
          label: "Next World Academy",
          href: "https://next-world-academy.com/",
          external: true,
        },
        { label: "コンサルティング", href: "/#services" },
      ],
    },
    {
      title: "会社",
      links: [
        { label: "会社概要", href: "/#company" },
        { label: "沿革", href: "/#history" },
        { label: "プライバシーポリシー", href: "#" },
        { label: "利用規約", href: "#" },
      ],
    },
  ],
  contactHeading: "お問い合わせ",
} as const;

/** コンタクトページ */
export const CONTACT = {
  eyebrow: "Contact",
  title: "お問い合わせ",
  lead: "サービスに関するご相談、お見積もりのご依頼など、お気軽にお問い合わせください。",
  infoHeading: "会社情報",
  infoNote: "担当者より2営業日以内にご返信いたします。",
  info: [
    {
      icon: "pin",
      label: "Address",
      value: `${COMPANY.addressLines[0]} ${COMPANY.addressLines[1]}\n${COMPANY.addressLines[2]}`,
    },
    { icon: "tel", label: "Tel", value: COMPANY.tel },
    { icon: "mail", label: "Email", value: COMPANY.email },
    { icon: "clock", label: "Hours", value: COMPANY.hours },
  ],
  form: {
    fields: {
      name: { label: "お名前", placeholder: "山田 太郎", required: true },
      company: { label: "会社名", placeholder: "株式会社〇〇", required: false },
      email: { label: "メールアドレス", placeholder: "you@example.com", required: true },
      category: {
        label: "お問い合わせ種別",
        options: ["サービスについて", "お見積もり依頼", "採用について", "その他"],
      },
      message: { label: "お問い合わせ内容", placeholder: "ご相談内容をご記入ください。", required: true },
    },
    submitLabel: "送信する",
    sendingLabel: "送信中…",
    note: `送信いただいた内容は ${COMPANY.email} 宛に送信されます。`,
    successMessage: "送信しました。ありがとうございます。",
    errorMessage: "送信に失敗しました。時間をおいて再度お試しください。",
  },
} as const;
