import type { Metadata } from "next";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import PageHero from "../../../components/PageHero";
import { wasteStreams, wasteTargets, wasteZeroPrinciple } from "../../../data/wasteManagement";

export const metadata: Metadata = {
  title: "Waste Management — BOAZ AGRO LIMITED",
  description: "How BOAZ AGRO LIMITED captures, converts, and reuses byproducts across every division instead of sending them to waste.",
};

export default function WasteManagementPage() {
  return (
    <>
      <Navbar />
      <PageHero
        label="Sustainability"
        title={<>Waste <em>Management</em></>}
        desc="A system of nothing goes to waste — how byproducts across our divisions are captured, converted, and put back to work."
        meta={["SOP-RCY-001", "Circular Economy"]}
      />
      <div className="page-content">
        <article className="prose">
          <h2>Our Approach</h2>
          <p>
            Every division produces byproducts that would be discarded elsewhere — cattle and
            poultry dung, corn husks and peels, rice husks, cassava peels, fish offal, and crop
            residue. Rather than treating these as waste, we treat them as an internal input market:
            captured, converted, and used inside our own operations. This closes nutrient loops,
            cuts input costs, and reduces our environmental footprint at the same time.
          </p>

          <h2>Byproduct Conversion Streams</h2>
          <table className="data-table">
            <thead>
              <tr>
                <th>Source Division</th>
                <th>Byproduct</th>
                <th>Conversion</th>
                <th>End Product</th>
              </tr>
            </thead>
            <tbody>
              {wasteStreams.map((s) => (
                <tr key={s.byproduct}>
                  <td>{s.source}</td>
                  <td>{s.byproduct}</td>
                  <td>{s.conversion}</td>
                  <td>{s.endProduct}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2>Targets We Track</h2>
          <table className="data-table">
            <thead>
              <tr>
                <th>Target</th>
                <th>Standard</th>
                <th>Frequency</th>
              </tr>
            </thead>
            <tbody>
              {wasteTargets.map((t) => (
                <tr key={t.label}>
                  <td>{t.label}</td>
                  <td>{t.target}</td>
                  <td>{t.frequency}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="prose-note">{wasteZeroPrinciple}</div>
        </article>
      </div>
      <Footer />
    </>
  );
}
