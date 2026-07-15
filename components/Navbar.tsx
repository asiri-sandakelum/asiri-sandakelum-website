'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/research', label: 'Activities' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(8,8,8,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-7 h-7 border border-[#00e5ff] relative flex items-center justify-center">
              <div className="w-3 h-3 bg-[#00e5ff]" />
              <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 border border-[#00e5ff]" />
            </div>
            <span className="font-mono text-sm tracking-widest text-white/80 group-hover:text-[#00e5ff] transition-colors">
              ASIRI<span className="text-[#00e5ff]"> </span>Portfolio
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative font-mono text-xs tracking-widest uppercase transition-colors"
                style={{
                  color: pathname === link.href ? '#00e5ff' : 'rgba(255,255,255,0.5)',
                }}
              >
                {pathname === link.href && (
                  <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#00e5ff] rounded-full" />
                )}
                {link.label}
              </Link>
            ))}
            <a
              href="/resume"
              className="border border-[#00e5ff] text-[#00e5ff] font-mono text-xs tracking-widest px-4 py-1.5 hover:bg-[#00e5ff] hover:text-black transition-all duration-200"
            >
              ABOUT ME
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white/70 hover:text-[#00e5ff] transition-colors"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-40 menu-backdrop flex flex-col items-center justify-center gap-8 pt-16">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-2xl tracking-widest uppercase"
              style={{ color: pathname === link.href ? '#00e5ff' : 'rgba(255,255,255,0.7)' }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
