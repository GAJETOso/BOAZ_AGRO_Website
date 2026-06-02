import { useState } from "react";

// ─── THEME ────────────────────────────────────────────────────────────────────
const C = {
  forest: "#1a3a2a", deep: "#0f2218", emerald: "#2d6a4f",
  sage: "#52b788", lime: "#95d5b2", cream: "#f8f4ec",
  amber: "#e9a84c", rust: "#c25e1a", mist: "#d8eee4",
  charcoal: "#2c3e35", white: "#ffffff",
};

// ─── CREDENTIALS  (change these before deploying) ─────────────────────────────
const USERS = [
  { username: "admin",         password: "BoazAdmin2025!",   role: "Administrator",   access: "all" },
  { username: "gm.operations", password: "BzOps2025#",       role: "GM Operations",   access: "all" },
  { username: "gm.agronomy",   password: "BzAgro2025#",      role: "GM Agronomy",     access: ["crop","greenhouse","fertilizer","overview"] },
  { username: "logistics",     password: "BzLogistics25#",   role: "Logistics Officer",access: ["coldchain","export","overview"] },
  { username: "vet.officer",   password: "BzVet2025#",       role: "Veterinary Officer",access: ["livestock","fish","overview"] },
  { username: "tech.lead",     password: "BzTech2025#",      role: "Tech Lead",        access: ["agritech","overview"] },
  { username: "plant.manager", password: "BzPlant2025#",     role: "Plant Manager",    access: ["processing","fertilizer","overview"] },
];

// ─── ALL DIVISIONS ────────────────────────────────────────────────────────────
const ALL_DIVS = [
  { id: "overview",    label: "📋 Overview",          icon: "📋" },
  { id: "crop",        label: "🌾 Crop Farming",      icon: "🌾" },
  { id: "livestock",   label: "🐄 Livestock",         icon: "🐄" },
  { id: "processing",  label: "🏭 Agro-Processing",   icon: "🏭" },
  { id: "fertilizer",  label: "🧪 Fertilizer",        icon: "🧪" },
  { id: "agritech",    label: "💻 AgriTech",          icon: "💻" },
  { id: "coldchain",   label: "❄️ Cold Chain",         icon: "❄️" },
  { id: "export",      label: "🚢 Commodity Export",  icon: "🚢" },
  { id: "greenhouse",  label: "🌿 Greenhouse",        icon: "🌿" },
  { id: "fish",        label: "🐟 Fish Farming",      icon: "🐟" },
  { id: "equipment",   label: "🚜 Equipment Leasing", icon: "🚜" },
];

