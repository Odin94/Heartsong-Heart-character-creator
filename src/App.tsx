import "./App.css"
import CharacterSheet from "./heartsong/character_sheet/character_sheet"

function App() {
    return (
        <div className="relative min-h-screen">
            <a href="https://odin-matthias.de/" className="absolute top-2 left-8 text-sm underline">
                /Odin's Site/
            </a>
            <a href="https://github.com/Odin94/Heartsong-Heart-character-creator" className="absolute top-2 left-32 text-sm underline">
                /Source Code/
            </a>
            <a
                href="https://rowanrookanddecard.com/product-category/game-systems/resistance/heart/"
                className="absolute top-2 left-58 text-sm underline"
            >
                /Heart/
            </a>
            <div className="container mx-auto max-w-screen-xl text-red-900">
                <CharacterSheet />
            </div>
        </div>
    )
}

export default App
