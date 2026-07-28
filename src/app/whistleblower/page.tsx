import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";

export const metadata: Metadata = {
  title: "Whistleblower Policy — BOAZ AGRO LIMITED",
  description: "How to report fraud, corruption, safety, or misconduct concerns at BOAZ AGRO LIMITED, in confidence and without reprisal.",
};

export default function WhistleblowerPage() {
  return (
    <>
      <Navbar />
      <PageHero
        label="Legal"
        title={<>Whistleblower <em>Policy</em></>}
        desc="Reports made in good faith are protected — retaliation against a whistleblower is treated as gross misconduct."
      />
      <div className="page-content">
        <article className="prose">
          <h2>What You Can Report</h2>
          <ul>
            <li>Fraud, theft, or financial irregularity</li>
            <li>Bribery or corruption</li>
            <li>Safety or environmental danger</li>
            <li>Harassment, discrimination, or exploitation</li>
            <li>Falsified records or regulatory concealment</li>
            <li>Any other suspected breach of our policies or the law</li>
          </ul>

          <h2>How to Report</h2>
          <p>
            Reports can be made confidentially — and anonymously, if preferred — by contacting our
            Audit &amp; Risk Committee directly, or via the drop-box channel available at any of our
            sites. You do not need to have proof, only a good-faith concern.
          </p>

          <h2>What Happens Next</h2>
          <p>
            Named reports are acknowledged within 3 working days. All reports are investigated by
            our Audit &amp; Risk Committee, independent of the area or individuals concerned where
            required. You will not be identified to the subject of your report without your consent,
            except where required by law.
          </p>

          <h2>Protection Against Retaliation</h2>
          <div className="prose-note">
            Anyone who raises a concern in good faith — whether or not it is later substantiated —
            is protected from retaliation, dismissal, or disadvantage as a result of reporting.
            Retaliation against a whistleblower is itself treated as gross misconduct under our
            disciplinary procedure.
          </div>

          <h2>Contact</h2>
          <p>
            To raise a concern, use the <a href="/#contact">Contact</a> section of our homepage and
            mark your message for the attention of the Audit &amp; Risk Committee, or request a
            confidential contact channel directly.
          </p>
        </article>
      </div>
      <Footer />
    </>
  );
}
