'use client'
import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, ArrowRight, Filter, Layers } from 'lucide-react'
import projects from '@/data/projects.json'
import cadProjects from '@/data/cad-projects.json'

const categories = [
  'All',
  'Robotics',
  'Mechanical Design',
  'IoT',
  'Automation',
  'Research',
  'Manufacturing',
  'Industrial Engineering',
  'Industrial Project Management',
]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchCat = activeCategory === 'All' || p.category === activeCategory
      const q = searchQuery.toLowerCase()
      const matchSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        (p.shortDesc?.toLowerCase().includes(q) ?? false)
      return matchCat && matchSearch
    })
  }, [activeCategory, searchQuery])

  return (
    <div className="min-h-screen pt-24 pb-32">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-px bg-[#00e5ff]" />
          <span className="font-mono text-xs tracking-widest text-[#00e5ff] uppercase">Portfolio</span>
        </div>
        <h1 className="font-display text-5xl font-bold mb-4">Engineering Projects</h1>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-white/50 max-w-2xl leading-relaxed">
            A comprehensive collection of engineering work spanning robotics, biomechanics, mechatronics, embedded systems, and manufacturing — each project driven by a real problem.
          </p>
          <a
            href="#cad-gallery"
            className="flex-shrink-0 flex items-center gap-2 border-2 border-[#00e5ff] bg-[#00e5ff]/10 text-[#00e5ff] font-mono text-xs tracking-widest px-5 py-3 hover:bg-[#00e5ff]/20 hover:border-[#00e5ff] transition-all font-semibold"
          >
            <Layers size={14} /> VIEW CAD GALLERY
          </a>
        </div>
      </div>

      {/* Controls */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          {/* Search */}
          <div className="relative flex-shrink-0">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-[#0f0f0f] border border-[#1e1e1e] pl-9 pr-4 py-2.5 font-mono text-sm text-white/70 placeholder-white/25 outline-none focus:border-[#00e5ff]/30 w-64 transition-colors"
            />
          </div>

          {/* Category filters */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <Filter size={12} className="text-white/30 mr-1" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-mono text-xs tracking-widest px-3 py-1.5 transition-all border ${
                  activeCategory === cat
                    ? 'bg-[#00e5ff] text-black border-[#00e5ff]'
                    : 'text-white/40 border-[#1e1e1e] hover:border-[#00e5ff]/30 hover:text-[#00e5ff]'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Result count */}
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <span className="font-mono text-xs text-white/30 tracking-widest">
          {filtered.length} PROJECT{filtered.length !== 1 ? 'S' : ''} FOUND
        </span>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6">
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <div className="font-mono text-4xl text-white/10 mb-4">[ ]</div>
            <p className="font-mono text-sm text-white/30">No projects match your filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((project, i) => (
              <Link key={project.slug} href={`/projects/${project.slug}`}>
                <div
                  className="glass-card card-hover group h-full overflow-hidden relative"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover opacity-75 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141414] to-transparent" />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="tag-pill">{project.category}</span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className={`font-mono text-xs px-2 py-0.5 ${
                        project.status === 'Ongoing'
                          ? 'bg-green-500/20 border border-green-500/30 text-green-400'
                          : 'bg-white/10 border border-white/20 text-white/50'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="font-mono text-xs text-white/30">{tag}</span>
                      ))}
                    </div>
                    <h3 className="font-display text-base font-semibold leading-snug mb-2 group-hover:text-[#00e5ff] transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-white/40 text-xs leading-relaxed line-clamp-2 mb-4">{project.shortDesc}</p>

                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-white/25">{project.date}</span>
                      <div className="flex items-center gap-1 font-mono text-xs text-[#00e5ff] opacity-0 group-hover:opacity-100 transition-opacity">
                        VIEW <ArrowRight size={10} />
                      </div>
                    </div>
                  </div>

                  {/* bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-[#00e5ff] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* CAD GALLERY */}
      <div id="cad-gallery" className="max-w-7xl mx-auto px-6 mt-24 pt-16 border-t border-[#1e1e1e]">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-px bg-[#00e5ff]" />
            <span className="font-mono text-xs tracking-widest text-[#00e5ff] uppercase">3D Modelling</span>
          </div>
          <h2 className="font-display text-4xl font-bold">SolidWorks & CAD Gallery</h2>
          <p className="text-white/40 text-sm font-mono mt-2 tracking-wide">50+ models across academic and industry projects</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-24">
          {cadProjects.map((item, i) => (
            <Link key={item.slug} href={`/cad/${item.slug}`}>
              <div
                className="glass-card card-hover group relative overflow-hidden h-full"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="relative overflow-hidden h-52">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover opacity-75 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="tag-pill">{item.tags[0]}</span>
                  </div>
                  <div className="absolute top-0 right-0 w-8 h-8 border-r border-t border-[#00e5ff]/0 group-hover:border-[#00e5ff]/60 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-l border-b border-[#00e5ff]/0 group-hover:border-[#00e5ff]/60 transition-all duration-500" />
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {item.tools.map((tool) => (
                      <span key={tool} className="font-mono text-xs text-white/30">{tool}</span>
                    ))}
                  </div>
                  <h3 className="font-display text-base font-semibold leading-snug group-hover:text-[#00e5ff] transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between mt-3">
                    <span className="font-mono text-xs text-white/25">{item.date}</span>
                    <div className="flex items-center gap-1 font-mono text-xs text-[#00e5ff] opacity-0 group-hover:opacity-100 transition-opacity">
                      VIEW <ArrowRight size={10} />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-[#00e5ff] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
