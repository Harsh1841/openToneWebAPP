import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import styles from './Navbar.module.css'



const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
)

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <NavLink to="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
        <div className={styles.logoWrap}>
          <img src="/logo.png" alt="OpenTone Logo" className={styles.logoIcon} />
        </div>
        <span>OpenTone</span>
      </NavLink>

      <ul className={`${styles.links} ${menuOpen ? styles.mobileOpen : ''}`}>
        <li><a href="/#features" onClick={() => setMenuOpen(false)}>Features</a></li>
        <li><a href="/#how-it-works" onClick={() => setMenuOpen(false)}>How It Works</a></li>
        <li><a href="/#audience" onClick={() => setMenuOpen(false)}>Who It's For</a></li>
        <li><a href="/#faqs" onClick={() => setMenuOpen(false)}>FAQs</a></li>
        <li><NavLink to="/support" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? styles.active : ''}>Support</NavLink></li>
        <li><NavLink to="/privacy" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? styles.active : ''}>Privacy</NavLink></li>
      </ul>

      <div className={styles.right}>
        {/* Theme toggle */}
        <button
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          <span key={theme} className={styles.themeIcon}>
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </span>
        </button>

        <a
          href="https://apps.apple.com/in/app/opentone/id6760636022"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.pill}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
          Download
        </a>

        <button
          className={`${styles.menuBtn} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
