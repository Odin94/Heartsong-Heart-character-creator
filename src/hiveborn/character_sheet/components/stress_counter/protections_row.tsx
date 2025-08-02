import { Checkbox } from "@/components/ui/checkbox"
import { NumberBy } from "@/hiveborn/utils"

export type ProtectionsRowProps = NumberBy<["s"]>["s"]

const ProtectionsRow = ({ n, setN }: ProtectionsRowProps) => {
    return (
        <div>
            {[1, 2, 3, 4, 5].map((i) => (
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

export default ProtectionsRow
