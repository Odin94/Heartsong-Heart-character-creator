import { Checkbox } from "@/components/ui/checkbox"
import { NumberBy } from "@/hiveborn/utils"

export type ResistanceRowProps = NumberBy<["s"]>["s"]

const ResistanceRow = ({ n, setN }: ResistanceRowProps) => {
    return (
        <div>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                <Checkbox
                    key={i}
                    className="mx-0.5 p-0"
                    checked={i <= n}
                    onCheckedChange={() => {
                        if (n === i) setN(0)
                        else setN(i)
                    }}
                />
            ))}
        </div>
    )
}

export default ResistanceRow
