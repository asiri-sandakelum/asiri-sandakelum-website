import { Download, ExternalLink, Award, BookOpen, Briefcase, Users, Wrench } from 'lucide-react'

export const metadata = {
  title: 'Resume | Asiri Sandakelum',
  description: 'Engineering resume — Mechanical Engineering undergraduate at University of Moratuwa.',
}

export default function ResumePage() {
  return (
    <div className="min-h-screen pt-24 pb-32">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-px bg-[#00e5ff]" />
              <span className="font-mono text-xs tracking-widest text-[#00e5ff] uppercase">Curriculum Vitae</span>
            </div>
            <h1 className="font-display text-5xl font-bold">Resume</h1>
          </div>
          <a
            href="/Asiri_Sandakelum_CV.pdf"
            download
            className="flex items-center gap-2 bg-[#00e5ff] text-black font-mono text-sm font-semibold tracking-widest px-6 py-3 hover:bg-white transition-colors self-start"
          >
            <Download size={14} /> DOWNLOAD CV (PDF)
          </a>
        </div>

        {/* Identity card */}
        <div className="glass-card p-8 mb-6 border border-[#00e5ff]/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="font-display text-3xl font-bold mb-1">Asiri Sandakelum</h2>
              <p className="text-white/50 text-sm mb-4">Final Year Mechanical Engineering Undergraduate</p>
              <div className="flex flex-col gap-1.5">
                <InfoRow label="Institution" value="University of Moratuwa, Sri Lanka" />
                <InfoRow label="Expected Graduation" value="2026" />
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-1.5">
                <InfoRow label="Email" value="sadakelumasiri@gmail.com" link="mailto:sadakelumasiri@gmail.com" />
                <InfoRow label="Phone" value="+94 71 933 9051" link="tel:+94719339051" />
                <InfoRow label="LinkedIn" value="asiri-sandakelum" link="https://www.linkedin.com/in/asiri-sandakelum" />
                <InfoRow label="GrabCAD" value="Models Portfolio" link="https://grabcad.com/asiri.sandakelum-1/models" />
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <Section title="Education" icon={<BookOpen size={14} />}>
          <ResumeBlock
            title="B.Sc. Engineering (Hons.) in Mechanical Engineering"
            sub="University of Moratuwa — Moratuwa, Sri Lanka"
            period="2022 – Present"
          >
            <p className="text-white/50 text-sm">Key Modules: Manufacturing Processes · PLC · Embedded Systems · Machine Design · 3D Modeling · Control Systems · Mechatronics</p>
          </ResumeBlock>
          <ResumeBlock
            title="GCE Advanced Level 2020 — Physical Science Stream"
            sub="HK/Denike National School — Rikillagaskada, Sri Lanka"
            period="2018 – 2021"
            badge="Island Rank 175th"
          >
            <p className="text-white/50 text-sm">Z-Score: 2.4781 · Combined Mathematics · Physics · Chemistry</p>
          </ResumeBlock>
        </Section>

        {/* Experience */}
        <Section title="Experience" icon={<Briefcase size={14} />}>
          <ResumeBlock
            title="Mechanical Engineering Intern"
            sub="Future Fibres Lanka (Pvt) Ltd — Biyagama EPZ, Sri Lanka"
            period="Dec 2024 – May 2025"
            badge="Industry"
            badgeColor="cyan"
          >
            <ul className="flex flex-col gap-1.5">
              {[
                'Advanced composite manufacturing: pultrusion, winding, braiding, PU molding for carbon fiber rigging systems',
                'Redesigned Bobbin Winding Tensioner in SolidWorks — resolved roller misalignment, improved yarn tension consistency',
                'Carbon dust filtration case study for AeroSIX plate cutting area — designed sealed HEPA filtration room',
                'Developed IoT Temperature & Humidity Monitoring System using ESP32, DHT22, DS18B20, and ThingSpeak',
                'Preventive maintenance scheduling, CMMS implementation, AutoCAD layout drafting, 5S standardization',
              ].map((item, i) => <BulletItem key={i}>{item}</BulletItem>)}
            </ul>
          </ResumeBlock>
        </Section>

        {/* Leadership */}
        <Section title="Leadership & Volunteering" icon={<Users size={14} />}>
          <ResumeBlock
            title="Student Representative"
            sub="Department of Mechanical Engineering, University of Moratuwa"
            period="Final Academic Year"
            badge="Leadership"
            badgeColor="purple"
          >
            <ul className="flex flex-col gap-1.5">
              {[
                'Primary liaison between Department administration and student body — negotiated schedules and resolved grievances',
                'Coordinated departmental career fairs and industry networking sessions',
                'Led planning of extracurricular events and professional development workshops',
                'Developed centralized communication framework — 100% information reach',
              ].map((item, i) => <BulletItem key={i}>{item}</BulletItem>)}
            </ul>
          </ResumeBlock>

          <ResumeBlock
            title="Vice Chairman"
            sub="IEEE Robotics and Automation Society (RAS), University of Moratuwa"
            period="Nov 2024 – Oct 2025"
            badge="IEEE"
            badgeColor="purple"
          >
            <ul className="flex flex-col gap-1.5">
              {[
                'Spearheaded executive decision-making and strategic planning for the chapter',
                'Mentored junior committees in event execution and technical project management',
                'Co-Chair, BatTalk 2.0 — AI/ML job dynamics talk series (Mar – Oct 2024)',
                'Programme & Logistics Committee Lead, MORA NexGen 1.0 (Jan – Mar 2024)',
              ].map((item, i) => <BulletItem key={i}>{item}</BulletItem>)}
            </ul>
          </ResumeBlock>

          <ResumeBlock
            title="District Coordinator, Nuwara Eliya"
            sub="Sasnaka Sansada Foundation"
            period="Mar 2024 – Dec 2024"
            badge="NGO"
            badgeColor="green"
          >
            <ul className="flex flex-col gap-1.5">
              {[
                'Oversaw district-level operations and volunteer recruitment for community outreach programs',
                'Ganitha Sawiya Coordinator — organized 50+ mathematics seminars for school students in Nuwara Eliya District',
              ].map((item, i) => <BulletItem key={i}>{item}</BulletItem>)}
            </ul>
          </ResumeBlock>

          <ResumeBlock
            title="Exhibit Coordinator"
            sub="EXMO 2023, University of Moratuwa"
            period="Apr – Jul 2023"
            badge="Event"
          >
            <ul className="flex flex-col gap-1.5">
              <BulletItem>Curated and managed mechanical engineering exhibits for the university's premier national engineering exhibition</BulletItem>
            </ul>
          </ResumeBlock>
        </Section>

        {/* Skills */}
        <Section title="Skills" icon={<Wrench size={14} />}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { label: 'CAD & 3D Modeling', value: 'SolidWorks · Fusion 360 · Solid Edge · AutoCAD' },
              { label: 'Simulation & Analysis', value: 'ANSYS · MATLAB · FEA · Genetic Algorithm' },
              { label: 'Programming', value: 'Python · C++ · Arduino IDE' },
              { label: 'IoT & Embedded', value: 'ESP32 · DHT22 · DS18B20 · ThingSpeak · Node-RED · MQTT · Teensy 4.1' },
              { label: 'Manufacturing', value: 'Composite processes (pultrusion, braiding, winding, molding) · CNC · Sheet metal · Welding · 3D Printing' },
              { label: 'Software', value: 'MS Office · Photoshop · DaVinci Resolve · After Effects' },
              { label: 'Languages', value: 'English (Professional) · Sinhala (Native)' },
              { label: 'Soft Skills', value: 'Leadership · Teamwork · Public Speaking · Technical Documentation' },
            ].map(({ label, value }) => (
              <div key={label} className="border border-[#1e1e1e] bg-[#0f0f0f] p-4 hover:border-[#00e5ff]/20 transition-colors">
                <div className="font-mono text-xs text-[#00e5ff] tracking-widest mb-2">{label.toUpperCase()}</div>
                <div className="text-white/60 text-sm leading-relaxed">{value}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* Certifications */}
        <Section title="Certifications" icon={<Award size={14} />}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { name: 'MATLAB Onramp & Simulink', issuer: 'MathWorks Academy', link: 'https://matlabacademy.mathworks.com/progress/share/certificate.html?id=548fbb90-e695-49b8-b549-d7f93af10c0b&' },
              { name: 'Python Programming', issuer: 'Online Certification', link: 'https://drive.google.com/file/d/1lyC1qEx1WV3fqynkttyYN5w6n_P3NmmH/view' },
              { name: 'C++ Programming', issuer: 'Online Certification', link: 'https://drive.google.com/file/d/1ewMlpgbHXMqq3ETI29gX23VfPWdHO5sn/view?usp=sharing' },
            ].map(({ name, issuer, link }) => (
              <a
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#1e1e1e] bg-[#0f0f0f] p-4 hover:border-[#00e5ff]/20 transition-colors group flex items-center justify-between"
              >
                <div>
                  <div className="font-display text-sm font-medium group-hover:text-[#00e5ff] transition-colors">{name}</div>
                  <div className="font-mono text-xs text-white/40 mt-1">{issuer}</div>
                </div>
                <ExternalLink size={12} className="text-white/25 group-hover:text-[#00e5ff] transition-colors flex-shrink-0" />
              </a>
            ))}
          </div>
        </Section>

      </div>
    </div>
  )
}

