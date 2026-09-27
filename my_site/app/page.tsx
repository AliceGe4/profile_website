// Edit links and project descriptions here before publishing.
const profile = {
  name: "Alice German",
  title: "Software Developer",
  intro: "Computer science graduate who enjoys building useful software, from full-stack web applications to Java desktop projects.",
  github: "https://github.com/AliceGe4", // TODO: your GitHub profile URL
  linkedin: "https://www.linkedin.com/in/alice-german-dev/", // TODO: your LinkedIn profile URL
  email: "nat4nat4nat@gmail.com", // TODO: your email address
  resume: "/Alice_German_Resume", // TODO: add your resume to public/resume.pdf, then set "/resume.pdf"
};

const projects = [
  {
    number: "01", title: "Recipme", type: "Featured project · Full-stack web app",
    description: "A recipe application with accounts, recipe management, ingredient search, and nutrition information. Built as a team capstone project.",
    stack: ["Next.js", "TypeScript", "Django REST", "PostgreSQL", "Docker"],
    links: [{ label: "View code", href: "https://github.com/JonathanHaish/Recipme" }, { label: "Watch demo", href: "https://www.youtube.com/watch?v=uo6aBf_Cb6c" }],
  },
  {
    number: "02", title: "Card Game", type: "Java desktop application",
    description: "A JavaFX number guessing game with input validation, scoring, and a history of previous guesses.",
    stack: ["Java", "JavaFX", "FXML"],
    links: [{ label: "View code", href: "https://github.com/AliceGe4/Card-Game.git" }],
  },
  {
    number: "03", title: "Assembler & CPU Translator", type: "Systems programming",
    description: "A C programming project exploring instruction translation and low-level systems concepts.",
    stack: ["C", "Linux"],
    links: [{ label: "View code", href: "https://github.com/AliceGe4/assembler-project" }],
  },
];

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  if (!href) return null;
  return <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>{children}<span aria-hidden="true"> ↗</span></a>;
}

export default function Home() {
  return <main>
    <header className="nav wrap"><a className="wordmark" href="#top">AG<span>.</span></a><nav aria-label="Main navigation"><a href="#projects">Projects</a><a href="#about">About</a><a href="#contact">Contact</a></nav></header>
    <section className="hero wrap" id="top"><div className="eyebrow"><span className="line"/> PORTFOLIO / SOFTWARE DEVELOPMENT</div><h1>Hi, I’m <em>{profile.name}.</em><br/>I build software<br/>for real people<span className="period">.</span></h1><p>{profile.intro}</p><div className="actions"><a className="button" href="#projects">Explore my work <span aria-hidden="true">↗</span></a><ExternalLink href={profile.github}>GitHub</ExternalLink><ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink></div><div className="hero-foot"><span>Based in Israel</span><span>Scroll to explore ↓</span></div></section>
    <section className="projects wrap" id="projects"><div className="section-head"><div><span className="eyebrow">01 / SELECTED WORK</span><h2>Projects<span className="period">.</span></h2></div><p>A few things I’ve built while studying computer science and practicing software development.</p></div><div className="project-list">{projects.map(p => <article className="project" key={p.number}><div className="project-index">{p.number}</div><div className="project-main"><div className="project-type">{p.type}</div><h3>{p.title}</h3><p>{p.description}</p><div className="tags">{p.stack.map(s => <span key={s}>{s}</span>)}</div></div><div className="project-links">{p.links.filter(l => l.href).map(l => <ExternalLink key={l.label} href={l.href}>{l.label}</ExternalLink>)}</div></article>)}</div></section>
    <section className="about" id="about"><div className="wrap about-grid"><div><span className="eyebrow">02 / ABOUT</span><h2>Curious by<br/>default<span className="period">.</span></h2></div><div><p>I’m a computer science graduate from the Open University of Israel. I’ve worked on frontend and backend development, and I like turning complex requirements into clear, usable software.</p><p>My recent work includes a team recipe application, JavaFX desktop apps, and a systems programming project in C.</p><div className="skills"><span>Java</span><span>Python</span><span>C / C++</span><span>TypeScript</span><span>React</span><span>Next.js</span><span>Django</span><span>SQL</span><span>Docker</span></div></div></div></section>
    <footer className="contact wrap" id="contact"><span className="eyebrow">03 / CONTACT</span><h2>Let’s connect<span className="period">.</span></h2><p>I’m interested in software development opportunities.</p><div className="contact-links">{profile.email && <a href={`mailto:${profile.email}`}>Email me ↗</a>}<ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink><ExternalLink href={profile.github}>GitHub</ExternalLink><ExternalLink href={profile.resume}>Resume</ExternalLink></div><div className="footer-bottom"><span>© {new Date().getFullYear()} {profile.name}</span><a href="#top">Back to top ↑</a></div></footer>
  </main>;
}
