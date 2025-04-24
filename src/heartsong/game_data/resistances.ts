export const resistances = ["blood", "mind", "echo", "fortune", "supplies"] as const
export type Resistance = (typeof resistances)[number]
