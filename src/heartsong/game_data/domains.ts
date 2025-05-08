import { FaRegMoon, FaTree } from "react-icons/fa6"
import { GiCursedStar, GiDesert } from "react-icons/gi"
import { GoGear } from "react-icons/go"
import { LuRat } from "react-icons/lu"
import { PiHouseLineLight } from "react-icons/pi"
import { TbCrystalBall } from "react-icons/tb"

import { ReactNode } from "react"

export const domains = ["cursed", "desolate", "haven", "occult", "religion", "technology", "warren", "wild"] as const
export type Domain = (typeof domains)[number]

export const iconByDomain: Record<Domain, ReactNode> = {
    cursed: GiCursedStar({}),
    desolate: GiDesert({}),
    haven: PiHouseLineLight({}),
    occult: TbCrystalBall({}),
    religion: FaRegMoon({}),
    technology: GoGear({}),
    warren: LuRat({}),
    wild: FaTree({}),
}
