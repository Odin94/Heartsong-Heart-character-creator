import { useState } from "react"
import { Calling } from "./callings"
import { CharacterClass } from "./classes"

export type Character = {
    name: string
    calling: Calling | string
}

export const getSettableCharacter = () => {
    const [name, setName] = useState("")
    const [characterClass, setCharacterClass] = useState<CharacterClass | string>("")
    const [calling, setCalling] = useState<Calling | string>("")

    return {
        name,
        setName,
        characterClass,
        setCharacterClass,
        calling,
        setCalling,
    }
}

export type SettableCharacter = ReturnType<typeof getSettableCharacter>
