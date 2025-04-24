import { Character } from "../character"
import { Domain } from "../domains"
import { Resistance } from "../resistances"
import { Skill } from "../skills"

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
