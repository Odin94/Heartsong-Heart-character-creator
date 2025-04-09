export const classes = [
    "Cleaver",
    "Deadwalker",
    "Deep Apiarist",
    "Heretic",
    "Hound",
    "Incarnadine",
    "Junk Mage",
    "Vermissian Knight",
    "Witch",
] as const
export type Class = (typeof classes)[number]
