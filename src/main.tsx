import { StrictMode, Suspense, lazy, useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { createRoot } from 'react-dom/client'
import { ArrowDownRight, ArrowUpRight, BrainCircuit, Check, Download, Github, Mail, Menu, Orbit, Phone, Send, Sparkles, X } from 'lucide-react'
import './styles.css'
import './projects.css'
import './skills.css'

const SpaceScene = lazy(() => import('./SpaceScene').then(({ SpaceScene }) => ({ default: SpaceScene })))

const nav = ['about', 'capabilities', 'projects', 'journey', 'contact']
type SkillCategory = {
  number: string
  title: string
  accent: 'cyan' | 'violet' | 'lime' | 'orange'
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  { number: '01', title: 'Programming', accent: 'cyan', skills: ['Python', 'SQL', 'Data Structures and Algorithms'] },
  { number: '02', title: 'Machine Learning', accent: 'violet', skills: ['Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Large Language Models', 'Embeddings', 'Model Evaluation'] },
  { number: '03', title: 'Data Science', accent: 'lime', skills: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'scikit-learn'] },
  { number: '04', title: 'Deep Learning', accent: 'orange', skills: ['PyTorch', 'Neural Networks', 'Transformers'] },
  { number: '05', title: 'Generative AI', accent: 'cyan', skills: ['RAG', 'Hugging Face', 'LangChain', 'LangGraph', 'FAISS', 'Multi-Agent Systems'] },
  { number: '06', title: 'Knowledge Retrieval', accent: 'violet', skills: ['Vector Search', 'Knowledge Graphs', 'Neo4j', 'Hierarchical Retrieval'] },
  { number: '07', title: 'Backend & Deployment', accent: 'lime', skills: ['FastAPI', 'Docker'] },
  { number: '08', title: 'MLOps & Cloud', accent: 'orange', skills: ['MLflow', 'DVC', 'AWS', 'CI/CD Fundamentals'] },
  { number: '09', title: 'Developer Tools', accent: 'cyan', skills: ['Git', 'GitHub', 'Jupyter Notebook', 'VS Code'] },
]
const education = [
  ['2024 — 2027', 'B.Tech CSE — AI & ML', 'Brainware University', 'Building depth across machine learning, deep learning, NLP, generative AI, databases, and statistical analysis.'],
  ['2021 — 2024', 'Diploma CSE', 'Brainware University', 'CGPA 6.5 / 10 · Core foundation in programming, data structures, databases, and software development.'],
  ['2021', 'Class 10', 'Barrackpore A. B. Model High School (H.S.)', 'WBBSE · 67%'],
]
type Project = {
  title: string
  description: string
  stack: string[]
  status: string
  repoUrl: string
  demoUrl?: string
  accent: 'cyan' | 'violet' | 'lime' | 'orange'
  visual?: 'graphmind'
}

const projects: Project[] = [
  {
    title: 'GraphMind',
    description: 'A scientific literature QA system combining RAG, vector retrieval, knowledge graphs, hierarchical retrieval, and multi-agent reasoning to turn dense PDFs into answers that show their evidence.',
    stack: ['Python', 'RAG', 'FAISS', 'Neo4j', 'Multi-agent systems'],
    status: 'In progress',
    repoUrl: 'https://github.com/lazee01/graphmind',
    accent: 'cyan',
    visual: 'graphmind',
  },
]

