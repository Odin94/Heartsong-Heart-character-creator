import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Fragment, useState } from "react"

const NameClassCallingBeats = () => {
    // TODOdin: Add a button that opens a popup with class/beats suggestions (based on calling)?

    const nameClassCalling = ["name", "class", "calling"]
    const textByNameClassCalling: Record<string, { checked: string; setChecked: any }> = {}
    for (const ncc of nameClassCalling) {
        const [text, setText] = useState("")
        textByNameClassCalling[ncc] = { checked: text, setChecked: setText }
    }

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
            <div className="row-span-3 col-span-2 text-left mt-2">
                <h2 className="font-bold py-2 bg-red-900 text-white pl-3">ACTIVE BEATS</h2>
                <Textarea className="h-40" />
            </div>
        </div>
    )
}

export default NameClassCallingBeats
