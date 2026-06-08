import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const IconCode = (p: IconProps) => (
  <svg {...base} {...p}><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></svg>
);
export const IconCap = (p: IconProps) => (
  <svg {...base} {...p}><path d="M22 10 12 5 2 10l10 5 10-5Z" /><path d="M6 12v5c3 2.5 9 2.5 12 0v-5" /></svg>
);
export const IconChart = (p: IconProps) => (
  <svg {...base} {...p}><line x1="6" y1="20" x2="6" y2="15" /><line x1="12" y1="20" x2="12" y2="9" /><line x1="18" y1="20" x2="18" y2="5" /></svg>
);
export const IconArrow = (p: IconProps) => (
  <svg {...base} {...p}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
);
export const IconArrowUR = (p: IconProps) => (
  <svg {...base} {...p}><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
);
export const IconConsult = (p: IconProps) => (
  <svg {...base} {...p}><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2Z" /><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" /></svg>
);
export const IconResearch = (p: IconProps) => (
  <svg {...base} {...p}><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /><path d="M8 12v-1.5" /><path d="M11 12V8.5" /><path d="M14 12v-2.5" /></svg>
);
export const IconMega = (p: IconProps) => (
  <svg {...base} {...p}><path d="m3 11 18-5v12L3 14v-3Z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" /></svg>
);
export const IconDoc = (p: IconProps) => (
  <svg {...base} {...p}><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v5h5" /><line x1="8" y1="13" x2="16" y2="13" /><line x1="8" y1="17" x2="14" y2="17" /></svg>
);
export const IconSeo = (p: IconProps) => (
  <svg {...base} {...p}><circle cx="10" cy="10" r="7" /><path d="m21 21-4.3-4.3" /><path d="m7.5 11 1.8-2 1.6 1.5L13 8" /></svg>
);
export const IconMedia = (p: IconProps) => (
  <svg {...base} {...p}><rect width="20" height="16" x="2" y="4" rx="2.2" /><path d="m10 8 5 4-5 4V8Z" /></svg>
);
export const IconPhone = (p: IconProps) => (
  <svg {...base} {...p}><rect width="13" height="20" x="5.5" y="2" rx="2.4" /><path d="M11 18h2" /></svg>
);
export const IconUsers = (p: IconProps) => (
  <svg {...base} {...p}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
);
export const IconMail = (p: IconProps) => (
  <svg {...base} {...p}><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m2 7 10 6 10-6" /></svg>
);
export const IconTel = (p: IconProps) => (
  <svg {...base} {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" /></svg>
);
export const IconPin = (p: IconProps) => (
  <svg {...base} {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
);
export const IconClock = (p: IconProps) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
);

export const ICONS = {
  code: IconCode,
  cap: IconCap,
  chart: IconChart,
  right: IconArrow,
  "up-right": IconArrowUR,
  consult: IconConsult,
  research: IconResearch,
  mega: IconMega,
  doc: IconDoc,
  seo: IconSeo,
  media: IconMedia,
  phone: IconPhone,
  users: IconUsers,
  mail: IconMail,
  tel: IconTel,
  pin: IconPin,
  clock: IconClock,
} as const;

export type IconName = keyof typeof ICONS;
