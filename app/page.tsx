"use client";
import { useState, useEffect } from "react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const sections = ["about", "experience", "projects", "skills", "education", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const nav = ["About", "Experience", "Projects", "Skills", "Education", "Contact"];

  const featuredProject = {
    title: "Low-Voltage Traction Inverter Emulator",
    status: "In Progress",
    tagline: "SVPWM-driven PMSM with Field-Oriented Control and CAN Telemetry",
    desc: "A benchtop 3-phase inverter emulating the core control architecture of a production EV traction drive — built entirely at a home desk in Copenhagen with no lab access. Hand-written FOC (not a black-box library), SVPWM with 7-segment center-aligned sequencing at 20 kHz, and CAN 2.0B telemetry with a custom DBC file.",
    specs: [
      { label: "MCU", value: "STM32G474RE · HRTIM for PWM + ADC sync" },
      { label: "Power Stage", value: "BOOSTXL-DRV8301 · 12V 3-phase MOSFET inverter" },
      { label: "Control", value: "FOC · Clarke/Park transforms · PI with anti-windup" },
      { label: "Modulation", value: "SVPWM · 20 kHz · 7-segment center-aligned" },
      { label: "Position", value: "AS5047P magnetic encoder via SPI" },
      { label: "Telemetry", value: "CAN 2.0B · 500 kbps · custom DBC · SavvyCAN" },
      { label: "Safety", value: "HW overcurrent · dead-time insertion · shoot-through lockout" },
      { label: "Target BW", value: "2000 rad/s · 60° phase margin · pole-zero cancellation" },
    ],
    tags: ["STM32", "FOC", "SVPWM", "Power Electronics", "CAN Bus", "Embedded C", "Motor Control"],
    link: "#",
  };

  const projects = [
    {
      title: "RPi4 System Health Monitor with Web Interface",
      tags: ["Buildroot", "C", "Linux", "Raspberry Pi 4", "HTML/CSS/JS"],
      desc: "Full-stack embedded Linux system for real-time Raspberry Pi 4 telemetry monitoring. Built a custom Buildroot OS image, background C daemon reading CPU temperature and resource metrics via ProcFS, JSON API, and a responsive web dashboard with live updates, color-coded alerts, and mobile compatibility.",
      date: "Dec 2025",
      link: "https://github.com/cu-ecen-aeld/rpi4-system-health-monitor"
    },
    {
      title: "FPGA Software Development for NIOS II Embedded System",
      tags: ["VHDL", "NIOS II", "Quartus Prime", "C", "SoC", "JTAG"],
      desc: "Full software development workflow for a NIOS II soft processor on a Terasic DE10-Lite FPGA in a System-on-Chip environment. Integrated SDRAM, accelerometer, DAC, LEDs, and pushbuttons. Configured BSP, built and optimized software projects, and executed real-time application control via JTAG UART.",
      date: "Aug 2025",
    },
  ];

  const experience = [
    {
      role: "Software Engineer",
      org: "B-Stock Solutions · Belmont, California USA",
      period: "July 2017 – Sept 2022",
      bullets: [
        "Maintained and developed 50+ Magento e-commerce auction sites, upgrading the listing pipeline to enable dynamic auction creation via manifest uploads — reducing seller onboarding time by ~30%",
        "Served as chief technical resource for Sam's Club auctions site, one of the platform's highest-traffic properties; maintained auction integrity and sales continuity across peak load periods",
        "Wrote APIs to process CCPA data deletion requests submitted across Sam's Club and affiliated vendor sites, bringing the platform into compliance across 10+ integrated properties",
        "Implemented SSO security improvements that reduced unauthorized access incidents and improved authentication reliability for buyers and sellers",
        "Improved site reliability through daily QA testing across the auction platform, catching regressions before they impacted live auctions and maintaining uptime above 99%",
        "Collaborated cross-functionally with marketing, product, and marketplace teams to ship seller-facing features that improved auction listing quality and buyer engagement",
      ],
    },
    {
      role: "Magento Web Developer",
      org: "EC Internet · Novato, California USA",
      period: "July 2016 – July 2017",
      bullets: [
        "Built and launched Magento e-commerce stores for clients across multiple industries, serving as the primary full-stack developer from initial setup through go-live",
        "Lead developer for Fortessa Tableware Solutions — delivered a fully customized Magento storefront with a bespoke theme, custom product display templates, and a data pipeline for ongoing product catalog updates",
        "Maintained product data pipelines to automate the creation and update of new SKUs, reducing manual catalog entry time by an estimated 40% for clients with large inventories",
        "Delivered custom theme work including responsive layouts, brand-aligned UI components, and checkout flow improvements that reduced friction in the purchase path",
        "Handled full-stack responsibilities across frontend (HTML/CSS/JS, Magento templating) and backend (PHP, MySQL, third-party integrations)",
      ],
    },
  ];

  const skills = {
    "Power Electronics & Hardware": ["Circuit Analysis", "Converter Circuits", "LTspice", "PCB Design", "Soldering & bench bring-up", "Oscilloscope / logic analyzer"],
    "FPGA & Digital Design": ["VHDL", "Verilog", "Quartus Prime", "NIOS II SoC", "Qsys / Platform Designer", "DE10-Lite"],
    "Embedded & Systems": ["C Programming", "Linux Embedded Systems", "Buildroot", "Raspberry Pi", "STM32", "JTAG / UART"],
    "Software & Web": ["Web Development", "JavaScript / HTML / CSS", "Python", "Git", "Eclipse", "APIs"],
  };

  if (!mounted) return null;

  return (
    <div style={{ fontFamily: "'DM Mono', 'Courier New', monospace", background: "#f7f5f0", minHeight: "100vh", color: "#1a1a1a" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Fraunces:ital,wght@0,300;0,600;1,300&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::selection { background: #c8e6c9; }
        .nav-link { cursor: pointer; transition: color 0.2s; font-size: 0.75rem; letter-spacing: 0.12em; text-transform: uppercase; color: #888; padding: 4px 0; border-bottom: 1px solid transparent; }
        .nav-link:hover, .nav-link.active { color: #1a1a1a; border-bottom-color: #1a1a1a; }
        .section { padding: 80px 0; border-top: 1px solid #e0ddd6; }
        .tag { display: inline-block; font-size: 0.65rem; letter-spacing: 0.1em; text-transform: uppercase; padding: 3px 8px; border: 1px solid #ccc; color: #666; margin: 3px 3px 3px 0; }
        .project-card { border: 1px solid #e0ddd6; padding: 28px; margin-bottom: 16px; transition: border-color 0.2s, transform 0.2s; background: #fff; }
        .project-card:hover { border-color: #1a1a1a; transform: translateY(-2px); }
        .bullet::before { content: "—"; margin-right: 10px; color: #aaa; }
        .skill-group { margin-bottom: 24px; }
        .contact-link { color: #1a1a1a; text-decoration: none; border-bottom: 1px solid #ccc; transition: border-color 0.2s; }
        .contact-link:hover { border-bottom-color: #1a1a1a; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .fade-up { animation: fadeUp 0.6s ease forwards; }
        .fade-up-2 { animation: fadeUp 0.6s 0.15s ease both; }
        .fade-up-3 { animation: fadeUp 0.6s 0.3s ease both; }
      `}</style>

      {/* Fixed Nav */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(247,245,240,0.95)", backdropFilter: "blur(8px)", borderBottom: "1px solid #e0ddd6" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 24px", height: 52, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "'Fraunces', serif", fontSize: "1rem", fontWeight: 300, letterSpacing: "0.02em" }}>Jon Holmberg</span>
          <div style={{ display: "flex", gap: 28 }}>
            {nav.map(n => (
              <span key={n} className={`nav-link${activeSection === n.toLowerCase() ? " active" : ""}`} onClick={() => scrollTo(n.toLowerCase())}>{n}</span>
            ))}
          </div>
        </div>
      </nav>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 24px" }}>

        {/* Hero */}
        <div style={{ paddingTop: 140, paddingBottom: 100 }}>
          <p className="fade-up" style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#888", marginBottom: 20 }}>Electrical & Computer Engineering · CU Boulder</p>
          <h1 className="fade-up-2" style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2.8rem, 6vw, 4.5rem)", fontWeight: 300, lineHeight: 1.1, marginBottom: 28, letterSpacing: "-0.02em" }}>
            Jon Holmberg.<br />
            <span style={{ fontStyle: "italic", color: "#555" }}>Engineer & Builder.</span>
          </h1>
          <p className="fade-up-3" style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "#555", maxWidth: 520 }}>
            Swedish/USA citizen and MSECE grad student at CU Boulder, based in Copenhagen, Denmark. I build power electronics hardware from the ground up — schematic capture, PCB layout, soldering, bench bring-up — with a focus on motor drives and automotive systems.
          </p>
          <div className="fade-up-3" style={{ marginTop: 36, display: "flex", gap: 16 }}>
            <span onClick={() => scrollTo("projects")} style={{ cursor: "pointer", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", borderBottom: "1px solid #1a1a1a", paddingBottom: 2 }}>View Projects</span>
            <span onClick={() => scrollTo("contact")} style={{ cursor: "pointer", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#888", borderBottom: "1px solid #ccc", paddingBottom: 2 }}>Get in Touch</span>
          </div>
        </div>

        {/* About */}
        <section id="about" className="section">
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#aaa", marginBottom: 36 }}>01 · About</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }}>
            <div>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.8rem", fontWeight: 300, marginBottom: 20 }}>A bit about me.</h2>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.9, color: "#555", marginBottom: 16 }}>
                I'm a graduate student in the MS Electrical & Computer Engineering program at CU Boulder, completing my degree remotely while living in Copenhagen, Denmark.
              </p>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.9, color: "#555" }}>
                My current focus is power electronics — full hardware builds from schematic to soldered board. I design inverter and driver circuits, do my own PCB layout, hand-solder and reflow at my desk, and debug on the bench. I love exploring the intersection of control theory and physical hardware: switching topologies, the parasitics that make them misbehave, and the firmware that tames them.
              </p>
            </div>
            <div style={{ borderLeft: "1px solid #e0ddd6", paddingLeft: 48 }}>
              <div style={{ marginBottom: 28 }}>
                <p style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#aaa", marginBottom: 10 }}>Currently</p>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.7 }}>MS ECE Student · CU Boulder<br /><span style={{ color: "#888" }}>Remote · Studying online</span></p>
              </div>
              <div style={{ marginBottom: 28 }}>
                <p style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#aaa", marginBottom: 10 }}>Seeking</p>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.7 }}>Power Electronics / Motor Drive Roles<br /><span style={{ color: "#888" }}>Traction inverter · OBC · e-drive systems</span></p>
              </div>
              <div>
                <p style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#aaa", marginBottom: 10 }}>Swedish/USA Citizen Based in</p>
                <p style={{ fontSize: "0.875rem" }}>Copenhagen, Denmark</p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="section">
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#aaa", marginBottom: 36 }}>02 · Experience</p>
          {experience.map((e, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 40, marginBottom: 48 }}>
              <div>
                <p style={{ fontSize: "0.75rem", color: "#888", lineHeight: 1.6 }}>{e.period}</p>
              </div>
              <div>
                <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.1rem", fontWeight: 300, marginBottom: 4 }}>{e.role}</h3>
                <p style={{ fontSize: "0.75rem", letterSpacing: "0.05em", color: "#888", marginBottom: 16 }}>{e.org}</p>
                {e.bullets.map((b, j) => (
                  <p key={j} className="bullet" style={{ fontSize: "0.85rem", lineHeight: 1.8, color: "#555", marginBottom: 6 }}>{b}</p>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Projects */}
        <section id="projects" className="section">
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#aaa", marginBottom: 36 }}>03 · Projects</p>

          {/* Featured Project */}
          <div style={{ border: "1px solid #1a1a1a", padding: "36px", marginBottom: 32, background: "#fff", position: "relative" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
              <span style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#aaa" }}>Featured Project</span>
              <span style={{ fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", background: "#f0faf0", color: "#2a7a3a", border: "1px solid #b0d8b4", padding: "3px 10px" }}>● In Progress</span>
            </div>
            <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.5rem", fontWeight: 300, marginBottom: 6, lineHeight: 1.2 }}>Low-Voltage Traction Inverter Emulator</h3>
            <p style={{ fontSize: "0.78rem", color: "#888", marginBottom: 16, fontStyle: "italic" }}>SVPWM-Driven PMSM with Field-Oriented Control and CAN Telemetry</p>
            <p style={{ fontSize: "0.85rem", lineHeight: 1.9, color: "#555", marginBottom: 24, maxWidth: 640 }}>
              A benchtop 3-phase inverter emulating the core control architecture of a production EV traction drive — built entirely at a home desk in Copenhagen with no lab access. Hand-written FOC (not ST's Motor Control SDK), SVPWM with 7-segment center-aligned sequencing at 20 kHz, and CAN 2.0B telemetry with a custom DBC file. Designed as a portfolio centerpiece for automotive power electronics roles.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 32px", marginBottom: 24, paddingTop: 20, borderTop: "1px solid #e0ddd6" }}>
              {featuredProject.specs.map(s => (
                <div key={s.label} style={{ display: "flex", gap: 12, alignItems: "baseline", padding: "6px 0", borderBottom: "1px solid #f0ede8" }}>
                  <span style={{ fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#aaa", width: 80, flexShrink: 0 }}>{s.label}</span>
                  <span style={{ fontSize: "0.8rem", color: "#444" }}>{s.value}</span>
                </div>
              ))}
            </div>
            <div>{featuredProject.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
          </div>

          {/* Other Projects */}
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#aaa", marginBottom: 16 }}>Other Projects</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {projects.map((p, i) => (
              <div key={i} className="project-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.05rem", fontWeight: 300, lineHeight: 1.3, maxWidth: "75%" }}>{p.title}</h3>
                  <span style={{ fontSize: "0.65rem", color: "#aaa", letterSpacing: "0.05em", flexShrink: 0 }}>{p.date}</span>
                </div>
                <div style={{ marginBottom: 14 }}>{p.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
                <p style={{ fontSize: "0.82rem", lineHeight: 1.8, color: "#666", marginBottom: 14 }}>{p.desc}</p>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#1a1a1a", borderBottom: "1px solid #ccc", paddingBottom: 2, textDecoration: "none" }}>
                    View on GitHub →
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section">
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#aaa", marginBottom: 36 }}>04 · Skills</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="skill-group">
                <p style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#aaa", marginBottom: 14 }}>{group}</p>
                {items.map(s => (
                  <div key={s} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <span style={{ width: 4, height: 4, background: "#1a1a1a", borderRadius: "50%", flexShrink: 0 }} />
                    <span style={{ fontSize: "0.85rem", color: "#444" }}>{s}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education" className="section">
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#aaa", marginBottom: 36 }}>05 · Education</p>

          {/* CU Boulder */}
          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 40, marginBottom: 48 }}>
            <div>
              <p style={{ fontSize: "0.75rem", color: "#888" }}>2024 – 2026 (Expected)</p>
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 10 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 8, flexShrink: 0,
                  background: "#CFB87C", display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "inset 0 0 0 2px rgba(0,0,0,0.08)"
                }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 500, color: "#1a1a1a", letterSpacing: "0.05em", fontFamily: "'DM Mono', monospace" }}>CU</span>
                </div>
                <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.4rem", fontWeight: 300 }}>M.S. Electrical & Computer Engineering</h3>
              </div>
              <p style={{ fontSize: "0.85rem", color: "#888", marginBottom: 4, paddingLeft: 60 }}>University of Colorado Boulder · GPA 3.6</p>
              <p style={{ fontSize: "0.78rem", color: "#aaa", marginBottom: 20, fontStyle: "italic", paddingLeft: 60 }}>Remote · Based in Copenhagen, Denmark</p>
              <p style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#aaa", marginBottom: 12, paddingLeft: 60 }}>Relevant Coursework</p>
              <div style={{ display: "flex", flexWrap: "wrap", paddingLeft: 60 }}>
                {["Circuit Analysis", "Power Electronics", "Linux Embedded Systems", "FPGA"].map(c => (
                  <span key={c} className="tag">{c}</span>
                ))}
              </div>
            </div>
          </div>

          {/* UC Berkeley */}
          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 40 }}>
            <div>
              <p style={{ fontSize: "0.75rem", color: "#888" }}>2012</p>
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 10 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 8, flexShrink: 0,
                  background: "#003262", display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "inset 0 0 0 2px rgba(0,0,0,0.08)"
                }}>
                  <span style={{ fontSize: "0.7rem", fontWeight: 500, color: "#FDB515", letterSpacing: "0.05em", fontFamily: "'DM Mono', monospace" }}>UCB</span>
                </div>
                <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.4rem", fontWeight: 300 }}>B.A. Interdisciplinary Studies</h3>
              </div>
              <p style={{ fontSize: "0.85rem", color: "#888", paddingLeft: 60 }}>University of California, Berkeley</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section" style={{ borderBottom: "1px solid #e0ddd6" }}>
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#aaa", marginBottom: 36 }}>06 · Contact</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }}>
            <div>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.8rem", fontWeight: 300, marginBottom: 16, lineHeight: 1.3 }}>Let's work<br /><span style={{ fontStyle: "italic" }}>together.</span></h2>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.9, color: "#555" }}>Open to internship opportunities, research collaborations, and interesting projects. Feel free to reach out.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 16 }}>
              {[
                { label: "Email", value: "holmberg18@gmail.com", href: "mailto:holmberg18@gmail.com" },
                { label: "GitHub", value: "github.com/Holmberg18", href: "https://github.com/Holmberg18" },
                { label: "LinkedIn", value: "linkedin.com/in/holmbergj", href: "https://www.linkedin.com/in/holmbergj/" },
                { label: "Location", value: "Copenhagen, Denmark", href: "#" },
              ].map(({ label, value, href }) => (
                <div key={label} style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
                  <span style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#aaa", width: 64, flexShrink: 0 }}>{label}</span>
                  <a href={href} className="contact-link" style={{ fontSize: "0.85rem" }}>{value}</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <div style={{ padding: "32px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "0.7rem", color: "#aaa" }}>© 2025 Jon Holmberg</span>
          <span style={{ fontSize: "0.7rem", color: "#aaa" }}>ECE · CU Boulder</span>
        </div>

      </div>
    </div>
  );
}
