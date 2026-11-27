export interface Role {
  title: string;
  company: string;
  location?: string;
  dates: string;
  current?: boolean;
  bullets: string[];
  tech: string[];
}

// Condensed from the public CV (public/cv.pdf).
export const EXPERIENCE: Role[] = [
  {
    title: "Software Engineer — Lead Engineer, Aviation Platforms",
    company: "Keshi Holdings Limited",
    location: "Nairobi",
    dates: "May 2024 – Present",
    current: true,
    bullets: [
      "Lead engineer on AATS (Advanced Aviation Tracking System) and ASM (Airspace Monitoring System, used for airspace billing), run from one codebase configured per country. Own architecture, APIs, UI, data models, release and monitoring.",
      "Built React, Angular and TypeScript operator portals with live data over SSE and WebSockets, rendering flight positions, weather feeds and billing views for 100+ concurrent flights.",
      "Architected reactive Java microservices (Quarkus, Mutiny) with Kafka event streaming, and multi-tenant PostgreSQL / TimescaleDB schemas with auditable financial records.",
      "On the Meridian supply-chain traceability platform: a Solidity anchor contract for Merkle roots of verifiable-credential batches, a Hyperledger Fabric adapter, Next.js portals and offline-first Kotlin Multiplatform field apps.",
      "Integrated the M-PESA Daraja API into an e-ticketing platform handling 1,000+ daily transactions, and a notification service delivering 10,000+ messages a day across SMS, email, WhatsApp and Slack.",
      "Moved Quarkus services to GraalVM native images (about 300 MB → 100 MB per service); shipped a real-time cargo tracking system for DGDA, Djibouti at 99% uptime and led an on-site deployment in the DRC.",
    ],
    tech: ["Java", "Quarkus", "Kafka", "React", "Angular", "Next.js", "PostgreSQL", "TimescaleDB", "Solidity", "Kubernetes"],
  },
  {
    title: "Junior Software Engineer",
    company: "Cloudoon",
    location: "Nairobi",
    dates: "Jan 2024 – Apr 2024",
    bullets: [
      "Built a site-builder web application with Django REST Framework, cutting site creation time by 40%.",
      "Integrated Mautic and other third-party services through custom REST APIs, improving business-intelligence reporting by 30%.",
      "Optimised CI/CD build and deployment pipelines, reducing deployment time by 20%.",
    ],
    tech: ["Python", "Django REST Framework", "REST APIs", "CI/CD"],
  },
  {
    title: "Backend Team Lead",
    company: "JKUAT Christian Union (Freelance)",
    location: "Nairobi",
    dates: "May 2021 – Apr 2024",
    bullets: [
      "Led the backend team for three years, maintaining the union's software, updating its PHP websites and redesigning its databases.",
      "Built the union's data management system with a Django back end, a React and TypeScript front end and PostgreSQL, hosted on Heroku.",
    ],
    tech: ["Django", "React", "TypeScript", "PostgreSQL", "PHP", "Heroku"],
  },
  {
    title: "Software Engineering Intern — Edge ML Team Lead",
    company: "Gearbox",
    location: "Nairobi",
    dates: "Jan 2023 – Dec 2023",
    bullets: [
      "Led the Edge ML team building an RFID and machine-learning attendance authentication system on Arduino (C/C++), improving logging accuracy by 40%.",
      "Built a car recognition system with React and Angular front ends for real-time visualisation of detection results.",
      "Tuned PostgreSQL queries and indexing, improving query performance by 25%.",
    ],
    tech: ["C/C++", "Arduino", "Machine Learning", "React", "Angular", "PostgreSQL"],
  },
  {
    title: "Software Engineering Intern",
    company: "JPMorgan Chase & Co.",
    dates: "Oct 2021 – Mar 2022",
    bullets: [
      "Developed real-time market-data processing web applications with a Django back end and a React front end, pushing live updates to the UI over WebSockets.",
    ],
    tech: ["Django", "React", "WebSockets"],
  },
];
