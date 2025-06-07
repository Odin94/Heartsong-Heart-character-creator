import { create } from "zustand"
import { SkillKey } from "../game_data/skills"
import { Resistance } from "../game_data/resistances"
import { DomainKey } from "../game_data/domains"
import { persist } from "zustand/middleware"
import { Character } from "../game_data/character"

export type NameZustand = {
    name: string
    setName: (name: string) => void
}
export const useName = create<NameZustand>()(
    persist(
        (set) => ({
            name: "",
            setName: (name: string) => set(() => ({ name })),
        }),
        {
            name: "name",
        }
    )
)

export type CharacterClassZustand = {
    characterClass: string
    setCharacterClass: (characterclass: string) => void
}
export const useCharacterClass = create<CharacterClassZustand>()(
    persist(
        (set) => ({
            characterClass: "",
            setCharacterClass: (characterclass: string) => set(() => ({ characterClass: characterclass })),
        }),
        { name: "characterClass" }
    )
)

export type CallingZustand = {
    calling: string
    setCalling: (calling: string) => void
}
export const useCalling = create<CallingZustand>()(
    persist(
        (set) => ({
            calling: "",
            setCalling: (calling: string) => set(() => ({ calling })),
        }),
        { name: "calling" }
    )
)

export type ActiveBeatsZustand = {
    activeBeats: string
    setActiveBeats: (activeBeats: string) => void
}
export const useActiveBeats = create<ActiveBeatsZustand>()(
    persist(
        (set) => ({
            activeBeats: "",
            setActiveBeats: (activeBeats: string) => set(() => ({ activeBeats })),
        }),
        { name: "activeBeats" }
    )
)

export type EquipmentZustand = {
    equipment: string
    setEquipment: (equipment: string) => void
}
export const useEquipment = create<EquipmentZustand>()(
    persist(
        (set) => ({
            equipment: "",
            setEquipment: (equipment: string) => set(() => ({ equipment })),
        }),
        { name: "equipment" }
    )
)

export type ResourcesZustand = {
    resources: string
    setResources: (resources: string) => void
}
export const useResources = create<ResourcesZustand>()(
    persist(
        (set) => ({
            resources: "",
            setResources: (resources: string) => set(() => ({ resources })),
        }),
        { name: "resources" }
    )
)

export type AbilitiesZustand = {
    abilities: string
    setAbilities: (abilities: string) => void
}
export const useAbilities = create<AbilitiesZustand>()(
    persist(
        (set) => ({
            abilities: "",
            setAbilities: (abilities: string) => set(() => ({ abilities })),
        }),
        { name: "abilities" }
    )
)

export type FalloutZustand = {
    fallout: string
    setFallout: (fallout: string) => void
}
export const useFallout = create<FalloutZustand>((set) => ({
    fallout: "",
    setFallout: (fallout: string) => set(() => ({ fallout })),
}))

export type Skill = { hasSkill: boolean; knacks: string }
export type Skills = Record<SkillKey, Skill>
export type Domain = { hasDomain: boolean; knacks: string }
export type Domains = Record<DomainKey, Domain>
export type SkillsAndDomainsZustand = {
    skills: Skills
    setSkills: (skills: Skills) => void

    domains: Domains
    setDomains: (domains: Domains) => void
}
export const useSkillsAndDomains = create<SkillsAndDomainsZustand>()(
    persist(
        (set) => ({
            skills: {
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
            },
            setSkills: (skills: Skills) => set(() => ({ skills: skills })),

            domains: {
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
            },
            setDomains: (domains: Domains) => set(() => ({ domains: domains })),
        }),
        { name: "skillsAndDomains" }
    )
)

export const protectionMaximum = 5
export type ProtectionsZustand = {
    protections: Record<Resistance, number>
    setProtections: (protections: Record<Resistance, number>) => void
}
export const useProtections = create<ProtectionsZustand>()(
    persist(
        (set) => ({
            protections: {
                blood: 0,
                mind: 0,
                echo: 0,
                fortune: 0,
                supplies: 0,
            },
            setProtections: (protections: Record<Resistance, number>) => set(() => ({ protections })),
        }),
        {
            name: "protections",
        }
    )
)

export type StressZustand = {
    stress: Record<Resistance, number>
    setStress: (stress: Record<Resistance, number>) => void
}
export const useStress = create<StressZustand>()(
    persist(
        (set) => ({
            stress: {
                blood: 0,
                mind: 0,
                echo: 0,
                fortune: 0,
                supplies: 0,
            },
            setStress: (stress: Record<Resistance, number>) => set(() => ({ stress })),
        }),
        {
            name: "stress",
        }
    )
)

export const useCharacter = () => {
    const { name, setName } = useName()
    const { characterClass, setCharacterClass } = useCharacterClass()
    const { calling, setCalling } = useCalling()
    const { activeBeats, setActiveBeats } = useActiveBeats()
    const { equipment, setEquipment } = useEquipment()
    const { resources, setResources } = useResources()
    const { abilities, setAbilities } = useAbilities()
    const { fallout, setFallout } = useFallout()
    const { skills, setSkills, domains, setDomains } = useSkillsAndDomains()
    const { protections, setProtections } = useProtections()
    const { stress, setStress } = useStress()

    const character: Character = {
        name,
        characterClass,
        calling,
        activeBeats,
        equipment,
        resources,
        abilities,
        fallout,
        skills,
        domains,
        protections,
        stress,
    }

    const setCharacter = (character: Character) => {
        setName(character.name)
        setCharacterClass(character.characterClass)
        setCalling(character.calling)
        setActiveBeats(character.activeBeats)
        setEquipment(character.equipment)
        setResources(character.resources)
        setAbilities(character.abilities)
        setFallout(character.fallout)
        setSkills(character.skills)
        setDomains(character.domains)
        setProtections(character.protections)
        setStress(character.stress)
    }

    return { character, setCharacter }
}
