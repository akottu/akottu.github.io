import type { Accent } from "./accents";

// All of the site's copy lives here, so updating a role, a project or a link
// never means touching layout code.

export const site = {
  name: "Anish Kottu",
  role: "Senior Software Engineer",
  tagline:
    "I build the backend systems that keep products reliable at scale. Right now that's content infrastructure at IXL Learning, used by millions of students. Lately I'm putting LLMs to work in real products.",
  email: "akottu@gmail.com",
  links: {
    github: "https://github.com/akottu",
    linkedin: "https://www.linkedin.com/in/anish-kottu/",
  },
};

export const sections: { id: string; label: string; accent: Accent }[] = [
  { id: "about", label: "About", accent: "violet" },
  { id: "experience", label: "Experience", accent: "teal" },
  { id: "projects", label: "Projects", accent: "amber" },
  { id: "writing", label: "Writing", accent: "rose" },
  { id: "education", label: "Education", accent: "sky" },
];

// Real numbers from my work, shown in the scrolling strip at the top.
export const stats: { value: string; label: string; where: string; accent: Accent }[] = [
  { value: "5+ yrs", label: "building production software", where: "4 companies", accent: "violet" },
  { value: "100K+", label: "quizzes protected by version pinning", where: "IXL", accent: "teal" },
  { value: "15 min → 30 s", label: "per-skill setup with the skill importer", where: "IXL", accent: "amber" },
  { value: "140 files", label: "migrated from Hibernate 5 to 6", where: "IXL", accent: "rose" },
  { value: "~10%", label: "faster queries after the migration", where: "IXL", accent: "sky" },
  { value: "120M+", label: "records in the dental provider platform", where: "MetLife", accent: "violet" },
  { value: "60 → 12 min", label: "deployment cycles", where: "MetLife", accent: "teal" },
  { value: "15–18%", label: "higher throughput on Java 17", where: "MetLife", accent: "amber" },
  { value: "60%", label: "lower garbage collection latency", where: "MetLife", accent: "rose" },
  { value: "100%", label: "of flagged security vulnerabilities fixed", where: "MetLife", accent: "sky" },
  { value: "10,000+", label: "customers reached by onboarding features", where: "Pendo", accent: "violet" },
  { value: "30%", label: "less manual processing via Spring Batch", where: "Pendo", accent: "teal" },
  { value: "+20%", label: "engagement from the workflows feature", where: "Pendo", accent: "amber" },
  { value: "2 states", label: "curriculum approvals supported (TX, CA)", where: "IXL", accent: "rose" },
];

