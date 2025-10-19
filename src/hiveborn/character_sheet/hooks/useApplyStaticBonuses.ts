import { StaticBonuses } from "@/hiveborn/game_data/abilities"
import { protectionMaximum, useCharacterStore } from "../character_states"

export const useApplyStaticBonuses = () => {
    const existingSkills = useCharacterStore.use.skills()
    const setSkills = useCharacterStore.use.setSkills()
    const existingDomains = useCharacterStore.use.domains()
    const setDomains = useCharacterStore.use.setDomains()
    const zustandProtections = useCharacterStore.use.protections()
    const setProtections = useCharacterStore.use.setProtections()

    const applyStaticBonuses = ({ domains, skills, protections }: StaticBonuses) => {
        for (const domain of domains) {
            existingDomains[domain].hasDomain = true
        }
        setDomains({ ...existingDomains })

        for (const skill of skills) {
            existingSkills[skill].hasSkill = true
        }
        setSkills({ ...existingSkills })

        for (const { resistance, amount } of protections) {
            zustandProtections[resistance] = Math.min(zustandProtections[resistance] + amount, protectionMaximum)
        }
        setProtections({ ...zustandProtections })
    }
    return applyStaticBonuses
}
