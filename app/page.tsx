'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Download, Mail, ChevronDown, ExternalLink, Cpu, Layers, Settings, Zap } from 'lucide-react'
import projects from '@/data/projects.json'

const skills = [
  { category: 'CAD & Modeling', icon: <Layers size={16} />, items: ['SolidWorks', 'Fusion 360', 'Solid Edge', 'AutoCAD'] },
  { category: 'Simulation & Analysis', icon: <Zap size={16} />, items: ['ANSYS FEA', 'MATLAB'] },
  { category: 'Programming', icon: <Cpu size={16} />, items: ['Python', 'C++', 'Arduino IDE', 'MATLAB'] },
  { category: 'IoT & Embedded', icon: <Settings size={16} />, items: ['ESP32', 'DHT22', 'ThingSpeak', 'Node-RED', 'MQTT', 'Teensy 4.1'] },
  { category: 'Manufacturing', icon: <Layers size={16} />, items: ['Composite Processes', 'CNC Machining', 'Sheet Metal', 'Welding', '3D Printing'] },
  { category: 'Soft Skills', icon: <Zap size={16} />, items: ['Leadership', 'Teamwork', 'Public Speaking', 'Technical Docs'] },
]

const experience = [
  {
    year: 'Dec 2024 – May 2025',
    role: 'Mechanical Engineering Intern',
    company: 'Future Fibres Lanka (Pvt) Ltd',
    location: 'Biyagama EPZ, Sri Lanka',
    type: 'Industry',
    highlights: [
  
       'Gained hands-on exposure to advanced composite manufacturing processes, including pultrusion, winding, braiding, and PU moulding for carbon fibre rigging systems exported globally.',
      'Redesigned a Bobbin Winding Tensioner using SolidWorks to resolve roller misalignment issues, improving yarn tension consistency and reducing yarn breakage after fabrication and testing.',
'Conducted a carbon dust filtration case study for the AeroSIX plate cutting area and designed a sealed HEPA filtration room to improve air quality and worker safety.',
'Developed an IoT-based Temperature & Humidity Monitoring System using ESP32, DHT22, and DS18B20 sensors with real-time cloud monitoring through ThingSpeak.',
'Supported preventive maintenance scheduling, CMMS implementation, AutoCAD layout drafting, and 5S standardisation activities.'
      ,
    ],
  },
  {
    year: '2022 – Present',
    role: 'B.Sc. (Hons.) Mechanical Engineering',
    company: 'University of Moratuwa',
    location: 'Moratuwa, Sri Lanka',
    type: 'Education',
    highlights: [
     
      'Manufacturing Processes,  Machine Design, 3D Modelling, Embedded Systems,' ,
      'Student Representative — Final Academic Year',
    ],
  },
  {
    year: 'Nov 2024 – Oct 2025',
    role: 'Vice Chairman',
    company: 'IEEE Robotics and Automation Society, UoM',
    location: 'University of Moratuwa',
    type: 'Leadership',
    highlights: [
      'Strategic planning for one of the university\'s most active technical chapters',
      'Mentored junior committees in event execution and technical project management',
      'Co-Chair, BatTalk 2.0 — AI/ML job dynamics talk series',
    ],
  },
  {
    year: 'Mar 2024 – Dec 2024',
    role: 'District Coordinator',
    company: 'Sasnaka Sansada Foundation',
    location: 'Nuwara Eliya District',
    type: 'Volunteering',
    highlights: [
      'Oversaw district-level operations and volunteer recruitment',
      'Ganitha Sawiya Coordinator — 50+ mathematics seminars for school students',
    ],
  },
]


const typewriterWords = [ 'Manufacturing','Biomechanics', 'Mechatronics','Robotics', 'Embedded Systems', 'Product Design']