function Section({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-5">
        <span className="text-[#00e5ff]">{icon}</span>
        <h2 className="font-mono text-xs tracking-widest text-[#00e5ff] uppercase">{title}</h2>
        <div className="flex-1 h-px bg-[#1e1e1e]" />
      </div>
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  )
}

function ResumeBlock({
  title, sub, period, badge, badgeColor = 'default', children,
}: {
  title: string; sub: string; period: string; badge?: string; badgeColor?: string; children?: React.ReactNode
}) {
  const color = badgeColor === 'cyan' ? 'text-[#00e5ff] border-[#00e5ff]/30 bg-[#00e5ff]/10' :
    badgeColor === 'purple' ? 'text-purple-400 border-purple-500/30 bg-purple-500/10' :
    badgeColor === 'green' ? 'text-green-400 border-green-500/30 bg-green-500/10' :
    'text-white/50 border-white/20 bg-white/5'

  return (
    <div className="border border-[#1e1e1e] bg-[#0f0f0f] p-5 hover:border-[#00e5ff]/15 transition-colors">
      <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="font-display text-base font-semibold">{title}</h3>
          {badge && <span className={`font-mono text-xs px-2 py-0.5 border ${color}`}>{badge}</span>}
        </div>
        <span className="font-mono text-xs text-white/35 flex-shrink-0">{period}</span>
      </div>
      <p className="font-mono text-xs text-[#00e5ff]/70 mb-3">{sub}</p>
      {children}
    </div>
  )
}

function BulletItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-white/50 text-sm">
      <span className="text-[#00e5ff]/50 mt-1.5 flex-shrink-0">—</span>
      {children}
    </li>
  )
}

function InfoRow({ label, value, link }: { label: string; value: string; link?: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-xs text-white/30 w-28 flex-shrink-0">{label}</span>
      {link ? (
        <a href={link} target={link.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
          className="font-mono text-xs text-white/60 hover:text-[#00e5ff] transition-colors truncate">
          {value}
        </a>
      ) : (
        <span className="font-mono text-xs text-white/60">{value}</span>
      )}
    </div>
  )
}
export const dynamic = 'force-dynamic'
