import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { textBy } from "@/heartsong/utils"
import { Fragment } from "react"

const NameClassCallingBeats = () => {
    // TODOdin: Add a button that opens a popup with class/beats suggestions (based on calling)?

    const nameClassCalling = ["name", "class", "calling"] as const
    const textByNameClassCalling = textBy(nameClassCalling)

    return (
        <div className={`grid grid-cols-[1fr_6fr] gap-1 grid-rows-${nameClassCalling.length} size-full`}>
            {nameClassCalling.map((ncc) => (
                <Fragment key={ncc}>
                    <div className="flex items-center font-bold text-left">{ncc.toUpperCase()}</div>
                    <div className="flex items-center">
                        <Input />
                    </div>
                </Fragment>
            ))}
        </div>
    )
}

export default NameClassCallingBeats
