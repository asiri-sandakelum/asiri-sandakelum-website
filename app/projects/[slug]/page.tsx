import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, ExternalLink, Github, Calendar, Tag } from 'lucide-react'
import projects from '@/data/projects.json'
import type { Metadata } from 'next'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return {}
  return {
    title: `${project.title} | Asiri Sandakelum`,
    description: project.shortDesc,
  }
}

export default function ProjectDetail({ params }: Props) {
  const idx = projects.findIndex((p) => p.slug === params.slug)
  if (idx === -1) notFound()
  const project = projects[idx]
  const prev = idx > 0 ? projects[idx - 1] : null
  const next = idx < projects.length - 1 ? projects[idx + 1] : null

  return (
    <article className="min-h-screen pt-20">
      {/* Hero Banner */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <Image
          src={project.banner}
          alt={project.title}
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/40 via-transparent to-[#080808]" />

        {/* Back link */}
        <div className="absolute top-8 left-6 md:left-12">
          <Link
            href="/projects"
            className="flex items-center gap-2 font-mono text-xs tracking-widest text-white/50 hover:text-[#00e5ff] transition-colors border border-white/10 hover:border-[#00e5ff]/30 px-3 py-1.5 bg-black/40 backdrop-blur-sm"
          >
            <ArrowLeft size={12} /> ALL PROJECTS
          </Link>
        </div>

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-8">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="tag-pill">{project.category}</span>
              <span className={`font-mono text-xs px-2 py-0.5 ${
                project.status === 'Ongoing'
                  ? 'bg-green-500/20 border border-green-500/30 text-green-400'
                  : 'bg-white/10 border border-white/20 text-white/60'
              }`}>
                {project.status}
              </span>
              <div className="flex items-center gap-1.5 text-white/40">
                <Calendar size={11} />
                <span className="font-mono text-xs">{project.date}</span>
              </div>
            </div>
            <h1 className="font-display text-2xl md:text-4xl font-bold leading-tight">{project.title}</h1>
            <div className="mt-2">
              {((project as any).type === 'Group Project') ? (
                <p className="font-mono text-sm text-white/60">Group Project - {(project as any).teamMembers && (project as any).teamMembers.length ? (project as any).teamMembers.join(', ') : 'Team members'}</p>
              ) : (
                <p className="font-mono text-sm text-white/60">Individual Project - Asiri Sandakelum</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-12">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          {project.tags.map((tag) => (
            <div key={tag} className="flex items-center gap-1.5 border border-[#1e1e1e] px-3 py-1 hover:border-[#00e5ff]/30 transition-colors">
              <Tag size={10} className="text-[#00e5ff]" />
              <span className="font-mono text-xs text-white/50">{tag}</span>
            </div>
          ))}
        </div>

        {/* Overview */}
        <section className="mb-12">
          <SectionLabel>01 — Overview</SectionLabel>
          <p className="text-white/70 leading-relaxed text-base">{project.overview}</p>
        </section>

        {/* Problem */}
        <section className="mb-12">
          <SectionLabel>02 — Problem Statement</SectionLabel>
          <div className="border-l-2 border-[#00e5ff] pl-6 py-2">
            <p className="text-white/70 leading-relaxed italic">{project.problem}</p>
          </div>
        </section>

        {/* Objectives */}
        <section className="mb-12">
          <SectionLabel>03 — Objectives</SectionLabel>
          <ul className="flex flex-col gap-3">
            {project.objectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="font-mono text-xs text-[#00e5ff] mt-1 flex-shrink-0 w-6">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-white/70 text-sm leading-relaxed">{obj}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Highlights */}
        <section className="mb-12">
          <SectionLabel>04 — Key Outcomes</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.highlights.map((h, i) => (
              <div key={i} className="border border-[#1e1e1e] bg-[#0f0f0f] p-4 hover:border-[#00e5ff]/20 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-1 h-full min-h-[20px] bg-[#00e5ff] flex-shrink-0 mt-1" />
                  <p className="text-white/60 text-sm leading-relaxed">{h}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tools */}
        <section className="mb-12">
          <SectionLabel>05 — Tools & Technologies</SectionLabel>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span key={tool} className="glass-card font-mono text-xs text-[#00e5ff] px-3 py-1.5 border border-[#00e5ff]/20">
                {tool}
              </span>
            ))}
          </div>
        </section>

        {/* Project Images Gallery */}
        {(project as any).images && (project as any).images.length > 0 && (
          <section className="mb-12">
            <SectionLabel>06 — Visual Documentation</SectionLabel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(project as any).images.map((imgSrc: string, idx: number) => (
                <div key={idx} className="relative h-64 md:h-80 overflow-hidden border border-[#1e1e1e] hover:border-[#00e5ff]/20 transition-colors">
                  <Image
                    src={imgSrc}
                    alt={`${project.title} - Image ${idx + 1}`}
                    fill
                    className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 font-mono text-xs text-white/40 tracking-widest">
                    FIG. {String(idx + 1).padStart(2, '0')}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Links */}
        {(project.github || project.report) && (
          <section className="mb-12">
            <SectionLabel>07 — Resources</SectionLabel>
            <div className="flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-[#1e1e1e] text-white/60 font-mono text-xs px-4 py-2 hover:border-[#00e5ff]/30 hover:text-[#00e5ff] transition-all"
                >
                  <Github size={12} /> SOURCE CODE
                </a>
              )}
              {project.report && (
                <a
                  href={project.report}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-[#1e1e1e] text-white/60 font-mono text-xs px-4 py-2 hover:border-[#00e5ff]/30 hover:text-[#00e5ff] transition-all"
                >
                  <ExternalLink size={12} /> VIEW REPORT
                </a>
              )}
            </div>
          </section>
        )}

        {/* Prev / Next navigation */}
        <div className="border-t border-[#1e1e1e] pt-8 mt-16 grid grid-cols-2 gap-4">
          {prev ? (
            <Link href={`/projects/${prev.slug}`} className="group border border-[#1e1e1e] p-4 hover:border-[#00e5ff]/20 transition-colors">
              <div className="flex items-center gap-2 text-white/30 font-mono text-xs mb-2">
                <ArrowLeft size={10} /> PREVIOUS
              </div>
              <div className="font-display text-sm font-medium group-hover:text-[#00e5ff] transition-colors line-clamp-2">
                {prev.title}
              </div>
            </Link>
          ) : <div />}

          {next ? (
            <Link href={`/projects/${next.slug}`} className="group border border-[#1e1e1e] p-4 hover:border-[#00e5ff]/20 transition-colors text-right">
              <div className="flex items-center justify-end gap-2 text-white/30 font-mono text-xs mb-2">
                NEXT <ArrowRight size={10} />
              </div>
              <div className="font-display text-sm font-medium group-hover:text-[#00e5ff] transition-colors line-clamp-2">
                {next.title}
              </div>
            </Link>
          ) : <div />}
        </div>
      </div>
    </article>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <h2 className="font-mono text-xs tracking-widest text-[#00e5ff] uppercase">{children}</h2>
      <div className="flex-1 h-px bg-[#1e1e1e]" />
    </div>
  )
}
