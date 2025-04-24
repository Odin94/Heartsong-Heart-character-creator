import { cleaverAbilities } from "./abilitiesByClass.ts/cleaver_abilities"
import { Calling } from "./callings"
import { Character } from "./character"
import { CharacterClass } from "./classes"

export type Ability = {
    name: string
    description: string
    type: "core" | "major" | "minor" | "zenith"
    parentName?: string
    staticBonuses: ((character: Character) => void)[]
}

export const abilitiesByClassOrRecord: Record<CharacterClass | Calling, Ability[]> = {
    // Classes
    Cleaver: cleaverAbilities,
    Deadwalker: [],
    "Deep Apiarist": [],
    Heretic: [],
    Hound: [],
    Incarnadine: [],
    "Junk Mage": [],
    "Vermissian Knight": [],
    Witch: [],

    // Callings
    Adventure: [],
    Enlightenment: [],
    Forced: [],
    Heartsong: [],
    Penitent: [],
}
