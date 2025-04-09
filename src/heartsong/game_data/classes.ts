export const characterClasses = [
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
export type CharacterClass = (typeof characterClasses)[number]
