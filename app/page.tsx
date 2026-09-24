'use client'

import { useEffect, useState } from 'react'
import {
  ArrowDownRight,
  ArrowUp,
  ArrowUpRight,
  Code2,
  BriefcaseBusiness,
  ExternalLink,
  Mail,
  Menu,
  X,
} from 'lucide-react'

// const portrait = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Siddarthan-LuEtV1NF4KbQPublUeqTyXUyoiqbAE.png'
const portrait = '/Siddarthan.png'
// const hackathonImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Lw7iMr2kTNVIDWBKUn6jx7H47abABJ.png'
const hackathonImage = '/Hackathon-2025.jpg'

const projects = [
  {
    number: '01',
    title: 'Enterprise Discovery-to-Delivery Engine',
    type: 'AI / Enterprise Platform',
    description:
      'An AI-powered Statement-of-Work platform that turns scattered enterprise knowledge into validated, AI-reviewed delivery plans.',
    detail:
      'Built hybrid Vector + Graph RAG with multi-agent GRC validation, risk analysis, approvals, explainable Q&A, Neo4j, pgvector, Sentence Transformers, Ollama, Gemini, and Jira REST integration.',
    stack: 'Next.js · FastAPI · PostgreSQL · pgvector · Neo4j · Docker',
    hrefs: ['https://github.com/Siddarthan999/Enterprise-Discovery-to-Delivery-Engine'],
    videoIds: ['QdaFAsbB_xo'],
  },
  {
    number: '02',
    title: 'MCP AI + Key Vault',
    type: 'Hackathon / Developer Tooling',
    description:
      'A VS Code AI developer assistant paired with a secure API key vault for safer, more useful AI workflows.',
    detail: 'Built with Next.js, Supabase, MCP, and secure credential handling.',
    stack: 'Next.js · Supabase · MCP · VS Code',
    hrefs: [
      'https://github.com/Siddarthan999/C-To-The-Prime',
      'https://github.com/Siddarthan999/C-To-The-Prime-API-Key-Vault',
    ],
    videoIds: ['rP1yjAGjHdE'],
  },
  {
    number: '03',
    title: 'debounce-zen',
    type: 'Open Source / NPM',
    description:
      'An adaptive debounce and throttle utility — a smarter, calmer alternative to lodash.debounce.',
    detail: 'A focused TypeScript package for high-frequency UI events.',
    stack: 'TypeScript · NPM · Open Source',
    hrefs: [
      'https://www.npmjs.com/package/debounce-zen',
      'https://github.com/Siddarthan999/debounce-zen',
    ],
  },
  {
    number: '04',
    title: 'Namaste Video Translator',
    type: 'Applied AI / Product',
    description:
      'A video translation experience designed to make language accessibility feel like a natural layer of media.',
    detail:
      'A practical AI product surface with a clear media workflow and end-to-end translation experience.',
    stack: 'Next.js · TypeScript · AI · Video',
    hrefs: ['https://github.com/Siddarthan999/Namaste-Video-Translator-Final'],
    videoIds: ['_y2TVYYXEVA'],
  },
  {
    number: '05',
    title: 'User-Centric Crypto Wallet',
    type: 'Web3 / Product',
    description:
      'A multi-chain wallet built around secure seed-phrase handling and live visibility into holdings.',
    detail: 'Implemented cross-chain transactions, real-time balances, and transaction updates.',
    stack: 'React · Node.js · Ethers.js · Web3.js',
    hrefs: ['https://github.com/Siddarthan999'],
  },
  {
    number: '06',
    title: 'Self-Hosted Malware Analysis Lab',
    type: 'Security / Research',
    description: 'A hands-on lab for understanding malicious behavior through controlled analysis.',
    detail:
      'Built with FlareVM, REMnUX, and VirtualBox; analyzed the Zeus Banking Trojan using YARA, Procmon, and CAPA.',
    stack: 'FlareVM · REMnUX · YARA · CAPA',
    hrefs: ['https://github.com/Siddarthan999'],
  },
]

const skillGroups = [
  ['Languages', 'Java · TypeScript · JavaScript · Python · SQL · PHP'],
  ['Frontend', 'React.js · Next.js · TypeScript · HTML5 · CSS3'],
  ['Backend & APIs', 'Node.js · FastAPI · REST APIs · WordPress · CRM Integrations'],
  ['Databases', 'PostgreSQL · Redis · Amazon RDS · pgvector · Neo4j'],
  ['Cloud & DevOps', 'AWS · Docker · GitHub Actions · Jenkins · Azure · CI/CD · Linux · Nginx · Cloudflare · RabbitMQ · SSH'],
  ['AI & LLM', 'RAG · MCP · Ollama · AI Agents · Multi-Agent Systems'],
  ['Developer Tools', 'Git · GitHub · GitHub Enterprise · Postman · VS Code'],
]

