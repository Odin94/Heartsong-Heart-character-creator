import { Textarea } from "@/components/ui/textarea"
import { useAbilities, useCharacterClass } from "../character_states"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { CharacterClass } from "@/heartsong/game_data/classes"
import { abilitiesByClassOrRecord } from "@/heartsong/game_data/abilities"

const Abilities = () => {
    const { abilities, setAbilities } = useAbilities()
    const { characterClass } = useCharacterClass()
    // TODOdin: Add a button that opens a modal with suggestions for your class?

    return (
        <div>
            <div className="row-span-3 col-span-2 text-left mt-2">
                <Dialog>
                    <h2 className="font-bold py-2 bg-red-900 text-white pl-3">
                        ABILITIES <DialogTrigger className="absolute right-7">✨</DialogTrigger>
                    </h2>
                    <AbilitiesDialog characterClass={characterClass} />
                </Dialog>

                <Textarea value={abilities} onChange={(e) => setAbilities(e.target.value)} className="h-142" />
            </div>
        </div>
    )
}

const AbilitiesDialog = ({ characterClass }: { characterClass: CharacterClass | string }) => {
    const abilities = abilitiesByClassOrRecord[characterClass as unknown as CharacterClass] ?? []
    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>{characterClass.toUpperCase()} ABILITIES</DialogTitle>
                <div>
                    {abilities.map((ability) => (
                        <div className="border-1 rounded-sm p-2 my-2">
                            <h2>
                                {ability.name} - {ability.type}
                            </h2>
                            <p>{ability.description}</p>
                        </div>
                    ))}
                </div>
            </DialogHeader>
        </DialogContent>
    )
}

export default Abilities