// ─── UI HELPERS ────────────────────────────────────────────────────────────────
function FlowChart({ steps, color = C.emerald }) {
  return (
    <div style={{ overflowX: "auto", paddingBottom: 8 }}>
      <div style={{ display: "flex", alignItems: "center", minWidth: steps.length * 140 }}>
        {steps.map((s, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center" }}>
            <div style={{
              background: i === 0 ? color : i === steps.length - 1 ? C.amber : "#fff",
              color: i === 0 || i === steps.length - 1 ? "#fff" : color,
              border: `2px solid ${color}`, borderRadius: i === 0 || i === steps.length - 1 ? 28 : 8,
              padding: "10px 14px", width: 120, textAlign: "center",
              fontSize: 11, fontWeight: 700, lineHeight: 1.3,
              boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
            }}>
              <div style={{ fontSize: 18, marginBottom: 4 }}>{s.icon}</div>{s.label}
            </div>
            {i < steps.length - 1 && (
              <div style={{ display: "flex", alignItems: "center", color }}>
                <div style={{ width: 24, height: 2, background: color }} />
                <span style={{ fontSize: 14, marginLeft: -2 }}>▶</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function VFlow({ steps, color = C.emerald }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {steps.map((s, i) => (
        <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: 34, height: 34, borderRadius: "50%", background: color, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, flexShrink: 0 }}>{i + 1}</div>
            {i < steps.length - 1 && <div style={{ width: 2, height: 28, background: `${color}44` }} />}
          </div>
          <div style={{ background: "#fff", border: `1.5px solid ${color}33`, borderRadius: 8, padding: "8px 14px", flex: 1, marginTop: 4 }}>
            <div style={{ fontWeight: 700, color, fontSize: 13 }}>{s.label}</div>
            {s.detail && <div style={{ fontSize: 11, color: "#555", marginTop: 2 }}>{s.detail}</div>}
          </div>
        </div>
      ))}
    </div>
  );
}

function Card({ title, children, accent = C.emerald }) {
  const [open, setOpen] = useState(true);
  return (
    <div style={{ border: `1.5px solid ${accent}33`, borderRadius: 12, overflow: "hidden", marginBottom: 16, boxShadow: "0 2px 10px rgba(0,0,0,0.06)" }}>
      <div onClick={() => setOpen(o => !o)} style={{ background: accent, color: "#fff", padding: "11px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}>
        <span style={{ fontWeight: 800, fontSize: 13 }}>{title}</span>
        <span>{open ? "▲" : "▼"}</span>
      </div>
      {open && <div style={{ padding: "14px 16px", background: "#fff" }}>{children}</div>}
    </div>
  );
}

function Tbl({ headers, rows, accent = C.emerald }) {
  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
        <thead>
          <tr style={{ background: accent }}>{headers.map((h, i) => <th key={i} style={{ color: "#fff", padding: "7px 11px", textAlign: "left", fontWeight: 700 }}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? "#f8faf9" : "#fff" }}>
              {row.map((c, j) => <td key={j} style={{ padding: "7px 11px", borderBottom: "1px solid #e8f0eb", color: "#333" }}>{c}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Badge({ label, color = C.emerald }) {
  return <span style={{ background: `${color}22`, color, border: `1px solid ${color}55`, borderRadius: 20, padding: "2px 10px", fontSize: 11, fontWeight: 700, marginRight: 6, display: "inline-block" }}>{label}</span>;
}

function DivHeader({ icon, title, subtitle, tags, accent }) {
  return (
    <div style={{ background: `linear-gradient(135deg, ${accent}, ${accent}cc)`, filter: "brightness(1.2)", borderRadius: 14, padding: "22px 20px", color: "#fff", marginBottom: 18 }}>
      <div style={{ fontSize: 34, marginBottom: 6 }}>{icon}</div>
      <h2 style={{ margin: "0 0 4px", fontWeight: 900, fontSize: 20 }}>{title}</h2>
      <p style={{ margin: "0 0 12px", opacity: 0.85, fontSize: 12 }}>{subtitle}</p>
      <div>{tags.map(t => <Badge key={t} label={t} color="#fff" />)}</div>
    </div>
  );
}

// ─── SOP SECTIONS ─────────────────────────────────────────────────────────────
function Overview({ user }) {
  return (
    <div>
      <div style={{ background: `linear-gradient(135deg, ${C.forest}, ${C.emerald})`, borderRadius: 16, padding: "28px 24px", color: "#fff", marginBottom: 20, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -20, right: -20, fontSize: 120, opacity: 0.07 }}>🌿</div>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: C.lime, marginBottom: 6, textTransform: "uppercase" }}>Standard Operating Procedures</div>
        <h1 style={{ margin: "0 0 6px", fontSize: 26, fontWeight: 900 }}>Boaz Agro Holdings</h1>
        <p style={{ margin: "0 0 16px", color: "#c8e6d8", fontSize: 13, maxWidth: 500 }}>Unified SOP framework governing all operational divisions — from seed to export. Defines workflows, responsibilities, quality controls, and performance standards.</p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {["Version 1.0", "Effective 2025", "All Divisions", "CONFIDENTIAL — INTERNAL ONLY"].map(t => (
            <span key={t} style={{ background: "rgba(255,255,255,0.15)", borderRadius: 20, padding: "3px 10px", fontSize: 11, fontWeight: 600 }}>{t}</span>
          ))}
        </div>
      </div>

      <div style={{ background: C.mist, borderRadius: 10, padding: "10px 16px", marginBottom: 18, fontSize: 12, color: C.forest }}>
        👋 Welcome, <strong>{user.role}</strong>. You have access to <strong>{user.access === "all" ? "all divisions" : user.access.length + " divisions"}</strong>. Use the sidebar to navigate.
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px,1fr))", gap: 10, marginBottom: 20 }}>
        {[
          { icon: "🌾", t: "Crop Farming", d: "Large-scale field operations" },
          { icon: "🐄", t: "Livestock", d: "Cattle, poultry, piggery" },
          { icon: "🏭", t: "Agro-Processing", d: "Milling, packaging, value-add" },
          { icon: "🧪", t: "Fertilizer", d: "Organic & inorganic production" },
          { icon: "💻", t: "AgriTech Platform", d: "Digital platform & data" },
          { icon: "❄️", t: "Cold Chain", d: "Temperature-controlled logistics" },
          { icon: "🚢", t: "Commodity Export", d: "Trade, compliance & forex" },
          { icon: "🌿", t: "Greenhouse", d: "Controlled environment farming" },
          { icon: "🐟", t: "Fish Farming", d: "Aquaculture operations" },
          { icon: "🚜", t: "Equipment Leasing", d: "Machinery & asset management" },
        ].map(d => (
          <div key={d.t} style={{ background: "#fff", border: `1.5px solid ${C.emerald}22`, borderRadius: 10, padding: "12px 14px", boxShadow: "0 2px 6px rgba(0,0,0,0.05)" }}>
            <div style={{ fontSize: 22, marginBottom: 4 }}>{d.icon}</div>
            <div style={{ fontWeight: 800, fontSize: 12, color: C.forest }}>{d.t}</div>
            <div style={{ fontSize: 11, color: "#888", marginTop: 2 }}>{d.d}</div>
          </div>
        ))}
      </div>

      <Card title="📌 SOP Framework Principles" accent={C.forest}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))", gap: 10 }}>
          {[
            { t: "Safety First", d: "HSE protocols mandatory at all times across all sites.", icon: "🦺" },
            { t: "Traceability", d: "Every input, process and output documented end-to-end.", icon: "📊" },
            { t: "Compliance", d: "Full adherence to national and international regulations.", icon: "⚖️" },
            { t: "Continuous Improvement", d: "Quarterly audits and annual SOP revision cycles.", icon: "🔄" },
            { t: "Accountability", d: "Named owners per SOP with defined RACI matrices.", icon: "👤" },
            { t: "Sustainability", d: "Environmental stewardship in all operational decisions.", icon: "🌍" },
          ].map(p => (
            <div key={p.t} style={{ background: C.mist, borderRadius: 8, padding: 10 }}>
              <div style={{ fontSize: 18, marginBottom: 4 }}>{p.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 12, color: C.forest }}>{p.t}</div>
              <div style={{ fontSize: 11, color: "#555", marginTop: 2 }}>{p.d}</div>
            </div>
          ))}
        </div>
      </Card>

      <Card title="📅 Document Control & Review Schedule" accent={C.amber}>
        <Tbl accent={C.amber}
          headers={["Division", "SOP Owner", "Review Cycle", "Next Review"]}
          rows={[
            ["Crop Farming", "GM – Agronomy", "Quarterly", "Q2 2025"],
            ["Livestock", "GM – Livestock", "Quarterly", "Q2 2025"],
            ["Agro-Processing", "Plant Manager", "Semi-Annual", "Q3 2025"],
            ["Fertilizer Production", "Production Manager", "Semi-Annual", "Q3 2025"],
            ["AgriTech Platform", "CTO / Product Lead", "Monthly", "Monthly"],
            ["Cold Chain Logistics", "Logistics Manager", "Quarterly", "Q2 2025"],
            ["Commodity Export", "Export Manager", "Quarterly", "Q2 2025"],
            ["Greenhouse", "Head Horticulturist", "Quarterly", "Q2 2025"],
            ["Fish Farming", "Aquaculture Manager", "Quarterly", "Q2 2025"],
            ["Equipment Leasing", "Asset Manager", "Semi-Annual", "Q3 2025"],
          ]}
        />
      </Card>
    </div>
  );
}

function CropFarming() {
  const ac = "#2d6a4f";
  return (
    <div>
      <DivHeader icon="🌾" title="Large-Scale Crop Farming SOP" subtitle="Field operations, agronomic practices, harvest, and post-harvest handling" tags={["SOP-CROP-001","Field Operations","Agronomy"]} accent={ac} />
      <Card title="🔄 Annual Crop Cycle Workflow" accent={ac}>
        <FlowChart color={ac} steps={[
          {icon:"📐",label:"Land Assessment"},{icon:"🚜",label:"Land Preparation"},{icon:"🌱",label:"Seed Procurement"},
          {icon:"🌍",label:"Planting"},{icon:"💧",label:"Irrigation"},{icon:"🧪",label:"Crop Protection"},
          {icon:"📊",label:"Monitoring"},{icon:"🌾",label:"Harvesting"},{icon:"📦",label:"Post-Harvest"},{icon:"🏪",label:"Storage/Market"},
        ]} />
      </Card>
      <Card title="1️⃣ Land Assessment & Preparation" accent={ac}>
        <VFlow color={ac} steps={[
          {label:"Soil testing (pH, NPK, micronutrients)",detail:"Accredited lab; ≥10 samples per 50 ha. Annual frequency. Issue Soil Report (CROP-SR-01)."},
          {label:"Topographic & drainage survey",detail:"GIS mapping; identify flood zones, slopes. Define irrigation zones and crop block layout."},
          {label:"Land Use Plan approval by GM Agronomy",detail:"Crop rotation schedule, block allocation, variety selection documented and signed."},
          {label:"Primary tillage — subsoiling / deep ploughing",detail:"Target 30–40 cm depth. GPS-guided equipment. Machine hours logged."},
          {label:"Secondary tillage — harrowing & ridging",detail:"Fine seedbed. Apply basal fertilizer per soil report recommendation."},
          {label:"Sign-off: Field Preparation Checklist (CROP-FPC-01)",detail:"Block Supervisor completes checklist; GM Agronomy approves before planting commences."},
        ]} />
      </Card>
      <Card title="2️⃣ Seed Procurement & Planting Standards" accent={ac}>
        <Tbl accent={ac} headers={["Activity","Responsible","Standard","Document"]}
          rows={[
            ["Variety selection","GM Agronomy","Certified, disease-resistant varieties only","CROP-SV-01"],
            ["Supplier evaluation","Procurement","Govt-approved / ISO-certified suppliers","CROP-SE-01"],
            ["Germination testing","Field Supervisor","≥ 85% germination rate","CROP-GT-01"],
            ["Seed treatment","Agronomist","Per crop protection schedule","CROP-ST-01"],
            ["Planting schedule","GM Agronomy","5-day weather window minimum","CROP-PS-01"],
            ["Replanting failed spots","Block Supervisor","Within 7 days of germination check","CROP-RP-01"],
          ]}
        />
      </Card>
      <Card title="3️⃣ Crop Protection (IPM)" accent={ac}>
        <FlowChart color={C.rust} steps={[
          {icon:"🔍",label:"Weekly Scouting"},{icon:"📝",label:"Pest/Disease ID"},{icon:"⚖️",label:"Threshold Check"},
          {icon:"🌿",label:"Bio/Cultural Control"},{icon:"🧴",label:"Chemical (last resort)"},{icon:"🕐",label:"PHI Compliance"},{icon:"📋",label:"Log & Report"},
        ]} />
        <div style={{marginTop:10,background:"#fff3e0",borderRadius:8,padding:10,fontSize:12,color:"#7a3e00"}}>
          ⚠️ <strong>Chemical Safety:</strong> WHO Class II or lower only. Full PPE mandatory. Spray records must include: product name, batch, rate, operator, date, weather conditions.
        </div>
      </Card>
      <Card title="4️⃣ Harvest & Post-Harvest Protocol" accent={ac}>
        <VFlow color={ac} steps={[
          {label:"Harvest readiness assessment",detail:"Agronomist certifies maturity via visual, physical, and lab indicators."},
          {label:"Equipment mobilization & Harvest Order issued",detail:"Form CROP-HO-01. Coordinate combines and manual labor."},
          {label:"Harvesting — target field losses < 5%",detail:"Log yield per block. Monitor losses continuously."},
          {label:"Weighing & grading at field",detail:"Certified weighbridge. Grade A/B/C. Issue Field Weight Slip."},
          {label:"Transport to storage / processing",detail:"Covered trucks. Moisture check before loading. Clean, dry containers."},
          {label:"Warehouse receiving inspection",detail:"QC: moisture ≤14%, no visible mold. Reject non-conforming loads."},
          {label:"Storage — FIFO, daily logs, monthly fumigation assessment",detail:"Temperature and humidity monitored daily."},
        ]} />
      </Card>
      <Card title="📊 Crop Farming KPIs" accent={ac}>
        <Tbl accent={ac} headers={["KPI","Target","Frequency","Owner"]}
          rows={[
            ["Yield per hectare","≥ 80% of variety potential","Per harvest","GM Agronomy"],
            ["Germination rate","≥ 85%","Per cycle","Block Supervisor"],
            ["Post-harvest loss","< 5%","Per harvest","Harvest Manager"],
            ["Pesticide compliance","100% within label rate","Weekly","Agronomist"],
            ["Irrigation efficiency","≥ 70%","Monthly","Irrigation Tech"],
            ["SOP documentation rate","100% records complete","Monthly audit","Quality Manager"],
          ]}
        />
      </Card>
    </div>
  );
}

function Livestock() {
  const ac = "#6b4c2a";
  return (
    <div>
      <DivHeader icon="🐄" title="Livestock Farming SOP" subtitle="Cattle, poultry, piggery — husbandry, health management, and production standards" tags={["SOP-LIVE-001","Animal Husbandry","Biosecurity"]} accent={ac} />
      <Card title="🔄 Livestock Production Cycle" accent={ac}>
        <FlowChart color={ac} steps={[
          {icon:"🐣",label:"Procurement/Breeding"},{icon:"🏠",label:"Housing & Intake"},{icon:"🌾",label:"Feed Management"},
          {icon:"💉",label:"Veterinary Care"},{icon:"📊",label:"Growth Monitoring"},{icon:"🔪",label:"Slaughter/Offtake"},
          {icon:"❄️",label:"Processing"},{icon:"🚚",label:"Distribution"},
        ]} />
      </Card>
      <Card title="1️⃣ Animal Procurement & Biosecurity" accent={ac}>
        <VFlow color={ac} steps={[
          {label:"Source verification & Veterinary Health Certificate",detail:"Quarantine 21 days before integration. Reject visibly sick animals at arrival."},
          {label:"Arrival inspection by Farm Veterinarian",detail:"Full clinical check. Reject underweight or symptomatic animals."},
          {label:"Quarantine housing — 21-day isolation",detail:"Daily health observation logs. No contact with production animals."},
          {label:"Deworming, vaccination & individual tagging",detail:"Standard health protocol applied. Unique ID tag. Livestock register updated."},
          {label:"Integration — Vet clearance required",detail:"Only after 21-day clean bill of health. Herd/flock count records updated."},
        ]} />
      </Card>
      <Card title="2️⃣ Feed & Nutrition Standards" accent={ac}>
        <Tbl accent={ac} headers={["Species","Feed Type","Daily Ration","Frequency","Key Metric"]}
          rows={[
            ["Cattle (beef)","TMR + concentrates","2.5% body weight DM","2× daily","Weekly weight gain"],
            ["Cattle (dairy)","High-energy TMR + forage","Per milk level","3× daily","Daily milk yield"],
            ["Poultry (broiler)","Starter/Grower/Finisher","Ad libitum","Continuous","FCR weekly"],
            ["Poultry (layer)","Layer mash + calcium","Per breed spec","2–3× daily","Egg production %"],
            ["Pigs (grower)","Grower pellets","2.5 kg/head/day","2× daily","Weekly weight"],
            ["Pigs (sow)","Sow & weaner mix","Adjusted per stage","2× daily","Body condition score"],
          ]}
        />
      </Card>
      <Card title="3️⃣ Disease Response Protocol" accent={ac}>
        <VFlow color="#c0392b" steps={[
          {label:"Isolate sick animal immediately"},
          {label:"Notify Farm Vet within 1 hour"},
          {label:"Clinical assessment & differential diagnosis"},
          {label:"Treatment / quarantine decision"},
          {label:"Report notifiable diseases to government authority"},
          {label:"Investigate source; full premises disinfection"},
        ]} />
      </Card>
      <Card title="📊 Livestock KPIs" accent={ac}>
        <Tbl accent={ac} headers={["KPI","Cattle (Beef)","Poultry","Piggery"]}
          rows={[
            ["Mortality rate","< 2% p.a.","< 3% per flock","< 2% p.a."],
            ["Average daily gain","≥ 0.8 kg/day","Broiler: ≥ 55g/day","≥ 0.6 kg/day"],
            ["Feed conversion ratio","< 7:1","< 2:1","< 3:1"],
            ["Vaccination coverage","100%","100% per batch","100%"],
          ]}
        />
      </Card>
    </div>
  );
}

function AgroProcessing() {
  const ac = "#5a3e8a";
  return (
    <div>
      <DivHeader icon="🏭" title="Agro-Processing SOP" subtitle="Milling, value addition, packaging — food safety and HACCP compliance" tags={["SOP-PROC-001","HACCP","ISO 22000"]} accent={ac} />
      <Card title="🔄 Processing Line Workflow" accent={ac}>
        <FlowChart color={ac} steps={[
          {icon:"📥",label:"Raw Material Intake"},{icon:"🔍",label:"QC Inspection"},{icon:"🧹",label:"Cleaning & Sorting"},
          {icon:"⚙️",label:"Processing"},{icon:"🔬",label:"QC Testing"},{icon:"📦",label:"Packaging"},
          {icon:"🏷️",label:"Batch Coding"},{icon:"🏪",label:"Finished Goods"},{icon:"🚚",label:"Dispatch"},
        ]} />
      </Card>
      <Card title="HACCP Critical Control Points" accent={ac}>
        <Tbl accent={ac} headers={["CCP","Step","Hazard","Critical Limit","Corrective Action"]}
          rows={[
            ["CCP-1","Raw material receiving","Aflatoxin","≤ 4 ppb (export)","Reject & return to supplier"],
            ["CCP-2","Cleaning / de-stoning","Physical foreign matter","Zero tolerance","Stop line; clean; re-inspect"],
            ["CCP-3","Heat treatment","Microbial survival","Core temp ≥ 70°C / moisture ≤12%","Extend treatment; retest"],
            ["CCP-4","Metal detection","Metal fragments","Fe < 1.5mm","Quarantine product; investigate"],
            ["CCP-5","Packaging sealing","Recontamination","100% seal integrity","Reseal or scrap batch"],
          ]}
        />
      </Card>
      <Card title="📊 Processing KPIs" accent={ac}>
        <Tbl accent={ac} headers={["KPI","Target","Frequency"]}
          rows={[
            ["Processing efficiency","≥ 90%","Per shift"],
            ["Machine downtime","< 5% of shift","Daily"],
            ["Product rejection rate","< 2%","Daily"],
            ["Aflatoxin test compliance","100% lots","Per intake"],
            ["Customer complaint rate","< 0.5 per 1,000 units","Monthly"],
          ]}
        />
      </Card>
    </div>
  );
}

function Fertilizer() {
  const ac = "#1a6b5a";
  return (
    <div>
      <DivHeader icon="🧪" title="Fertilizer Production SOP" subtitle="Blending, QA, regulatory compliance, and distribution" tags={["SOP-FERT-001","NAFDAC","SON"]} accent={ac} />
      <Card title="🔄 Production Workflow" accent={ac}>
        <FlowChart color={ac} steps={[
          {icon:"📦",label:"Raw Material"},{icon:"🔬",label:"Lab Analysis"},{icon:"⚖️",label:"Formulation"},
          {icon:"🔀",label:"Blending"},{icon:"✅",label:"QC Verify"},{icon:"📦",label:"Bagging"},{icon:"🚚",label:"Distribution"},
        ]} />
      </Card>
      <Card title="Raw Material Specifications" accent={ac}>
        <Tbl accent={ac} headers={["Input","Specification","Test Method","Tolerance"]}
          rows={[
            ["Urea","N ≥ 46%","Kjeldahl method","±0.5%"],
            ["MOP","K₂O ≥ 60%","Flame photometry","±1%"],
            ["Triple Super Phosphate","P₂O₅ ≥ 46%","Colorimetric","±1%"],
            ["Organic compost","C:N ratio 20–30:1","Lab analysis","Moisture ≤ 20%"],
            ["Micronutrient premix","Per spec sheet","ICP-OES","No heavy metals above limits"],
          ]}
        />
      </Card>
      <Card title="📊 Fertilizer KPIs" accent={ac}>
        <Tbl accent={ac} headers={["KPI","Target","Owner"]}
          rows={[
            ["Batch NPK accuracy","±0.5% of formulation","Lab Manager"],
            ["Production output","≥ 95% of planned tonnage","Production Manager"],
            ["Rejection rate","< 1%","QC Manager"],
            ["Zero safety incidents","0 LTIs per year","HSE Officer"],
          ]}
        />
      </Card>
    </div>
  );
}

function AgriTech() {
  const ac = "#1a4a7a";
  return (
    <div>
      <DivHeader icon="💻" title="AgriTech Platform SOP" subtitle="Digital operations, data management, farmer engagement, and system reliability" tags={["SOP-TECH-001","NDPR","Digital Operations"]} accent={ac} />
      <Card title="🔄 Platform Operations" accent={ac}>
        <FlowChart color={ac} steps={[
          {icon:"👨‍🌾",label:"Farmer Onboarding"},{icon:"📱",label:"Data Collection"},{icon:"☁️",label:"Cloud Processing"},
          {icon:"📊",label:"Analytics"},{icon:"📣",label:"Advisory Push"},{icon:"💰",label:"Market Linkage"},{icon:"🔄",label:"Feedback Loop"},
        ]} />
      </Card>
      <Card title="Farmer Onboarding Process" accent={ac}>
        <VFlow color={ac} steps={[
          {label:"Field agent collects KYF data",detail:"NIN/BVN, GPS farm coordinates, farm size, crop types, contact. App: Boaz Agro Farmer App."},
          {label:"KYF verification",detail:"Cross-check with government farmer registry. Photo and biometric capture."},
          {label:"Farm profiling and baseline data capture",detail:"Soil type, cropping history, input usage, yield estimates, market outlets."},
          {label:"Credentials issued",detail:"USSD code + SMS OTP or app login. Farmer trained on platform basics."},
          {label:"Tier classification",detail:"Smallholder (<5ha), Medium (5–50ha), Large (>50ha). Different service packages per tier."},
        ]} />
      </Card>
      <Card title="Incident Response Tiers" accent={ac}>
        <Tbl accent={ac} headers={["Severity","Response Time","Resolution Target","Examples"]}
          rows={[
            ["P1 — Critical","15 minutes","4 hours","Platform down, data breach"],
            ["P2 — Major","1 hour","8 hours","Feature unavailable, payment failure"],
            ["P3 — Minor","4 hours","48 hours","UI bug, slow load"],
            ["P4 — Low","24 hours","7 days","Copy error, minor UX issue"],
          ]}
        />
      </Card>
      <Card title="📊 AgriTech KPIs" accent={ac}>
        <Tbl accent={ac} headers={["KPI","Target","Frequency"]}
          rows={[
            ["Active registered farmers","20% QoQ growth","Quarterly"],
            ["Platform uptime","≥ 99.5%","Monthly"],
            ["Data completeness per farm","≥ 85%","Monthly"],
            ["Advisory open rate","≥ 40%","Per campaign"],
            ["Bug resolution within SLA","≥ 95%","Per sprint"],
          ]}
        />
      </Card>
    </div>
  );
}

function ColdChain() {
  const ac = "#0a5c8a";
  return (
    <div>
      <DivHeader icon="❄️" title="Cold Chain Logistics SOP" subtitle="Temperature-controlled storage, transport, and handling of perishable produce" tags={["SOP-CCL-001","FSSC 22000"]} accent={ac} />
      <Card title="🔄 Cold Chain Flow" accent={ac}>
        <FlowChart color={ac} steps={[
          {icon:"🌾",label:"Farm Harvest"},{icon:"❄️",label:"Pre-cooling"},{icon:"🔍",label:"QC Inspection"},
          {icon:"📦",label:"Cold Storage"},{icon:"🚛",label:"Reefer Transport"},{icon:"🏪",label:"Distribution"},{icon:"✅",label:"POD & Sign-off"},
        ]} />
      </Card>
      <Card title="Temperature Standards by Product" accent={ac}>
        <Tbl accent={ac} headers={["Product","Storage Temp","Transport Temp","Max Out-of-Cold","Humidity"]}
          rows={[
            ["Fresh vegetables","0–4°C","2–6°C","30 min","90–95%"],
            ["Fruits (tropical)","10–15°C","12–16°C","45 min","85–90%"],
            ["Fish & seafood (fresh)","0–2°C","0–3°C","15 min","95%"],
            ["Meat (chilled)","0–4°C","2–5°C","20 min","90%"],
            ["Dairy products","2–6°C","2–6°C","20 min","85%"],
            ["Frozen goods","-18°C or below","-18°C or below","5 min","N/A"],
          ]}
        />
      </Card>
      <Card title="📊 Cold Chain KPIs" accent={ac}>
        <Tbl accent={ac} headers={["KPI","Target","Frequency"]}
          rows={[
            ["Temperature excursion events","< 2 per month","Monthly"],
            ["Product spoilage rate","< 3%","Monthly"],
            ["On-time delivery rate","≥ 95%","Weekly"],
            ["Refrigeration equipment uptime","≥ 98%","Monthly"],
          ]}
        />
      </Card>
    </div>
  );
}

function Export() {
  const ac = "#1a3a6a";
  return (
    <div>
      <DivHeader icon="🚢" title="Commodity Export SOP" subtitle="International trade compliance, documentation, phytosanitary certification, and logistics" tags={["SOP-EXP-001","Codex Alimentarius","WTO SPS"]} accent={ac} />
      <Card title="🔄 Export Process Workflow" accent={ac}>
        <FlowChart color={ac} steps={[
          {icon:"📋",label:"Order & Contract"},{icon:"🔍",label:"Pre-Inspection"},{icon:"📄",label:"Regulatory Docs"},
          {icon:"🧪",label:"Lab Certification"},{icon:"📦",label:"Stuffing/Loading"},{icon:"⚓",label:"Port Clearance"},
          {icon:"🚢",label:"Shipping"},{icon:"💱",label:"Payment & Forex"},
        ]} />
      </Card>
      <Card title="Export Documentation Checklist" accent={ac}>
        <Tbl accent={ac} headers={["Document","Issuing Authority","Lead Time","Validity"]}
          rows={[
            ["Phytosanitary Certificate","Quarantine & Inspection Service","5–7 working days","Per consignment"],
            ["Certificate of Origin","Chamber of Commerce","2–3 days","Per consignment"],
            ["Weight & Quality Certificate","SGS / Bureau Veritas","2–3 days","Per consignment"],
            ["Commercial Invoice + Packing List","Internal — Finance / Export Ops","1 day","Per shipment"],
            ["Bill of Lading","Freight Forwarder / Carrier","At shipping","Per consignment"],
            ["Form M / NXP / Export Permit","CBN / Ministry of Trade","5–10 days","Per transaction"],
          ]}
        />
      </Card>
      <Card title="📊 Export KPIs" accent={ac}>
        <Tbl accent={ac} headers={["KPI","Target","Frequency"]}
          rows={[
            ["Documentation lead time","≤ 10 working days pre-shipment","Per consignment"],
            ["Rejection rate at destination","< 0.5%","Per shipment"],
            ["On-time shipment rate","≥ 95%","Monthly"],
            ["Forex repatriation compliance","100% within timeline","Per transaction"],
          ]}
        />
      </Card>
    </div>
  );
}

function Greenhouse() {
  const ac = "#2d7a3a";
  return (
    <div>
      <DivHeader icon="🌿" title="Greenhouse Farming SOP" subtitle="Controlled environment agriculture — hydroponics, climate control, and high-value crops" tags={["SOP-GH-001","GlobalG.A.P.","CEA"]} accent={ac} />
      <Card title="🔄 Greenhouse Crop Cycle" accent={ac}>
        <FlowChart color={ac} steps={[
          {icon:"🌡️",label:"Climate Setup"},{icon:"🌱",label:"Propagation"},{icon:"🏠",label:"Transplanting"},
          {icon:"💧",label:"Fertigation"},{icon:"✂️",label:"Training/Pruning"},{icon:"🍅",label:"Harvest"},{icon:"📦",label:"Pack & Dispatch"},
        ]} />
      </Card>
      <Card title="Climate Control Standards" accent={ac}>
        <Tbl accent={ac} headers={["Parameter","Optimal Range","Alert Threshold","Control Method"]}
          rows={[
            ["Temperature (day)","22–28°C","> 32°C or < 18°C","Fan & pad evaporative cooling"],
            ["Relative humidity","60–80%","> 85% or < 50%","Fogging / dehumidifier"],
            ["CO₂ concentration","800–1200 ppm","< 400 ppm","CO₂ enrichment system"],
            ["Irrigation pH","5.5–6.5","< 5.0 or > 7.0","Automated pH dosing"],
            ["EC (nutrient solution)","2.0–4.5 mS/cm","Variance > 0.5","Automated dosing unit"],
          ]}
        />
      </Card>
      <Card title="📊 Greenhouse KPIs" accent={ac}>
        <Tbl accent={ac} headers={["KPI","Target","Frequency"]}
          rows={[
            ["Yield per m² (tomato)","≥ 60 kg/m²/year","Per cycle"],
            ["Climate compliance","≥ 95% time in range","Daily"],
            ["Water use efficiency","≥ 90% (recirculating)","Weekly"],
            ["Pest damage loss","< 5% of yield","Per cycle"],
          ]}
        />
      </Card>
    </div>
  );
}

function FishFarming() {
  const ac = "#0a5c7a";
  return (
    <div>
      <DivHeader icon="🐟" title="Fish Farming (Aquaculture) SOP" subtitle="Pond and RAS operations, fish health management, harvesting, and marketing" tags={["SOP-AQUA-001","Aquaculture Stewardship"]} accent={ac} />
      <Card title="🔄 Aquaculture Production Cycle" accent={ac}>
        <FlowChart color={ac} steps={[
          {icon:"🥚",label:"Fingerling Procurement"},{icon:"🏊",label:"Pond/Tank Prep"},{icon:"🐟",label:"Stocking"},
          {icon:"🍽️",label:"Feeding"},{icon:"🔬",label:"Water Quality"},{icon:"⚖️",label:"Grading"},
          {icon:"🎣",label:"Harvesting"},{icon:"❄️",label:"Processing & Sale"},
        ]} />
      </Card>
      <Card title="Water Quality Standards" accent={ac}>
        <Tbl accent={ac} headers={["Parameter","Optimal Range","Alert Limit","Testing Frequency"]}
          rows={[
            ["Dissolved Oxygen","≥ 5 mg/L","< 4 mg/L","Twice daily"],
            ["pH","6.5–8.5","< 6.0 or > 9.0","Daily"],
            ["Temperature","25–32°C (tropical)","< 22°C or > 34°C","Twice daily"],
            ["Ammonia (TAN)","< 0.05 mg/L","> 0.1 mg/L","Weekly"],
            ["Nitrite","< 0.1 mg/L","> 0.3 mg/L","Weekly"],
          ]}
        />
      </Card>
      <Card title="📊 Aquaculture KPIs" accent={ac}>
        <Tbl accent={ac} headers={["KPI","Target","Frequency"]}
          rows={[
            ["Feed Conversion Ratio","≤ 1.5 (catfish)","Per cycle"],
            ["Survival rate","≥ 80% stocking to harvest","Per cycle"],
            ["Harvest weight","≥ 1.0 kg (table size)","Per cycle"],
            ["Water quality compliance","≥ 95%","Daily"],
          ]}
        />
      </Card>
    </div>
  );
}

function EquipmentLeasing() {
  const ac = "#5a2a0a";
  return (
    <div>
      <DivHeader icon="🚜" title="Equipment Leasing SOP" subtitle="Agricultural machinery procurement, fleet management, leasing, and asset control" tags={["SOP-EQL-001","Asset Management"]} accent={ac} />
      <Card title="🔄 Equipment Leasing Lifecycle" accent={ac}>
        <FlowChart color={ac} steps={[
          {icon:"🛒",label:"Asset Procurement"},{icon:"🔍",label:"Inspection"},{icon:"📋",label:"Fleet Entry"},
          {icon:"📝",label:"Lease Agreement"},{icon:"🔑",label:"Handover"},{icon:"📡",label:"GPS Tracking"},
          {icon:"🔧",label:"Maintenance"},{icon:"🔄",label:"Return & Check"},{icon:"📦",label:"Redeployment"},
        ]} />
      </Card>
      <Card title="Leasing Agreement Standards" accent={ac}>
        <Tbl accent={ac} headers={["Element","Standard"]}
          rows={[
            ["Lease duration","Min 1 week; max 1 season per equipment type"],
            ["Security deposit","20–30% of lease value, refundable"],
            ["Operator requirement","Certified operator; Boaz-trained preferred"],
            ["Fuel provision","Lessee provides; baseline level documented at handover"],
            ["Breakdown responsibility","Normal wear: Boaz. Operator-caused damage: Lessee"],
            ["Return inspection","Joint inspection within 24 hrs; damage assessment completed"],
          ]}
        />
      </Card>
      <Card title="Preventive Maintenance Schedule" accent={ac}>
        <Tbl accent={ac} headers={["Interval","Activities","Responsible"]}
          rows={[
            ["Daily (pre-use)","Fluid levels, tyre pressure, lights, brakes — operator checklist","Equipment Operator"],
            ["Weekly (50 hrs)","Grease all points, air filter clean, battery check","Fleet Mechanic"],
            ["Monthly (200 hrs)","Engine oil & filter, belt inspection, full check","Senior Mechanic"],
            ["Quarterly (500 hrs)","Hydraulic fluid, fuel filter, full diagnostics","Authorized Service Centre"],
            ["Annual overhaul","Per OEM schedule, NDT inspection","OEM / Authorized Centre"],
          ]}
        />
      </Card>
      <Card title="📊 Equipment Leasing KPIs" accent={ac}>
        <Tbl accent={ac} headers={["KPI","Target","Frequency"]}
          rows={[
            ["Fleet utilization rate","≥ 75%","Monthly"],
            ["Equipment downtime","< 10%","Monthly"],
            ["Maintenance compliance","100% on schedule","Monthly"],
            ["Lease revenue vs. plan","≥ 95% of budget","Monthly"],
          ]}
        />
      </Card>
    </div>
  );
}

// ─── SECTION REGISTRY ─────────────────────────────────────────────────────────
const SECTIONS = {
  overview: (u) => <Overview user={u} />,
  crop: () => <CropFarming />,
  livestock: () => <Livestock />,
  processing: () => <AgroProcessing />,
  fertilizer: () => <Fertilizer />,
  agritech: () => <AgriTech />,
  coldchain: () => <ColdChain />,
  export: () => <Export />,
  greenhouse: () => <Greenhouse />,
  fish: () => <FishFarming />,
  equipment: () => <EquipmentLeasing />,
};

// ─── LOGIN SCREEN ─────────────────────────────────────────────────────────────
function LoginScreen({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setError("");
    setTimeout(() => {
      const user = USERS.find(u => u.username === username.trim().toLowerCase() && u.password === password);
      if (user) { onLogin(user); }
      else { setError("Invalid username or password. Please try again."); }
      setLoading(false);
    }, 600);
  };

  return (
    <div style={{
      minHeight: "100vh", background: C.deep,
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      padding: 20, fontFamily: "'Georgia', serif",
    }}>
      <div style={{ position: "fixed", inset: 0, background: `radial-gradient(ellipse at 20% 50%, ${C.emerald}22 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, ${C.amber}11 0%, transparent 50%)`, pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 420 }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ fontSize: 52, marginBottom: 8 }}>🌿</div>
          <div style={{ color: C.lime, fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", marginBottom: 4 }}>Boaz Agro Holdings</div>
          <div style={{ color: "#fff", fontSize: 22, fontWeight: 900, letterSpacing: -0.5 }}>SOP Internal Portal</div>
          <div style={{ color: "#888", fontSize: 12, marginTop: 4 }}>Confidential — Authorized Personnel Only</div>
        </div>

        <div style={{ background: "#fff", borderRadius: 16, padding: "32px 28px", boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: C.forest, marginBottom: 20, fontFamily: "sans-serif" }}>Sign in to your account</div>

          <div style={{ marginBottom: 16 }}>
            <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#555", marginBottom: 6, fontFamily: "sans-serif" }}>Username</label>
            <input value={username} onChange={e => setUsername(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleLogin()}
              placeholder="e.g. gm.agronomy"
              style={{ width: "100%", boxSizing: "border-box", padding: "10px 12px", border: `1.5px solid ${error ? "#e74c3c" : "#ddd"}`, borderRadius: 8, fontSize: 13, fontFamily: "sans-serif", outline: "none" }}
            />
          </div>

          <div style={{ marginBottom: 20 }}>
            <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#555", marginBottom: 6, fontFamily: "sans-serif" }}>Password</label>
            <div style={{ position: "relative" }}>
              <input value={password} onChange={e => setPassword(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleLogin()}
                type={showPw ? "text" : "password"}
                placeholder="Enter your password"
                style={{ width: "100%", boxSizing: "border-box", padding: "10px 40px 10px 12px", border: `1.5px solid ${error ? "#e74c3c" : "#ddd"}`, borderRadius: 8, fontSize: 13, fontFamily: "sans-serif", outline: "none" }}
              />
              <button onClick={() => setShowPw(s => !s)} style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", fontSize: 16, color: "#999" }}>
                {showPw ? "🙈" : "👁"}
              </button>
            </div>
          </div>

          {error && <div style={{ background: "#fff5f5", border: "1px solid #e74c3c", borderRadius: 8, padding: "8px 12px", color: "#c0392b", fontSize: 12, marginBottom: 14, fontFamily: "sans-serif" }}>⚠️ {error}</div>}

          <button onClick={handleLogin} disabled={loading || !username || !password} style={{
            width: "100%", padding: "12px", background: loading ? "#aaa" : C.forest, color: "#fff",
            border: "none", borderRadius: 10, fontWeight: 800, fontSize: 14, cursor: loading ? "not-allowed" : "pointer",
            fontFamily: "sans-serif", transition: "background 0.2s",
          }}>
            {loading ? "Signing in..." : "Sign In →"}
          </button>

          <div style={{ marginTop: 16, padding: "10px 12px", background: "#f8f9fa", borderRadius: 8, fontSize: 11, color: "#888", fontFamily: "sans-serif", lineHeight: 1.6 }}>
            🔒 This portal contains confidential Boaz Agro Holdings operational data. Unauthorized access is strictly prohibited. All sessions are logged.
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: 20, fontSize: 11, color: "#555", fontFamily: "sans-serif" }}>
          Contact IT for access issues · Boaz Agro Holdings
        </div>
      </div>
    </div>
  );
}

// ─── MAIN APP ──────────────────────────────────────────────────────────────────
export default function App() {
  const [user, setUser] = useState(null);
  const [active, setActive] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showLogout, setShowLogout] = useState(false);

  if (!user) return <LoginScreen onLogin={u => { setUser(u); setActive("overview"); }} />;

  const canAccess = (id) => user.access === "all" || user.access.includes(id);
  const visibleDivs = ALL_DIVS.filter(d => canAccess(d.id));

  return (
    <div style={{ fontFamily: "'Georgia', serif", background: C.cream, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Top Bar */}
      <div style={{ background: C.forest, color: "#fff", padding: "0 16px", display: "flex", alignItems: "center", height: 52, borderBottom: `3px solid ${C.amber}`, position: "sticky", top: 0, zIndex: 100, gap: 12 }}>
        <button onClick={() => setSidebarOpen(o => !o)} style={{ background: "none", border: "none", color: "#fff", fontSize: 20, cursor: "pointer" }}>☰</button>
        <span style={{ fontSize: 20 }}>🌿</span>
        <div>
          <div style={{ fontWeight: 900, fontSize: 13, letterSpacing: 0.3 }}>Boaz Agro Holdings</div>
          <div style={{ fontSize: 9, color: C.lime, letterSpacing: 1.5 }}>INTERNAL SOP PORTAL</div>
        </div>
        <div style={{ marginLeft: "auto", position: "relative" }}>
          <button onClick={() => setShowLogout(s => !s)} style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)", color: "#fff", borderRadius: 20, padding: "5px 12px", fontSize: 11, cursor: "pointer", fontFamily: "sans-serif" }}>
            👤 {user.role} ▾
          </button>
          {showLogout && (
            <div style={{ position: "absolute", right: 0, top: 38, background: "#fff", borderRadius: 8, boxShadow: "0 4px 20px rgba(0,0,0,0.2)", overflow: "hidden", minWidth: 180, zIndex: 200 }}>
              <div style={{ padding: "10px 14px", borderBottom: "1px solid #eee", fontSize: 12, fontFamily: "sans-serif" }}>
                <div style={{ fontWeight: 700, color: C.forest }}>{user.role}</div>
                <div style={{ color: "#888", fontSize: 11 }}>@{user.username}</div>
              </div>
              <button onClick={() => { setUser(null); setShowLogout(false); }} style={{ width: "100%", padding: "10px 14px", background: "none", border: "none", textAlign: "left", cursor: "pointer", color: "#e74c3c", fontWeight: 700, fontSize: 12, fontFamily: "sans-serif" }}>
                🚪 Sign Out
              </button>
            </div>
          )}
        </div>
      </div>

      <div style={{ display: "flex", flex: 1, minHeight: 0 }}>
        {/* Sidebar */}
        {sidebarOpen && (
          <div style={{ width: 200, background: C.deep, color: "#fff", overflowY: "auto", flexShrink: 0, padding: "10px 0", borderRight: `1px solid ${C.emerald}33` }}>
            <div style={{ padding: "0 14px 8px", fontSize: 10, color: C.sage, letterSpacing: 1.5, textTransform: "uppercase", fontFamily: "sans-serif" }}>Divisions</div>
            {visibleDivs.map(d => (
              <div key={d.id} onClick={() => setActive(d.id)} style={{
                padding: "9px 14px", cursor: "pointer", fontSize: 12, fontWeight: active === d.id ? 800 : 400,
                background: active === d.id ? `${C.emerald}33` : "transparent",
                borderLeft: active === d.id ? `3px solid ${C.amber}` : "3px solid transparent",
                color: active === d.id ? C.lime : "#bbb", transition: "all 0.15s", fontFamily: "sans-serif",
              }}>{d.label}</div>
            ))}
            {user.access !== "all" && (
              <div style={{ padding: "12px 14px", fontSize: 10, color: "#555", lineHeight: 1.6, fontFamily: "sans-serif", borderTop: `1px solid ${C.emerald}22`, marginTop: 8 }}>
                🔒 Access limited to your role. Contact admin for full access.
              </div>
            )}
          </div>
        )}

        {/* Content */}
        <div style={{ flex: 1, overflowY: "auto", padding: "20px 18px", maxWidth: 900 }}>
          {canAccess(active) ? SECTIONS[active]?.(user) : (
            <div style={{ textAlign: "center", padding: 60, color: "#888", fontFamily: "sans-serif" }}>
              🔒 You don&apos;t have access to this section.<br />
              <span style={{ fontSize: 12 }}>Contact your administrator to request access.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
