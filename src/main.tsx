import { StrictMode, Suspense, lazy, useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { createRoot } from 'react-dom/client'
import { ArrowDownRight, ArrowUpRight, BrainCircuit, Check, Download, Github, Mail, Menu, Orbit, Phone, Send, Sparkles, X } from 'lucide-react'
import './styles.css'

const SpaceScene = lazy(() => import('./SpaceScene').then(({ SpaceScene }) => ({ default: SpaceScene })))

const nav = ['about', 'capabilities', 'graphmind', 'journey', 'contact']
const capabilities = [
  ['01', 'Language systems', 'Python · SQL · NLP · LLMs · embeddings', 'cyan'],
  ['02', 'Neural intelligence', 'ML · DL · PyTorch · Transformers · evaluation', 'violet'],
  ['03', 'Retrieval architecture', 'RAG · FAISS · LangGraph · Neo4j · agents', 'lime'],
  ['04', 'Production thinking', 'FastAPI · Docker · MLflow · DVC · AWS', 'orange'],
]
const education = [
  ['2024 — 2027', 'B.Tech CSE — AI & ML', 'Brainware University', 'Building depth across machine learning, deep learning, NLP, generative AI, databases, and statistical analysis.'],
  ['2021 — 2024', 'Diploma CSE', 'Brainware University', 'CGPA 6.5 / 10 · Core foundation in programming, data structures, databases, and software development.'],
  ['2021', 'Higher Secondary (H.S.)', 'Barrackpore A. B. Model High School', 'WBBSE · 67%'],
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
            <div className="hero-cta"><a className="primary-cta" href="#graphmind">Enter GraphMind <ArrowDownRight size={17} /></a><a className="text-cta" href="mailto:rohgaming01@gmail.com">Start a conversation <ArrowUpRight size={15} /></a></div>
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
          <div className="stage-heading"><h2>The stack behind<br /><em>the signal.</em></h2><p>Tools are a means. The point is to turn ambiguity into an intelligent, dependable system.</p></div>
          <div className="capability-list">{capabilities.map(([number, title, detail, tone]) => <article className={`capability ${tone}`} key={number}><span className="cap-number">{number}</span><h3>{title}</h3><p>{detail}</p><ArrowUpRight size={18} /></article>)}</div>
        </section>

        <section className="graphmind-stage stage" id="graphmind">
          <div className="section-index">03 <span>/ FLAGSHIP SYSTEM</span></div>
          <div className="graphmind-layout"><div className="graphmind-art" aria-hidden="true"><div className="art-orbit orbit-a" /><div className="art-orbit orbit-b" /><div className="art-core"><BrainCircuit size={32} /></div><div className="art-node node-pdf">PDF</div><div className="art-node node-faiss">FAISS</div><div className="art-node node-neo">NEO4J</div><span className="art-line line-a" /><span className="art-line line-b" /><span className="art-line line-c" /></div><div className="graphmind-copy"><p className="kicker">RESEARCH ASSISTANT / IN PROGRESS</p><h2>Graph<br /><em>Mind.</em></h2><h3>Scientific Literature QA System</h3><p>A research assistant that combines RAG, vector retrieval, knowledge graphs, hierarchical retrieval, and multi-agent reasoning to turn dense PDFs into answers that show their evidence.</p><div className="check-list"><span><Check size={14} /> Evidence-grounded verification</span><span><Check size={14} /> Citation tracking & graph reasoning</span><span><Check size={14} /> Query planning across retrieval layers</span></div><a className="primary-cta small" href="https://github.com/lazee01/portfolio" target="_blank" rel="noreferrer">View repository <Github size={15} /></a></div></div>
        </section>

        <section className="journey-stage stage" id="journey">
          <div className="section-index">04 <span>/ ORIGIN STORY</span></div><div className="stage-heading"><h2>Learning in<br /><em>layers.</em></h2><p>Each chapter adds a new way to frame the problem.</p></div>
          <div className="education-list">{education.map(([date, title, org, detail], index) => <article key={date}><span className="edu-number">0{index + 1}</span><span className="edu-date">{date}</span><div><h3>{title}</h3><strong>{org}</strong><p>{detail}</p></div></article>)}</div>
          <div className="cert-band"><Orbit size={23} /><div><small>CERTIFICATION / SEP 2026</small><h3>Elements of AI — University of Helsinki</h3><p>Credential ID: 6tfcqp4lrry</p></div></div>
        </section>

        <section className="contact-stage stage" id="contact">
          <div className="contact-glow" /><div className="section-index">05 <span>/ OPEN CHANNEL</span></div><div className="contact-layout"><h2>Let’s make<br /><em>something real.</em></h2><div><p>Have an AI idea, a collaboration, or a question about intelligent systems? My inbox is open.</p><a className="contact-email" href="mailto:rohgaming01@gmail.com">rohgaming01@gmail.com <ArrowUpRight size={18} /></a><div className="contact-links"><a href="mailto:rohgaming01@gmail.com"><Mail size={16} /> Email</a><a href="tel:+917003762633"><Phone size={16} /> Call</a><a href="https://github.com/lazee01/portfolio" target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a></div></div></div></section>
      </main>
      <footer><span>© 2026 ROHIT PAUL / AI & ML</span><span>Built for the next question <Sparkles size={13} /></span><a href="#top">↑ Top</a></footer>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>)
