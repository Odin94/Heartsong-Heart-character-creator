import "./App.css"
import CharacterSheet from "./heartsong/character_sheet/character_sheet"
import { getSettableCharacter } from "./heartsong/game_data/character"

function App() {
    const settableCharacter = getSettableCharacter()

    return (
        <>
            <div className="container mx-auto max-w-screen-xl text-red-900">
                <CharacterSheet settableCharacter={settableCharacter} />
            </div>
        </>
    )
}

export default App
