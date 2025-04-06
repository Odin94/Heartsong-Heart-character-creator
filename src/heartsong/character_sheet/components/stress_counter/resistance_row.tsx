import { Checkbox } from "@/components/ui/checkbox"
import { Dispatch, SetStateAction, useState } from "react"

export type ResistanceRowProps = { checked: number; setChecked: Dispatch<SetStateAction<number>> }

const ResistanceRow = () => {
    const [checked, setChecked] = useState(0)

    return (
        <div>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                <Checkbox
                    key={i}
                    className="mx-0.5 p-0"
                    checked={i <= checked}
                    onCheckedChange={() => {
                        if (checked === i) setChecked(0)
                        else setChecked(i)
                    }}
                />
            ))}
        </div>
    )
}

export default ResistanceRow
