export const skills = ["compel", "delve", "discern", "endure", "evade", "hunt", "kill", "mend", "sneak"] as const
export type Skill = (typeof skills)[number]
