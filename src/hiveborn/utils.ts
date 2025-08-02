import { Dispatch, SetStateAction, useState } from "react"

export type TextBy<T extends readonly string[]> = {
    [K in T[number]]: {
        text: string
        setText: Dispatch<SetStateAction<string>>
    }
}

export const textBy = <T extends readonly string[]>(strs: T): TextBy<T> => {
    const textByStrs = {} as TextBy<T>
    for (const s of strs) {
        const [text, setText] = useState("")
        textByStrs[s as T[number]] = { text, setText }
    }

    return textByStrs
}

export type CheckedBy<T extends readonly string[]> = {
    [K in T[number]]: {
        checked: boolean
        setChecked: Dispatch<SetStateAction<boolean>>
    }
}

export const checkedBy = <T extends readonly string[]>(strs: T): CheckedBy<T> => {
    const checkedByStrs = {} as CheckedBy<T>
    for (const s of strs) {
        const [checked, setChecked] = useState(false)
        checkedByStrs[s as T[number]] = { checked, setChecked }
    }

    return checkedByStrs
}

export type NumberBy<T extends readonly string[]> = {
    [K in T[number]]: {
        n: number
        setN: Dispatch<SetStateAction<number>>
    }
}

export const numberBy = <T extends readonly string[]>(strs: T): NumberBy<T> => {
    const numberByStrs = {} as NumberBy<T>
    for (const s of strs) {
        const [n, setN] = useState(0)
        numberByStrs[s as T[number]] = { n, setN }
    }

    return numberByStrs
}