function App() {
  const reducedMotion = useReducedMotion()
  const [menu, setMenu] = useState(false)
  const [active, setActive] = useState('about')
  useEffect(() => {
    const onScroll = () => {
      const current = nav.find((id) => {
        const section = document.getElementById(id)
        return section && window.scrollY >= section.offsetTop - 240
      })
      if (current) setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const close = () => setMenu(false)
  return (
    <div className="new-shell">
      <div className="grain" aria-hidden="true" />
      <header className="topbar">
        <a href="#top" className="monogram" onClick={close}><span>R</span><small>PAUL / AI</small></a>
        <nav className={menu ? 'open' : ''}>{nav.map((item) => <a key={item} className={active === item ? 'active' : ''} href={`#${item}`} onClick={close}>{item}</a>)}<a href="/rohit-paul-cv.txt" download className="download">CV <Download size={13} /></a></nav>
        <button className="menu-button" onClick={() => setMenu(!menu)} aria-label={menu ? 'Close navigation' : 'Open navigation'} aria-expanded={menu}>{menu ? <X /> : <Menu />}</button>
      </header>

      <main id="top">
        <section className="cinema-hero">
          <div className="hero-scene" aria-hidden="true">{!reducedMotion && <Suspense fallback={null}><SpaceScene /></Suspense>}<div className="scene-vignette" /><div className="scene-crosshair" /></div>
          <div className="hero-content">
            <p className="kicker"><span className="pulse-dot" /> AI / ML ENGINEER · GENERATIVE AI · NLP</p>
            <motion.h1 initial={reducedMotion ? false : { opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9 }}>Building<br /><i>systems</i> that<br /><strong>think deeper.</strong></motion.h1>
            <p className="hero-intro">Rohit Paul is an AI/ML Engineer exploring the frontier where language, knowledge, and reliable systems converge.</p>
            <div className="hero-cta"><a className="primary-cta" href="#projects">Explore projects <ArrowDownRight size={17} /></a><a className="text-cta" href="mailto:rohgaming01@gmail.com">Start a conversation <ArrowUpRight size={15} /></a></div>
          </div>
          <div className="hero-readout"><span>FIELD 001</span><b>ONLINE</b><small>INTERACTIVE NEURAL SPACE</small></div>
          <a className="hero-scroll" href="#about"><span>Scroll / navigate the field</span><ArrowDownRight size={18} /></a>
        </section>

        <section className="manifesto stage" id="about">
          <div className="section-index">01 <span>/ PROFILE</span></div>
          <div className="manifesto-grid"><h2>Curiosity is<br /><em>a technical advantage.</em></h2><div><p className="lead">I like difficult questions — the kind that need more than a model, and better than a guess.</p><p>My foundation spans Python, machine learning, deep learning, NLP, and LLMs. I’m especially interested in retrieval systems, knowledge graphs, and agentic workflows that make AI outputs grounded, traceable, and useful.</p><a className="line-link" href="tel:+917003762633">+91 7003762633 <ArrowUpRight size={14} /></a></div></div>
        </section>

        <section className="capability-stage stage" id="capabilities">
          <div className="section-index">02 <span>/ CAPABILITIES</span></div>
          <div className="stage-heading"><h2>The stack behind<br /><em>the signal.</em></h2><p>Every skill from the CV, arranged as a clear technical index — from foundations and modeling to retrieval, deployment, and tooling.</p></div>
          <div className="skill-grid">{skillCategories.map((category) => <article className={`skill-category ${category.accent}`} key={category.number}><div className="skill-category-head"><span className="cap-number">{category.number}</span><h3>{category.title}</h3><ArrowUpRight size={17} /></div><ul>{category.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></article>)}</div>
        </section>

        <section className="projects-stage stage" id="projects">
          <div className="section-index">03 <span>/ SELECTED PROJECTS</span></div>
          <div className="stage-heading"><h2>Systems built<br /><em>to go deeper.</em></h2><p>A growing archive of experiments and production-minded AI systems. Each project is one object in the typed <code>projects</code> array.</p></div>
          <div className="project-list">
            {projects.map((project) => <article className={`project-card ${project.accent}`} id={project.title === 'GraphMind' ? 'graphmind' : undefined} key={project.title}>
              {project.visual === 'graphmind' && <div className="graphmind-art" aria-hidden="true"><div className="art-orbit orbit-a" /><div className="art-orbit orbit-b" /><div className="art-core"><BrainCircuit size={32} /></div><div className="art-node node-pdf">PDF</div><div className="art-node node-faiss">FAISS</div><div className="art-node node-neo">NEO4J</div><span className="art-line line-a" /><span className="art-line line-b" /><span className="art-line line-c" /></div>}
              <div className="project-copy"><div className="project-meta"><span>{project.status}</span><span>{project.accent.toUpperCase()} / {String(projects.indexOf(project) + 1).padStart(2, '0')}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div><div className="project-links"><a className="primary-cta small" href={project.repoUrl} target="_blank" rel="noreferrer" aria-label={`View ${project.title} repository`}>View {project.title} repository <Github size={15} /></a>{project.demoUrl && <a className="text-cta" href={project.demoUrl} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={14} /></a>}</div></div>
            </article>)}
          </div>
        </section>

        <section className="journey-stage stage" id="journey">
          <div className="section-index">04 <span>/ ORIGIN STORY</span></div><div className="stage-heading"><h2>Learning in<br /><em>layers.</em></h2><p>Each chapter adds a new way to frame the problem.</p></div>
          <div className="education-list">{education.map(([date, title, org, detail], index) => <article key={date}><span className="edu-number">0{index + 1}</span><span className="edu-date">{date}</span><div><h3>{title}</h3><strong>{org}</strong><p>{detail}</p></div></article>)}</div>
          <div className="cert-band"><Orbit size={23} /><div><small>CERTIFICATION / SEP 2026</small><h3>Elements of AI — University of Helsinki</h3><p>Credential ID: 6tfcqp4lrry</p></div></div>
        </section>

        <section className="contact-stage stage" id="contact">
          <div className="contact-glow" /><div className="section-index">05 <span>/ OPEN CHANNEL</span></div><div className="contact-layout"><h2>Let’s make<br /><em>something real.</em></h2><div><p>Have an AI idea, a collaboration, or a question about intelligent systems? My inbox is open.</p><a className="contact-email" href="mailto:rohgaming01@gmail.com">rohgaming01@gmail.com <ArrowUpRight size={18} /></a><div className="contact-links"><a href="mailto:rohgaming01@gmail.com"><Mail size={16} /> Email</a><a href="tel:+917003762633"><Phone size={16} /> Call</a><a href="https://github.com/lazee01" target="_blank" rel="noreferrer" aria-label="Open Rohit Paul's GitHub profile"><Github size={16} /> GitHub profile</a></div></div></div></section>
      </main>
      <footer><span>© 2026 ROHIT PAUL / AI & ML</span><span>Built for the next question <Sparkles size={13} /></span><a href="#top">↑ Top</a></footer>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>)
