import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Clear existing rows so this script is safe to re-run.
  await prisma.project.deleteMany();
  await prisma.service.deleteMany();

  await prisma.project.createMany({
    data: [
      {
        slug: "trendify-shopping-site",
        title: "Trendifiy project",
        description: "Shopping Website",
        bgImage: "/work-1.png",
        category: "Web Design",
        tags: ["React", "Node.js", "MongoDB"],
        githubUrl: "https://github.com/Mukulkms/trendify",
        featured: true,
        order: 1,
      },
      {
        slug: "geo-based-app",
        title: "Geo based app",
        description: "Mobile App",
        bgImage: "/work-2.png",
        category: "Mobile App",
        tags: [],
        order: 2,
      },
      {
        slug: "photography-site",
        title: "Photography site",
        description: "Web Design",
        bgImage: "/work-3.png",
        category: "Web Design",
        tags: [],
        order: 3,
      },
      {
        slug: "ui-ux-designing",
        title: "UI/UX designing",
        description: "UI/UX Design",
        bgImage: "/work-4.png",
        category: "UI/UX Design",
        tags: [],
        order: 4,
      },
    ],
  });

  await prisma.service.createMany({
    data: [
      {
        title: "Web design",
        description:
          "Shopping e-commerce Website collabrated with my team members",
        icon: "/web-icon.png",
        link: "https://github.com/Mukulkms/trendify",
        order: 1,
      },
      {
        title: "Mobile app",
        description: "Crypto Crash – Real-Time Multiplayer Betting Game...",
        icon: "/mobile-icon.png",
        link: "https://github.com/Shakeerg/crypto-crash-backend",
        order: 2,
      },
      {
        title: "UI/UX design",
        description:
          "UI/UX design focuses on creating a seamless user experience...",
        icon: "/ui-icon.png",
        link: null,
        order: 3,
      },
      {
        title: "Graphics design",
        description:
          "Creative design solutions to enhance visual communication...",
        icon: "/graphics-icon.png",
        link: null,
        order: 4,
      },
    ],
  });

  console.log("Seed complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });