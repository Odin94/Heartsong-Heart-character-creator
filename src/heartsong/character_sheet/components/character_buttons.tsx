import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Character, characterSchema, getEmptyCharacter } from "@/heartsong/game_data/character"
import { Buffer } from "buffer"
import { useState, useCallback } from "react"
import { useCharacter } from "../character_states"
import { cn } from "@/lib/utils"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { toast } from "sonner"
import { useDropzone } from "react-dropzone"
import { Upload, FileDown } from "lucide-react"
import { generateCharacterPDF } from "@/heartsong/creator/pdf_creator"

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
                    <DialogDescription></DialogDescription>
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
    const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
        accept: {
            "application/json": [".json"],
        },
        maxFiles: 1,
        onDrop: (acceptedFiles, rejectedFiles) => {
            if (rejectedFiles.length > 0) {
                return
            }
            if (acceptedFiles.length > 0) {
                setFile(acceptedFiles[0])
            }
        },
    })

    const getDropzoneClassName = () => {
        if (isDragReject) {
            return "border-red-500 bg-red-50"
        }
        if (isDragActive) {
            return "border-blue-500 bg-blue-50"
        }
        if (file) {
            return "border-green-500 bg-green-50"
        }
        return "border-gray-300 hover:border-gray-400"
    }

    const getDropzoneText = () => {
        if (isDragReject) {
            return <p className="text-center text-red-500">Only JSON files are accepted</p>
        }
        if (isDragActive) {
            return <p className="text-center">Drop the JSON file here...</p>
        }
        if (file) {
            return <p className="text-center">Selected: {file.name}</p>
        }
        return <p className="text-center">Drag & drop a JSON file here, or click to select</p>
    }

    const loadCharacter = async (loadedFile: File | undefined) => {
        if (!loadedFile) return

        const fileData = await getUploadFile(loadedFile)
        let jsonObject
        try {
            const base64 = fileData.split(",")[1]
            if (!base64) throw new Error("The file could not be read properly")
            const fileString = Buffer.from(base64, "base64").toString()
            jsonObject = JSON.parse(fileString)
        } catch (e) {
            toast.error("Invalid file format", {
                description: e instanceof Error ? e.message : "The file is not valid JSON",
                duration: 8000,
                dismissible: true,
                richColors: true,
            })
            return
        }

        console.log({ loadedCharacter: jsonObject })

        const character = characterSchema.safeParse(jsonObject)
        if (!character.success) {
            const errorSummary = character.error.errors.map((err) => `${err.path.join(".")}: ${err.message}`).join("\n")
            toast.error("Invalid character data", {
                description: errorSummary,
                duration: 8000,
                dismissible: true,
                richColors: true,
            })
            return
        }

        setCharacter(character.data)
        setFile(undefined)
        toast.success("Character loaded successfully", {
            duration: 5000,
            dismissible: true,
        })
    }

    return (
        <Dialog
            onOpenChange={(open) => {
                if (!open) setFile(undefined)
            }}
        >
            <DialogTrigger asChild>
                <Button className={cn("rounded-t-none", growDownClass)}>
                    <Upload className="mr-2 h-4 w-4" />
                    Load Character
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Load from JSON file</DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
                <div>
                    <div
                        {...getRootProps()}
                        className={`text-sm w-[70%] border-2 border-dashed rounded-md p-2 cursor-pointer transition-colors ${getDropzoneClassName()}`}
                    >
                        <input {...getInputProps()} accept=".json" />
                        {getDropzoneText()}
                    </div>
                </div>

                <div className="mt-2 gap-3 flex justify-end">
                    <DialogClose asChild>
                        <Button type="button" variant="secondary" onClick={() => setFile(undefined)}>
                            Cancel
                        </Button>
                    </DialogClose>
                    <DialogClose asChild>
                        <Button onClick={() => loadCharacter(file)} disabled={!file}>
                            Load file
                        </Button>
                    </DialogClose>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export const PDFDownloadButton = ({ className }: { className?: string }) => {
    const { character } = useCharacter()

    const handleDownload = async () => {
        try {
            const pdfBytes = await generateCharacterPDF(character.name, character.characterClass, character.calling, character.abilities)

            const blob = new Blob([pdfBytes], { type: "application/pdf" })
            const link = document.createElement("a")
            link.href = window.URL.createObjectURL(blob)
            link.download = "character_sheet.pdf"
            link.click()
        } catch (error) {
            console.log({ error })
            toast.error("Failed to generate PDF", {
                description: error instanceof Error ? error.message : "An unknown error occurred",
                duration: 5000,
                dismissible: true,
            })
        }
    }

    return (
        <Button className={cn("rounded-t-none", growDownClass, className)} onClick={handleDownload}>
            <FileDown className="mr-2 h-4 w-4" />
            Download PDF
        </Button>
    )
}
