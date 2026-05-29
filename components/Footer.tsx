import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-[#1e1e1e] mt-32">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6 border border-[#00e5ff] relative flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-[#00e5ff]" />
              </div>
              <span className="font-mono text-sm tracking-widest text-white/60">ASIRI Portfolio</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Mechanical Engineering undergraduate at the University of Moratuwa. Building at the intersection of robotics, biomechanics, and embedded systems.
            </p>
          </div>
          <div>
            <h4 className="font-mono text-xs tracking-widest text-[#00e5ff] uppercase mb-4">Navigation</h4>
            <div className="flex flex-col gap-2">
              {['/', '/projects', '/research', '/resume', '/contact'].map((href, i) => (
                <Link
                  key={href}
                  href={href}
                  className="text-white/40 text-sm hover:text-[#00e5ff] transition-colors font-mono"
                >
                  {['Home', 'Projects', 'Research', 'Resume', 'Contact'][i]}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-mono text-xs tracking-widest text-[#00e5ff] uppercase mb-4">Connect</h4>
            <div className="flex flex-col gap-2">
              <a href="mailto:sadakelumasiri@gmail.com" className="text-white/40 text-sm hover:text-[#00e5ff] transition-colors font-mono">
                sadakelumasiri@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/asiri-sandakelum"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 text-sm hover:text-[#00e5ff] transition-colors font-mono"
              >
                linkedin.com/in/asiri-sandakelum
              </a>
              <a href="tel:+94719339051" className="text-white/40 text-sm hover:text-[#00e5ff] transition-colors font-mono">
                +94 71 933 9051
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-[#1e1e1e] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-white/25 tracking-widest">
            © {year} ASIRI SANDAKELUM — ALL RIGHTS RESERVED
          </p>
          <p className="font-mono text-xs text-white/25 tracking-widest">
            MECHANICAL ENGINEERING — UNIVERSITY OF MORATUWA
          </p>
        </div>
      </div>
    </footer>
  )
}
