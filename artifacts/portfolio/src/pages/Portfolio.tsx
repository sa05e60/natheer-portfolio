import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cursor, Nav, SectionHeader, Reveal } from "../components/Editorial";

const Portfolio = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-secondary selection:text-white">
      <div className="paper-grain" />
      <Cursor />
      <Nav />

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        {/* HERO SECTION */}
        <section id="hero" className="min-h-[85vh] flex flex-col justify-center relative">
          <div className="editorial-rule mb-12" />
          
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
            <div className="flex-1 text-center lg:text-left z-10">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.06 } }
                }}
                className="font-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-primary tracking-widest leading-[1.1] mb-6 flex flex-wrap justify-center lg:justify-start"
              >
                {"NADHEER WALEED JASIM".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    className={char === " " ? "w-4 lg:w-6" : ""}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>
              
              <Reveal delay={1}>
                <p className="font-subheading text-2xl md:text-3xl italic text-foreground/80 mb-8">
                  Cybersecurity Engineer <span className="text-secondary mx-2">✦</span> Baghdad, Iraq
                </p>
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 font-body text-sm tracking-wider uppercase text-foreground/70">
                  <span>+964 770 015 5986</span>
                  <span className="hidden lg:inline">—</span>
                  <span>natheerwaleed1f@gmail.com</span>
                </div>
              </Reveal>
            </div>
            
            <Reveal delay={0.5}>
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] shrink-0">
                <div className="absolute inset-0 rounded-full border-[1px] border-foreground/30 scale-[1.05]" />
                <div className="absolute inset-0 rounded-full border-[1px] border-foreground/30 scale-[1.1]" />
                <div className="absolute inset-0 rounded-full border-[4px] border-double border-secondary z-20 pointer-events-none" />
                <img 
                  src="/nadheer-photo.png" 
                  alt="Nadheer Waleed Jasim"
                  className="w-full h-full object-cover rounded-full filter sepia-[0.2] contrast-125"
                />
              </div>
            </Reveal>
          </div>
          
          <div className="editorial-rule mt-16" />
        </section>

        {/* PROFILE SECTION */}
        <section id="profile">
          <SectionHeader title="— PROFILE —" />
          <div className="flex flex-col md:flex-row gap-12 md:gap-16">
            <Reveal delay={0.1}>
              <div className="md:w-1/2">
                <h3 className="font-heading text-3xl md:text-4xl text-primary leading-snug">
                  "Building robust defenses requires understanding how to dismantle them. Precision, creativity, and discipline drive every operation."
                </h3>
              </div>
            </Reveal>
            
            <div className="hidden md:block w-[1px] bg-foreground/20 relative">
              <div className="absolute top-0 bottom-0 left-[2px] w-[1px] bg-secondary/30" />
            </div>
            
            <Reveal delay={0.3}>
              <div className="md:w-1/2 font-body text-lg leading-relaxed text-foreground/90">
                <p className="mb-6">
                  <span className="float-left text-6xl font-heading text-secondary leading-[0.8] mr-3 mt-1">N</span>
                  adheer Waleed Jasim is a cybersecurity engineer and software developer based in Baghdad, Iraq. With deep expertise spanning offensive and defensive security, software engineering, and technical strategy, he has built and led complex systems from vulnerability research to large-scale network defense.
                </p>
                <p>
                  He brings precision, creativity, and discipline to every project — from custom tooling to cutting-edge security operations. His approach seamlessly bridges the gap between deep technical exploitation and resilient enterprise architecture.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* EXPERTISE SECTION */}
        <section id="expertise">
          <SectionHeader title="— EXPERTISE —" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Offensive & Defensive Security",
                items: ["Penetration Testing", "Vulnerability Research", "Malware Analysis", "CTF Competition", "Threat Mitigation", "Network Defense"]
              },
              {
                title: "Software Engineering",
                items: ["Full-Stack Development", "System Architecture", "API Design", "Database Engineering", "Workflow Automation"]
              },
              {
                title: "Technical Strategy",
                items: ["Security Assessment", "Technical Leadership", "Research & Development", "Tool Development", "Process Engineering"]
              }
            ].map((col, i) => (
              <Reveal key={i} delay={i * 0.2}>
                <motion.div 
                  whileHover={{ y: -4, boxShadow: "0 12px 30px -10px rgba(107, 30, 42, 0.15)" }}
                  className="vintage-border bg-background p-8 h-full transition-shadow duration-500"
                >
                  <h4 className="font-heading text-2xl text-primary mb-6 text-center border-b border-foreground/10 pb-4">
                    {col.title}
                  </h4>
                  <ul className="space-y-4 font-body text-[15px]">
                    {col.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="text-secondary text-sm mt-1">✦</span>
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* WORKS SECTION */}
        <section id="works">
          <SectionHeader title="— WORKS —" />
          <div className="flex flex-col gap-12">
            {[
              { id: "01", name: "Mirai", desc: "Advanced botnet reverse engineering and analysis project studying IoT exploit chains and network propagation mechanics." },
              { id: "02", name: "Print Workflow Manager", desc: "Enterprise print management system streamlining production workflows for commercial printing operations." },
              { id: "03", name: "Custom Security & Automation Tooling", desc: "Bespoke security tools and automation scripts built for real-world offensive and defensive operations." },
              { id: "04", name: "Eco-Iraq", desc: "Environmental data platform for Iraq, aggregating ecological metrics and enabling data-driven environmental policy." },
              { id: "05", name: "Advanced Vulnerability Research", desc: "Systematic research into novel attack vectors, CVE documentation, and responsible disclosure." },
              { id: "06", name: "Network Defense & Threat Mitigation", desc: "Large-scale network hardening and threat response frameworks deployed in production environments." }
            ].map((project, i) => (
              <Reveal key={project.id} delay={0.1}>
                <motion.div 
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative"
                >
                  <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-baseline">
                    <span className="font-heading text-6xl md:text-8xl text-secondary/30 transition-colors group-hover:text-secondary/60">
                      {project.id}
                    </span>
                    <div className="flex-1 pb-6 border-b border-foreground/20">
                      <h4 className="font-heading text-3xl md:text-4xl text-foreground mb-4 group-hover:text-primary transition-colors">
                        {project.name}
                      </h4>
                      <p className="font-body text-lg text-foreground/80 max-w-3xl leading-relaxed">
                        {project.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CREDENTIALS SECTION */}
        <section id="credentials">
          <SectionHeader title="— CREDENTIALS —" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Reveal delay={0.1}>
              <div className="flex flex-col items-center text-center">
                <div className="w-48 h-48 rounded-full border-[2px] border-primary p-2 mb-8 relative flex items-center justify-center">
                  <div className="absolute inset-[6px] border border-dashed border-primary rounded-full animate-[spin_60s_linear_infinite]" />
                  <div className="font-heading text-xl uppercase tracking-widest text-primary">
                    CTF Honors
                  </div>
                </div>
                <div className="space-y-6 font-body text-lg">
                  <div className="border-b border-foreground/10 pb-4">
                    <div className="font-heading text-2xl mb-1 text-foreground">6th Place</div>
                    <div className="text-muted italic">out of 71 Teams</div>
                  </div>
                  <div className="border-b border-foreground/10 pb-4">
                    <div className="font-heading text-2xl mb-1 text-foreground">78th Place</div>
                    <div className="text-muted italic">out of 1,014 Teams</div>
                  </div>
                  <div className="pb-4">
                    <div className="font-heading text-2xl mb-1 text-foreground">8th Place</div>
                    <div className="text-muted italic">Ministry CTF</div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-col items-center text-center">
                <div className="w-48 h-48 rounded-full border-[2px] border-secondary p-2 mb-8 relative flex items-center justify-center">
                  <div className="absolute inset-[6px] border border-dashed border-secondary rounded-full animate-[spin_60s_linear_infinite_reverse]" />
                  <div className="font-heading text-xl uppercase tracking-widest text-secondary">
                    Certifications
                  </div>
                </div>
                <div className="flex flex-wrap justify-center gap-6 mt-8">
                  {['AWS', 'Cisco', 'CEH'].map(cert => (
                    <motion.div 
                      key={cert}
                      whileHover={{ y: -4, scale: 1.05 }}
                      className="vintage-border px-8 py-4 bg-background"
                    >
                      <span className="font-heading text-2xl text-foreground tracking-widest">{cert}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="mt-24 border-t-2 border-foreground/20 border-double">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <Reveal>
            <h2 className="font-heading text-3xl tracking-[0.2em] text-primary mb-6">
              NADHEER WALEED JASIM
            </h2>
            <div className="flex items-center justify-center gap-4 text-secondary mb-8">
              <span className="w-12 h-[1px] bg-secondary" />
              <span className="text-xl">✦</span>
              <span className="w-12 h-[1px] bg-secondary" />
            </div>
            <div className="font-subheading text-lg italic text-foreground/70 space-y-2">
              <p>Baghdad, Iraq — 2025</p>
              <p>natheerwaleed1f@gmail.com | +964 770 015 5986</p>
            </div>
          </Reveal>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
