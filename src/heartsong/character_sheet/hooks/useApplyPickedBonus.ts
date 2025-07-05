import { Ability, PickFromOption } from "@/heartsong/game_data/abilities"
import { isDomain } from "@/heartsong/game_data/domains"
import { isResistance } from "@/heartsong/game_data/resistances"
import { isSkill } from "@/heartsong/game_data/skills"
import { protectionMaximum, useAbilities, useProtections, useSkillsAndDomains } from "../character_states"

export const useApplyPickedBonus = () => {
    const { skills: existingSkills, domains: existingDomains, setSkills, setDomains } = useSkillsAndDomains()
    const { protections: zustandProtections, setProtections } = useProtections()
    const { abilities, setAbilities } = useAbilities()

    const applyPickedBonus = (selection: PickFromOption, pickingFromAbility: Ability) => {
        if (isSkill(selection)) {
            existingSkills[selection].hasSkill = true
            setSkills(existingSkills)
        } else if (isDomain(selection)) {
            existingDomains[selection].hasDomain = true
            setDomains(existingDomains)
        } else if (isResistance(selection)) {
            zustandProtections[selection] = Math.min(zustandProtections[selection] + 1, protectionMaximum)
            setProtections(zustandProtections)
        }

        const updatedAbilities = abilities.replace(pickingFromAbility.description, `${pickingFromAbility.description} (Picked ${selection})`)
        setAbilities(updatedAbilities)
    }
    return applyPickedBonus
}
