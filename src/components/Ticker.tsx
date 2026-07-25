import { tickerItems } from "../data/divisions";

export default function Ticker() {
  // Rendered twice back-to-back so the CSS marquee (translateX -50%) loops seamlessly.
  const items = [...tickerItems, ...tickerItems];

  return (
    <div className="ticker-bar">
      <div className="ticker-inner">
        {items.map((item, i) => (
          <span key={`${item}-${i}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}
