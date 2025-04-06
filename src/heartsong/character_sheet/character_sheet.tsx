import Logo from "@/assets/logo.png"
import StressCounter from "./components/stress_counter/stress_counter"
import NameClassCalling from "./components/name_class_calling"

const CharacterSheet = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-4 gap-4 h-screen w-full p-4">
            <div className="h-auto">
                <img src={Logo} alt="Decorative" className="w-full object-contain" />
            </div>

            <div className="">
                <StressCounter />
            </div>
            <div className="">
                <NameClassCalling />
            </div>
            <div className="bg-blue-400">1D</div>

            <div className="bg-green-300 row-span-1">2A</div>
            <div className="bg-green-500 row-span-3">2B (Tall)</div>
        </div>
    )
}

export default CharacterSheet
