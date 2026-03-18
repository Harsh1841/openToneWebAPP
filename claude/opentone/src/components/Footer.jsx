import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2026 OpenTone. All rights reserved.</p>
      <div className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/support">Support</Link>
        <Link to="/privacy">Privacy Policy</Link>
      </div>
    </footer>
  )
}
