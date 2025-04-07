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
                <h2 className="font-bold">SKILLS</h2>
                <h2 className="font-bold">KNACKS</h2>
                <h2 className="font-bold">DOMAINS</h2>
                <h2 className="font-bold">KNACKS</h2>
            </div>
            <div className={`text-black grid grid-cols-4 gap-1 grid-rows-${rowCount} size-full`}>
                {/* TODOdin: Fix order by
                {Array.from({ length: rowCount }).map((_, i) => {
                then alternatingly render skill+knack & domain+knack

*/}

                {skills.map((skill) => (
                    <Fragment key={skill}>
                        <div className="flex items-center font-bold text-left">{skill.toUpperCase()}</div>
                        <div className="flex items-center">
                            <Input />
                        </div>
                    </Fragment>
                ))}
                {domains.map((domain) => (
                    <Fragment key={domain}>
                        <div className="flex items-center font-bold text-left">{domain.toUpperCase()}</div>
                        <div className="flex items-center">
                            <Input />
                        </div>
                    </Fragment>
                ))}
            </div>
        </div>
    )
}

export default Skills
