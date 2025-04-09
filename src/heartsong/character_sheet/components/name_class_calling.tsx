import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { SettableCharacter } from "@/heartsong/game_data/character"
import { characterClasses } from "@/heartsong/game_data/classes"

export type NameClassCallingProps = Pick<
    SettableCharacter,
    "name" | "setName" | "characterClass" | "setCharacterClass" | "calling" | "setCalling"
>

const NameClassCalling = ({ name, setName, characterClass, setCharacterClass, calling, setCalling }: NameClassCallingProps) => {
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
                    onSelect={(text: string) => {
                        setCharacterClass(text)
                    }}
                />
            </div>

            {/* Calling */}
            <div className="flex items-center font-bold text-left">Calling</div>
            <div className="flex items-center">
                <Input value={calling} onChange={(e) => setCalling(e.target.value)} style={{ width: "90%" }} />
                <button>✨</button>
            </div>
        </div>
    )
}

const ClassDropdown = ({ onSelect }: { onSelect: (text: string) => void }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>✨</DropdownMenuTrigger>
            <DropdownMenuContent>
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

export default NameClassCalling
