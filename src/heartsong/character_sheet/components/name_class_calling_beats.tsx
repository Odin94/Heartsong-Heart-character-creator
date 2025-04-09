import { Input } from "@/components/ui/input"
import { textBy } from "@/heartsong/utils"
import { Fragment, useState } from "react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { classes } from "@/heartsong/game_data/classes"

const NameClassCallingBeats = () => {
    // TODOdin: Add a button that opens a popup with class/beats suggestions (based on calling)?

    const nameClassCalling = ["name", "class", "calling"] as const
    const textByNameClassCalling = textBy(nameClassCalling)

    const [name, setName] = useState("")

    return (
        <div className={`grid grid-cols-[1fr_6fr] gap-1 grid-rows-${nameClassCalling.length} size-full`}>
            {nameClassCalling.map((ncc) => (
                <Fragment key={ncc}>
                    <div className="flex items-center font-bold text-left">{ncc.toUpperCase()}</div>
                    <div className="flex items-center">
                        <Input value={name} onChange={(e) => setName(e.target.value)} style={{ width: "90%" }} />
                        {ncc === "class" ? (
                            <ClassDropdown
                                onSelect={(text: string) => {
                                    setName(text)
                                }}
                            />
                        ) : null}
                        {ncc === "calling" ? <button>✨</button> : null}
                    </div>
                </Fragment>
            ))}
        </div>
    )
}

const ClassDropdown = ({ onSelect }: { onSelect: (text: string) => void }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>✨</DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Class</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {classes.map((c) => (
                    <DropdownMenuItem onSelect={(_e) => onSelect(c)} key={c}>
                        {c}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default NameClassCallingBeats
