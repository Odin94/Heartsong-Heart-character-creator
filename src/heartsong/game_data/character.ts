import { useState } from "react"
import { Calling } from "./callings"
import { CharacterClass } from "./classes"

export type Character = {
    name: string
    calling: Calling | string
}
