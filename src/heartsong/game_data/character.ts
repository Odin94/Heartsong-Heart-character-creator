import { Domains, Skills } from "../character_sheet/character_states"
import { Calling } from "./callings"
import { CharacterClass } from "./classes"
import { Resistance } from "./resistances"

export type Character = {
    name: string
    characterClass: CharacterClass | string
    calling: Calling | string
    activeBeats: string
    equipment: string
    resources: string
    abilities: string
    fallout: string
    domains: Domains
    skills: Skills
    protections: Record<Resistance, number>
    stress: Record<Resistance, number>
}

export const getEmptyCharacter = (): Character => {
    const skills: Skills = {
        compel: {
            hasSkill: false,
            knacks: "",
        },
        delve: {
            hasSkill: false,
            knacks: "",
        },
        discern: {
            hasSkill: false,
            knacks: "",
        },
        endure: {
            hasSkill: false,
            knacks: "",
        },
        evade: {
            hasSkill: false,
            knacks: "",
        },
        hunt: {
            hasSkill: false,
            knacks: "",
        },
        kill: {
            hasSkill: false,
            knacks: "",
        },
        mend: {
            hasSkill: false,
            knacks: "",
        },
        sneak: {
            hasSkill: false,
            knacks: "",
        },
    }

    const domains: Domains = {
        cursed: {
            hasDomain: false,
            knacks: "",
        },
        desolate: {
            hasDomain: false,
            knacks: "",
        },
        haven: {
            hasDomain: false,
            knacks: "",
        },
        occult: {
            hasDomain: false,
            knacks: "",
        },
        religion: {
            hasDomain: false,
            knacks: "",
        },
        technology: {
            hasDomain: false,
            knacks: "",
        },
        warren: {
            hasDomain: false,
            knacks: "",
        },
        wild: {
            hasDomain: false,
            knacks: "",
        },
    }

    const protections: Record<Resistance, number> = {
        blood: 0,
        mind: 0,
        echo: 0,
        fortune: 0,
        supplies: 0,
    }

    const stress: Record<Resistance, number> = {
        blood: 0,
        mind: 0,
        echo: 0,
        fortune: 0,
        supplies: 0,
    }

    const emptyCharacter: Character = {
        name: "",
        characterClass: "",
        calling: "",
        activeBeats: "",
        equipment: "",
        resources: "",
        abilities: "",
        fallout: "",
        domains: domains,
        skills: skills,
        protections: protections,
        stress: stress,
    }

    return emptyCharacter
}
