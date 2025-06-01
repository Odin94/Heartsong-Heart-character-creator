import { StaticBonuses } from "@/heartsong/game_data/abilities"
import { protectionMaximum, useProtections, useSkillsAndDomains } from "../character_states"

export const useApplyStaticBonuses = () => {
    const { skills: existingSkills, domains: existingDomains, setSkills, setDomains } = useSkillsAndDomains()
    const { protections: zustandProtections, setProtections } = useProtections()

    const applyStaticBonuses = ({ domains, skills, protections }: StaticBonuses) => {
        for (const domain of domains) {
            existingDomains[domain].hasDomain = true
        }
        setDomains(existingDomains)

        for (const skill of skills) {
            existingSkills[skill].hasSkill = true
        }
        setSkills(existingSkills)

        for (const { resistance, amount } of protections) {
            zustandProtections[resistance] = Math.min(zustandProtections[resistance] + amount, protectionMaximum)
        }
        setProtections(zustandProtections)
    }
    return applyStaticBonuses
}
