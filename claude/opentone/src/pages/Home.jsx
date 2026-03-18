import styles from './Home.module.css'

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <div className={styles.heroWrap}>
        <div className={styles.hero}>
          <div className={styles.heroLeft}>
            <div className={styles.badge}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
              AI-Powered Speech Coach
            </div>
            <h1>Speak with Confidence. Communicate with Impact.</h1>
            <p>Transform the way you speak with OpenTone — your personal AI speech coach that provides real-time feedback, improvisation training, and realistic practice scenarios. All on your device, completely private.</p>
            <div className={styles.actions}>
              <span className={styles.comingBtn}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                Coming Soon to the App Store
              </span>
            </div>
            <div className={styles.stats}>
              <div><div className={styles.statVal}>100%</div><div className={styles.statLbl}>On-Device AI</div></div>
              <div><div className={styles.statVal}>Real-Time</div><div className={styles.statLbl}>Feedback</div></div>
              <div><div className={styles.statVal}>Unlimited</div><div className={styles.statLbl}>Practice Sessions</div></div>
              <div><div className={styles.statVal}>Zero</div><div className={styles.statLbl}>Data Uploaded</div></div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.cardLabel}>Current Session</span>
              <div className={styles.liveDot} />
            </div>
            <div className={styles.wpmRow}>
              <span className={styles.wpmLabel}>Words Per Minute</span>
              <span className={styles.wpmVal}>142</span>
            </div>
            <div className={styles.progressBar}><div className={styles.progressFill} /></div>
            <div className={styles.metrics}>
              <div className={styles.metric}><div className={styles.metricVal}>3</div><div className={styles.metricLbl}>Filler Words</div></div>
              <div className={styles.metric}><div className={styles.metricVal}>89%</div><div className={styles.metricLbl}>Clarity</div></div>
              <div className={styles.metric}><div className={styles.metricVal}>12</div><div className={styles.metricLbl}>Pauses</div></div>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <div id="features">
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Everything You Need to Master Communication</h2>
            <p>Professional-grade speech coaching powered by advanced on-device AI. No subscriptions, no data sharing.</p>
          </div>
          <div className={styles.featuresGrid}>
            {[
              { icon: <><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></>, title: 'Real-Time Speech Analytics', desc: 'Get instant feedback on your pacing, WPM, filler words, and strategic pause usage. Know exactly how you sound with sophisticated audio processing on your device.' },
              { icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>, title: 'JAM Sessions', desc: 'Just A Minute improvisation training. Receive a random engaging topic, prepare briefly, and speak for one minute. Build confidence thinking on your feet.' },
              { icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>, title: 'Interactive Roleplay', desc: 'Practice job interviews, negotiations, networking, and more through guided back-and-forth conversational flows in a safe, judgment-free environment.' },
              { icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>, title: '100% Private & Secure', desc: 'All AI processing happens on your device. Your voice never leaves your phone. Zero cloud uploads, no audio stored externally.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className={styles.howBg} id="how-it-works">
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>How OpenTone Works</h2>
            <p>Three simple steps to better communication</p>
          </div>
          <div className={styles.stepsGrid}>
            {[
              { n: '01', title: 'Choose Your Mode', desc: 'Select from Real-Time Analytics, JAM Sessions, or Interactive Roleplay based on what you want to practice.' },
              { n: '02', title: 'Start Speaking', desc: 'Our on-device AI listens and analyzes your speech in real-time. No recording, no uploads, complete privacy.' },
              { n: '03', title: 'Get Instant Feedback', desc: 'Receive actionable insights on pacing, filler words, pauses, and overall delivery quality immediately.' },
            ].map(({ n, title, desc }) => (
              <div key={n} className={styles.stepCard}>
                <div className={styles.stepNum}>{n}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AUDIENCE */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Perfect For Everyone</h2>
          <p>Whether you're a seasoned executive or just starting out, OpenTone grows with you.</p>
        </div>
        <div className={styles.audienceGrid}>
          {[
            { emoji: '💼', title: 'Professionals & Executives', desc: 'Deliver with authority and confidence in meetings, presentations, and negotiations.' },
            { emoji: '🎓', title: 'Students & Academics', desc: 'Excel in presentations, viva examinations, seminars, and academic discussions.' },
            { emoji: '🌍', title: 'Non-Native Speakers', desc: 'Improve fluency, pronunciation, and clarity to communicate with confidence.' },
            { emoji: '🎙️', title: 'Creators & Podcasters', desc: 'Enhance vocal delivery, reduce filler words, and engage your audience more effectively.' },
          ].map(({ emoji, title, desc }) => (
            <div key={title} className={styles.audienceCard}>
              <div className={styles.audienceEmoji}>{emoji}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className={styles.cta}>
        <h2>Your Voice is Your Most Powerful Tool.</h2>
        <p>OpenTone is coming soon to the App Store. Stay tuned — your personal AI speech coach is almost here.</p>
        <span className={styles.launchBadge}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          Launching Soon on iOS
        </span>
      </div>
    </main>
  )
}
