export const callings = ["Adventure", "Enlightenment", "Forced", "Heartsong", "Penitent"] as const
export type Calling = (typeof callings)[number]

export const isCalling = (key: string): key is Calling => {
    return callings.includes(key as Calling)
}
