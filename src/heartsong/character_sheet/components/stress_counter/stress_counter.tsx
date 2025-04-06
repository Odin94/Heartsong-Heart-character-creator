import { useState } from "react"
import ResistanceRow, { ResistanceRowProps } from "./resistance_row"
import ProtectionsRow from "./protections_row"

const StressCounter = () => {
    const resistances = ["blood", "mind", "echo", "fortune", "supplies"]
    const statusByResistance: Record<string, ResistanceRowProps> = {}
    for (const r of resistances) {
        const [checked, setChecked] = useState(0)
        statusByResistance[r] = { checked, setChecked }
    }

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
                    <ResistanceRow />
                    <ProtectionsRow />
                </div>
            ))}
        </div>
    )
}

export default StressCounter
