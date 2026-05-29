'use client'
import { useState } from 'react'
import { Mail, Phone, Linkedin, Github, Download, Send, MapPin, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate submit — replace with real email API (EmailJS, Resend, etc.)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen pt-24 pb-32">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-px bg-[#00e5ff]" />
            <span className="font-mono text-xs tracking-widest text-[#00e5ff] uppercase">Get in Touch</span>
          </div>
          <h1 className="font-display text-5xl font-bold mb-4">Contact</h1>
          <p className="text-white/50 max-w-xl leading-relaxed">
            Open to graduate engineering positions and collaborative technical projects. Let's build something remarkable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* Availability */}
            <div className="border border-[#00e5ff]/20 bg-[#00e5ff]/5 p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="font-mono text-xs text-green-400 tracking-widest">AVAILABLE FOR OPPORTUNITIES</span>
              </div>
              <p className="text-white/50 text-sm">
                Seeking an engineering position in Mechanical Design, FEA, biomechanics, and mechatronics.
              </p>
            </div>

            {/* Direct contacts */}
            <div className="border border-[#1e1e1e] bg-[#0f0f0f] p-5 flex flex-col gap-4">
              <ContactItem icon={<Mail size={13} />} label="Email" value="sadakelumasiri@gmail.com" href="mailto:sadakelumasiri@gmail.com" />
              <ContactItem icon={<Phone size={13} />} label="Phone" value="+94 71 933 9051" href="tel:+94719339051" />
              <ContactItem icon={<MapPin size={13} />} label="Location" value="Sri Lanka" />
              <ContactItem
                icon={<Linkedin size={13} />}
                label="LinkedIn"
                value="asiri-sandakelum"
                href="https://www.linkedin.com/in/asiri-sandakelum"
                external
              />
            </div>

            {/* CV download */}
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              title="Replace href with actual CV path, e.g. /asiri-sandakelum-cv.pdf"
              className="flex items-center justify-center gap-2 border border-[#00e5ff] text-[#00e5ff] font-mono text-sm tracking-widest py-3 hover:bg-[#00e5ff] hover:text-black transition-all"
            >
              <Download size={13} /> DOWNLOAD FULL CV
            </a>

            {/* Preferred topics */}
            <div className="border border-[#1e1e1e] bg-[#0f0f0f] p-5">
              <div className="font-mono text-xs text-[#00e5ff] tracking-widest mb-3">PREFERRED TOPICS</div>
              <div className="flex flex-wrap gap-1.5">
                {['Machine Design','SOLIDWORKS','FEA',' Robotics', 'Biomechanics', 'Mechatronics', 'Embedded Systems', 'Graduate Research', 'Collaboration'].map((t) => (
                  <span key={t} className="tag-pill">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <div className="border border-[#1e1e1e] bg-[#0f0f0f] p-6 md:p-8">
              <div className="font-mono text-xs text-[#00e5ff] tracking-widest mb-6">SEND MESSAGE</div>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
                  <CheckCircle size={40} className="text-[#00e5ff]" />
                  <h3 className="font-display text-xl font-semibold">Message Sent</h3>
                  <p className="text-white/50 text-sm max-w-xs">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                    className="font-mono text-xs text-[#00e5ff] border border-[#00e5ff]/30 px-4 py-2 hover:bg-[#00e5ff]/10 transition-colors mt-2"
                  >
                    SEND ANOTHER
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="NAME" type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
                    <Field label="EMAIL" type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-white/40 tracking-widest mb-1.5">SUBJECT</label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#141414] border border-[#222] text-white/70 font-mono text-sm px-3 py-2.5 outline-none focus:border-[#00e5ff]/30 transition-colors appearance-none"
                    >
                      <option value="">Select a topic</option>
                 
                      <option value="Internship Opportunity">Job Opportunity</option>
                      <option value="Collaboration">Collaboration / Project</option>
                      <option value="Graduate Research Opportunity">Research Opportunity</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-white/40 tracking-widest mb-1.5">MESSAGE</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about the opportunity or project..."
                      className="w-full bg-[#141414] border border-[#222] text-white/70 font-mono text-sm px-3 py-2.5 outline-none focus:border-[#00e5ff]/30 transition-colors resize-none placeholder-white/20"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2 bg-[#00e5ff] text-black font-mono text-sm font-semibold tracking-widest py-3 hover:bg-white transition-colors disabled:opacity-60 disabled:cursor-not-allowed mt-2"
                  >
                    {loading ? (
                      <>
                        <div className="w-3 h-3 border border-black border-t-transparent rounded-full animate-spin" />
                        SENDING...
                      </>
                    ) : (
                      <><Send size={13} /> SEND MESSAGE</>
                    )}
                  </button>
                  <p className="font-mono text-xs text-white/25 text-center">
                    Or email directly: sadakelumasiri@gmail.com
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Field({
  label, type, name, value, onChange, placeholder, required,
}: {
  label: string; type: string; name: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string; required?: boolean
}) {
  return (
    <div>
      <label className="block font-mono text-xs text-white/40 tracking-widest mb-1.5">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full bg-[#141414] border border-[#222] text-white/70 font-mono text-sm px-3 py-2.5 outline-none focus:border-[#00e5ff]/30 transition-colors placeholder-white/20"
      />
    </div>
  )
}

function ContactItem({
  icon, label, value, href, external,
}: {
  icon: React.ReactNode; label: string; value: string; href?: string; external?: boolean
}) {
  const inner = (
    <div className="flex items-center gap-3">
      <span className="text-[#00e5ff] flex-shrink-0">{icon}</span>
      <div>
        <div className="font-mono text-xs text-white/30 tracking-widest">{label}</div>
        <div className="font-mono text-xs text-white/70 mt-0.5">{value}</div>
      </div>
    </div>
  )
  if (href) {
    return (
      <a href={href} target={external ? '_blank' : undefined} rel="noopener noreferrer"
        className="hover:text-[#00e5ff] transition-colors group">
        {inner}
      </a>
    )
  }
  return <div>{inner}</div>
}
export const dynamic = 'force-dynamic'
