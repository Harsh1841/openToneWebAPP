import { Link } from 'react-router-dom'
import styles from './Footer.module.css'



export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.brandLogo}>
              <div className={styles.brandWrap}>
                <img src="/logo.png" alt="OpenTone Logo" className={styles.brandIcon} />
              </div>
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
              <a href="mailto:opentone.support@gmail.com">opentone.support@gmail.com</a>
              <a href="mailto:opentone.privacy@gmail.com">opentone.privacy@gmail.com</a>
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
