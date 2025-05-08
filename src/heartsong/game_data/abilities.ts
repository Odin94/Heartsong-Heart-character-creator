import { cleaverAbilities } from "./abilitiesByClass.ts/cleaver_abilities"
import { deadwalkerAbilities } from "./abilitiesByClass.ts/deadwalker_abilities"
import { deepApiaristAbilities } from "./abilitiesByClass.ts/deep_apiarist_abilities"
import { hereticAbilities } from "./abilitiesByClass.ts/heretic_abilities"
import { houndAbilities } from "./abilitiesByClass.ts/hound_abilities"
import { incarnadineAbilities } from "./abilitiesByClass.ts/incarnadine_abilities"
import { junkMageAbilities } from "./abilitiesByClass.ts/junk_mage_abilities"
import { vermissianKnightAbilities } from "./abilitiesByClass.ts/vermissian_knight_abilities"
import { witchAbilities } from "./abilitiesByClass.ts/witch_abilities"
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
    staticBonuses: StaticBonuses
    parentName?: string
    pickFrom?: {
        skills: Skill[]
        domains: Domain[]
        protections: Resistance[]
    }
}

export const abilitiesByClassOrRecord: Record<CharacterClass | Calling, Ability[]> = {
    // Classes
    Cleaver: cleaverAbilities,
    Deadwalker: deadwalkerAbilities,
    "Deep Apiarist": deepApiaristAbilities,
    Heretic: hereticAbilities,
    Hound: houndAbilities,
    Incarnadine: incarnadineAbilities,
    "Junk Mage": junkMageAbilities,
    "Vermissian Knight": vermissianKnightAbilities,
    Witch: witchAbilities,

    // Callings
    Adventure: [],
    Enlightenment: [],
    Forced: [],
    Heartsong: [],
    Penitent: [],
}
