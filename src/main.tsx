import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowDownRight,
  ArrowUpRight,
  Award,
  Check,
  Download,
  ExternalLink,
  Github,
  Mail,
  Menu,
  Phone,
  Sparkles,
  X,
} from 'lucide-react'
import './styles.css'

const navigation = [
  ['about', 'About'],
  ['skills', 'Skills'],
  ['project', 'Project'],
  ['journey', 'Journey'],
  ['contact', 'Contact'],
]

const skills = [
  ['Programming', 'Python', 'SQL', 'Data Structures and Algorithms'],
  ['Machine learning', 'Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Large Language Models', 'Embeddings', 'Model Evaluation'],
  ['Data science', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'scikit-learn'],
  ['Deep learning', 'PyTorch', 'Neural Networks', 'Transformers'],
  ['Generative AI', 'RAG', 'Hugging Face', 'LangChain', 'LangGraph', 'FAISS', 'Multi-Agent Systems'],
  ['Knowledge retrieval', 'Vector Search', 'Knowledge Graphs', 'Neo4j', 'Hierarchical Retrieval'],
  ['Backend & deployment', 'FastAPI', 'Docker'],
  ['MLOps & cloud', 'MLflow', 'DVC', 'AWS', 'CI/CD Fundamentals'],
  ['Developer tools', 'Git', 'GitHub', 'Jupyter Notebook', 'VS Code'],
]

const education = [
  {
    period: '2024 — 2027',
    title: 'B.Tech CSE (AI & ML)',
    institution: 'Brainware University',
    detail: 'Building depth across machine learning, deep learning, NLP, generative AI, databases, and statistical analysis.',
  },
  {
    period: '2021 — 2024',
    title: 'Diploma CSE',
    institution: 'Brainware University',
    detail: 'CGPA 6.5 / 10 · Core foundation in programming, data structures, databases, and software development.',
  },
  {
    period: '2021',
    title: 'Class 10',
    institution: 'Barrackpore A. B. Model High School (H.S.)',
    detail: 'WBBSE · 67%',
  },
]

const coursework = [
  'Machine Learning',
  'Deep Learning',
  'Natural Language Processing',
  'Generative AI',
  'Large Language Models',
  'Data Structures and Algorithms',
  'DBMS',
  'Python',
  'Statistics / Data Analysis',
]

