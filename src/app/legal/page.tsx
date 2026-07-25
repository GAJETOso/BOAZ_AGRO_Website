import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";

export const metadata: Metadata = {
  title: "Legal & Compliance — BOAZ AGRO LIMITED",
  description: "BOAZ AGRO LIMITED's legal, regulatory, and compliance framework.",
};

export default function LegalPage() {
  return (
    <>
      <Navbar />
      <PageHero
        label="Legal"
        title={<>Legal &amp; <em>Compliance</em></>}
        desc="An overview of the regulatory framework, registrations, and policies BOAZ AGRO LIMITED operates under."
        meta={["CAC Registered", "NAFDAC", "SON", "NESREA"]}
      />
      <div className="page-content">
        <article className="prose">
          <h2>Corporate Registration</h2>
          <p>
            BOAZ AGRO LIMITED is registered as a limited liability company under the Companies and
            Allied Matters Act (CAMA) with the Corporate Affairs Commission (CAC) of Nigeria.
          </p>

          <h2>Regulatory Registrations</h2>
          <ul>
            <li>National Agency for Food and Drug Administration and Control (NAFDAC) — processed food products</li>
            <li>Standards Organisation of Nigeria (SON) — fertilizer and processed goods</li>
            <li>National Environmental Standards and Regulations Enforcement Agency (NESREA) — environmental compliance</li>
            <li>Nigerian Export-Import Bank (NEXIM) — export trade support</li>
          </ul>

          <h2>Our Policy Framework</h2>
          <p>
            These public-facing summaries sit alongside a fuller internal governance, risk, and
            compliance framework — including our regulatory register, licence and permit register,
            conflict of interest policy, and data protection framework — maintained on our internal
            portal and available to regulators, auditors, and qualified partners on request.
          </p>
          <ul>
            <li><a href="/safeguarding">Safeguarding Policy</a></li>
            <li><a href="/whistleblower">Whistleblower Policy</a></li>
            <li><a href="/aml-policy">Anti-Money Laundering (AML) Policy</a></li>
            <li><a href="/refund-policy">Refund Policy</a></li>
          </ul>

          <h2>Data Protection</h2>
          <p>
            We process personal data — of employees, smallholder partners, and business contacts —
            in line with the Nigeria Data Protection Act 2023. Data collected through this website
            (e.g. via our enquiry form) is used solely to respond to your enquiry and is not sold or
            shared with third parties for marketing purposes.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about any of these policies can be directed to our Company Secretary via the{" "}
            <a href="/#contact">Contact</a> section of our homepage.
          </p>
        </article>
      </div>
      <Footer />
    </>
  );
}
