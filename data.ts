import dynamicIconImports from "lucide-react/dynamicIconImports";

type TContact = {
  title: string;
  href: string;
  icon: keyof typeof dynamicIconImports;
};

export const contacts: TContact[] = [
  {
    title: "GitHub",
    href: "https://github.com/moledart",
    icon: "github",
  },
  {
    title: "Telegram",
    href: "https://t.me/moledart",
    icon: "send",
  },
  {
    title: "Mail",
    href: "mailto:moleand@gmail.com?subject=Mail from my website",
    icon: "mail",
  },
];

export const projects = [
  {
    title: "Bitmap.community",
    type: "communtiy project",
    description: "A community tool for analyzing and ranking Bitmaps.",
    href: "http://bitmap.community",
    stack: ["Next.js", "TypeScript", "TailwindCSS", "Tanstack Query"],
  },
  {
    title: "ethereal.systems",
    type: "part-time",
    description:
      "Initial validator offering website for a DEFI project on Radix.",
    href: "https://ethereal.systems/",
    stack: ["Next.js", "TypeScript", "TailwindCSS", "Tanstack Query"],
  },
  {
    title: "wikify.io",
    type: "full-time",
    description: "Wikipedia dashboard and analyzer tool.",
    href: "https://www.wikify.io/",
    stack: [
      "Next.js",
      "Typescript",
      "TailwindCSS",
      "SWR",
      "Prisma",
      "Tanstack Table",
      "Recharts",
    ],
  },
  {
    title: "zzpost",
    type: "full-time",
    description: "Local printshop website.",
    href: "https://zzpost.ru/",
    stack: ["Nuxt.js", "Bulma"],
  },
  {
    title: "notebook factory",
    type: "full-time",
    description: "Website for a notebooks manufacturer.",
    href: "https://fabrikabloknotov.ru/",
    stack: ["Nuxt.js", "Bulma"],
  },
];

export type TProject = (typeof projects)[0];

export const employment = [
  {
    company: "Wikify.io",
    isRelated: true,
    startDate: "NOV 22",
    endDate: null,
    position: "Frontend Developer / UI designer",
    description:
      "Designing and creating dashboards and complex content heavy tables with lots of filters. Moved the whole codebase to typescript, created a design system and a component library for the project.",
  },
  {
    company: "ITransition",
    isRelated: true,
    startDate: "NOV 22",
    endDate: "JAN 23",
    position: "Fullstack Developer Intern",
    description:
      "Two month sprint with tasks both in frontend and backend + One full month building a production ready full stack application for creating and sharing book reviews. Dived into auth, Node.js and Express, tRPC & Prisma + MySQL.",
  },
  {
    company: "Real Invest",
    isRelated: false,
    startDate: "AUG 19",
    endDate: "MAR 22",
    position: "CEO",
    description:
      "Managing teams of professional accountants, HRs and lawyers. Providing consulting, financial and legal outsourcing services for businesses.",
  },
  {
    company: "Siggrid LLC",
    isRelated: false,
    startDate: "SEP 21",
    endDate: "JAN 22",
    position: "Partner",
    description:
      "Client search and negotiating agreements on oil, diesel, jet fuel and other related products transportation via pipelines, tankers, railways.",
  },
  {
    company: "TransneftStroy LLC",
    isRelated: false,
    startDate: "MAR 15",
    endDate: "NOV 18",
    position: "Deputy Chief of Planning and Economic Department",
    description:
      "Preparation of budget, cost analysis, forecasts of revenue and expenses, construction and services calculations.",
  },
  {
    company: "PriceWaterhouseCoopers LLC",
    isRelated: false,
    startDate: "SEP 14",
    endDate: "MAR 15",
    position: "Audit Consultant",
    description:
      "Reviewing records and services of banks and other financial organizations to ensure whether they are in compliance with the laws and industry standarts.",
  },
];

export type TEmployment = (typeof employment)[0];
