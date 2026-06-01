import { ExternalLink, FileText, Users, Presentation, BookOpen } from 'lucide-react'

export const metadata = {
  title: 'Activities | Asiri Sandakelum',
  description: 'Activities work, technical presentations, and IEEE activities.',
}

const research = [
  {
    type: 'Research Project',
    icon: 'research',
    title: 'Active Knee Exoskeleton for Osteoarthritis Treatment',
    status: 'Ongoing',
    description:
      'Investigation of polycentric linkage mechanisms optimized via Genetic Algorithm to replicate the knee\'s Instantaneous Center of Rotation. Achieving sub-millimeter ICR tracking error (0.47 mm) through multi-objective GA optimization in MATLAB.',
    topics: ['Biomechanics', 'Kinematics', 'Genetic Algorithm', 'Impedance Control', 'FSM Gait Detection'],
    supervisedBy: 'Department of Mechanical Engineering, UoM',
    tools: 'MATLAB · SolidWorks · Genetic Algorithm',
  },
  {
    type: 'Industrial Case Study',
    icon: 'industry',
    title: 'Carbon Dust Filtration System — AeroSIX Plate Cutting Area',
    status: 'Completed',
    description:
      'Conducted a detailed case study on airborne carbon fiber particle risk at Future Fibres Lanka. Designed a sealed negative-pressure HEPA filtration room addressing occupational health risks in composite manufacturing environments.',
    topics: ['Occupational Safety', 'HEPA Filtration', 'Industrial Hygiene', 'Composite Manufacturing'],
    supervisedBy: 'Future Fibres Lanka (Pvt) Ltd',
    tools: 'AutoCAD · Engineering Calculations',
  },
  {
    type: 'Feasibility Study',
    icon: 'research',
    title: 'STEM Development & Experiment Kit — Feasibility Study',
    status: 'Completed',
    description:
      'Comprehensive three-pillar feasibility study (market, technical, financial) for an eco-friendly STEM experiment kit targeting primary school children in Sri Lanka. Includes NPV, IRR, risk matrix, and Gantt-based project scheduling.',
    topics: ['STEM Education', 'Market Analysis', 'Financial Modelling', 'Risk Assessment', 'Entrepreneurship'],
    supervisedBy: 'University of Moratuwa',
    tools: 'MS Excel · Power BI · Risk Matrices',
  },
  {
    type: 'Industrial Case Study',
    icon: 'industry',
    title: 'Operational Throughput Optimization — Abans Auto (Pvt) Ltd',
    status: 'Ongoing',
    description:
      'Analysis of Hero Motorcycle Assembly Plant operations identifying bottlenecks in PDI/QC (75 min/unit) and material handling waste (90 min/batch). Proposing facility layout optimization and dedicated functional test track.',
    topics: ['Lean Manufacturing', 'VSM', 'Facility Layout', 'Industrial Engineering'],
    supervisedBy: 'Abans Auto (Pvt) Ltd',
    tools: 'AutoCAD · Simulation · Lean Tools',
  },
]

const ieee = [
  {
    role: 'Vice Chairman',
    org: 'IEEE Robotics and Automation Society (RAS), UoM Chapter',
    period: 'Nov 2024 – Oct 2025',
    description: 'Executive decision-making and strategic planning. Mentored junior committees in event execution and technical project management.',
  },
  {
    role: 'Co-Chair — BatTalk 2.0',
    org: 'IEEE RAS, University of Moratuwa',
    period: 'Mar – Oct 2024',
    description: 'Directed planning and execution of a flagship technical talk series on AI/ML job dynamics in collaboration with industry experts and university faculty.',
  },
  {
    role: 'Programme & Logistics Committee Lead — MORA NexGen 1.0',
    org: 'IEEE RAS, University of Moratuwa',
    period: 'Jan – Mar 2024',
    description: 'Led end-to-end event logistics for a high-profile robotics competition targeting school students.',
  },
]

