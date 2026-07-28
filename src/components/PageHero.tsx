import Link from "next/link";

export default function PageHero({
  label,
  title,
  desc,
  meta,
}: {
  label: string;
  title: React.ReactNode;
  desc: string;
  meta?: string[];
}) {
  return (
    <section className="page-hero">
      <div className="page-hero-inner">
        <div className="page-breadcrumb">
          <Link href="/">Home</Link> / {label}
        </div>
        <div className="section-label">
          <span>{label}</span>
        </div>
        <h1 className="section-title">{title}</h1>
        <p className="section-desc">{desc}</p>
        {meta && (
          <div className="page-meta">
            {meta.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
