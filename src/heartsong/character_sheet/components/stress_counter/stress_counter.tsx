import { numberBy } from "@/heartsong/utils"
import ProtectionsRow from "./protections_row"
import ResistanceRow from "./resistance_row"

const StressCounter = () => {
    // TODOdin: Consider color-coding your resistances
    const resistances = ["blood", "mind", "echo", "fortune", "supplies"] as const
    const numberByResistanceResistance = numberBy(resistances)
    const numberByResistanceProtection = numberBy(resistances)

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
                    <ResistanceRow n={numberByResistanceResistance[resistance].n} setN={numberByResistanceResistance[resistance].setN} />
                    <ProtectionsRow n={numberByResistanceProtection[resistance].n} setN={numberByResistanceProtection[resistance].setN} />
                </div>
            ))}
        </div>
    )
}

export default StressCounter
