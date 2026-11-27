export const SITE = {
  name: "Allan Kariuki",
  role: "Software Engineer — ML, Backend & Web3",
  location: "Nairobi, Kenya",
  description:
    "Allan Kariuki is a software engineer in Nairobi building applied ML, fintech infrastructure, Web3 and mobile products for East Africa.",
  email: "allankariuki96@gmail.com",
  github: "https://github.com/AllanKariuki",
  linkedin: "https://www.linkedin.com/in/allan-kariuki-70bbb7186/",
};

export const STACK_GROUPS: { title: string; items: string[] }[] = [
  { title: "Languages", items: ["Go", "Python", "TypeScript", "Kotlin", "Dart", "Rust", "Solidity", "SQL"] },
  { title: "Backend", items: ["Django", "FastAPI", "Go Fiber", "chi", "gRPC", "Flask", "SSE / WebSockets"] },
  { title: "AI / ML", items: ["PyTorch", "Hugging Face", "NLLB-200", "anomalib", "ONNX", "CTranslate2", "Gradio"] },
  { title: "Mobile & Web", items: ["Jetpack Compose", "Flutter", "React", "Next.js", "Tailwind CSS"] },
  { title: "Web3", items: ["Foundry", "Hardhat", "OpenZeppelin", "Anchor (Solana)", "ICP", "IPFS"] },
  { title: "Data & Infra", items: ["PostgreSQL", "TimescaleDB", "PostGIS", "Redis", "Keycloak", "Docker", "Kubernetes"] },
];

export const STATUS_LABEL = {
  active: "Active",
  shipped: "Shipped",
  prototype: "Prototype",
  learning: "Learning",
} as const;
