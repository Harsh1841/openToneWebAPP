import styles from './DocPage.module.css'

export default function Privacy() {
  return (
    <main className={styles.wrap}>
      <h1 className={styles.title}>OpenTone Privacy Policy</h1>
      <p className={styles.meta}>Privacy Policy for OpenTone</p>
      <p className={styles.meta}>Effective Date: March 15, 2026</p>
      <p className={styles.intro}>OpenTone respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how information is collected, used, and protected when you use the OpenTone application.</p>

      <section className={styles.section}>
        <h2 className={styles.heading}>Information We Collect</h2>
        <p className={styles.p}>OpenTone may collect the following types of information:</p>
        <ol className={styles.ol}>
          <li>Email address (used for account authentication)</li>
          <li>Speech input provided by the user during speaking exercises — processed entirely on-device and never uploaded</li>
          <li>Basic device information (iOS version, device model) for compatibility purposes</li>
          <li>Anonymized usage data and analytics to improve application performance</li>
        </ol>
      </section>

      <div className={styles.divider} />

      <section className={styles.section}>
        <h2 className={styles.heading}>How We Use the Information</h2>
        <p className={styles.p}>The information collected may be used for the following purposes:</p>
        <ul className={styles.ul}>
          <li>To provide speech analysis and feedback features</li>
          <li>To enable user authentication and account access</li>
          <li>To improve application performance and user experience</li>
          <li>To maintain and enhance app functionality</li>
          <li>To comply with applicable legal obligations</li>
        </ul>
        <p className={styles.p}>We do not use your data for advertising, profiling, or selling to third parties.</p>
      </section>

      <div className={styles.divider} />

      <section className={styles.section}>
        <h2 className={styles.heading}>Third-Party Services</h2>
        <p className={styles.p}>OpenTone may use trusted third-party services to support application functionality, including:</p>
        <ul className={styles.ul}>
          <li>Authentication services to manage secure login</li>
          <li>Analytics services to monitor application performance (anonymized data only)</li>
        </ul>
        <p className={styles.p}>These services may process limited user data only to provide their respective services. Voice and speech data is never shared with any third party.</p>
      </section>

      <div className={styles.divider} />

      <section className={styles.section}>
        <h2 className={styles.heading}>Data Storage and Protection</h2>
        <p className={styles.p}>All speech analysis and AI processing occurs entirely on your device. No audio is transmitted to, stored on, or processed by external servers. Your voice never leaves your phone.</p>
        <p className={styles.p}>Account information (email address) is stored securely using industry-standard encryption. Reasonable security measures are implemented to protect user information from unauthorized access, alteration, or disclosure.</p>
      </section>

      <div className={styles.divider} />

      <section className={styles.section}>
        <h2 className={styles.heading}>User Rights</h2>
        <p className={styles.p}>Users have the right to:</p>
        <ul className={styles.ul}>
          <li>Request access to their stored data</li>
          <li>Request correction of inaccurate or incomplete information</li>
          <li>Request deletion of their account and associated data</li>
        </ul>
        <p className={styles.p}>Requests can be made by contacting the support email listed below. We will respond within 30 days.</p>
      </section>

      <div className={styles.divider} />

      <section className={styles.section}>
        <h2 className={styles.heading}>Changes to This Privacy Policy</h2>
        <p className={styles.p}>This Privacy Policy may be updated from time to time. Updates will be reflected on this page with a revised effective date. Continued use of OpenTone after any changes constitutes acceptance of the revised policy.</p>
      </section>

      <div className={styles.divider} />

      <section className={styles.section}>
        <h2 className={styles.heading}>10. Contact Us</h2>
        <p className={styles.p}>If you have questions about this Privacy Policy, please contact us at:</p>
        <p className={styles.p}><strong>Email:</strong> <a href="mailto:opentone.privacy@gmail.com" className={styles.link}>opentone.privacy@gmail.com</a></p>
        <p className={styles.p}><strong>Support:</strong> <a href="mailto:opentone.support@gmail.com" className={styles.link}>opentone.support@gmail.com</a></p>
      </section>
    </main>
  )
}
