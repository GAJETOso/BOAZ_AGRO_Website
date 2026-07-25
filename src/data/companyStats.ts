/**
 * Raw company figures with no dependency on other data modules — this file
 * exists solely to avoid a circular import between stats.ts (which derives
 * businessVerticals from divisions.ts) and divisions.ts (which quotes these
 * same figures in its copy). Import from `./stats` instead, unless you're
 * inside divisions.ts.
 *
 * foundingYear, hectares, and statesOfOperation are the company's actual
 * current figures. smallholderPartners and coldChainHubs are reasonable
 * early-stage estimates (not yet formally counted) — update them once real
 * counts exist.
 */
export const companyStats = {
  foundingYear: 2026,
  hectares: 5,
  statesOfOperation: 2,
  smallholderPartners: 20,
  coldChainHubs: 1,
};
