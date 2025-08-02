import { Textarea } from "@/components/ui/textarea"
import { useFallout } from "../character_states"

const Fallout = () => {
    const { fallout, setFallout } = useFallout()
    return (
        <div>
            <div className="row-span-3 col-span-2 text-left mt-2">
                <h2 className="font-bold py-2 bg-red-900 text-white pl-3">FALLOUT</h2>
                <Textarea value={fallout} onChange={(e) => setFallout(e.target.value)} className="h-70" />
            </div>
        </div>
    )
}

export default Fallout
