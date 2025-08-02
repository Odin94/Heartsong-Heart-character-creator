export const resistances = ["blood", "mind", "echo", "fortune", "supplies"] as const
export type Resistance = (typeof resistances)[number]
export const isResistance = (maybeResistance: string | Resistance): maybeResistance is Resistance => {
    return resistances.includes(maybeResistance as Resistance)
}
