export const SITE = {
  name: "Allan Kariuki",
  role: "Full Stack Software Engineer",
  location: "Nairobi, Kenya",
  description:
    "Allan Kariuki is a full stack software engineer in Nairobi building real-time, financial and Web3 systems across web, backend and mobile.",
  email: "allankariuki96@gmail.com",
  phone: "+254 726 614 266",
  whatsapp: "https://wa.me/254726614266",
  github: "https://github.com/AllanKariuki",
  linkedin: "https://www.linkedin.com/in/allan-kariuki-70bbb7186/",
  cv: "/cv.pdf",
};

export const NAV = [
  { href: "/#home", id: "home", label: "Home" },
  { href: "/#projects", id: "projects", label: "Projects" },
  { href: "/#about", id: "about", label: "About" },
  { href: "/#experience", id: "experience", label: "Experience" },
  { href: "/#contact", id: "contact", label: "Contact" },
];

export const HERO = {
  eyebrow: "Build · Ship · Learn",
  stackLine: "React, Next.js, TypeScript · Java, Kotlin, Quarkus · Node.js, Python · PostgreSQL, Kafka · AWS, Azure, Kubernetes",
  summary:
    "Full stack engineer with 5 years of experience since 2021. I take loosely defined needs from concept to live production, owning the architecture, APIs, data model, web and mobile clients, release and support.",
};

export const STACK_TILES: { icon: IconName; label: string }[] = [
  { icon: "layers", label: "React / Next.js / TS" },
  { icon: "cpu", label: "Java / Kotlin / Quarkus" },
  { icon: "code", label: "Python / Django" },
  { icon: "server", label: "Node.js / NestJS" },
  { icon: "database", label: "PostgreSQL / Kafka" },
  { icon: "cloud", label: "AWS / Azure / K8s" },
];

export const STATS = [
  { value: "5", label: "Years building software" },
  { value: "2", label: "Real-time aviation platforms led" },
  { value: "10k+", label: "Events per second validated over Kafka" },
  { value: "100+", label: "Concurrent flights on live operator maps" },
];

export const EDUCATION = [
  {
    title: "BSc Mathematics and Computer Science",
    detail: "Second Class Honours, Upper Division",
    place: "Jomo Kenyatta University of Agriculture and Technology",
    dates: "2019 – 2023",
  },
  {
    title: "Software Engineering Certificate",
    detail: "Web Development (PHP, Python/Django, Java)",
    place: "Zalego Academy",
    dates: "2019",
  },
];

export const COMPETENCIES: { title: string; icon: IconName; items: string[] }[] = [
  {
    title: "Frontend & Mobile",
    icon: "layers",
    items: [
      "React 19",
      "Next.js 15",
      "Angular 17",
      "TypeScript",
      "Tailwind CSS",
      "Real-time UIs (SSE, WebSockets)",
      "Kotlin Multiplatform",
      "Jetpack Compose",
      "React Native",
      "Flutter",
    ],
  },
  {
    title: "Backend & Data",
    icon: "server",
    items: [
      "Java (Quarkus, Spring Boot)",
      "Kotlin",
      "Node.js (Express, NestJS)",
      "Python (Django, DRF, FastAPI)",
      "Go",
      "REST & GraphQL",
      "PostgreSQL",
      "TimescaleDB",
      "MongoDB",
      "Redis",
      "Apache Kafka",
      "RabbitMQ",
    ],
  },
  {
    title: "Cloud, DevOps & Web3",
    icon: "cloud",
    items: [
      "AWS (ECS, EKS, S3, SNS)",
      "Azure",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "Keycloak / OAuth2 / OIDC",
      "Solidity",
      "Hardhat / Foundry",
      "Hyperledger Fabric",
      "Verifiable Credentials",
    ],
  },
];

export const STATUS_LABEL = {
  active: "Active",
  shipped: "Shipped",
  prototype: "Prototype",
  learning: "Learning",
} as const;

export type IconName =
  | "github"
  | "linkedin"
  | "mail"
  | "whatsapp"
  | "code"
  | "server"
  | "database"
  | "cloud"
  | "layers"
  | "cpu"
  | "map-pin"
  | "briefcase"
  | "arrow-right"
  | "external"
  | "download"
  | "phone"
  | "graduation";
