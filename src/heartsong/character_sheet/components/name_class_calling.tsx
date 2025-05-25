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
import { Calling, callings, isCalling } from "@/heartsong/game_data/callings"
import { abilitiesByClassOrRecord } from "@/heartsong/game_data/abilities"
import { useApplyStaticBonuses } from "../hooks/useApplyStaticBonuses"
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

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
                    }}
                    onConfirm={() => {
                        if (isCalling(calling)) {
                            const callingAbility = abilitiesByClassOrRecord[calling as Calling][0]
                            if (!abilities.includes(`${callingAbility.name} - `)) {
                                setAbilities(`${callingAbility.name} - ${callingAbility.description}\n\n${abilities}`)
                            }
                            applyStaticBonuses(callingAbility.staticBonuses)
                        } else {
                            console.log(`Not a correct calling: '${calling}'`)
                        }
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

const CallingDropdown = ({ onSelect, onConfirm }: { onSelect: (text: Calling) => void; onConfirm: () => void }) => {
    const { calling } = useCalling()
    console.log({ calling, isCalling: isCalling(calling) })
    const callingAbility = isCalling(calling) ? abilitiesByClassOrRecord[calling][0] : null

    return (
        <Dialog>
            <DropdownMenu modal={false}>
                <DropdownMenuTrigger className="hover:bg-accent">✨</DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Calling</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {callings.map((c) => (
                        <DialogTrigger asChild>
                            <DropdownMenuItem onSelect={(_e) => onSelect(c)} key={c}>
                                {c}
                            </DropdownMenuItem>
                        </DialogTrigger>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Apply '{calling}' skills/domains/ability?</DialogTitle>
                    <div>
                        <p className="text-muted-foreground text-md my-2">
                            '{callingAbility?.name}': {callingAbility?.description}
                        </p>
                        <div className="mt-2 flex justify-end">
                            <DialogClose asChild>
                                <Button type="button" variant="secondary" onClick={onConfirm}>
                                    Cancel
                                </Button>
                            </DialogClose>
                            <DialogClose asChild>
                                <Button className="ml-3" type="button" onClick={onConfirm}>
                                    Apply
                                </Button>
                            </DialogClose>
                        </div>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default NameClassCalling
