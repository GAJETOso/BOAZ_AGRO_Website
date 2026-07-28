import type { WasteStream } from "../types";
import { stats } from "./stats";

export const wasteStreams: WasteStream[] = [
  { source: "Livestock", byproduct: "Cattle & poultry dung", conversion: "Composting / anaerobic digestion", endProduct: "Organic manure, biogas" },
  { source: "Crop Farming / Processing", byproduct: "Peeled corn husks & cobs", conversion: "Drying & milling", endProduct: "Livestock feed supplement" },
  { source: "Agro-Processing", byproduct: "Rice husks", conversion: "Combustion / bedding material", endProduct: "Boiler fuel, animal bedding" },
  { source: "Agro-Processing", byproduct: "Cassava peels & starch effluent", conversion: "Fermentation / drying", endProduct: "Livestock feed, biogas slurry" },
  { source: "Fish Farming", byproduct: "Fish offal & pond sludge", conversion: "Composting", endProduct: "Organic fertilizer" },
  { source: "Greenhouse", byproduct: "Crop residue & prunings", conversion: "Composting / mulching", endProduct: "Soil amendment" },
];

export const wasteTargets = [
  { label: "Byproduct diversion rate", target: "≥ 90% of identified waste streams converted", frequency: "Monthly" },
  { label: "Manure-to-fertilizer conversion yield", target: "≥ 60% of input weight", frequency: "Per batch" },
  { label: "Feed substitution rate (corn peel/husk)", target: "≥ 10% of livestock ration by weight", frequency: "Monthly" },
  { label: "Disposal-to-landfill volume", target: "< 5% of total byproduct volume", frequency: "Quarterly" },
];

export const wasteZeroPrinciple = `Any byproduct stream that cannot be converted or reused internally is referred for an alternative-use assessment before disposal is authorised — landfill or burning is a last resort, applied to less than 5% of total byproduct volume and requiring HSE sign-off. This standard is tracked as a formal internal SOP (SOP-RCY-001) across all ${stats.businessVerticals} divisions, not just a marketing claim.`;
