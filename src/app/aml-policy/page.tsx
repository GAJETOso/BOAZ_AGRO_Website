import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";

export const metadata: Metadata = {
  title: "AML Policy — BOAZ AGRO LIMITED",
  description: "BOAZ AGRO LIMITED's anti-money laundering and counter-terrorist financing policy.",
};

export default function AmlPolicyPage() {
  return (
    <>
      <Navbar />
      <PageHero
        label="Legal"
        title={<>Anti-Money Laundering <em>Policy</em></>}
        desc="Our commitment to preventing money laundering and terrorist financing across every investment, partnership, and trade relationship."
      />
      <div className="page-content">
        <article className="prose">
          <h2>Our Commitment</h2>
          <p>
            BOAZ AGRO LIMITED is committed to preventing the company, its investors, and its trading
            partners from being used, knowingly or unknowingly, for money laundering or the
            financing of terrorism. This applies to equity investment, outgrower financing, and
            commodity export transactions alike.
          </p>

          <h2>Customer &amp; Investor Due Diligence</h2>
          <ul>
            <li>Identity verification for all investors, distributors, and vendors before funds or goods change hands</li>
            <li>Source-of-funds checks for equity investment and large offtake prepayments</li>
            <li>Enhanced due diligence for politically exposed persons and high-risk jurisdictions</li>
            <li>Ongoing monitoring of transactions for patterns inconsistent with a customer&apos;s known business</li>
          </ul>

          <h2>Prohibited Conduct</h2>
          <p>
            We do not accept cash payments above regulatory thresholds, do not facilitate
            transactions with parties we cannot identify, and do not structure payments to avoid
            reporting or approval thresholds.
          </p>

          <h2>Reporting</h2>
          <div className="prose-note">
            Any suspicious transaction is escalated internally without delay and, where required by
            law, reported to the relevant Nigerian financial intelligence authority. Staff who
            identify a suspicious transaction are protected from retaliation for reporting it, per
            our <a href="/whistleblower">Whistleblower Policy</a>.
          </div>

          <h2>Contact</h2>
          <p>
            Investors and partners with AML-related due diligence questions can reach our Finance
            Manager via the <a href="/#contact">Contact</a> section of our homepage.
          </p>
        </article>
      </div>
      <Footer />
    </>
  );
}
