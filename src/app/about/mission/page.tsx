import type { Metadata } from "next";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import PageHero from "../../../components/PageHero";

export const metadata: Metadata = {
  title: "Mission & Vision — BOAZ AGRO LIMITED",
  description: "BOAZ AGRO LIMITED's mission, vision, and the values that guide how we operate.",
};

export default function MissionPage() {
  return (
    <>
      <Navbar />
      <PageHero
        label="About"
        title={<>Mission &amp; <em>Vision</em></>}
        desc="Why BOAZ AGRO exists, and the kind of company we're building it to be."
      />
      <div className="page-content">
        <article className="prose">
          <h2>Our Mission</h2>
          <p>
            To revolutionize African agriculture through innovation, scale, and sustainability —
            creating economic value for farmers, investors, communities, and the continent at large.
            We do this by controlling the full agricultural value chain ourselves — farming,
            processing, technology, logistics, and export — so that efficiency gains stay inside the
            system that earned them, rather than leaking out to intermediaries.
          </p>

          <h2>Our Vision</h2>
          <p>
            A West Africa where smallholder farmers have direct, technology-enabled access to fair
            markets, where post-harvest loss is engineered out of the supply chain rather than
            accepted as a cost of doing business, and where a single Nigerian agribusiness can
            compete credibly in export markets on quality and traceability, not just price.
          </p>

          <h2>Our Values</h2>
          <h3>Safety First</h3>
          <p>HSE protocols are mandatory at every site, for every employee, contractor, and visitor, without exception.</p>
          <h3>Traceability</h3>
          <p>Every input, process, and output is documented — from seed source to shipping container.</p>
          <h3>Compliance</h3>
          <p>Full adherence to national and international regulations governing food safety, labour, and trade.</p>
          <h3>Continuous Improvement</h3>
          <p>Quarterly audits and annual revision cycles across every operating standard we hold ourselves to.</p>
          <h3>Accountability</h3>
          <p>Every policy and procedure has a named owner — decisions are traceable to a person, not a department.</p>
          <h3>Sustainability</h3>
          <p>
            Environmental stewardship in every decision, including a company-wide commitment to a
            circular, zero-waste model across our divisions.
          </p>
        </article>
      </div>
      <Footer />
    </>
  );
}
