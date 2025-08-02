import { AbilityPickFrom } from "../abilities"
import { DomainKey } from "../domains"
import { Resistance } from "../resistances"
import { SkillKey } from "../skills"

export const domain = (...domains: DomainKey[]) => {
    return {
        domains: domains,
        skills: [],
        protections: [],
    }
}
export const skill = (...skills: SkillKey[]) => {
    return {
        domains: [],
        skills: skills,
        protections: [],
    }
}
export const protection = (resistance: Resistance, amount: number) => {
    return {
        domains: [],
        skills: [],
        protections: [{ resistance, amount }],
    }
}
export const noBonuses = () => {
    return {
        domains: [],
        skills: [],
        protections: [],
    }
}

export const pickFrom = (pickFrom: Partial<AbilityPickFrom>) => {
    return {
        skills: [],
        domains: [],
        protections: [],
        ...pickFrom,
    }
}