export default function ResearchPage() {
  return (
    <div className="min-h-screen pt-24 pb-32">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-px bg-[#00e5ff]" />
            <span className="font-mono text-xs tracking-widest text-[#00e5ff] uppercase">Academic & Professional</span>
          </div>
          <h1 className="font-display text-5xl font-bold mb-4">Activities</h1>
          <p className="text-white/50 max-w-2xl leading-relaxed">
            Engineering research spanning wearable robotics, biomechanics, composite manufacturing, and industrial optimization — driven by real-world impact.
          </p>
        </div>

        {/* Research projects */}
        <div className="mb-16">
          <SectionHeader icon={<FileText size={14} />} label="Research & Case Studies" />
          <div className="flex flex-col gap-4">
            {research.map((item, i) => (
              <div key={i} className="border border-[#1e1e1e] bg-[#0f0f0f] p-6 hover:border-[#00e5ff]/20 transition-colors group">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className={`font-mono text-xs px-2 py-0.5 border ${
                      item.type === 'Research Project'
                        ? 'text-[#00e5ff] border-[#00e5ff]/30 bg-[#00e5ff]/10'
                        : item.type === 'Feasibility Study'
                        ? 'text-purple-400 border-purple-500/30 bg-purple-500/10'
                        : 'text-amber-400 border-amber-500/30 bg-amber-500/10'
                    }`}>
                      {item.type.toUpperCase()}
                    </span>
                    <span className={`font-mono text-xs px-2 py-0.5 ${
                      item.status === 'Ongoing'
                        ? 'text-green-400 border border-green-500/30 bg-green-500/10'
                        : 'text-white/40 border border-white/10'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                </div>

                <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-[#00e5ff] transition-colors">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{item.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {item.topics.map((topic) => (
                    <span key={topic} className="tag-pill">{topic}</span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 text-xs font-mono">
                  <div>
                    <span className="text-white/30">Supervised by: </span>
                    <span className="text-white/60">{item.supervisedBy}</span>
                  </div>
                  <div>
                    <span className="text-white/30">Tools: </span>
                    <span className="text-white/60">{item.tools}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* IEEE Activities */}
        <div className="mb-16">
          <SectionHeader icon={<Users size={14} />} label="IEEE Activities" />
          <div className="flex flex-col gap-3">
            {ieee.map((item, i) => (
              <div key={i} className="border border-[#1e1e1e] bg-[#0f0f0f] p-5 hover:border-[#00e5ff]/20 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <span className="font-display text-base font-semibold">{item.role}</span>
                    <div className="font-mono text-xs text-[#00e5ff]/70 mt-0.5">{item.org}</div>
                  </div>
                  <span className="font-mono text-xs text-white/35 flex-shrink-0">{item.period}</span>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Resources & Links */}
        <div>
          <SectionHeader icon={<BookOpen size={14} />} label="Profiles & Resources" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                label: 'LinkedIn Profile',
                desc: 'Professional network and project updates',
                href: 'https://www.linkedin.com/in/asiri-sandakelum',
              },
              {
                label: 'GrabCAD Portfolio',
                desc: 'Published CAD models and engineering designs',
                href: 'https://grabcad.com/asiri.sandakelum-1/models',
              },
              {
                label: 'MATLAB Certificate',
                desc: 'MathWorks Academy — Onramp & Simulink',
                href: 'https://matlabacademy.mathworks.com/progress/share/certificate.html?id=548fbb90-e695-49b8-b549-d7f93af10c0b&',
              },
            ].map(({ label, desc, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#1e1e1e] bg-[#0f0f0f] p-4 hover:border-[#00e5ff]/20 transition-colors group flex items-center justify-between"
              >
                <div>
                  <div className="font-display text-sm font-medium group-hover:text-[#00e5ff] transition-colors">{label}</div>
                  <div className="font-mono text-xs text-white/35 mt-0.5">{desc}</div>
                </div>
                <ExternalLink size={12} className="text-white/25 group-hover:text-[#00e5ff] transition-colors flex-shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function SectionHeader({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="text-[#00e5ff]">{icon}</span>
      <h2 className="font-mono text-xs tracking-widest text-[#00e5ff] uppercase">{label}</h2>
      <div className="flex-1 h-px bg-[#1e1e1e]" />
    </div>
  )
}
export const dynamic = 'force-dynamic'
