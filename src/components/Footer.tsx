import { footerColumns, certBadges } from "../data/footer";

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <a
              href="#hero"
              className="nav-logo footer-brand"
              style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 12 }}
            >
              <div className="logo-mark">B</div>
              <div className="logo-text">
                <strong style={{ fontSize: 18, color: "var(--cream)" }}>BOAZ AGRO</strong>
                <span style={{ color: "var(--amber)" }}>LIMITED</span>
              </div>
            </a>
            <p className="footer-tagline">
              From soil to summit — building Nigeria&apos;s most integrated agricultural
              enterprise for the 21st century.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-btn">𝕏</a>
              <a href="#" className="social-btn">in</a>
              <a href="#" className="social-btn">f</a>
              <a href="#" className="social-btn">▶</a>
            </div>
          </div>

          {footerColumns.map((col) => (
            <div className="footer-col" key={col.title}>
              <h6>{col.title}</h6>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "var(--amber)" }}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <a href={link.href}>{link.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>© 2026 BOAZ AGRO LIMITED. All rights reserved. RC No. 0000000 — CAC Nigeria.</p>
          <div className="footer-cert">
            {certBadges.map((badge) => (
              <span className="cert-badge" key={badge}>
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
