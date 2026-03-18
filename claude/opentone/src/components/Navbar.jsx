import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const MicIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
    <line x1="12" y1="19" x2="12" y2="22"/>
  </svg>
)

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.logo}>
        <div className={styles.logoIcon}><MicIcon /></div>
        <span>OpenTone</span>
      </NavLink>

      <ul className={styles.links}>
        <li><a href="/#features">Features</a></li>
        <li><a href="/#how-it-works">How It Works</a></li>
        <li><NavLink to="/support" className={({ isActive }) => isActive ? styles.active : ''}>Support</NavLink></li>
        <li><NavLink to="/privacy" className={({ isActive }) => isActive ? styles.active : ''}>Privacy</NavLink></li>
      </ul>

      <div className={styles.right}>
        <span className={styles.pill}>Coming Soon to App Store</span>
      </div>
    </nav>
  )
}
