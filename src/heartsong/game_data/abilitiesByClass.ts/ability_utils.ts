import { Domain } from "../domains"
import { Resistance } from "../resistances"
import { Skill } from "../skills"

export const domain = (...domains: Domain[]) => {
    return {
        domains: domains,
        skills: [],
        protections: [],
    }
}
export const skill = (...skills: Skill[]) => {
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
