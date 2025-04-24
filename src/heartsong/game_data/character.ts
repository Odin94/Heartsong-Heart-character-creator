import { Calling } from "./callings"
import { Domain } from "./domains"
import { Resistance } from "./resistances"
import { Skill } from "./skills"

export type Character = {
    name: string
    calling: Calling | string
    domains: Set<Domain>
    skills: Set<Skill>
    equipment: string
    protections: Record<Resistance, number>
}
