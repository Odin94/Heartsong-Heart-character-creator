import { Textarea } from "@/components/ui/textarea"
import { useAbilities } from "../character_states"

const Abilities = () => {
    const { abilities, setAbilities } = useAbilities()
    // TODOdin: Add a button that opens a modal with suggestions for your class?

    return (
        <div>
            <div className="row-span-3 col-span-2 text-left mt-2">
                <h2 className="font-bold py-2 bg-red-900 text-white pl-3">ABILITIES</h2>
                <Textarea value={abilities} onChange={(e) => setAbilities(e.target.value)} className="h-142" />
            </div>
        </div>
    )
}

export default Abilities
