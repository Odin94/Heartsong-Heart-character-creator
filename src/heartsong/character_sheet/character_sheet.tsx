import Logo from "@/assets/logo.png"
import StressCounter from "./components/stress_counter/stress_counter"
import NameClassCallingBeats from "./components/name_class_calling_beats"
import Abilities from "./components/abilities"
import Fallout from "./components/fallout"
import Equipment from "./components/equipment"
import Resources from "./components/resources"
import Skills from "./components/skills"

const CharacterSheet = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-[180px_330px_330px_330px] gap-6 h-screen w-full p-5 border-1 rounded-sm">
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
                {/* TODOdin: maybe move Equipment over Abilities? */}
                <Abilities />
            </div>

            <div className="">
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
