import { prisma } from "@/lib/prisma";
import HomeClient from "@/components/HomeClient";

// Refetch from the database at most once every 60 seconds,
// instead of only at build time.
export const revalidate = 60;

export default async function Home() {
  const [projects, services] = await Promise.all([
    prisma.project.findMany({ orderBy: { order: "asc" } }),
    prisma.service.findMany({ orderBy: { order: "asc" } }),
  ]);

  return <HomeClient projects={projects} services={services} />;
}