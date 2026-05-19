import React from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { GrainOverlay, CursorDot, StickyNav, PosterRule, ThinRule, OrnamentalDivider, Reveal } from "../components/Editorial";

const nameChars = "NADHEER WALEED JASIM".split("");

const Hero = () => {
  const { scrollY } = useScroll();
  const photoScale = useTransform(scrollY, [0, 800], [1, 1.12]);
  const overlayOpacity = useTransform(scrollY, [0, 400], [0.45, 0.72]);

  return (
    <section
      id="hero"
      className="relative min-h-[100vh] overflow-hidden bg-background"
    >
      {/* Full-bleed photo */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        style={{ scale: photoScale }}
      >
        <img
          src="/nadheer-photo.png"
          alt="Nadheer Waleed Jasim"
          className="w-full h-full object-contain object-center"
          style={{ filter: "contrast(1.08) brightness(0.95)" }}
        />
      </motion.div>

      {/* Dark blend overlay — photo fades into bg at edges */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: overlayOpacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.45 }}
        transition={{ duration: 1.2, delay: 0.4 }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, #0F0E0A 0%, transparent 22%, transparent 60%, #0F0E0A 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #0F0E0A 0%, transparent 20%, transparent 80%, #0F0E0A 100%)" }} />
      </motion.div>

      {/* Corner labels — top */}
      <motion.div
        className="absolute top-10 left-6 md:left-12 z-20"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 0.8 }}
      >
        <span className="font-teko text-primary tracking-[0.35em] text-xs uppercase opacity-60">Portfolio — 2026</span>
      </motion.div>
      <motion.div
        className="absolute top-10 right-6 md:right-12 z-20"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 0.8 }}
      >
        <span className="font-teko text-primary tracking-[0.35em] text-xs uppercase opacity-60">Baghdad · Iraq</span>
      </motion.div>

      {/* NAME — over body, clear of subtitle */}
      <div className="absolute z-20 w-full text-center" style={{ top: "52%", left: 0, right: 0 }}>
        <div
          className="font-bebas leading-[0.88] tracking-[0.1em] select-none w-full px-4"
          style={{ fontSize: "clamp(3rem, 10vw, 9rem)" }}
          aria-label="Nadheer Waleed Jasim"
        >
          {/* NADHEER — slides in from left */}
          <div className="overflow-hidden">
            <motion.div
              initial={{ x: "-60%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
              style={{ color: "#E8DFC0", textShadow: "0 4px 60px rgba(0,0,0,0.95), 0 0 120px rgba(0,0,0,0.6)" }}
            >
              NADHEER
            </motion.div>
          </div>

          {/* Rule draws across */}
          <motion.div
            className="w-full h-[1.5px] bg-primary origin-left my-2 md:my-3"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* WALEED JASIM — slides in from right */}
          <div className="overflow-hidden">
            <motion.div
              initial={{ x: "60%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
              style={{ color: "#C4A882", textShadow: "0 4px 60px rgba(0,0,0,0.95), 0 0 120px rgba(0,0,0,0.6)" }}
            >
              WALEED JASIM
            </motion.div>
          </div>
        </div>
      </div>

      {/* SUBTITLE — bottom strip */}
      <motion.div
        className="absolute z-20 bottom-6 md:bottom-8 left-0 right-0 px-6 md:px-12 flex justify-between items-end"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
      >
        <div>
          <div className="font-teko text-secondary tracking-[0.3em] text-sm md:text-base uppercase">
            Cybersecurity Engineer
          </div>
          <div className="font-cormorant italic text-foreground opacity-40 text-xs md:text-sm tracking-wide mt-0.5">
            +9647700155986 · natheerwaleed1f@gmail.com
          </div>
        </div>
        <motion.div
          className="flex items-center gap-2"
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
        >
          <div className="w-[1px] h-8 bg-primary opacity-40" />
          <span className="font-teko text-[10px] tracking-[0.3em] text-primary opacity-40 uppercase">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

const Portfolio = () => {
  return (
    <AnimatePresence>
      <div className="min-h-screen relative overflow-x-hidden text-foreground">
        <GrainOverlay />
        <CursorDot />
        <StickyNav />

        <main className="mx-auto w-full">
          <Hero />

          {/* PROFILE SECTION */}
          <section id="profile" className="bg-background pt-24 pb-32">
            <div className="max-w-7xl mx-auto px-8 md:px-16">
              <Reveal>
                <PosterRule />
              </Reveal>
              <Reveal delay={0.1}>
                <div className="text-center py-8">
                  <span className="font-bebas text-4xl text-secondary tracking-widest">— 01 —</span>
                </div>
              </Reveal>

              <div className="flex flex-col md:flex-row mt-8 gap-0">
                <Reveal delay={0.2} className="w-full md:w-[60%] pr-0 md:pr-16 md:border-r border-border">
                  <div className="hidden md:block">
                    <span className="section-label-rotated float-left mr-6 mt-1 opacity-50">PROFILE</span>
                  </div>
                  <p className="font-cormorant text-lg leading-[1.9] text-foreground mb-10">
                    Nadheer Waleed Jasim is a cybersecurity engineer and software developer based in Baghdad, Iraq. With deep expertise spanning offensive and defensive security, software engineering, and technical strategy, he has built and led complex systems from vulnerability research to large-scale network defense. He brings precision, creativity, and discipline to every project — from custom tooling to cutting-edge security operations.
                  </p>
                  <p className="font-fell italic text-2xl md:text-3xl text-highlight leading-relaxed">
                    "Precision. Creativity. Discipline."
                  </p>
                </Reveal>

                <Reveal delay={0.35} className="w-full md:w-[40%] mt-12 md:mt-0 md:pl-16">
                  <div className="space-y-8">
                    {[
                      { label: "LOCATION", value: "Baghdad, Iraq" },
                      { label: "ROLE", value: "Cybersecurity Engineer" },
                      { label: "EMAIL", value: "natheerwaleed1f@gmail.com" },
                      { label: "PHONE", value: "+9647700155986" },
                    ].map((item, i) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.1, duration: 0.6, ease: "easeOut" }}
                        className="pl-5 border-l-[2px] border-primary"
                      >
                        <div className="font-teko text-primary tracking-[0.2em] text-xs mb-1 uppercase">{item.label}</div>
                        <div className="font-cormorant text-foreground text-xl">{item.value}</div>
                      </motion.div>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* EXPERTISE SECTION */}
          <section id="expertise" className="bg-alt pt-24 pb-32">
            <div className="max-w-7xl mx-auto px-8 md:px-16">
              <Reveal>
                <PosterRule />
              </Reveal>
              <Reveal delay={0.1}>
                <div className="text-center py-8">
                  <span className="font-bebas text-4xl text-secondary tracking-widest">— 02 —</span>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 mt-8">
                {[
                  {
                    title: "OFFENSIVE & DEFENSIVE",
                    items: ["Penetration Testing", "Vulnerability Research", "Malware Analysis", "CTF Competition", "Threat Mitigation", "Network Defense"],
                    delay: 0.1,
                  },
                  {
                    title: "SOFTWARE ENGINEERING",
                    items: ["Full-Stack Development", "System Architecture", "API Design", "Database Engineering", "Workflow Automation"],
                    delay: 0.25,
                  },
                  {
                    title: "STRATEGY",
                    items: ["Security Assessment", "Technical Leadership", "Research & Development", "Tool Development", "Process Engineering"],
                    delay: 0.4,
                  },
                ].map((col, colIdx) => (
                  <Reveal
                    key={col.title}
                    delay={col.delay}
                    className={`${colIdx < 2 ? "md:pr-12 md:border-r border-border" : "md:pl-0"} ${colIdx > 0 ? "md:pl-12" : ""}`}
                  >
                    <h3 className="font-bebas text-2xl tracking-widest text-foreground mb-8 pb-4 border-b border-border">
                      {col.title}
                    </h3>
                    <ul className="space-y-4">
                      {col.items.map((item, i) => (
                        <motion.li
                          key={item}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: col.delay + 0.05 * i, duration: 0.5, ease: "easeOut" }}
                          className="font-cormorant text-xl text-foreground flex items-center gap-3"
                        >
                          <span className="text-primary text-xs">✦</span>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* WORKS SECTION */}
          <section id="works" className="bg-background pt-24 pb-32">
            <div className="max-w-7xl mx-auto px-8 md:px-16">
              <Reveal>
                <PosterRule />
              </Reveal>
              <Reveal delay={0.1}>
                <div className="text-center py-8">
                  <span className="font-bebas text-4xl text-secondary tracking-widest">— 03 —</span>
                </div>
              </Reveal>

              <div className="mt-8 flex flex-col">
                {[
                  { id: "01", name: "MIRAI", desc: "Advanced botnet reverse engineering and analysis project studying IoT exploit chains and network propagation mechanics" },
                  { id: "02", name: "PRINT WORKFLOW MANAGER", desc: "Enterprise print management system streamlining production workflows for commercial printing operations" },
                  { id: "03", name: "SECURITY & AUTOMATION TOOLING", desc: "Bespoke security tools and automation scripts built for real-world offensive and defensive operations" },
                  { id: "04", name: "ECO-IRAQ", desc: "Environmental data platform for Iraq, aggregating ecological metrics and enabling data-driven environmental policy" },
                  { id: "05", name: "ADVANCED VULNERABILITY RESEARCH", desc: "Systematic research into novel attack vectors, CVE documentation, and responsible disclosure" },
                  { id: "06", name: "NETWORK DEFENSE SIMULATION", desc: "Large-scale network hardening and threat response frameworks deployed in production environments" },
                ].map((project, idx) => (
                  <React.Fragment key={project.id}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ delay: 0.05 * idx, duration: 0.65, ease: "easeOut" }}
                      whileHover={{ x: 6 }}
                      className="relative py-10 pl-6 md:pl-10 group cursor-none"
                      style={{ borderLeft: "3px solid #3A3A2E", transition: "border-color 0.3s" }}
                      onMouseEnter={e => (e.currentTarget.style.borderLeftColor = "#D4B896")}
                      onMouseLeave={e => (e.currentTarget.style.borderLeftColor = "#3A3A2E")}
                    >
                      <span className="absolute top-2 right-2 md:right-6 font-bebas text-[8rem] md:text-[11rem] leading-none opacity-[0.04] text-foreground pointer-events-none select-none">
                        {project.id}
                      </span>
                      <div className="font-teko text-primary text-xs tracking-[0.3em] mb-3 uppercase">{project.id}</div>
                      <h4 className="font-bebas text-3xl md:text-5xl text-foreground mb-3 leading-tight">
                        {project.name}
                      </h4>
                      <p className="font-cormorant text-secondary text-lg max-w-2xl leading-relaxed">
                        {project.desc}
                      </p>
                    </motion.div>
                    <ThinRule />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </section>

          {/* CREDENTIALS SECTION */}
          <section id="credentials" className="bg-alt pt-24 pb-32">
            <div className="max-w-5xl mx-auto px-8 md:px-16">
              <Reveal>
                <PosterRule />
              </Reveal>
              <Reveal delay={0.1}>
                <div className="text-center py-8 mb-8">
                  <span className="font-bebas text-4xl text-secondary tracking-widest">— 04 —</span>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                {[
                  { title: "6TH / 71 TEAMS", sub: "CTF COMPETITION", span: 2 },
                  { title: "78TH / 1,014 TEAMS", sub: "INTERNATIONAL CTF", span: 1 },
                  { title: "8TH PLACE — MINISTRY CTF", sub: "MINISTRY OF INTERIOR COMPETITION", span: 1 },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.6, ease: "easeOut" }}
                    className={`border-[3px] border-primary bg-[#12120C] p-8 ${item.span === 2 ? "md:col-span-2" : ""}`}
                  >
                    <h4 className={`font-bebas text-foreground mb-2 ${item.span === 2 ? "text-5xl md:text-6xl" : "text-3xl md:text-4xl"}`}>
                      {item.title}
                    </h4>
                    <div className="font-teko text-primary tracking-[0.2em] text-base">{item.sub}</div>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
                {["AWS CERTIFIED", "CISCO CERTIFIED", "CEH — ETHICAL HACKER"].map((cert, i) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.6, ease: "easeOut" }}
                    className="border-[2px] border-border bg-background p-6 text-center"
                  >
                    <h5 className="font-bebas text-xl text-foreground tracking-wider">{cert}</h5>
                  </motion.div>
                ))}
              </div>

              <Reveal delay={0.6}>
                <div className="border-[3px] border-primary bg-[#12120C] p-7 text-center">
                  <div className="font-teko text-primary text-xs tracking-[0.3em] mb-2 uppercase">Event</div>
                  <h4 className="font-bebas text-3xl md:text-4xl text-foreground tracking-wide">
                    HOST — AI DEVFEST 2026, AL-FARABI UNIVERSITY
                  </h4>
                </div>
              </Reveal>
            </div>
          </section>
        </main>

        <footer className="bg-background border-t border-border pt-14 pb-20">
          <div className="max-w-7xl mx-auto px-8 text-center flex flex-col items-center gap-5">
            <OrnamentalDivider />
            <div className="font-bebas text-2xl tracking-[0.3em] text-foreground mt-2">
              NADHEER WALEED JASIM
            </div>
            <div className="font-teko uppercase tracking-[0.3em] text-primary text-sm">
              BAGHDAD — 2026
            </div>
            <div className="font-teko tracking-[0.15em] text-foreground opacity-40 text-sm">
              natheerwaleed1f@gmail.com | +9647700155986
            </div>
          </div>
        </footer>
      </div>
    </AnimatePresence>
  );
};

export default Portfolio;
