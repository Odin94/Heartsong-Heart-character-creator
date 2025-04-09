import { Calling } from "./callings"
import { Character } from "./character"
import { Class } from "./classes"
import { Domain } from "./domains"

export type Ability = {
    name: string
    description: string
    type: "major" | "minor" | "zenith"
    parentName?: string
    staticBonuses: (character: Character) => Character
}

export const abilitiesByClassOrRecord: Record<Class | Calling, Ability[]> = {
    // Classes
    Cleaver: [],
    Deadwalker: [],
    "Deep Apiarist": [],
    Heretic: [],
    Hound: [],
    Incarnadine: [],
    "Junk Mage": [],
    "Vermissian Knight": [],
    Witch: [],

    // Callings
    Adventure: [],
    Enlightenment: [],
    Forced: [],
    Heartsong: [],
    Penitent: [],
}
