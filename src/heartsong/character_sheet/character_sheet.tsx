import Logo from "@/assets/logo.png"
import StressCounter from "./components/stress_counter/stress_counter"
import NameClassCallingBeats from "./components/name_class_calling_beats"
import Abilities from "./components/abilities"
import Fallout from "./components/fallout"
import Equipment from "./components/equipment"
import Resources from "./components/resources"
import Skills from "./components/skills"
import ActiveBeats from "./components/active_beats"

const CharacterSheet = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-[170px_90px_500px_330px] gap-6 w-full p-5 border-1 rounded-sm">
            <div className="">
                <img src={Logo} alt="Decorative" className="w-full object-contain" />
            </div>

            <div className="">
                <StressCounter />
            </div>
            <div className="">
                <NameClassCallingBeats />
            </div>
            <div className="row-span-2">
                <Abilities />
            </div>

            <div className="">
                {/* If you need more space for these, consider switching places of skills & fallout*/}
                {/* TODOdin: Add a button to open a big modal with the text-area from these in case you have an overflow, because scrolling is not fun */}
                <ActiveBeats />
                <Equipment />
                <Resources />
            </div>
            <div className="">
                <Skills />
            </div>
            <div className="">
                <Fallout />
            </div>
        </div>
    )
}

export default CharacterSheet
