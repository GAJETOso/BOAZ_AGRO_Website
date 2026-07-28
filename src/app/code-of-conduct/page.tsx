import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";

export const metadata: Metadata = {
  title: "Code of Conduct — BOAZ AGRO LIMITED",
  description: "The standards of behaviour BOAZ AGRO LIMITED expects from every employee, contractor, and business partner.",
};

export default function CodeOfConductPage() {
  return (
    <>
      <Navbar />
      <PageHero
        label="Legal"
        title={<>Code of <em>Conduct</em></>}
        desc="The standards we expect from everyone who works for, or with, BOAZ AGRO LIMITED — no exceptions for seniority or tenure."
      />
      <div className="page-content">
        <article className="prose">
          <h2>Who This Applies To</h2>
          <p>
            This Code applies to every employee, contractor, and director of BOAZ AGRO LIMITED, and
            we expect the same standard from our outgrowers, distributors, and vendors under the
            agreements we hold with them.
          </p>

          <h2>Professional Conduct</h2>
          <ul>
            <li>Treat colleagues, contractors, farmers, and community members with respect and dignity, regardless of role, background, or seniority</li>
            <li>Perform duties honestly, competently, and in line with company policies, SOPs, and HSE rules</li>
            <li>Escalate concerns through proper channels rather than acting outside your authority</li>
          </ul>

          <h3>Harassment &amp; Discrimination</h3>
          <p>
            Harassment, bullying, and discrimination on any basis — including sex, ethnicity,
            religion, disability, or age — are not tolerated. Any such conduct is treated as gross
            misconduct under our disciplinary procedure.
          </p>

          <h2>Conflicts of Interest</h2>
          <p>
            Employees must declare any financial interest in a supplier, customer, or competitor;
            any family member dealing with the company; or any outside employment or business, as
            soon as it arises. An undeclared conflict is treated as misconduct in itself, regardless
            of whether it caused any actual harm.
          </p>

          <h2>Gifts, Hospitality &amp; Anti-Bribery</h2>
          <ul>
            <li>No bribes, facilitation payments, or kickbacks — to or from anyone — under any circumstances</li>
            <li>Gifts or hospitality above policy thresholds must be declared in the company register</li>
            <li>Cash gifts of any amount are never acceptable and must be returned or surrendered immediately</li>
          </ul>

          <h2>Confidentiality</h2>
          <p>
            Company information — commercial terms, yields, pricing, personal data of employees and
            partners — is confidential and must not be disclosed outside the company except where
            authorised or legally required. This obligation continues after employment ends.
          </p>

          <h2>Compliance With Law</h2>
          <p>
            Everyone is expected to comply with applicable Nigerian law and the specific regulatory
            regimes covering our industry — food safety, labour, environmental, and export
            regulations among them — not just internal policy.
          </p>

          <h2>Reporting a Concern</h2>
          <div className="prose-note">
            Concerns about a breach of this Code — by anyone, at any level — can be raised
            confidentially via our <a href="/whistleblower">Whistleblower Policy</a>. Reports made in
            good faith are protected, and retaliation against someone who raises a concern is itself
            gross misconduct.
          </div>

          <h2>Consequences of Breach</h2>
          <p>
            Breach of this Code is handled through our disciplinary procedure and may result in
            action up to and including summary dismissal for the most serious breaches (fraud,
            bribery, harassment, or safety violations that endanger others). Contractors and vendors
            found in breach may have their engagement terminated.
          </p>
        </article>
      </div>
      <Footer />
    </>
  );
}