function TypewriterText() {
  const [wordIndex, setWordIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = typewriterWords[wordIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else {
      setDeleting(false)
      setWordIndex((prev) => (prev + 1) % typewriterWords.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, wordIndex])

  return (
    <span className="text-[#00e5ff]">
      {displayed}
      <span className="cursor">|</span>
    </span>
  )
}

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return <div ref={ref} className={`section-reveal ${className}`}>{children}</div>
}

export default function Home() {
  const featured = projects.filter((p) => p.featured)

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center grid-bg overflow-hidden">
        {/* Radial glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.05) 0%, transparent 70%)' }}
          />
          <div className="absolute top-0 right-0 w-96 h-96 opacity-10"
            style={{ background: 'radial-gradient(circle, #00e5ff 0%, transparent 60%)' }} />
          <div className="absolute bottom-0 left-0 w-64 h-64 opacity-5"
            style={{ background: 'radial-gradient(circle, #00e5ff 0%, transparent 60%)' }} />
        </div>

        {/* Corner decorations */}
        <div className="absolute top-20 left-6 w-12 h-12 border-l border-t border-[#00e5ff]/30" />
        <div className="absolute top-20 right-6 w-12 h-12 border-r border-t border-[#00e5ff]/30" />
        <div className="absolute bottom-20 left-6 w-12 h-12 border-l border-b border-[#00e5ff]/30" />
        <div className="absolute bottom-20 right-6 w-12 h-12 border-r border-b border-[#00e5ff]/30" />

        <div className="max-w-7xl mx-auto px-6 pt-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              {/* Status badge */}
              <div className="inline-flex items-center gap-2 border border-[#00e5ff]/30 bg-[#00e5ff]/5 px-3 py-1.5 mb-8">
                <div className="w-1.5 h-1.5 bg-[#00e5ff] rounded-full animate-pulse" />
                <span className="font-mono text-xs tracking-widest text-[#00e5ff]">
                  AVAILABLE FOR INDUSTRY OPPORTUNITIES
                </span>
              </div>

              <h1 className="font-display font-bold leading-none mb-4" style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)' }}>
                <span className="text-white">Asiri</span>
                <br />
                <span className="gradient-text">Sandakelum</span>
              </h1>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#00e5ff]" />
                <p className="font-mono text-xs tracking-widest text-white/50 uppercase">
                  Mechanical Engineering Undergraduate
                </p>
              </div>

              <p className="text-white/60 text-lg mb-3 font-sans leading-relaxed">
                Engineering at the intersection of
              </p>
              <p className="font-display text-2xl font-semibold mb-8">
                <TypewriterText />
              </p>
              <p className="text-white/50 text-sm leading-relaxed mb-10 max-w-md">
 Mechanical Engineer focused on optimizing physical systems and streamlining industrial environments. My core expertise spans CAD design, structural analysis (FEA), and manufacturing engineering. By combining technical simulation skills with strategic industrial project management, I resolve production bottlenecks and drive operational excellence in full-time engineering roles.</p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="flex items-center gap-2 bg-[#00e5ff] text-black font-mono text-sm font-semibold tracking-widest px-6 py-3 hover:bg-white transition-colors"
                >
                  VIEW PROJECTS <ArrowRight size={14} />
                </Link>
                <a
                  href="/resume"
                  className="flex items-center gap-2 border border-white/20 text-white/70 font-mono text-sm tracking-widest px-6 py-3 hover:border-[#00e5ff] hover:text-[#00e5ff] transition-all"
                >
                  <Download size={14} /> RESUME
                </a>

                <a
                  href="/projects#cad-gallery"
                  className="flex items-center gap-2 border border-[#00e5ff]/30 text-[#00e5ff]/70 font-mono text-sm tracking-widest px-6 py-3 hover:border-[#00e5ff] hover:text-[#00e5ff] transition-all"
                >
                  <Layers size={14} /> VIEW CAD GALLERY
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mt-12 pt-12 border-t border-[#1e1e1e]">
                <div>
                  <p className="font-display text-3xl font-bold text-[#00e5ff]">11+</p>
                  <p className="font-mono text-xs text-white/40 tracking-widest mt-1 uppercase">Projects</p>
                </div>
                <a href="/projects#cad-gallery" className="group cursor-pointer">
                  <p className="font-display text-3xl font-bold text-[#00e5ff] group-hover:text-white transition-colors">6+</p>
                  <p className="font-mono text-xs text-white/40 tracking-widest mt-1 uppercase group-hover:text-[#00e5ff] transition-colors">CAD Models</p>
                </a>
              </div>
            </div>

            {/* Right side — portrait card */}
            <div className="flex items-center justify-center relative mt-12 lg:mt-0">
              <div className="relative w-full max-w-lg mx-auto">
                {/* Main portrait card */}
                <div className="relative border border-[#1e1e1e] bg-[#0f0f0f] overflow-hidden">
                  <Image
                    src="/portrait.jpeg"
                    alt="Portrait of Asiri Sandakelum"
                    width={700}
                    height={900}
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="w-full h-[520px] sm:h-[580px] md:h-[640px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="font-mono text-xs text-[#00e5ff] tracking-widest mb-1">PERSONAL PROFILE</div>
                    <div className="font-display text-base font-semibold">Asiri Sandakelum</div>
                    <div className="font-mono text-xs text-white/40 mt-1">Mechanical Engineering Undergraduate</div>
                  </div>
                </div>

                {/* Floating cards */}
                <div className="absolute -top-4 -right-4 bg-[#0f0f0f] border border-[#1e1e1e] p-3 w-36">
                  <div className="font-mono text-xs text-white/40 mb-1">INSTITUTION</div>
                  <div className="font-display text-xs font-semibold">University of Moratuwa</div>
                  <div className="w-full h-px bg-[#00e5ff]/30 mt-2" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="font-mono text-xs text-white/30 tracking-widest">SCROLL</div>
          <ChevronDown size={16} className="text-white/30" />
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <AnimatedSection>
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-px bg-[#00e5ff]" />
                <span className="font-mono text-xs tracking-widest text-[#00e5ff] uppercase">Highlighted Work</span>
              </div>
              <h2 className="font-display text-4xl font-bold">Featured Projects</h2>
            </div>
            <Link
              href="/projects"
              className="hidden md:flex items-center gap-2 font-mono text-xs tracking-widest text-white/50 hover:text-[#00e5ff] transition-colors border border-[#1e1e1e] hover:border-[#00e5ff]/30 px-4 py-2"
            >
              ALL PROJECTS <ArrowRight size={12} />
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((project, i) => (
            <AnimatedSection key={project.slug} className={i === 0 ? 'md:col-span-1' : ''}>
              <Link href={`/projects/${project.slug}`}>
                <div className="glass-card card-hover h-full group relative overflow-hidden">
                  <div className={`relative overflow-hidden ${i === 0 ? 'h-64' : 'h-48'}`}>
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover opacity-75 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141414] to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="tag-pill">{project.category}</span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className={`font-mono text-xs px-2 py-0.5 ${
                        project.status === 'Ongoing'
                          ? 'bg-green-500/20 border border-green-500/30 text-green-400'
                          : 'bg-white/10 border border-white/20 text-white/60'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="font-mono text-xs text-white/30">{tag}</span>
                      ))}
                    </div>
                    <h3 className={`font-display font-semibold leading-snug mb-2 group-hover:text-[#00e5ff] transition-colors text-base`}>
                      {project.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed line-clamp-2">{project.shortDesc}</p>
                    <div className="flex items-center gap-2 mt-4 font-mono text-xs text-[#00e5ff] opacity-0 group-hover:opacity-100 transition-opacity">
                      VIEW CASE STUDY <ArrowRight size={11} />
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-6 text-center md:hidden">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-[#00e5ff] border border-[#00e5ff]/30 px-6 py-3"
          >
            ALL PROJECTS <ArrowRight size={12} />
          </Link>
        </div>
      </section>

      {/* SKILLS */}
      <section className="border-y border-[#1e1e1e] py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-px bg-[#00e5ff]" />
              <span className="font-mono text-xs tracking-widest text-[#00e5ff] uppercase">Capabilities</span>
            </div>
            <h2 className="font-display text-4xl font-bold mb-12">Skills & Tools</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill, i) => (
              <AnimatedSection key={skill.category}>
                <div className="glass-card p-5 h-full hover:border-[#00e5ff]/30 transition-all duration-300"
                  style={{ transitionDelay: `${i * 60}ms` }}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[#00e5ff]">{skill.icon}</span>
                    <span className="font-mono text-xs tracking-widest text-[#00e5ff] uppercase">{skill.category}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span key={item} className="text-white/60 text-xs border border-[#1e1e1e] px-2 py-1 font-mono hover:border-[#00e5ff]/30 hover:text-white transition-all">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE TIMELINE */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-px bg-[#00e5ff]" />
            <span className="font-mono text-xs tracking-widest text-[#00e5ff] uppercase">Background</span>
          </div>
          <h2 className="font-display text-4xl font-bold mb-12">Experience & Education</h2>
        </AnimatedSection>

        <div className="relative">
          {/* timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-[#1e1e1e] ml-px hidden md:block" />

          <div className="flex flex-col gap-8">
            {experience.map((item, i) => (
              <AnimatedSection key={i}>
                <div className="md:pl-10 relative">
                  {/* dot */}
                  <div className="absolute left-0 top-4 w-2.5 h-2.5 border-2 border-[#00e5ff] bg-[#080808] hidden md:block -translate-x-1" />

                  <div className="glass-card p-6 hover:border-[#00e5ff]/20 transition-colors">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <span className={`font-mono text-xs tracking-widest px-2 py-0.5 mr-2 ${
                          item.type === 'Industry' ? 'bg-[#00e5ff]/10 text-[#00e5ff] border border-[#00e5ff]/20' :
                          item.type === 'Education' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                          item.type === 'Leadership' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' :
                          'bg-green-500/10 text-green-400 border border-green-500/20'
                        }`}>
                          {item.type.toUpperCase()}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-white/40">{item.year}</span>
                    </div>
                    <h3 className="font-display text-lg font-semibold mb-0.5">{item.role}</h3>
                    <p className="font-mono text-xs text-[#00e5ff] tracking-wide mb-3">{item.company} — {item.location}</p>
                    <ul className="flex flex-col gap-1">
                      {item.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-2 text-white/50 text-sm">
                          <span className="text-[#00e5ff]/60 mt-1.5 flex-shrink-0">—</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <AnimatedSection>
          <div className="relative border border-[#00e5ff]/20 bg-[#00e5ff]/5 p-12 text-center overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="absolute top-0 left-0 w-16 h-16 border-l border-t border-[#00e5ff]/30" />
            <div className="absolute top-0 right-0 w-16 h-16 border-r border-t border-[#00e5ff]/30" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-l border-b border-[#00e5ff]/30" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-r border-b border-[#00e5ff]/30" />
            <div className="relative">
              <div className="font-mono text-xs tracking-widest text-[#00e5ff] mb-4">LET'S BUILD SOMETHING REMARKABLE</div>
              <h2 className="font-display text-4xl font-bold mb-4">Open to Opportunities</h2>
              <p className="text-white/50 max-w-lg mx-auto mb-8 text-sm leading-relaxed">
                Seeking mechanical engineering roles and collaborative projects. Let's connect and build something great.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/asiri-sandakelum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#00e5ff] text-black font-mono text-sm font-semibold tracking-widest px-8 py-3 hover:bg-white transition-colors"
                >
                  <ExternalLink size={14} /> CONNECT ON LINKEDIN
                </a>
                <a
                  href="https://www.linkedin.com/in/asiri-sandakelum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-white/20 text-white/70 font-mono text-sm tracking-widest px-8 py-3 hover:border-[#00e5ff] hover:text-[#00e5ff] transition-all"
                >
                  <ExternalLink size={14} /> LINKEDIN
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  )
}
