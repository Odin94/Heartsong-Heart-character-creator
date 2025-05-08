import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Textarea } from "@/components/ui/textarea"
import { abilitiesByClassOrRecord, Ability, StaticBonuses } from "@/heartsong/game_data/abilities"
import { CharacterClass } from "@/heartsong/game_data/classes"
import { iconByDomain } from "@/heartsong/game_data/domains"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs"
import { useState } from "react"
import { MdOutlineShield } from "react-icons/md"
import { protectionMaximum, useAbilities, useCharacterClass, useProtections, useSkillsAndDomains } from "../character_states"
import { iconBySkill } from "@/heartsong/game_data/skills"

const Abilities = () => {
    const { abilities, setAbilities } = useAbilities()
    const { characterClass } = useCharacterClass()
    // TODOdin: Add a button that opens a modal with suggestions for your class?

    // TODOdin: Add https://milkdown.dev or https://lexical.dev instead of plain Textarea to render Markdown
    return (
        <div>
            <div className="row-span-3 col-span-2 text-left mt-2">
                <Dialog>
                    <h2 className="font-bold py-2 bg-red-900 text-white pl-3">
                        ABILITIES <DialogTrigger className="absolute right-7 hover:bg-red-800">✨</DialogTrigger>
                    </h2>
                    <AbilitiesDialog characterClass={characterClass} />
                </Dialog>

                <Textarea value={abilities} onChange={(e) => setAbilities(e.target.value)} className="h-142" />
            </div>
        </div>
    )
}

const AbilitiesDialog = ({ characterClass }: { characterClass: CharacterClass | string }) => {
    const [value, setValue] = useState("minor")
    const { abilities, setAbilities } = useAbilities()

    const { hasAndKnacksBySkill, hasAndKnacksByDomain, setSkills, setDomains } = useSkillsAndDomains()
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

    const abilityOptions = abilitiesByClassOrRecord[characterClass.trim() as unknown as CharacterClass] ?? []
    const filteredAbilityOptions = abilityOptions
        .filter((ability) => ability.type === value)
        .filter((ability) => !abilities.includes(`${ability.name} - `))
    const selectedClassName = "border-b-0"

    const getIcon = ({ staticBonuses, pickFrom }: Ability) => {
        if (pickFrom?.domains) return "🗺️ "
        if (pickFrom?.skills) return "💪 "
        if (pickFrom?.skills) return "🛡️ "

        if (staticBonuses.protections.length > 0) return <MdOutlineShield />

        for (const domain of staticBonuses.domains) {
            return iconByDomain[domain]
        }
        for (const skill of staticBonuses.skills) {
            return iconBySkill[skill]
        }
    }

    const renderAbilities = () => (
        <ScrollArea className="h-170" style={{ borderColor: "red" }}>
            {filteredAbilityOptions.map((ability) => (
                <div
                    key={ability.name}
                    className={`border-1 p-2 border-t-0 cursor-pointer hover:bg-accent ${ability.parentName ? "ml-6" : ""}`}
                    onClick={() => {
                        setAbilities(`${abilities}\n\n${ability.name} - ${ability.description}`)
                        applyStaticBonuses(ability.staticBonuses)
                    }}
                >
                    <h2 className="flex items-center">
                        {getIcon(ability)}
                        <span className="ml-2">{`${ability.name}`}</span>
                    </h2>

                    <p className="text-muted-foreground text-sm">{ability.description}</p>
                </div>
            ))}
        </ScrollArea>
    )

    return (
        <DialogContent className="w-88 sm:w-112 h-200">
            <DialogHeader>
                <DialogTitle>{characterClass.toUpperCase()} ABILITIES</DialogTitle>
                {abilityOptions.length === 0 ? (
                    <p>Pick a pre-defined class to select abilities</p>
                ) : (
                    <Tabs defaultValue="minor" className="w-[300px] sm:w-[400px] p-2" value={value} onValueChange={setValue}>
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="minor" className={`border-1 ${value === "minor" ? selectedClassName : ""}`}>
                                Minor
                            </TabsTrigger>
                            <TabsTrigger value="major" className={`border-1 ${value === "major" ? selectedClassName : ""}`}>
                                Major
                            </TabsTrigger>
                            <TabsTrigger value="zenith" className={`border-1 ${value === "zenith" ? selectedClassName : ""}`}>
                                Zenith
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="minor">{renderAbilities()}</TabsContent>
                        <TabsContent value="major">{renderAbilities()}</TabsContent>
                        <TabsContent value="zenith">{renderAbilities()}</TabsContent>
                    </Tabs>
                )}
            </DialogHeader>
        </DialogContent>
    )
}

export default Abilities
