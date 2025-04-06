import { Checkbox } from "@/components/ui/checkbox"
import { Dispatch, SetStateAction, useState } from "react"

export type ProtectionsRowProps = { checked: number; setChecked: Dispatch<SetStateAction<number>> }

const ProtectionsRow = () => {
    const [checked, setChecked] = useState(0)

    return (
        <div>
            {[1, 2, 3, 4, 5].map((i) => (
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

export default ProtectionsRow
