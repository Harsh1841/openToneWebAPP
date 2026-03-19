import { useEffect, useRef, useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import styles from './Home.module.css'

/* Intersection Observer hook for scroll reveals */
function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-visible', 'true')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    const els = ref.current?.querySelectorAll('.reveal')
    els?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return ref
}

export default function Home() {
  const pageRef = useReveal()
  const { theme } = useTheme()
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      q: 'Does OpenTone upload or store my voice recordings in the cloud?',
      a: 'No. All speech processing happens entirely on your device. OpenTone does not upload, store, or transmit any audio or voice data to external servers. Your voice never leaves your phone.'
    },
    {
      q: 'Do I need Apple Intelligence enabled?',
      a: "Yes. OpenTone's speech analysis relies on Apple's on-device intelligence capabilities for fast and secure processing. Please ensure Apple Intelligence is enabled on your device."
    },
    {
      q: 'What is a JAM Session?',
      a: 'JAM stands for "Just A Minute." You receive a random topic and must speak about it continuously for two minutes without hesitation, deviation, or repetition. It trains your brain to think on its feet under pressure.'
    },
    {
      q: 'Who is OpenTone designed for?',
      a: 'It is built for professionals preparing for meetings, students practicing presentations, language learners working on fluency, and anyone who wants to communicate with confidence.'
    },
    {
      q: 'I cannot log in, what should I do?',
      a: 'Ensure your email and password are correct. Use the "Forgot Password" option on the login screen to reset your credentials. A secure reset link will be sent to your email.'
    }
  ]

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <main ref={pageRef}>
      {/* ==================== HERO ==================== */}
      <div className={styles.heroWrap}>
        <div className={styles.hero}>
          <div className={styles.heroLeft}>
            <div className={styles.badge}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
              AI-Powered Communication Coach
            </div>
            <h1>
              Speak Openly,{' '}
              <span className={styles.gradient}>Without Fear.</span>
            </h1>
            <p>
              Unleash your voice. Build your confidence. Master the art of conversation with OpenTone — your personal AI coach for real-world communication practice in a safe, judgment-free environment.
            </p>
            <div className={styles.actions}>
              <span className={styles.primaryBtn}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                Coming Soon to App Store
              </span>
              <a href="#features" className={styles.secondaryBtn}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
                See Features
              </a>
            </div>
            <div className={styles.stats}>
              <div>
                <div className={styles.statVal}>5+</div>
                <div className={styles.statLbl}>Practice Modes</div>
              </div>
              <div>
                <div className={styles.statVal}>20+</div>
                <div className={styles.statLbl}>Interest Topics</div>
              </div>
              <div>
                <div className={styles.statVal}>Real-Time</div>
                <div className={styles.statLbl}>AI Feedback</div>
              </div>
              <div>
                <div className={styles.statVal}>100%</div>
                <div className={styles.statLbl}>Private & Secure</div>
              </div>
            </div>
          </div>

          <div className={`${styles.heroRight} reveal`}>
            {/* Animated Floating iPhone 17 Pro Dashboard */}
            <div className={`${styles.phoneFrame} ${styles.heroPhone}`}>
              <div className={styles.phonePlaceholder}>
                <div className={styles.placeholderIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/></svg>
                </div>
                <h4>App Dashboard</h4>
              </div>
              <img 
                src={theme === 'light' ? "/dashboard-light.png" : "/dashboard-dark.png"} 
                alt="Main Application Dashboard" 
                className={styles.phoneImage} 
                style={{ opacity: 1 }} 
              />
            </div>
          </div>
        </div>
      </div>

      {/* ==================== FEATURES ==================== */}
      <div id="features" className={styles.featuresSection}>
        <div className={styles.section}>
          <div className={`${styles.sectionHeader} reveal`}>
            <div className={styles.sectionTag}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              Core Features
            </div>
            <h2>Everything You Need to Master Communication</h2>
            <p>Professional-grade speech coaching powered by cutting-edge AI. Practice anytime, anywhere, without judgment.</p>
          </div>
          <div className={styles.featuresGrid}>
            {[
              {
                icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
                title: 'AI-Powered Roleplay Scenarios',
                desc: 'Step into realistic situations — from high-stakes job interviews and salary negotiations to casual coffee shop chats. Our AI characters adapt to your input with dynamic, branching conversations.',
                tag: 'Voice + Text'
              },
              {
                icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
                title: '2-Minute JAM Sessions',
                desc: 'Short on time? Sharpen your quick-thinking with our signature "Jams." Get AI-generated topics based on your interests, speak for 2 minutes, and push your fluency boundaries.',
                tag: 'Quick Practice'
              },
              {
                icon: <><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></>,
                title: 'AI Speech Coach (Voice Calls)',
                desc: 'Experience the most natural way to practice: a real-time voice call with an AI tutor. Hands-free, interactive feedback — our AI listens, responds, and helps you rephrase more naturally.',
                tag: 'Real-Time Voice'
              },
              {
                icon: <><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></>,
                title: 'Progress & Growth Tracking',
                desc: 'Watch your communication skills evolve with deep analytics. Track your streaks, monitor improvements in fluency and clarity, and build habits that last with personalized daily goals.',
                tag: 'Analytics'
              },
              {
                icon: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></>,
                title: 'Personalized Learning Path',
                desc: 'Choose from 20+ interest categories — Technology, Gaming, Finance, Fitness, Art, and more. Every practice session is tailored to topics you actually care about.',
                tag: '20+ Categories'
              },
              {
                icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></>,
                title: 'Private & Secure',
                desc: 'Your privacy matters. On-device speech processing ensures your voice stays on your phone. No cloud uploads, no recordings stored externally. Practice with complete peace of mind.',
                tag: 'On-Device AI'
              },
            ].map(({ icon, title, desc, tag }, i) => (
              <div key={title} className={`${styles.featureCard} reveal`} style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <span className={styles.featureTag}>{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ==================== HOW IT WORKS ==================== */}
      <div className={styles.howBg} id="how-it-works">
        <div className={styles.section}>
          <div className={`${styles.sectionHeader} reveal`}>
            <div className={styles.sectionTag}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
              How It Works
            </div>
            <h2>Three Steps to Better Communication</h2>
            <p>Get started in under a minute. No complicated setup — just pick, speak, and grow.</p>
          </div>
          <div className={styles.stepsGrid}>
            {[
              { n: '1', title: 'Choose Your Mode', desc: 'Select from Roleplay Scenarios, JAM Sessions, AI Voice Calls, or Real-Time Speech Analytics based on what you want to practice.' },
              { n: '2', title: 'Start Speaking', desc: 'Our AI listens and interacts in real-time. Practice with your voice naturally — get instant suggestions, rephrasings, and responses.' },
              { n: '3', title: 'Track Your Growth', desc: 'Receive actionable insights on fluency, filler words, pacing, and clarity. Watch your streak grow and your confidence soar.' },
            ].map(({ n, title, desc }, i) => (
              <div key={n} className={`${styles.stepCard} reveal`} style={{ transitionDelay: `${i * 0.12}s` }}>
                <div className={styles.stepNum}>{n}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ==================== SHOWCASE ==================== */}
      <div className={styles.showcaseBg}>
        <div className={styles.section} style={{ paddingBottom: 0 }}>
          <div className={`${styles.sectionHeader} reveal`}>
            <div className={styles.sectionTag}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
              Inside the App
            </div>
            <h2>Premium Experience. Flawless Design.</h2>
            <p>Take a sneak peek inside OpenTone. A completely reimagined interface for learning how to speak with confidence.</p>
          </div>
        </div>

        <div className={styles.showcaseRow}>
          {/* Screenshot 1: Roleplay MVP */}
          <div className={`${styles.phoneFrame} ${styles.stagger1} reveal`}>
            <div className={styles.phonePlaceholder}>
              <div className={styles.placeholderIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h4>Roleplay Scenarios</h4>
              <p>Add screenshot here (e.g. src="/roleplay-screen.png")</p>
            </div>
            <img 
              src={theme === 'light' ? "/roleplay-light.png" : "/roleplay-dark.png"} 
              alt="Roleplay Scenarios User Interface" 
              className={styles.phoneImage} 
              style={{ opacity: 1 }} 
            />
          </div>

          {/* Screenshot 2: Progress & Analytics (Feedback - Centered) */}
          <div className={`${styles.phoneFrame} ${styles.centerActive} reveal`} style={{ transitionDelay: '0.1s' }}>
            <div className={styles.phonePlaceholder}>
              <div className={styles.placeholderIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
              </div>
              <h4>Session Feedback</h4>
              <p>Add screenshot here (e.g. src="/analytics-screen.png")</p>
            </div>
            <img 
              src={theme === 'light' ? "/analytics-light.png" : "/analytics-dark.png"} 
              alt="Analytics and Progress UI" 
              className={styles.phoneImage} 
              style={{ opacity: 1 }} 
            />
          </div>

          {/* Screenshot 3: JAM Sessions (Right) */}
          <div className={`${styles.phoneFrame} ${styles.stagger3} reveal`} style={{ transitionDelay: '0.2s' }}>
            <div className={styles.phonePlaceholder}>
              <div className={styles.placeholderIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h4>JAM Sessions</h4>
              <p>Add screenshot here (e.g. src="/jam-screen.png")</p>
            </div>
            <img 
              src={theme === 'light' ? "/jam-light.png" : "/jam-dark.png"} 
              alt="JAM Session UI" 
              className={styles.phoneImage} 
              style={{ opacity: 1 }} 
            />
          </div>
        </div>
      </div>

      {/* ==================== AUDIENCE ==================== */}
      <div className={styles.audienceSection} id="audience">
        <div className={`${styles.sectionHeader} reveal`} style={{ maxWidth: 'var(--max-width)', margin: '0 auto', paddingBottom: 0 }}>
          <div className={styles.sectionTag}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            Who It's For
          </div>
          <h2>Perfect For Everyone</h2>
          <p>Whether you're a seasoned executive or just starting out, OpenTone grows with you.</p>
        </div>
        <div className={styles.audienceGrid} style={{ maxWidth: 'var(--max-width)', margin: '64px auto 0' }}>
          {[
            { emoji: '💼', title: 'Professionals & Executives', desc: 'Impress in meetings, lead with confidence, and nail your next presentation or negotiation.' },
            { emoji: '🎓', title: 'Students & Academics', desc: 'Excel at presentations, group discussions, viva examinations, and academic seminars.' },
            { emoji: '🌍', title: 'Language Learners & ESL', desc: 'Improve English fluency, pronunciation, and clarity to communicate confidently anywhere.' },
            { emoji: '🧠', title: 'Social Confidence', desc: 'Overcome social anxiety by practicing common interactions in a safe, judgment-free environment.' },
          ].map(({ emoji, title, desc }, i) => (
            <div key={title} className={`${styles.audienceCard} reveal`} style={{ transitionDelay: `${i * 0.08}s` }}>
              <span className={styles.audienceEmoji}>{emoji}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ==================== FAQS ==================== */}
      <div className={styles.faqSection} id="faqs">
        <div className={styles.section}>
          <div className={`${styles.sectionHeader} reveal`}>
            <div className={styles.sectionTag}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              Got Questions?
            </div>
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about the product, billing, and how we handle your privacy.</p>
          </div>
          <div className={styles.faqContainer}>
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`${styles.faqItem} reveal ${openFaq === index ? styles.open : ''}`}
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                <button 
                  className={styles.faqButton} 
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaq === index}
                >
                  {faq.q}
                  <div className={styles.faqIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                </button>
                <div className={styles.faqContent}>
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ==================== CTA ==================== */}
      <div style={{ padding: '0 0 0' }}>
        <div className={`${styles.cta} reveal`}>
          <h2>Stop Overthinking.<br />Start Speaking.</h2>
          <p>OpenTone is coming soon to the App Store. Your personal AI communication coach is almost ready — stay tuned.</p>
          <span className={styles.launchBadge}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            Coming Soon to App Store
          </span>
        </div>
      </div>
    </main>
  )
}
