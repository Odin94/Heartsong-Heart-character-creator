import { Calling } from "./callings"
import { Character } from "./character"
import { CharacterClass } from "./classes"
import { Domain } from "./domains"
import { Resistance } from "./resistances"
import { Skill } from "./skills"

export type Ability = {
    name: string
    description: string
    type: "core" | "major" | "minor" | "zenith"
    parentName?: string
    staticBonuses: ((character: Character) => void)[]
}

export const abilitiesByClassOrRecord: Record<CharacterClass | Calling, Ability[]> = {
    // Classes
    Cleaver: [],
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

export const addDomain = (domain: Domain) => {
    const addDomainToCharFn = (character: Character) => {
        character.domains.add(domain)
    }

    return addDomainToCharFn
}

export const addSkill = (skill: Skill) => {
    const addSkillToCharFn = (character: Character) => {
        character.skills.add(skill)
    }

    return addSkillToCharFn
}

export const addProtection = (resistance: Resistance, amount: number) => {
    const addProtectionToCharFn = (character: Character) => {
        character.protections[resistance] += amount
    }

    return addProtectionToCharFn
}
