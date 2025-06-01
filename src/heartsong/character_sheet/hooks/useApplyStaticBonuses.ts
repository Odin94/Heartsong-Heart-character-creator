import { StaticBonuses } from "@/heartsong/game_data/abilities"
import { protectionMaximum, useProtections, useSkillsAndDomains } from "../character_states"

export const useApplyStaticBonuses = () => {
    const { skills: hasAndKnacksBySkill, domains: hasAndKnacksByDomain, setSkills, setDomains } = useSkillsAndDomains()
    const { protections: zustandProtections, setProtections } = useProtections()

    const applyStaticBonuses = ({ domains, skills, protections }: StaticBonuses) => {
        for (const domain of domains) {
            hasAndKnacksByDomain[domain].hasDomain = true
        }
        setDomains(hasAndKnacksByDomain)

        for (const skill of skills) {
            hasAndKnacksBySkill[skill].hasSkill = true
        }
        setSkills(hasAndKnacksBySkill)

        for (const { resistance, amount } of protections) {
            zustandProtections[resistance] = Math.min(zustandProtections[resistance] + amount, protectionMaximum)
        }
        setProtections(zustandProtections)
    }
    return applyStaticBonuses
}
