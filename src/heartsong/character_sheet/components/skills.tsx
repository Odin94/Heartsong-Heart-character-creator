import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { textBy } from "@/heartsong/utils"
import { Fragment } from "react/jsx-runtime"

const Skills = () => {
    const skills = ["compel", "delve", "discern", "endure", "evade", "hunt", "kill", "mend", "sneak"] as const
    const knacksBySkills = textBy(skills)

    const domains = ["cursed", "desolate", "haven", "occult", "religion", "technology", "warren", "wild"] as const
    const knacksByDomain = textBy(domains)

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
                    const domain = domains[i]

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
                                        <Input className="w-28 text-sm h-8" />
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
                                        <Input className="w-28 text-sm h-8" />
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
