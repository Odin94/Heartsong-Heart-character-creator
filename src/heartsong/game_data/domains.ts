export const domains = ["cursed", "desolate", "haven", "occult", "religion", "technology", "warren", "wild"] as const
export type Domain = (typeof domains)[number]