const experience = [
  {
    date: '2025 — now',
    title: 'Associate Software Engineer · Cprime',
    points: [
      'Own and maintain 3 production company websites end-to-end, including feature development, server administration, deployments, and CI/CD using AWS, Docker, Jenkins, Nginx, Cloudflare, Amazon RDS for MySQL, Redis, WordPress, and PHP.',
      'Improved organic website SEO scores from ~55% to ~97% through technical and on-page optimization, earning recognition from senior leadership.',
      "Designed and developed a CRM(Salesforce)-to-WordPress integration powering 200+ courses on the company's public-facing website, automating course additions, removals, and updates, with a custom course schedule section synced to Salesforce that automatically converts session times to each user's timezone and adjusts dates to prevent scheduling conflicts.",
      'Performed a ~5GB SQL database migration between production and staging website databases (bidirectional) without overriding existing user accounts or credentials.',
      'Supported the enterprise-wide migration of 35K+ users and 85K+ repositories from GitHub Enterprise Server to GitHub Enterprise Cloud for a major US automotive manufacturer, using automated scripts and GitHub Actions to reduce manual migration effort.',
      'Led a 6-person team in a company-wide hackathon, developing an MCP-based AI developer assistant for VS Code and a secure key vault using Next.js and Supabase, earning 2nd Runner-Up among company-wide entries.',
    ],
  },
  {
    date: '2024 — 2025',
    title: 'Software Engineer Trainee · Cprime',
    points: [
      'Built and deployed a facial-recognition attendance platform processing 300+ daily attendance events in production.',
      'Contributed across full-stack delivery, production debugging, and internal platform work.',
      'Built internal Python automation tools that processed 300K+ repository metadata, access mappings, and code ownership records in seconds, replacing hours of manual auditing work.',
    ],
  },
  {
    date: '2023',
    title: 'Cyber Security Intern · Zybeak Technologies',
    points: [
      'Performed vulnerability assessments across web applications, databases, and networks, including SQL injection testing, penetration testing, and network reconnaissance.',
      'Conducted security analysis and authored findings reports that identified key weaknesses and recommended remediation steps to improve overall security posture.',
    ],
  },
  {
    date: '2021 — 2025',
    title: 'B.E. Computer Science · Saveetha Engineering College',
    points: [
      'CGPA 8.82 / 10 · Chennai',
      'Google Developer Student Clubs logo · AI/ML Lead · Mar 2023 — Apr 2025',
      'Conducted a workshop on Docker containerization with a Python Flask application.',
    ],
  },
]

const certifications: [string, string, string | null][] = [
  [
    'Microsoft Certified: Azure Fundamentals (AZ-900)',
    'Microsoft',
    'https://learn.microsoft.com/en-us/users/siddarthannatarajan-6298/credentials/af4458603e75ca1',
  ],
  ['Microsoft Certified: Azure AI Engineer Associate', 'ICT Academy', null],
  [
    'Google Cybersecurity Professional Certificate',
    'Coursera',
    'https://coursera.org/account/accomplishments/specialization/69DZAT7X5C5L',
  ],
  ['GitHub Foundations', 'GitHub', 'https://credly.com/badges/cc6391de-391c-45da-92f9-9c561747db11/print'],
  ['Notion Certified Admin', 'Notion', 'https://credly.com/badges/c210c77b-c3ac-4147-9e6b-870122b9d739/public_url'],
  [
    'DevOps Fundamentals Course: CI/CD Automation & Cloud DevOps',
    'GUVI',
    'https://guvi.in/verify-certificate?id=301IJ61Rn7C0265k14',
  ],
  ['Social Networks', 'NPTEL', null],
]

