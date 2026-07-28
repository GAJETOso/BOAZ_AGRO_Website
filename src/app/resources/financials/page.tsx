import type { Metadata } from "next";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import PageHero from "../../../components/PageHero";

export const metadata: Metadata = {
  title: "Financial Statements — BOAZ AGRO LIMITED",
  description: "BOAZ AGRO LIMITED's approach to financial reporting, audit, and disclosure to investors.",
};

export default function FinancialsPage() {
  return (
    <>
      <Navbar />
      <PageHero
        label="Resources"
        title={<>Financial <em>Statements</em></>}
        desc="Our approach to financial reporting, audit, and disclosure — full statements are available to qualified investors and partners on request."
      />
      <div className="page-content">
        <article className="prose">
          <h2>Financial Reporting Standards</h2>
          <p>
            BOAZ AGRO LIMITED maintains its accounting records in line with IFRS as adopted in
            Nigeria. Management accounts — profit &amp; loss, balance sheet, and cash flow — are
            prepared monthly and reviewed by the Finance Manager and Managing Director; a formal
            annual close and independent external audit is planned to follow the company&apos;s
            first complete financial year.
          </p>

          <h2>Access for Investors &amp; Partners</h2>
          <p>
            Full financial statements are not published on this public site. Qualified investors,
            institutional partners, and prospective outgrowers evaluating a structured investment or
            offtake relationship can request access under a standard non-disclosure agreement via
            our <a href="/#contact">Contact</a> section.
          </p>

          <h3>Related Policies</h3>
          <ul>
            <li>Anti-Money Laundering — see our <a href="/aml-policy">AML Policy</a></li>
            <li>Data handling and confidentiality — see our <a href="/legal">Legal &amp; Compliance</a> page</li>
          </ul>
        </article>
      </div>
      <Footer />
    </>
  );
}
