import { create } from "zustand"
import { Skill } from "../game_data/skills"
import { Resistances } from "../game_data/resistances"
import { Domain } from "../game_data/domains"
import { persist, createJSONStorage } from "zustand/middleware"

// export const useBearStore = create<BearStore>()(
//     persist(
//       (set, get) => ({
//         bears: 0,
//         addABear: () => set({ bears: get().bears + 1 }),
//       }),
//       {
//         name: 'food-storage', // name of the item in the storage (must be unique)
//         storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
//       },
//     ),
//   )

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

export type ZustandSkills = Record<Skill, { hasSkill: boolean; knacks: string }>
export type ZustandDomains = Record<Domain, { hasDomain: boolean; knacks: string }>
export type SkillsAndDomainsZustand = {
    // TODOdin: Find a good name for hasAndKnacksBySkill
    hasAndKnacksBySkill: ZustandSkills
    setSkills: (skills: ZustandSkills) => void

    hasAndKnacksByDomain: ZustandDomains
    setDomains: (domains: ZustandDomains) => void
}
export const useSkillsAndDomains = create<SkillsAndDomainsZustand>()(
    persist(
        (set) => ({
            hasAndKnacksBySkill: {
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
            setSkills: (skills: ZustandSkills) => set(() => ({ hasAndKnacksBySkill: skills })),

            hasAndKnacksByDomain: {
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
            setDomains: (domains: ZustandDomains) => set(() => ({ hasAndKnacksByDomain: domains })),
        }),
        { name: "skillsAndDomains" }
    )
)

export type ProtectionsZustand = {
    protections: Record<Resistances, number>
    setProtections: (protections: Record<Resistances, number>) => void
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
            setProtections: (protections: Record<Resistances, number>) => set(() => ({ protections })),
        }),
        {
            name: "protections",
        }
    )
)

export type StressZustand = {
    stress: Record<Resistances, number>
    setStress: (stress: Record<Resistances, number>) => void
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
            setStress: (stress: Record<Resistances, number>) => set(() => ({ stress })),
        }),
        {
            name: "stress",
        }
    )
)
