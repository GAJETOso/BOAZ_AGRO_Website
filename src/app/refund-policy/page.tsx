import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";

export const metadata: Metadata = {
  title: "Refund Policy — BOAZ AGRO LIMITED",
  description: "BOAZ AGRO LIMITED's refund and deposit terms for equipment leasing and input orders.",
};

export default function RefundPolicyPage() {
  return (
    <>
      <Navbar />
      <PageHero
        label="Legal"
        title={<>Refund <em>Policy</em></>}
        desc="BOAZ AGRO LIMITED does not sell direct-to-consumer products online. This policy covers deposits and prepaid orders through our Equipment Leasing and input-supply arrangements."
      />
      <div className="page-content">
        <article className="prose">
          <h2>Scope</h2>
          <p>
            This policy applies to security deposits under our Equipment Leasing division, and to
            prepaid input orders (seed, feed, fertilizer) supplied under outgrower and distributor
            agreements. It does not apply to commodity export contracts, which are governed by their
            individual trade terms.
          </p>

          <h2>Equipment Leasing Deposits</h2>
          <ul>
            <li>Security deposits are 20–30% of the lease value, held for the lease duration</li>
            <li>Deposits are refunded in full within 5 working days of return, less any damage assessed at joint inspection beyond normal wear</li>
            <li>Lease cancellations before equipment handover are refunded in full</li>
          </ul>

          <h2>Prepaid Input Orders</h2>
          <ul>
            <li>Orders cancelled before dispatch are refunded in full within 10 working days</li>
            <li>Orders found not to conform to specification on receipt (e.g. failed germination testing) are replaced or refunded at the customer&apos;s choice</li>
            <li>Refunds are made only to the account or party that made the original payment</li>
          </ul>

          <h2>How to Request a Refund</h2>
          <div className="prose-note">
            Contact your assigned account representative, or reach our Finance team via the{" "}
            <a href="/#contact">Contact</a> section of our homepage, quoting your lease or order
            reference. Requests are acknowledged within 3 working days.
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
}
