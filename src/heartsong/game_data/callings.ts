export const callings = ["Adventure", "Enlightenment", "Forced", "Heartsong", "Penitent"] as const
export type Calling = (typeof callings)[number]
