import "./App.css"
import CharacterSheet from "./heartsong/character_sheet/character_sheet"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
    JSONDownloadButton,
    JSONUploadButton,
    PDFDownloadButton,
    ResetButton,
} from "./heartsong/character_sheet/components/character_buttons"
import { Toaster } from "@/components/ui/sonner"

function App() {
    return (
        <div className="relative min-h-screen">
            <Toaster closeButton />
            <Dialog>
                <a href="https://odin-matthias.de/" target="_blank" className="absolute top-2 left-8 text-sm underline">
                    /Odin's Site/
                </a>
                <a
                    href="https://github.com/Odin94/Heartsong-Heart-character-creator"
                    target="_blank"
                    className="absolute top-2 left-31 text-sm underline"
                >
                    /Source Code/
                </a>
                <a
                    href="https://rowanrookanddecard.com/product-category/game-systems/resistance/heart/"
                    target="_blank"
                    className="absolute top-2 left-57 text-sm underline"
                >
                    /Heart/
                </a>

                <DialogTrigger className="link-like absolute top-2 left-72 text-sm underline">/Copyright/</DialogTrigger>
                <div className="container mx-auto max-w-screen-xl text-red-900">
                    <CharacterSheet />
                </div>

                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Copyright notice</DialogTitle>
                        <DialogDescription className="text-muted-foreground text-sm">
                            <p>
                                <em>Heartsong</em> is an independent production by <em>Odin</em> and is not affiliated with Rowan, Rook and
                                Decard. It is published under the RR&D Community License. Heart is copyright Rowan, Rook and Decard.
                            </p>
                            <p className="mt-5">
                                You can find out more and support these games at{" "}
                                <a href="https://rowanrookanddecard.com" target="_blank">
                                    rowanrookanddecard.com
                                </a>
                            </p>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

            <div className={"h-10 items-start absolute left-0 flex gap-8 ml-4"}>
                <PDFDownloadButton />
                <JSONDownloadButton />
                <JSONUploadButton />
                <ResetButton />

                {/* TODOdin: Add a button that opens a history pane that keeps character-states from the past (in case you accidentally overwrite) */}
            </div>
        </div>
    )
}

export default App
