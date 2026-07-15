import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Tag, Calendar } from 'lucide-react'
import cadProjects from '@/data/cad-projects.json'
import type { Metadata } from 'next'
import ProjectGallery from '@/components/ProjectGallery'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return cadProjects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = cadProjects.find((p) => p.slug === params.slug)
  if (!project) return {}
  return {
    title: `${project.title} | CAD Gallery | Asiri Sandakelum`,
    description: project.shortDesc,
  }
}

export default function CadDetail({ params }: Props) {
  const project = cadProjects.find((p) => p.slug === params.slug)
  if (!project) notFound()

  return (
    <article className="min-h-screen pt-20">
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/40 via-transparent to-[#080808]" />

        <div className="absolute top-8 left-6 md:left-12">
          <Link
            href="/projects#cad-gallery"
            className="flex items-center gap-2 font-mono text-xs tracking-widest text-white/50 hover:text-[#00e5ff] transition-colors border border-white/10 hover:border-[#00e5ff]/30 px-3 py-1.5 bg-black/40 backdrop-blur-sm"
          >
            <ArrowLeft size={12} /> CAD GALLERY
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-8">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="tag-pill">SolidWorks</span>
              <div className="flex items-center gap-1.5 text-white/40">
                <Calendar size={11} />
                <span className="font-mono text-xs">{project.date}</span>
              </div>
            </div>
            <h1 className="font-display text-2xl md:text-4xl font-bold leading-tight">{project.title}</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-12">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <div key={tag} className="flex items-center gap-1.5 border border-[#1e1e1e] px-3 py-1 hover:border-[#00e5ff]/30 transition-colors">
              <Tag size={10} className="text-[#00e5ff]" />
              <span className="font-mono text-xs text-white/50">{tag}</span>
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="text-white/70 leading-relaxed text-base mb-10">{project.shortDesc}</p>

        {/* Tools */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="font-mono text-xs tracking-widest text-[#00e5ff] uppercase">Tools Used</h2>
            <div className="flex-1 h-px bg-[#1e1e1e]" />
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span key={tool} className="glass-card font-mono text-xs text-[#00e5ff] px-3 py-1.5 border border-[#00e5ff]/20">
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Image Gallery */}
        {project.images.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <h2 className="font-mono text-xs tracking-widest text-[#00e5ff] uppercase">Model Views</h2>
              <div className="flex-1 h-px bg-[#1e1e1e]" />
            </div>
            <ProjectGallery images={project.images} title={project.title} />
          </div>
        )}
      </div>
    </article>
  )
}
