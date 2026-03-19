import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const MicIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
    <line x1="12" y1="19" x2="12" y2="22"/>
  </svg>
)

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.brandLogo}>
              <div className={styles.brandIcon}><MicIcon /></div>
              <span>OpenTone</span>
            </div>
            <p className={styles.brandDesc}>
              Speak openly, without fear. Your AI-powered communication coach that helps you master conversations through immersive, interactive practice.
            </p>
          </div>

          <div className={styles.columns}>
            <div className={styles.column}>
              <h4>Product</h4>
              <a href="/#features">Features</a>
              <a href="/#how-it-works">How It Works</a>
              <a href="/#audience">Who It's For</a>
            </div>
            <div className={styles.column}>
              <h4>Legal</h4>
              <Link to="/support">Support</Link>
              <Link to="/privacy">Privacy Policy</Link>
            </div>
            <div className={styles.column}>
              <h4>Contact</h4>
              <a href="mailto:support@opentoneapp.com">support@opentoneapp.com</a>
              <a href="mailto:privacy@opentoneapp.com">privacy@opentoneapp.com</a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 OpenTone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
