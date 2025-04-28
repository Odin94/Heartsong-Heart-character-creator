import { cleaverAbilities } from "./abilitiesByClass.ts/cleaver_abilities"
import { deadwalkerAbilities } from "./abilitiesByClass.ts/deadwalker_abilities"
import { deepApiaristAbilities } from "./abilitiesByClass.ts/deep_apiarist_abilities"
import { hereticAbilities } from "./abilitiesByClass.ts/heretic_abilities"
import { Calling } from "./callings"
import { CharacterClass } from "./classes"
import { Domain } from "./domains"
import { Resistance } from "./resistances"
import { Skill } from "./skills"

export type StaticBonuses = {
    domains: Domain[]
    skills: Skill[]
    protections: { resistance: Resistance; amount: number }[]
}

export type Ability = {
    name: string
    description: string
    type: "core" | "major" | "minor" | "zenith"
    parentName?: string
    staticBonuses: StaticBonuses
}

export const abilitiesByClassOrRecord: Record<CharacterClass | Calling, Ability[]> = {
    // Classes
    Cleaver: cleaverAbilities,
    Deadwalker: deadwalkerAbilities,
    "Deep Apiarist": deepApiaristAbilities,
    Heretic: hereticAbilities,
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
