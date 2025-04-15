import "./App.css"
import CharacterSheet from "./heartsong/character_sheet/character_sheet"

function App() {
    return (
        <div className="relative min-h-screen">
            <a href="https://odin-matthias.de/" className="absolute top-2 left-8 text-sm underline">
                /My Website/
            </a>
            <div className="container mx-auto max-w-screen-xl text-red-900">
                <CharacterSheet />
            </div>
        </div>
    )
}

export default App
