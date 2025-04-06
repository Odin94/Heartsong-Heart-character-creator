import { Input } from "@/components/ui/input"
import { useState } from "react"

const NameClassCalling = () => {
    const nameClassCalling = ["name", "class", "calling"]
    const textByNameClassCalling: Record<string, { checked: string; setChecked: any }> = {}
    for (const ncc of nameClassCalling) {
        const [text, setText] = useState("")
        textByNameClassCalling[ncc] = { checked: text, setChecked: setText }
    }

    return (
        <div className={`grid grid-cols-[1fr_6fr] gap-1 grid-rows-${nameClassCalling.length} size-full`}>
            {nameClassCalling.map((ncc) => (
                <>
                    <div className="flex items-center font-bold text-red-900 text-left">{ncc.toUpperCase()}</div>
                    <div className="flex items-center">
                        <Input />
                    </div>
                </>
            ))}
        </div>
    )
}

export default NameClassCalling
