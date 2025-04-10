export const resistances = ["blood", "mind", "echo", "fortune", "supplies"] as const
export type Resistances = (typeof resistances)[number]
