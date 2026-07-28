import type { Metadata } from "next";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import PageHero from "../../../components/PageHero";

export const metadata: Metadata = {
  title: "Annual Reports — BOAZ AGRO LIMITED",
  description: "How BOAZ AGRO LIMITED reports on operational and business performance to investors and partners.",
};

export default function ReportsPage() {
  return (
    <>
      <Navbar />
      <PageHero
        label="Resources"
        title={<>Annual <em>Reports</em></>}
        desc="As a young, growing company, our first full-year annual report is in preparation. Here's how reporting works at BOAZ AGRO."
      />
      <div className="page-content">
        <article className="prose">
          <h2>Reporting Cadence</h2>
          <p>
            BOAZ AGRO LIMITED prepares an annual report covering operational performance across all
            business divisions, progress against stated targets, and material developments for the
            year. Given the company&apos;s founding in 2026, the first full annual report will follow
            the close of our first complete financial year.
          </p>

          <h2>What the Annual Report Covers</h2>
          <ul>
            <li>Operational performance by division (crop farming, livestock, processing, and more)</li>
            <li>Progress against stated hectares, states of operation, and partner-network targets</li>
            <li>HSE, quality, and sustainability performance summaries</li>
            <li>Governance and risk management updates</li>
          </ul>

          <div className="prose-note">
            Investors, partners, and prospective outgrowers can request the current reporting
            status directly — see the <a href="/#contact">Contact</a> section on our homepage.
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
}
