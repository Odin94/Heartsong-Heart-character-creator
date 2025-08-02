import { noBonuses, pickFrom, protection, skill } from "./abilitiesByClass.ts/ability_utils"
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
import { DomainKey } from "./domains"
import { Resistance } from "./resistances"
import { SkillKey } from "./skills"

export type StaticBonuses = {
    domains: DomainKey[]
    skills: SkillKey[]
    protections: { resistance: Resistance; amount: number }[]
}

export type Ability = {
    name: string
    description: string
    type: "core" | "major" | "minor" | "zenith"
    staticBonuses: StaticBonuses
    parentName?: string
    pickFrom: {
        skills: SkillKey[]
        domains: DomainKey[]
        protections: Resistance[]
    }
    // TODOdin: Add "can be picked multiple times" attribute
}
export type AbilityPickFrom = Ability["pickFrom"]
export type PickFromOption = SkillKey | DomainKey | Resistance
export const comesWithPick = ({ pickFrom }: Ability) => Object.values(pickFrom ?? {}).some(({ length }) => length > 0)

export const abilitiesByClassOrCalling: Record<CharacterClass | Calling, Ability[]> = {
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
    Adventure: [
        {
            name: "Legendary",
            description: "When you gain a minor advance, refresh D6. When you gain a major advance, refresh D8",
            type: "core",
            staticBonuses: noBonuses(),
            pickFrom: pickFrom({}),
        },
    ],
    Enlightenment: [
        {
            name: "Unorthodox Methods",
            description:
                "Gain 'Discern' skill. Once per session, before you roll dice to resolve an action, instead state that your result is a 6. You succeed but take stress.",
            type: "core",
            staticBonuses: skill("discern"),
            pickFrom: pickFrom({}),
        },
    ],
    Forced: [
        {
            name: "Collateral",
            description: "Once per session, allocate stress to the nearest friendly target (PC or NPC) instead of marking it yourself.",
            type: "core",
            staticBonuses: noBonuses(),
            pickFrom: pickFrom({}),
        },
    ],
    Heartsong: [
        {
            name: "In the Blood",
            description: "Gain +1 'Echo' protection. Once per situation, when you take stress to any resistance other than 'Echo', allocate it to 'Echo'.",
            type: "core",
            staticBonuses: protection("echo", 1),
            pickFrom: pickFrom({}),
        },
    ],
    Penitent: [
        {
            name: "Not Yet",
            description:
                "Once per session, activate this ability to avoid suffering negative effects from Blood or Mind fallout for the remainder of the situation.",
            type: "core",
            staticBonuses: noBonuses(),
            pickFrom: pickFrom({}),
        },
    ],
}