export const about = {
  paragraphs: [
    "I've spent about five years building software across insurance, product analytics, and education. Most of my work is backend Java: services, data pipelines, migrations, and the unglamorous fixes that make a system trustworthy. I'm comfortable on the frontend in React when the work calls for it.",
    "The problems I like most are the ones where correctness matters over time: making sure a quiz still works years after the content under it changed, getting a 140-file framework migration out the door without breaking anything, or tracking down a production memory leak. I also like the people side of engineering, from leading epics to mentoring new engineers.",
    "Outside work, I'm doing an MS in Computer Science at Georgia Tech with an AI specialization, and building small games that give me room to experiment with LLM features end to end.",
  ],
  toolbox: [
    { group: "Languages", items: ["Java", "TypeScript", "Python", "SQL", "Go"] },
    { group: "Backend", items: ["Spring Boot", "Hibernate", "Guice", "REST APIs", "Microservices"] },
    { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Angular"] },
    { group: "Cloud & data", items: ["AWS", "Azure", "PostgreSQL", "DynamoDB", "Docker", "Kubernetes"] },
    { group: "AI", items: ["Claude API", "Claude Code", "LangChain", "LangGraph", "MCP"] },
  ],
};

export const experience: {
  company: string;
  title: string;
  dates: string;
  summary: string;
  highlights: string[];
}[] = [
  {
    company: "IXL Learning",
    title: "Senior Software Engineer",
    dates: "May 2025 – Present",
    summary: "Content Engineering: the authoring tools, rendering components, and shared libraries behind IXL's learning content.",
    highlights: [
      "Led the Quiz Content Stability epic, designing version pinning across all four scoring types so 100K+ quizzes no longer break when content changes, and root-caused a post-launch P0 memory leak.",
      "Led a Hibernate 5 → 6 migration across 140 files, improving query performance by about 10% and unblocking Java 21.",
      "Built WCAG screen reader support (JAWS, NVDA, VoiceOver) that cleared the Takeoff curriculum for Texas, and math components that supported its California approval.",
      "Built a skill importer that cut per-skill setup from 15+ minutes of manual entry to about 30 seconds.",
    ],
  },
  {
    company: "MetLife",
    title: "Sr. Full Stack Engineer",
    dates: "Oct 2023 – May 2025",
    summary: "Dental provider data platform handling 120M+ records.",
    highlights: [
      "Upgraded the platform from Java 8 to 17, raising throughput 15–18% and cutting garbage collection latency 60%.",
      "Rebuilt Azure DevOps pipelines to deploy only what changed, taking deployment cycles from 60 minutes to 12.",
      "Mentored junior developers, including one through a promotion to mid-level.",
    ],
  },
  {
    company: "Pendo.io",
    title: "Software Engineer",
    dates: "Jun 2022 – Aug 2023",
    summary: "Product analytics and in-app guidance for 10,000+ customers.",
    highlights: [
      "Built user onboarding experiences in Java and Go for a product reaching hundreds of millions of end users monthly.",
      "Automated feature creation from event ingestion with Spring Batch, cutting manual processing time 30%.",
      "Built the workflows feature for tracking user flows, which lifted engagement 20%.",
    ],
  },
  {
    company: "Liberty Mutual",
    title: "Software Developer",
    dates: "May 2021 – May 2022",
    summary: "Internal tools for actuarial reporting and risk engineering.",
    highlights: [
      "Designed the MVP architecture for actuarial reporting, routing Spring REST APIs to DynamoDB through data lakes.",
      "Led the overhaul of the Risk Engineer Workbench recommendations feature.",
    ],
  },
];

export type ProjectStatus = "Live" | "In development";

export const projects: {
  name: string;
  accent: Accent;
  status: ProjectStatus;
  blurb: string;
  details: string[];
  stack: string[];
  href?: string;
  hrefLabel?: string;
}[] = [
  {
    name: "Courtside GM",
    accent: "amber",
    status: "Live",
    blurb: "A head-to-head NBA draft game. Bid blind against a CPU general manager for all-time greats on a $25 budget, build a five-man lineup, then play out a seven-game series.",
    details: [
      "AI-written series recaps: Claude writes each recap from structured simulation data, behind a validated API route, with a deterministic fallback.",
      "Simultaneous blind bidding, positional penalties, tiebreak coin flips, and a CPU opponent with its own budget strategy.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "Claude API", "Vercel"],
    href: "https://courtside-gm-game.vercel.app",
    hrefLabel: "Play it",
  },
  {
    name: "Verdict",
    accent: "indigo",
    status: "In development",
    blurb: "A daily logic puzzle built for the group chat. Five witnesses each claim where they were, and exactly one of them is lying. Press witnesses for clues and find the liar in as few moves as you can.",
    details: [
      "A new puzzle every day, generated ahead of time as static data so the game loads instantly.",
      "Results built to share, in the spirit of Wordle.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
  },
  {
    name: "Chathouse",
    accent: "pine",
    status: "In development",
    blurb: "A Big Brother–style social strategy game for friend groups, played in the group chat you already have. Each season has its own location, look, and lineup of competitions.",
    details: [
      "A host-first web app for player profiles, flags, votes, and built-in competitions, while the conversation stays in the group chat.",
      "Season 1, “Snowed In,” starts in early 2027.",
    ],
    stack: ["Game design", "Web app"],
  },
];

export const education = [
  {
    school: "Georgia Institute of Technology",
    degree: "MS in Computer Science, AI & ML specialization",
    dates: "In progress",
  },
  {
    school: "Duke University",
    degree: "BS in Computer Science",
    dates: "",
  },
];

export const certifications = [
  "Oracle Java SE 8",
  "Microsoft Azure AI Fundamentals (AI-900)",
  "Machine Learning Specialization, Stanford & DeepLearning.AI",
];
