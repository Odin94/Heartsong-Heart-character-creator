import { resistances } from "@/hiveborn/game_data/resistances"
import { useCharacterStore } from "../../character_states"
import ProtectionsRow from "./protections_row"
import ResistanceRow from "./resistance_row"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

const StressCounter = () => {
    // TODOdin: Consider color-coding your resistances
    const stress = useCharacterStore.use.stress()
    const setStress = useCharacterStore.use.setStress()
    const protections = useCharacterStore.use.protections()
    const setProtections = useCharacterStore.use.setProtections()

    const gridClass = "grid grid-cols-[1fr_2fr_1fr] gap-2 text-left"
    return (
        <div className="space-y-2">
            <div className={gridClass}>
                <div></div>
                <div></div>
                <div className="font-bold">PROTECTIONS</div>
            </div>

            {resistances.map((resistance) => (
                <div key={resistance} className={gridClass}>
                    <Tooltip>
                        <TooltipTrigger>
                            <div className="font-bold">{resistance.toUpperCase()}</div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{`${resistance.toUpperCase()}: ${stress[resistance]}`}</p>
                        </TooltipContent>
                    </Tooltip>

                    <ResistanceRow n={stress[resistance]} setN={(n) => setStress({ ...stress, [resistance]: n })} />
                    <ProtectionsRow n={protections[resistance]} setN={(n) => setProtections({ ...protections, [resistance]: n })} />
                </div>
            ))}
        </div>
    )
}

export default StressCounter
