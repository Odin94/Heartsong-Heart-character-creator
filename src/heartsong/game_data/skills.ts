import { ReactNode } from "react"
import { FaMagnifyingGlass } from "react-icons/fa6"
import { GiBowArrow, GiBrickWall, GiNinjaHeroicStance } from "react-icons/gi"
import { LuSpeech } from "react-icons/lu"
import { MdHealing } from "react-icons/md"
import { PiShovel, PiSneakerMove } from "react-icons/pi"
import { RiKnifeBloodLine } from "react-icons/ri"

export const skills = ["compel", "delve", "discern", "endure", "evade", "hunt", "kill", "mend", "sneak"] as const
export type SkillKey = (typeof skills)[number]

export const iconBySkill: Record<SkillKey, string | ReactNode> = {
    kill: RiKnifeBloodLine({}),
    hunt: GiBowArrow({}),
    mend: MdHealing({}),
    compel: LuSpeech({}),
    delve: PiShovel({}),
    discern: FaMagnifyingGlass({}),
    endure: GiBrickWall({}),
    evade: PiSneakerMove({}),
    sneak: GiNinjaHeroicStance({}),
}
