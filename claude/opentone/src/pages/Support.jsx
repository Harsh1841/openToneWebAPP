import { Link } from 'react-router-dom'
import styles from './DocPage.module.css'

export default function Support() {
  return (
    <main className={styles.wrap}>
      <h1 className={styles.title}>OpenTone — Support</h1>
      <p className={styles.subtitle}>
        Welcome to the support page for OpenTone.<br />
        If you experience any issues while using the application or need assistance, please review the information below.
      </p>

      {/* About */}
      <section className={styles.section}>
        <h2 className={styles.heading}>About the App</h2>
        <p className={styles.p}>OpenTone is an AI-powered personal communication and speech coaching application designed to help users improve their speaking confidence, clarity, and delivery through real-time feedback, improvisation training, and interactive practice scenarios.</p>
        <p className={styles.p}>The app provides a structured, private environment to practice pacing, reduce filler words, train spontaneous speaking, and build communication skills — all powered by on-device AI with no data leaving your device.</p>
        <div className={styles.infoRow}>
          <span className={styles.infoItem}><strong>Application Name:</strong> OpenTone</span>
          <span className={styles.infoItem}><strong>Platform:</strong> iOS</span>
          <span className={styles.infoItem}><strong>Category:</strong> Communication / Education</span>
        </div>
      </section>

      <div className={styles.divider} />

      {/* FAQ */}
      <section className={styles.section}>
        <h2 className={styles.heading}>Frequently Asked Questions</h2>

        {[
          {
            q: '1. The app is not recording my voice',
            a: null,
            extra: (
              <>
                <p className={styles.p}>Please ensure that microphone permissions are enabled. On iPhone:</p>
                <ol className={styles.ol}><li>Open Settings</li><li>Scroll down and select OpenTone</li><li>Enable Microphone access</li></ol>
                <p className={styles.p}>If the issue persists after enabling permissions, close the app fully and relaunch it.</p>
              </>
            ),
          },
          { q: '2. Speech analysis is not working', a: "OpenTone's speech analysis relies on Apple's on-device intelligence capabilities. Please ensure Apple Intelligence is installed and enabled on your device. Go to Settings → Apple Intelligence & Siri to check. Speak clearly for at least 10 seconds in a reasonably quiet environment to generate results." },
          { q: '3. I cannot log in', a: 'Ensure that your email address and password are entered correctly. If the problem persists, use the "Forgot Password" option on the login screen to reset your credentials. Check your inbox (and spam folder) for a verification or reset email.' },
          { q: '4. The app is running slowly', a: 'Close the application fully and reopen it. Restarting your device may also help improve performance. Ensure your device has at least 500 MB of free storage and that other apps are not running in the background.' },
          { q: '5. What is a JAM Session?', a: 'JAM stands for "Just A Minute." You receive a random topic and must speak about it continuously for one minute without hesitation, deviation, or repetition. It trains your brain to think on its feet and respond confidently under pressure.' },
          { q: '6. Does OpenTone upload or store my voice?', a: 'No. All speech processing happens entirely on your device. OpenTone does not upload, store, or transmit any audio or voice data to external servers. Your voice never leaves your phone.' },
          { q: '7. How do I delete my account and data?', a: null, extra: <p className={styles.p}>You can request account and data deletion by emailing <a href="mailto:opentone.support@gmail.com" className={styles.link}>opentone.support@gmail.com</a>. Since all voice processing is on-device, deleting the app also removes all locally stored session data immediately.</p> },
        ].map(({ q, a, extra }) => (
          <div key={q} className={styles.faqItem}>
            <h3 className={styles.faqQ}>{q}</h3>
            {a && <p className={styles.p}>{a}</p>}
            {extra}
          </div>
        ))}
      </section>

      <div className={styles.divider} />

      {/* Contact */}
      <section className={styles.section}>
        <h2 className={styles.heading}>Contact Support</h2>
        <p className={styles.p}>If you continue to experience issues or have a question not covered above, please reach out to us directly:</p>
        <p className={styles.p}><strong>Email:</strong> <a href="mailto:opentone.support@gmail.com" className={styles.link}>opentone.support@gmail.com</a></p>
        <p className={styles.p}><strong>Privacy Inquiries:</strong> <a href="mailto:opentone.privacy@gmail.com" className={styles.link}>opentone.privacy@gmail.com</a></p>
        <p className={styles.p}>Our team will respond as soon as possible, typically within 24–48 hours on business days.</p>
      </section>
    </main>
  )
}
