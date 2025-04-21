import { resistances } from "@/heartsong/game_data/resistances"
import { useProtections, useStress } from "../../character_states"
import ProtectionsRow from "./protections_row"
import ResistanceRow from "./resistance_row"

const StressCounter = () => {
    // TODOdin: Consider color-coding your resistances
    const { stress, setStress } = useStress()
    const { protections, setProtections } = useProtections()

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
                    <div className="font-bold">{resistance.toUpperCase()}</div>
                    <ResistanceRow n={stress[resistance]} setN={(n) => setStress({ ...stress, [resistance]: n })} />
                    <ProtectionsRow n={protections[resistance]} setN={(n) => setProtections({ ...protections, [resistance]: n })} />
                </div>
            ))}
        </div>
    )
}

export default StressCounter
