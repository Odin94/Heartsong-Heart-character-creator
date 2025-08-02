import { Textarea } from "@/components/ui/textarea"
import { useEquipment } from "../character_states"

const Equipment = () => {
    const { equipment, setEquipment } = useEquipment()
    return (
        <div>
            <div className="row-span-3 col-span-2 text-left mt-2">
                <h2 className="font-bold py-2 bg-red-900 text-white pl-3">EQUIPMENT</h2>
                <Textarea value={equipment} onChange={(e) => setEquipment(e.target.value)} className="h-30" />
            </div>
        </div>
    )
}

export default Equipment