export default function Page() {
  const [openProject, setOpenProject] = useState<string | null>(null)
  const [openExperience, setOpenExperience] = useState<string | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [showTop, setShowTop] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main className="site-shell" id="top">
      {/* ---------- Nav ---------- */}
      <nav className="nav-wrap" aria-label="Primary navigation">
        <a href="#top" className="wordmark">
          SN<span>.</span>
        </a>
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#work">Work</a>
          <a href="#experience">Journey</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-availability" href="mailto:siddarthan999@gmail.com">
          <span className="status-dot" /> Open to thoughtful work
        </a>
      </nav>

      {/* ---------- Hero ---------- */}
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Software engineer · Chennai, India</p>
          <h1>
            Systems
            <br />
            <em>with a point</em>
            <br />
            of view.
          </h1>
          <p className="hero-intro">
            I build full-stack products, developer platforms, and applied AI systems that move from
            interesting idea to useful thing.
          </p>
          <a className="scroll-cue" href="#story">
            <span className="scroll-line" /> Begin the story <ArrowDownRight size={17} />
          </a>
        </div>
        <div className="hero-portrait-wrap">
          <div className="portrait-note">
            The person
            <br />
            behind the systems <ArrowDownRight size={20} />
          </div>
          <div className="portrait-frame">
            <img src={portrait} alt="Siddarthan Natarajan in a white shirt" />
          </div>
          <p className="portrait-caption">
            Siddarthan Natarajan <span>01 / 05</span>
          </p>
        </div>
      </section>

      {/* ---------- Statement ---------- */}
      <section className="statement" id="story">
        <p className="section-kicker">01 — A working belief</p>
        <div className="statement-text">
          <p>
            Make the <span>complex</span> legible.
          </p>
          <p className="statement-muted">
            Software engineer with 2+ years of experience building enterprise developer platforms,
            DevOps automation, and AI-powered applications. I care about turning hard systems into
            useful, understandable products — from 35K+ user migrations and tools that cut hours to
            seconds, to production SEO improvements from 55% to 97%.
          </p>
        </div>
      </section>

      {/* ---------- Work / Projects ---------- */}
      <section className="work-section" id="work">
        <div className="section-heading">
          <div>
            <p className="section-kicker">02 — Independent work</p>
            <h2>
              Built to be
              <br />
              <em>used.</em>
            </h2>
          </div>
          <p className="heading-aside">
            Open each project
            <br />
            for the context <ArrowDownRight size={18} />
          </p>
        </div>

        <div className="project-list">
          {projects.map((project) => {
            const isOpen = openProject === project.number
            return (
              <article className={`project-row ${isOpen ? 'is-open' : ''}`} key={project.number}>
                <button
                  className="project-trigger"
                  onClick={() => setOpenProject(isOpen ? null : project.number)}
                  aria-expanded={isOpen}
                >
                  <span className="project-number">{project.number}</span>
                  <span className="project-title">{project.title}</span>
                  <span className="project-type">{project.type}</span>
                  <span className="project-arrow">
                    {isOpen ? <ArrowUpRight size={22} /> : <ArrowDownRight size={22} />}
                  </span>
                </button>

                <div className="project-details">
                  <div>
                    <p>{project.description}</p>
                    <p className="detail-copy">{project.detail}</p>

                    {/* Renders one embed per video ID, so each project can carry its own video(s) */}
                    {project.videoIds &&
                      project.videoIds.map((videoId) => (
                        <div className="video-wrap" key={videoId}>
                          <iframe
                            src={`https://www.youtube.com/embed/${videoId}`}
                            title={`${project.title} demo`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      ))}
                  </div>

                  <div className="project-meta">
                    <span>{project.stack}</span>
                    <div className="project-links">
                      {project.hrefs.map((href, linkIndex) => (
                        <a href={href} target="_blank" rel="noreferrer" key={href}>
                          {linkIndex === 0 ? 'View project' : 'Related link'} <ExternalLink size={14} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* ---------- Experience ---------- */}
      <section className="experience-section" id="experience">
        <p className="section-kicker">03 — Professional journey</p>
        <div className="experience-grid">
          <h2>
            Work that
            <br />
            <em>compounds.</em>
          </h2>
          <div className="experience-copy">
            <div className="journey-list">
              {experience.map((item, index) => {
                const isOpen = openExperience === item.date
                return (
                  <article
                    className={`timeline-item journey-card ${isOpen ? 'is-open' : ''}`}
                    key={item.date}
                  >
                    <button
                      className="experience-trigger"
                      onClick={() => setOpenExperience(isOpen ? null : item.date)}
                      aria-expanded={isOpen}
                    >
                      <span className="journey-index">0{index + 1}</span>
                      <span className="experience-title">{item.title}</span>
                      <span className="experience-date">{item.date}</span>
                      <span className="experience-arrow">
                        {isOpen ? <ArrowUp size={19} /> : <ArrowDownRight size={19} />}
                      </span>
                    </button>

                    <div className="experience-details">
                      <ul>
                        {item.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>

                      {item.title.includes('Associate') && (
                        <div className="achievement-inline">
                          <button
                            onClick={(event) => {
                              event.stopPropagation()
                              setLightboxOpen(true)
                            }}
                          >
                            <img src={hackathonImage} alt="Cprime Hackathon 2025 runner-up team" />
                          </button>
                          <p>
                            Hackathon 2025 · 2nd Runner-Up · Cprime
                            <br />
                            <small>AI in Action · C To The Prime · ₹20,000 award</small>
                          </p>
                        </div>
                      )}
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Skills / Toolkit ---------- */}
      <section className="toolkit-section" id="skills">
        <p className="section-kicker">04 — Technical range</p>
        <div className="toolkit-intro">
          <h2>
            From first
            <br />
            <em>commit</em> to
            <br />
            final mile.
          </h2>
          <div>
            <p className="toolkit-lede">
              A practical range, shaped by the distance between an idea and the moment it becomes
              dependable.
            </p>
            <span className="toolkit-stamp">CURRENTLY EXPLORING · SYSTEMS THAT HOLD</span>
          </div>
        </div>

        <div className="capability-field">
          {skillGroups.map(([name, values], index) => (
            <article className="capability-row" key={name}>
              <span className="capability-number">0{index + 1}</span>
              <h3>{name}</h3>
              <div className="capability-tools">
                {values.split(' · ').map((value) => (
                  <span key={value}>{value}</span>
                ))}
              </div>
              <ArrowUpRight className="capability-arrow" size={18} />
            </article>
          ))}
        </div>

        <div className="toolkit-footer">
          <span>Not a checklist.</span>
          <p>The right tool is the one that makes the next decision clearer.</p>
        </div>
      </section>

      {/* ---------- Certifications ---------- */}
      <section className="certifications-section" id="certifications">
        <p className="section-kicker">05 — Certifications</p>
        <div className="certifications-content">
          <div>
            <h2>
              Proof of
              <br />
              <em>practice.</em>
            </h2>
            <p className="certification-note">
              A growing record of formal learning across cloud, AI, security, developer platforms, and
              digital collaboration.
            </p>
          </div>

          <div className="certification-list">
            {certifications.map(([name, issuer, href], index) => {
              const content = (
                <>
                  <span>0{index + 1}</span>
                  <strong>
                    {name}
                    {href && (
                      <sup className="certificate-link-mark" aria-label="Certificate credential available">
                        ↗
                      </sup>
                    )}
                  </strong>
                  <small>{issuer}</small>
                  {href && (
                    <span className="certificate-arrow">
                      <ArrowUpRight size={16} />
                    </span>
                  )}
                </>
              )
              return href ? (
                <a className="certification-row" href={href} target="_blank" rel="noreferrer" key={name}>
                  {content}
                </a>
              ) : (
                <div className="certification-row" key={name}>
                  {content}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ---------- Footer / Contact ---------- */}
      <footer className="footer" id="contact">
        <div className="footer-top">
          <p className="section-kicker">06 — Say hello</p>
          <h2>
            Have a good
            <br />
            <em>problem?</em>
          </h2>
          <a className="contact-link" href="mailto:siddarthan999@gmail.com">
            siddarthan999@gmail.com <ArrowUpRight size={20} />
          </a>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Siddarthan Natarajan</span>
          <div className="social-links">
            <a href="https://github.com/siddarthan999" target="_blank" rel="noreferrer">
              <Code2 size={16} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/siddarthan-n-118635224/" target="_blank" rel="noreferrer">
              <BriefcaseBusiness size={16} /> LinkedIn
            </a>
            <a href="mailto:siddarthan999@gmail.com">
              <Mail size={16} /> Email
            </a>
          </div>
          <span>Designed with intention.</span>
        </div>
      </footer>

      {/* ---------- Back to top ---------- */}
      {showTop && (
        <button className="to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
          <ArrowUp size={18} />
        </button>
      )}

      {/* ---------- Lightbox ---------- */}
      {lightboxOpen && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Hackathon achievement image"
          onClick={() => setLightboxOpen(false)}
        >
          <button className="lightbox-close" aria-label="Close image" onClick={() => setLightboxOpen(false)}>
            <X size={22} />
          </button>
          <img
            src={hackathonImage}
            alt="Cprime Hackathon 2025 runner-up team holding the award cheque"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </main>
  )
}