import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Character, characterSchema, getEmptyCharacter } from "@/heartsong/game_data/character"
import { Buffer } from "buffer"
import { useState } from "react"
import { useCharacter } from "../character_states"
import { cn } from "@/lib/utils"
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export const downloadJson = async (character: Character) => {
    const blob = new Blob([JSON.stringify(character, null, 2)], { type: "application/json" })
    const link = document.createElement("a")

    link.href = window.URL.createObjectURL(blob)
    link.download = `heartsong_${character.name}.json`
    link.click()
}

export const getUploadFile = async (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = () => resolve(reader.result as string)
        reader.onerror = (error) => reject(error)
        reader.readAsDataURL(file)
    })
}

const growDownClass = "transition-all duration-200 ease-in-out hover:h-[calc(2rem+15px)]"

export const JSONDownloadButton = ({ className }: { className?: string }) => {
    const { character } = useCharacter()

    return (
        <Button className={cn("rounded-t-none", growDownClass, className)} onClick={() => downloadJson(character)}>
            Download JSON
        </Button>
    )
}

export const ResetButton = () => {
    const { setCharacter } = useCharacter()

    return (
        <Dialog>
            <DialogTrigger>
                <Button className={cn("rounded-t-none", growDownClass)}>🔥 Reset Character</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Reset Character?</DialogTitle>
                </DialogHeader>

                <div className="mt-2 flex justify-end">
                    <DialogClose asChild>
                        <Button type="button" variant="secondary" onClick={() => {}}>
                            Cancel
                        </Button>
                    </DialogClose>
                    <DialogClose asChild>
                        <Button className="ml-3" type="button" onClick={() => setCharacter(getEmptyCharacter())}>
                            Reset Character
                        </Button>
                    </DialogClose>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export const JSONUploadButton = () => {
    const [file, setFile] = useState<File>()
    const { setCharacter } = useCharacter()

    const loadCharacter = async (loadedFile: File | undefined) => {
        if (!loadedFile) return

        const fileData = await getUploadFile(loadedFile)
        const base64 = fileData.split(",")[1]
        const json = Buffer.from(base64, "base64").toString()
        const parsed = JSON.parse(json)
        console.log({ loadedCharacter: parsed })

        const character = characterSchema.safeParse(parsed)
        if (!character.success) {
            console.error("Invalid character data:", character.error)
            return
        }

        setCharacter(character.data)
    }

    return (
        <Dialog>
            <DialogTrigger>
                <Button className={cn("rounded-t-none", growDownClass)}>Load Character</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Load from JSON file</DialogTitle>
                </DialogHeader>
                <div>
                    <Input
                        id="character"
                        type="file"
                        className="text-sm w-[70%]"
                        onChange={(e) => setFile(e.target.files?.item(0) ?? undefined)}
                    />
                </div>

                <div className="mt-2 gap-3 flex justify-end">
                    <DialogClose asChild>
                        <Button type="button" variant="secondary" onClick={() => {}}>
                            Cancel
                        </Button>
                    </DialogClose>
                    <DialogClose asChild>
                        <Button onClick={() => loadCharacter(file)}>Load file</Button>
                    </DialogClose>
                </div>
            </DialogContent>
        </Dialog>
    )
}
