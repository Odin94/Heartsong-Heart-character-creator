import { Textarea } from "@/components/ui/textarea"
import { useActiveBeats } from "../character_states"

const ActiveBeats = () => {
    const { activeBeats, setActiveBeats } = useActiveBeats()

    // TODOdin: Make beats line-by-line with a checkbox and store completed beats in a history somewhere
    // TODOdin: Add MAJOR/MINOR badge to beats
    return (
        <div className="row-span-3 col-span-2 text-left mt-5">
            <h2 className="font-bold py-2 bg-red-900 text-white pl-3">ACTIVE BEATS</h2>
            <Textarea value={activeBeats} onChange={(e) => setActiveBeats(e.target.value)} className="h-25" />
        </div>
    )
}

export default ActiveBeats
