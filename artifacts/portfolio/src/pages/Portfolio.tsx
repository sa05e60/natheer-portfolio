import React from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Trans, useTranslation } from "react-i18next";
import { GrainOverlay, StickyNav, PosterRule, ThinRule, OrnamentalDivider, Reveal } from "../components/Editorial";

const Hero = () => {
  const { scrollY } = useScroll();
  const photoScale = useTransform(scrollY, [0, 800], [1, 1.12]);
  const overlayOpacity = useTransform(scrollY, [0, 400], [0.45, 0.72]);
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === "rtl";

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
        className={`absolute top-10 ${isRtl ? 'right-6 md:right-12' : 'left-6 md:left-12'} z-20`}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 0.8 }}
      >
        <span className="font-teko text-primary tracking-[0.35em] text-xs uppercase opacity-60">{t('hero.subtitle1')}</span>
      </motion.div>
      <motion.div
        className={`absolute top-10 ${isRtl ? 'left-6 md:left-12' : 'right-6 md:right-12'} z-20`}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 0.8 }}
      >
        <span className="font-teko text-primary tracking-[0.35em] text-xs uppercase opacity-60">{t('hero.subtitle2')}</span>
      </motion.div>

      {/* NAME — over body, clear of subtitle */}
      <div className={`absolute z-20 w-full text-center ${isRtl ? 'top-[42%] md:top-[45%]' : 'top-[52%]'}`} style={{ left: 0, right: 0 }}>
        <div
          className={`select-none w-full px-4 ${isRtl ? 'leading-[1.1]' : 'font-bebas leading-[0.88] tracking-[0.1em]'}`}
          style={{ fontSize: isRtl ? "clamp(2.5rem, 7vw, 6rem)" : "clamp(3rem, 10vw, 9rem)", ...(isRtl ? { fontFamily: "'Noto Kufi Arabic', sans-serif", letterSpacing: "0", fontWeight: 700 } : {}) }}
          aria-label="Nadheer Waleed Jasim"
        >
          {/* NADHEER — slides in from left (or right for Arabic) */}
          <div className={`overflow-hidden py-4 -my-4 pb-8 ${isRtl ? '-mb-2 md:-mb-1' : '-mb-8'}`}>
            <motion.div
              initial={{ x: isRtl ? "60%" : "-60%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
              style={{ color: "#E8DFC0", willChange: "transform, opacity" }}
            >
              {t('hero.name1')}
            </motion.div>
          </div>

          {/* MARQUEE STRIP (Replaces Rule) */}
          <motion.div
            className={`w-full border-y border-[#3A3A2E] overflow-hidden marquee-container flex items-center py-1.5 ${isRtl ? 'my-4 md:my-6' : 'my-2 md:my-3'}`}
            style={{ backgroundColor: "transparent" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.9 }}
            dir="ltr"
          >
            <div className="whitespace-nowrap flex animate-marquee" style={{ color: "#8B9E6B", fontFamily: "var(--font-teko), sans-serif", fontSize: "0.85rem", letterSpacing: isRtl ? "0" : "0.25em", textTransform: "uppercase", lineHeight: "normal", direction: isRtl ? "rtl" : "ltr" }}>
              <div className="flex-shrink-0 flex">
                <span className={`px-2 ${isRtl ? 'pb-1' : ''}`}>{t('hero.marquee')}</span>
                <span className={`px-2 ${isRtl ? 'pb-1' : ''}`}>{t('hero.marquee')}</span>
                <span className={`px-2 ${isRtl ? 'pb-1' : ''}`}>{t('hero.marquee')}</span>
                <span className={`px-2 ${isRtl ? 'pb-1' : ''}`}>{t('hero.marquee')}</span>
              </div>
              <div className="flex-shrink-0 flex">
                <span className={`px-2 ${isRtl ? 'pb-1' : ''}`}>{t('hero.marquee')}</span>
                <span className={`px-2 ${isRtl ? 'pb-1' : ''}`}>{t('hero.marquee')}</span>
                <span className={`px-2 ${isRtl ? 'pb-1' : ''}`}>{t('hero.marquee')}</span>
                <span className={`px-2 ${isRtl ? 'pb-1' : ''}`}>{t('hero.marquee')}</span>
              </div>
            </div>
          </motion.div>

          {/* WALEED JASIM — slides in from right (or left for Arabic) */}
          <div className={`overflow-hidden py-4 -my-4 pb-8 ${isRtl ? '-mb-2 md:-mb-1' : '-mb-8'}`}>
            <motion.div
              initial={{ x: isRtl ? "-60%" : "60%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
              style={{ color: "#C4A882", willChange: "transform, opacity" }}
            >
              {t('hero.name2')}
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
            {t('hero.role')}
          </div>
          <div className="font-cormorant italic text-foreground opacity-40 text-xs md:text-sm tracking-wide mt-0.5" dir="ltr">
            +9647700155986 · natheerwaleed1f@gmail.com
          </div>
        </div>
        <motion.div
          className="flex items-center gap-2"
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
        >
          <div className="w-[1px] h-8 bg-primary opacity-40" />
          <span className="font-teko text-[10px] tracking-[0.3em] text-primary opacity-40 uppercase">{t('hero.scroll')}</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

const Portfolio = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === "rtl";
  const worksRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress: worksScrollProgress } = useScroll({
    target: worksRef,
    offset: ["start center", "end center"]
  });

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (window.innerWidth >= 768) {
        const targetPosition = 55.99;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 2500; // 2.5 seconds for a very slow, cinematic scroll
        let start: number | null = null;

        const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

        const animation = (currentTime: number) => {
          if (start === null) start = currentTime;
          const timeElapsed = currentTime - start;
          const progress = Math.min(timeElapsed / duration, 1);
          const easeProgress = easeInOutCubic(progress);

          window.scrollTo(0, startPosition + distance * easeProgress);

          if (timeElapsed < duration) {
            requestAnimationFrame(animation);
          }
        };

        requestAnimationFrame(animation);
      }
    }, 1000); // Wait 1s for initial animations to start
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      <div className="min-h-screen relative overflow-x-hidden text-foreground">
        <GrainOverlay />

        <StickyNav />

        <main className="mx-auto w-full">
          <Hero />

          {/* PROFILE SECTION */}
          <section id="profile" className="bg-background pt-24 pb-32">
            <div className="max-w-7xl mx-auto px-8 md:px-16" dir={isRtl ? 'rtl' : 'ltr'}>
              <Reveal>
                <PosterRule />
              </Reveal>
              <Reveal delay={0.1}>
                <div className="text-center py-8 flex flex-col items-center gap-2">
                  <h2 className="font-bebas text-5xl md:text-6xl text-foreground tracking-widest">{t('profile.sectionBebeas')}</h2>
                  <span className="font-teko text-primary tracking-[0.3em] uppercase text-lg">{t('profile.sectionTeko')}</span>
                </div>
              </Reveal>

              <div className="flex flex-col md:flex-row mt-8 gap-0">
                <Reveal delay={0.2} className={`w-full md:w-[60%] ${isRtl ? 'pl-0 md:pl-16 md:border-l border-border' : 'pr-0 md:pr-16 md:border-r border-border'}`}>
                  <div className="hidden md:block">
                    <span className={`section-label-rotated mt-1 opacity-50 ${isRtl ? 'float-right ml-6' : 'float-left mr-6'}`}>{t('profile.sectionBebeas')}</span>
                  </div>
                  <p className="font-cormorant text-xl md:text-2xl leading-[1.8] text-foreground mb-10">
                    <Trans i18nKey="profile.desc" t={t}>
                      {t('profile.desc_parts.0')} <strong className="text-primary font-semibold">{t('profile.desc_parts.1')}</strong> {t('profile.desc_parts.6')} <strong className="text-primary font-semibold">{t('profile.desc_parts.2')}</strong> {t('profile.desc_parts.8')} <strong className="text-primary font-semibold">{t('profile.desc_parts.3')}</strong> {t('profile.desc_parts.9')} <strong className="text-primary font-semibold">{t('profile.desc_parts.4')}</strong> {t('profile.desc_parts.10')} <strong className="text-primary font-semibold">{t('profile.desc_parts.5')}</strong> {t('profile.desc_parts.11')}
                    </Trans>
                  </p>
                  <p className="font-fell italic text-2xl md:text-3xl text-highlight leading-relaxed">
                    {t('profile.quote')}
                  </p>
                </Reveal>

                <Reveal delay={0.35} className={`w-full md:w-[40%] mt-12 md:mt-0 ${isRtl ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="space-y-8">
                    {[
                      { label: t('profile.locationLabel'), value: t('profile.locationValue') },
                      { label: t('profile.roleLabel'), value: t('profile.roleValue') },
                      { label: t('profile.emailLabel'), value: "natheerwaleed1f@gmail.com", dir: "ltr" },
                      { label: t('profile.phoneLabel'), value: "+9647700155986", dir: "ltr" },
                    ].map((item, i) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: isRtl ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.1, duration: 0.6, ease: "easeOut" }}
                        className={`${isRtl ? 'pr-5 border-r-[2px]' : 'pl-5 border-l-[2px]'} border-primary`}
                      >
                        <div className="font-teko text-primary tracking-[0.2em] text-base mb-1 uppercase">{item.label}</div>
                        <div className="font-cormorant text-foreground text-xl md:text-2xl" dir={item.dir || (isRtl ? 'rtl' : 'ltr')}>{item.value}</div>
                      </motion.div>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* EXPERTISE SECTION */}
          <section id="expertise" className="bg-alt pt-24 pb-32">
            <div className="max-w-7xl mx-auto px-8 md:px-16" dir={isRtl ? 'rtl' : 'ltr'}>
              <Reveal>
                <PosterRule />
              </Reveal>
              <Reveal delay={0.1}>
                <div className="text-center py-8 flex flex-col items-center gap-2">
                  <h2 className="font-bebas text-5xl md:text-6xl text-foreground tracking-widest">{t('expertise.sectionBebeas')}</h2>
                  <span className="font-teko text-primary tracking-[0.3em] uppercase text-lg">{t('expertise.sectionTeko')}</span>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {[
                  {
                    title: t('expertise.offensive'),
                    id: "01",
                    items: ["Penetration Testing", "Vulnerability Research", "Malware Analysis", "CTF Competition", "Threat Mitigation", "Network Defense"],
                    delay: 0.1,
                  },
                  {
                    title: t('expertise.software'),
                    id: "02",
                    items: ["Full-Stack Development", "System Architecture", "API Design", "Database Engineering", "Workflow Automation"],
                    delay: 0.25,
                  },
                  {
                    title: t('expertise.strategy'),
                    id: "03",
                    items: ["Security Assessment", "Technical Leadership", "Research & Development", "Tool Development", "Process Engineering"],
                    delay: 0.4,
                  },
                ].map((col, colIdx) => (
                  <Reveal key={col.title} delay={col.delay} className="group h-full">
                    <motion.div
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="h-full bg-[#0A0A08] border border-border p-8 md:p-10 relative overflow-hidden"
                    >
                      {/* Decorative background element */}
                      <div className={`absolute -top-10 ${isRtl ? '-left-6' : '-right-6'} font-bebas text-[8rem] leading-none text-primary/5 select-none pointer-events-none group-hover:text-primary/10 transition-colors duration-500`}>
                        {col.id}
                      </div>

                      <div className={`flex items-end justify-between mb-8 pb-6 border-b border-border/50 relative z-10`}>
                        <h3 className={`font-bebas text-2xl md:text-3xl tracking-widest text-foreground`}>
                          {col.title}
                        </h3>
                        <span className="font-teko text-primary tracking-widest text-lg opacity-80">{col.id}</span>
                      </div>

                      <ul className="space-y-4 relative z-10">
                        {col.items.map((item, i) => (
                          <motion.li
                            key={item}
                            initial={{ opacity: 0, x: isRtl ? 10 : -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            whileHover={{ x: isRtl ? -8 : 8 }}
                            viewport={{ once: true }}
                            transition={{ delay: col.delay + 0.05 * i, duration: 0.4 }}
                            className={`font-cormorant text-xl md:text-2xl text-foreground/80 flex items-center gap-4 cursor-default group/item`}
                          >
                            <motion.span 
                              className="text-primary text-sm opacity-50 group-hover/item:opacity-100 group-hover/item:rotate-90 transition-all duration-300 inline-block"
                            >
                              ✦
                            </motion.span>
                            <span className="group-hover/item:text-highlight transition-colors duration-300">{t(`expertise.items.${item}`)}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* WORKS SECTION */}
          <section id="works" className="bg-background pt-24 pb-32">
            <div className="max-w-7xl mx-auto px-8 md:px-16" dir={isRtl ? 'rtl' : 'ltr'}>
              <Reveal>
                <PosterRule />
              </Reveal>
              <Reveal delay={0.1}>
                <div className="text-center py-8 flex flex-col items-center gap-2">
                  <h2 className="font-bebas text-5xl md:text-6xl text-foreground tracking-widest">{t('works.sectionBebeas')}</h2>
                  <span className="font-teko text-primary tracking-[0.3em] uppercase text-lg">{t('works.sectionTeko')}</span>
                </div>
              </Reveal>

              <div ref={worksRef} className="mt-24 relative flex flex-col gap-16 md:gap-32">
                {/* Central Spine (Animated on Scroll) */}
                <motion.div 
                  className="hidden md:block absolute left-1/2 top-10 bottom-10 w-[2px] bg-primary/40 -translate-x-1/2 z-0"
                  style={{ scaleY: worksScrollProgress, transformOrigin: "top" }}
                />

                {[
                  { id: "01" },
                  { id: "02" },
                  { id: "03" },
                  { id: "04" },
                  { id: "05" },
                  { id: "06" },
                  { id: "07" },
                ].map((project, idx) => {
                  let isRight = idx % 2 !== 0;
                  if (isRtl) isRight = !isRight;
                  
                  return (
                    <div key={project.id} className={`flex w-full relative ${isRight ? 'justify-end' : 'justify-start'}`}>
                      {/* Timeline Node (Animated) */}
                      <motion.div 
                        className="hidden md:block absolute left-1/2 top-24 w-3 h-3 bg-primary -translate-x-1/2 -translate-y-1/2 z-10 shadow-[0_0_15px_rgba(139,158,107,0.5)]"
                        initial={{ scale: 0, rotate: 0 }}
                        whileInView={{ scale: 1, rotate: 45 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, ease: "backOut" }}
                      />
                      
                      {/* Connector Line (Animated Drawing) */}
                      <motion.div 
                        className={`hidden md:block absolute top-24 w-12 lg:w-16 h-[2px] bg-primary/60 ${isRight ? (isRtl ? 'right-1/2' : 'left-1/2') : (isRtl ? 'left-1/2' : 'right-1/2')} -translate-y-1/2 z-0`}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        style={{ transformOrigin: isRight ? (isRtl ? "right" : "left") : (isRtl ? "left" : "right") }}
                      />

                      <div className={`w-full md:w-1/2 ${isRight ? (isRtl ? 'md:pr-12 lg:pr-16' : 'md:pl-12 lg:pl-16') : (isRtl ? 'md:pl-12 lg:pl-16' : 'md:pr-12 lg:pr-16')}`}>
                        <Reveal delay={0.1}>
                          <motion.div
                            className="relative group w-full"
                            whileHover="hover"
                            initial="initial"
                          >
                            {/* Massive floating number behind the text */}
                            <motion.div 
                              className={`absolute -top-10 md:-top-20 ${isRight ? (isRtl ? '-right-4 md:-right-20' : '-left-4 md:-left-20') : (isRtl ? '-left-4 md:-left-20' : '-right-4 md:-right-20')} font-bebas text-[10rem] md:text-[16rem] text-primary/5 select-none pointer-events-none z-0`}
                              variants={{ hover: { y: -20, color: "rgba(139, 158, 107, 0.1)" }, initial: { y: 0 } }}
                              transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                              {project.id}
                            </motion.div>

                            <div className={`relative z-10 p-6 md:p-10 border-primary/40 bg-gradient-to-r ${isRight ? (isRtl ? 'border-r-[3px] from-transparent to-primary/5' : 'border-l-[3px] from-primary/5 to-transparent') : (isRtl ? 'border-l-[3px] from-primary/5 to-transparent' : 'border-r-[3px] from-transparent to-primary/5')} backdrop-blur-[2px]`}>
                              <div className={`flex items-center gap-4 mb-4 ${!isRight && !isRtl ? 'flex-row-reverse' : ''} ${isRight && isRtl ? 'flex-row-reverse' : ''}`}>
                                <span className="font-teko text-primary text-xl tracking-[0.3em] uppercase">
                                  {project.id}
                                </span>
                                <motion.div 
                                  className="h-[1px] bg-primary"
                                  variants={{ hover: { width: "40px" }, initial: { width: "10px" } }}
                                  transition={{ duration: 0.4 }}
                                />
                              </div>
                              <h4 className={`font-bebas text-5xl md:text-7xl text-foreground mb-6 leading-none tracking-wide ${(isRight && isRtl) || (!isRight && !isRtl) ? 'text-right' : 'text-left'}`}>
                                {t(`works.projects.${project.id}.name`)}
                              </h4>
                              <p className={`font-cormorant text-foreground/80 text-xl md:text-3xl leading-relaxed ${(isRight && isRtl) || (!isRight && !isRtl) ? 'text-right' : 'text-left'}`}>
                                {t(`works.projects.${project.id}.desc`)}
                              </p>
                            </div>
                          </motion.div>
                        </Reveal>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* CREDENTIALS SECTION */}
          <section id="credentials" className="bg-alt pt-24 pb-32">
            <div className="max-w-5xl mx-auto px-8 md:px-16" dir={isRtl ? 'rtl' : 'ltr'}>
              <Reveal>
                <PosterRule />
              </Reveal>
              <Reveal delay={0.1}>
                <div className="text-center py-8 mb-8 flex flex-col items-center gap-2">
                  <h2 className="font-bebas text-5xl md:text-6xl text-foreground tracking-widest">{t('credentials.sectionBebeas')}</h2>
                  <span className="font-teko text-primary tracking-[0.3em] uppercase text-lg">{t('credentials.sectionTeko')}</span>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                {[
                  { title: t('credentials.items.item1.title'), sub: t('credentials.items.item1.sub'), span: 2 },
                  { title: t('credentials.items.item2.title'), sub: t('credentials.items.item2.sub'), span: 1 },
                  { title: t('credentials.items.item3.title'), sub: t('credentials.items.item3.sub'), span: 1 },
                ].map((item, i) => (
                  <motion.div
                    key={i}
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
                {[t('credentials.items.cert1'), t('credentials.items.cert2'), t('credentials.items.cert3')].map((cert, i) => (
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
                  <div className="font-teko text-primary text-base tracking-[0.3em] mb-2 uppercase">{t('credentials.eventInfo')}</div>
                  <h4 className="font-bebas text-3xl md:text-4xl text-foreground tracking-wide">
                    {t('credentials.event')}
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
              {t('footer.name')}
            </div>
            <div className="font-teko uppercase tracking-[0.3em] text-primary text-sm">
              {t('footer.location')}
            </div>
            <div className="font-teko tracking-[0.15em] text-foreground opacity-40 text-sm" dir="ltr">
              natheerwaleed1f@gmail.com | +9647700155986
            </div>
          </div>
        </footer>
      </div>
    </AnimatePresence>
  );
};

export default Portfolio;
