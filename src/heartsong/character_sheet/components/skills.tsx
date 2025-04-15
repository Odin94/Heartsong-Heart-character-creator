import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Fragment } from "react/jsx-runtime"
import { useSkillsAndDomains } from "../character_states"
import { skills } from "@/heartsong/game_data/skills"
import { domains } from "@/heartsong/game_data/domains"

const Skills = () => {
    // TODOdin: Fix the naming on the hasAnd.. things
    const { hasAndKnacksBySkill, hasAndKnacksByDomain, setSkills, setDomains } = useSkillsAndDomains()

    const rowCount = Math.max(skills.length, domains.length)

    const gridClass = "grid grid-cols-4 gap-2 text-left"
    return (
        <div className="space-y-2">
            <div className={gridClass}>
                <h2 className="text-lg font-bold">SKILLS</h2>
                <h2 className="text-lg font-bold text-red-900/60 ml-4">KNACKS</h2>
                <h2 className="text-lg font-bold">DOMAINS</h2>
                <h2 className="text-lg font-bold text-red-900/60 ml-4">KNACKS</h2>
            </div>
            <div className={`text-black grid grid-cols-4 gap-1 gap-y-0 grid-rows-${rowCount} size-full`}>
                {Array.from({ length: rowCount }).map((_, i) => {
                    const skill = skills[i]
                    const { hasSkill, knacks: skillKnacks } = hasAndKnacksBySkill[skill]
                    const domain = domains[i]
                    const { hasDomain, knacks: domainKnacks } = hasAndKnacksByDomain[domain]

                    const colClass = "flex items-center h-8"

                    return (
                        <Fragment key={skill + domain}>
                            {/* Skill + Knack */}
                            {skill ? (
                                <>
                                    <div className={`font-bold text-md text-left ${colClass}`}>
                                        <Checkbox className="mr-3" />
                                        {skill.toUpperCase()}
                                    </div>
                                    <div className={`ml-4 ${colClass}`}>
                                        <Input
                                            className="w-28 text-sm h-8"
                                            value={skillKnacks}
                                            onChange={(e) => {
                                                // TODOdin: This causes error `input.tsx:7 A component is changing a controlled input to be uncontrolled.`
                                                const newKnack = e.target.value
                                                setSkills({ ...hasAndKnacksBySkill, [skill]: { hasSkill, knack: newKnack } })
                                            }}
                                        />
                                    </div>
                                </>
                            ) : (
                                <div />
                            )}

                            {/* Domain + Knack */}
                            {domain ? (
                                <>
                                    <div className={`font-bold text-md text-left ${colClass}`}>
                                        <Checkbox className="mr-3" />
                                        {domain.toUpperCase()}
                                    </div>
                                    <div className={`ml-4 ${colClass}`}>
                                        <Input
                                            className="w-28 text-sm h-8"
                                            value={domainKnacks}
                                            onChange={(e) => {
                                                // TODOdin: This causes error `input.tsx A component is changing a controlled input to be uncontrolled.`
                                                const newKnack = e.target.value
                                                setDomains({ ...hasAndKnacksByDomain, [domain]: { hasDomain, knack: newKnack } })
                                            }}
                                        />
                                    </div>
                                </>
                            ) : (
                                <div />
                            )}
                        </Fragment>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills
