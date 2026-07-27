import type { ClimateRisk, ClimatePractice } from "../types";

export const climateRisks: ClimateRisk[] = [
  { icon: "🌧️", title: "Erratic Rainfall", desc: "Delayed or failed rains shift planting windows and threaten yield in rain-fed blocks, especially for maize and soybean cycles." },
  { icon: "🌡️", title: "Rising Temperatures", desc: "Heat stress reduces livestock productivity and accelerates soil moisture loss, widening irrigation demand across the growing season." },
  { icon: "🌊", title: "Flooding", desc: "Lowland rice and vegetable blocks face increased flood risk during intensified wet seasons, with knock-on effects for harvest timing." },
  { icon: "🐛", title: "Shifting Pest & Disease Pressure", desc: "Warmer, wetter conditions extend the range and season of crop pests and livestock disease vectors, requiring tighter biosecurity and IPM." },
];

export const climatePractices: ClimatePractice[] = [
  { icon: "🏡", title: "Controlled-Environment Farming", desc: "Our Greenhouse division decouples high-value crops from rainfall variability entirely, growing year-round regardless of season." },
  { icon: "💧", title: "Irrigation Efficiency", desc: "Drip and precision irrigation across field blocks, monitored against a ≥ 70% efficiency target to reduce water waste as rainfall becomes less predictable." },
  { icon: "☀️", title: "Solar-Powered Processing", desc: "Solar capacity at processing sites reduces exposure to grid instability and cuts the carbon footprint of milling and drying operations." },
  { icon: "🌱", title: "Regenerative Soil Practices", desc: "Crop rotation, cover cropping, and organic matter return (via our zero-waste composting) build soil resilience to both drought and flood." },
  { icon: "🌾", title: "Climate-Resilient Varieties", desc: "Certified, disease-resistant seed varieties selected for tolerance to drought and shifting pest pressure, reviewed each planting cycle." },
  { icon: "❄️", title: "Cold Chain Loss Prevention", desc: "Temperature-controlled storage and transport reduce post-harvest loss — itself a major climate-linked source of wasted agricultural output." },
];
