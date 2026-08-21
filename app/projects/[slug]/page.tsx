import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const projects = await prisma.project.findMany({
    select: { slug: true },
  })

  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params

  const project = await prisma.project.findUnique({
    where: { slug },
  })

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen w-full bg-[#FAFAF7] text-[#0E0E10] dark:bg-darkTheme dark:text-white">
      <div className="w-11/12 max-w-5xl mx-auto px-4 sm:px-0 py-24">

        <Link
          href="/#work"
          className="inline-flex items-center gap-2 mb-10 font-mono text-xs uppercase tracking-widest text-black/50 dark:text-white/50 hover:text-[#2F5CFF] transition-colors"
        >
          <span>&larr;</span>
          <span>Back to projects</span>
        </Link>

        <div className="max-w-3xl mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-[#2F5CFF] mb-4">
            {project.category}
          </p>

          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[0.95] mb-6">
            {project.title}
            <span className="text-[#2F5CFF]">.</span>
          </h1>

          <p className="max-w-2xl text-lg sm:text-xl leading-relaxed text-black/60 dark:text-white/60">
            {project.description}
          </p>
        </div>

        {project.bgImage && (
          <div className="relative w-full aspect-video overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 mb-12">
            <Image
              src={project.bgImage}
              alt={`${project.title} project preview`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1024px"
              className="object-cover"
            />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-black/40 dark:text-white/40 mb-5">
              About the project
            </p>

            <p className="text-base sm:text-lg leading-8 text-black/70 dark:text-white/70 max-w-2xl">
              {project.description}
            </p>
          </div>

          <aside className="lg:border-l lg:border-black/10 lg:dark:border-white/10 lg:pl-8">

            {project.tags.length > 0 && (
              <div className="mb-8">
                <p className="font-mono text-xs uppercase tracking-widest text-black/40 dark:text-white/40 mb-4">
                  Technologies
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full border border-black/10 dark:border-white/15 font-mono text-[10px] uppercase tracking-wider text-black/60 dark:text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col gap-3">
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between px-5 py-3.5 rounded-full bg-[#0E0E10] text-white dark:bg-white dark:text-black font-mono text-xs uppercase tracking-widest hover:bg-[#2F5CFF] dark:hover:bg-[#2F5CFF] dark:hover:text-white transition-colors"
                >
                  <span>View live site</span>
                  <span>&#8599;</span>
                </Link>
              )}

              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between px-5 py-3.5 rounded-full border border-black/15 dark:border-white/15 font-mono text-xs uppercase tracking-widest hover:border-[#2F5CFF] hover:text-[#2F5CFF] transition-colors"
                >
                  <span>GitHub</span>
                  <span>&#8599;</span>
                </Link>
              )}
            </div>
          </aside>
        </div>

        <div className="mt-20 pt-8 border-t border-black/10 dark:border-white/10">
          <Link
            href="/#work"
            className="font-mono text-xs uppercase tracking-widest text-black/50 dark:text-white/50 hover:text-[#2F5CFF] transition-colors"
          >
            &larr; Back to all projects
          </Link>
        </div>

      </div>
    </main>
  )
}