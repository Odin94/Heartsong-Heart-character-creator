import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { CharacterClass, characterClasses } from "@/heartsong/game_data/classes"
import { useAbilities, useCalling, useCharacterClass, useName } from "../character_states"
import { Calling, callings } from "@/heartsong/game_data/callings"
import { abilitiesByClassOrRecord } from "@/heartsong/game_data/abilities"
import { useApplyStaticBonuses } from "../hooks/useApplyStaticBonuses"

const NameClassCalling = () => {
    const { name, setName } = useName()
    // TODOdin: When selecting a class, ask for confirmation and then apply CORE TRAITS & ABILITIES
    const { characterClass, setCharacterClass } = useCharacterClass()
    const { abilities, setAbilities } = useAbilities()
    const { calling, setCalling } = useCalling()
    const applyStaticBonuses = useApplyStaticBonuses()

    return (
        <div className="grid grid-cols-[1fr_6fr] gap-1 grid-rows-3 size-full">
            {/* Name */}
            <div className="flex items-center font-bold text-left">Name</div>
            <div className="flex items-center">
                <Input value={name} onChange={(e) => setName(e.target.value)} style={{ width: "90%" }} />
            </div>

            {/* Class */}
            <div className="flex items-center font-bold text-left">Class</div>
            <div className="flex items-center">
                <Input value={characterClass} onChange={(e) => setCharacterClass(e.target.value)} style={{ width: "90%" }} />
                <ClassDropdown
                    onSelect={(characterClass: CharacterClass) => {
                        setCharacterClass(characterClass)
                    }}
                />
            </div>

            {/* Calling */}
            <div className="flex items-center font-bold text-left">Calling</div>
            <div className="flex items-center">
                <Input value={calling} onChange={(e) => setCalling(e.target.value)} style={{ width: "90%" }} />
                <CallingDropdown
                    onSelect={(calling: Calling) => {
                        setCalling(calling)

                        // TODOdin: Popup asking confirmation before applying bonuses
                        const callingAbility = abilitiesByClassOrRecord[calling][0]
                        if (!abilities.includes(`${callingAbility.name} - `)) {
                            setAbilities(`${callingAbility.name} - ${callingAbility.description}\n\n${abilities}`)
                        }
                        applyStaticBonuses(callingAbility.staticBonuses)
                    }}
                />
            </div>
        </div>
    )
}

const ClassDropdown = ({ onSelect }: { onSelect: (text: CharacterClass) => void }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="hover:bg-accent">✨</DropdownMenuTrigger>
            <DropdownMenuContent>
                {/* TODOdin: Add icons for what classes are good at? Eg. sword for fighting, shovel for delving..? */}
                <DropdownMenuLabel>Class</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {characterClasses.map((c) => (
                    <DropdownMenuItem onSelect={(_e) => onSelect(c)} key={c}>
                        {c}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

const CallingDropdown = ({ onSelect }: { onSelect: (text: Calling) => void }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="hover:bg-accent">✨</DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Calling</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {callings.map((c) => (
                    // TODOdin: apply ability and static bonuses
                    <DropdownMenuItem onSelect={(_e) => onSelect(c)} key={c}>
                        {c}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default NameClassCalling