function App() {
  const reducedMotion = useReducedMotion()
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Rohit Paul home">
          <span className="brand-mark">RP</span>
          <span className="brand-copy">Rohit Paul <small>AI / ML</small></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={menuOpen ? 'site-nav is-open' : 'site-nav'}>
          {navigation.map(([id, label]) => <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>)}
          <a className="nav-cv" href="/rohit-paul-cv.txt" download>Download CV <Download size={14} /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-grid">
          <div className="hero-copy">
            <motion.p className="eyebrow" initial={reducedMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }}>
              <span className="eyebrow-line" />               AI / ML ENGINEER · GENERATIVE AI · MACHINE LEARNING · NLP
            </motion.p>
            <motion.h1 initial={reducedMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .08 }}>
              Building AI that <em>earns trust.</em>
            </motion.h1>
            <motion.p className="hero-summary" initial={reducedMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .7, delay: .18 }}>
              Rohit Paul is an AI/ML Engineer focused on reliable, scalable, production-oriented systems across Generative AI, Machine Learning, and NLP.
            </motion.p>
            <div className="hero-actions">
              <a className="button button-dark" href="#project">View GraphMind <ArrowDownRight size={16} /></a>
              <a className="quiet-link" href="/rohit-paul-cv.txt" download>Download CV <Download size={15} /></a>
            </div>
            <div className="hero-contact">
              <a href="mailto:rohgaming01@gmail.com"><Mail size={15} /> rohgaming01@gmail.com</a>
              <a href="tel:+917003762633"><Phone size={15} /> +91 7003762633</a>
            </div>
          </div>

          <motion.div className="profile-card" initial={reducedMotion ? false : { opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .12 }}>
            <div className="profile-card-top"><span>PROFILE / 001</span><span>AVAILABLE TO LEARN</span></div>
            <div className="profile-portrait" aria-label="Abstract profile treatment for Rohit Paul">
              <span className="portrait-orbit orbit-one" />
              <span className="portrait-orbit orbit-two" />
              <span className="portrait-initials">RP</span>
              <span className="portrait-coordinate">22° 34′ N<br />88° 22′ E</span>
            </div>
            <div className="profile-card-bottom">
              <strong>Generative AI<br />Machine Learning<br />NLP</strong>
              <span>Fresher / builder<br />Kolkata, India</span>
            </div>
          </motion.div>
        </section>

        <section className="intro-band section-grid" id="about">
          <div className="section-label"><span>01</span> About / Summary</div>
          <div className="intro-content">
            <p className="display-copy">I’m interested in the space between a strong model and a dependable product.</p>
            <p>My foundation spans Python, machine learning, deep learning, NLP, and LLMs. I’m especially drawn to retrieval systems, knowledge graphs, and agentic workflows that make AI outputs grounded, traceable, and useful in the real world.</p>
            <a className="inline-link" href="mailto:rohgaming01@gmail.com">Let’s talk about intelligent systems <ArrowUpRight size={15} /></a>
          </div>
        </section>

        <section className="skills-section section-grid" id="skills">
          <div className="section-label"><span>02</span> Skills / Tools</div>
          <div>
            <div className="section-heading-row"><h2>Technical range, <em>clearly indexed.</em></h2><p>Tools and concepts from the supplied CV, organized by how they move from foundation to deployment.</p></div>
            <div className="skills-grid">
              {skills.map(([category, ...items], index) => (
                <article className="skill-card" key={category}>
                  <div className="skill-card-top"><span>0{index + 1}</span><ArrowUpRight size={16} /></div>
                  <h3>{category}</h3>
                  <div className="pill-list">{items.map((item) => <span key={item}>{item}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="project-section" id="project">
          <div className="project-inner section-grid">
            <div className="section-label"><span>03</span> Selected project</div>
            <div className="project-main">
              <div className="project-visual" aria-hidden="true">
                <div className="visual-grid" />
                <div className="visual-core"><Sparkles size={26} /></div>
                <span className="visual-node node-pdf">PDFs</span>
                <span className="visual-node node-rag">RAG</span>
                <span className="visual-node node-graph">GRAPH</span>
                <span className="visual-node node-agents">AGENTS</span>
                <span className="visual-line visual-line-a" /><span className="visual-line visual-line-b" /><span className="visual-line visual-line-c" />
              </div>
              <div className="project-copy">
                <p className="project-kicker">In progress · Scientific literature QA system</p>
                <h2>Graph<span>Mind</span></h2>
                <p className="project-description">Developing a scientific literature QA system with PDF processing, chunking, embeddings, evidence retrieval, verification, citation tracking, multi-agent query planning, graph reasoning, evidence verification, and answer generation.</p>
                <div className="project-checks"><span><Check size={14} /> Evidence-grounded answers</span><span><Check size={14} /> Citation tracking and verification</span><span><Check size={14} /> Graph reasoning with Neo4j</span></div>
                <div className="project-tags">{['Python', 'RAG', 'FAISS', 'Neo4j', 'Knowledge graphs', 'Multi-agent systems'].map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className="project-actions"><a className="button button-coral" href="https://web-graphmind.web.app/" target="_blank" rel="noreferrer">Open live demo <ExternalLink size={15} /></a><a className="quiet-link" href="https://github.com/lazee01/graphmind" target="_blank" rel="noreferrer">View repository <Github size={15} /></a></div>
              </div>
            </div>
          </div>
        </section>

        <section className="journey-section section-grid" id="journey">
          <div className="section-label"><span>04</span> Journey / Education</div>
          <div>
            <div className="section-heading-row"><h2>Learning in <em>layers.</em></h2><p>Education and early-career foundations — no invented work history, just the chapters that shaped the direction.</p></div>
            <div className="timeline">
              {education.map((item, index) => <article className="timeline-item" key={item.title}><div className="timeline-marker"><span>0{index + 1}</span><i /></div><div className="timeline-content"><span className="timeline-period">{item.period}</span><h3>{item.title}</h3><strong>{item.institution}</strong><p>{item.detail}</p></div></article>)}
            </div>
            <div className="credential"><Award size={22} /><div><span className="credential-label">Certification · Sep 2026</span><h3>Elements of AI — University of Helsinki</h3><p>Credential ID: 6tfcqp4lrry</p></div></div>
            <div className="coursework"><span className="credential-label">Coursework / foundations</span><div className="pill-list">{coursework.map((course) => <span key={course}>{course}</span>)}</div></div>
          </div>
        </section>

        <section className="contact-section section-grid" id="contact">
          <div className="section-label"><span>05</span> Contact</div>
          <div className="contact-content"><p className="display-copy">Have an AI idea or a question worth exploring?</p><a className="contact-email" href="mailto:rohgaming01@gmail.com">rohgaming01@gmail.com <ArrowUpRight size={18} /></a><div className="social-links"><a href="mailto:rohgaming01@gmail.com"><Mail size={15} /> Email</a><a href="tel:+917003762633"><Phone size={15} /> Call</a><a href="https://github.com/lazee01" target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a></div></div>
        </section>
      </main>

      <footer><span>© 2026 Rohit Paul</span><span>AI/ML Engineer · Generative AI · Machine Learning · NLP</span><a href="#top">Back to top ↑</a></footer>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>)
