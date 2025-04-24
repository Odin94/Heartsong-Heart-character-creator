import { Ability } from "../abilities"
import { addDomain, addProtection, addSkill } from "./ability_utils"

// TODOdin: How to represent "pick any domain" abilities like "DOMINION"?
// TODOdin: Create an ability-pick modal with tabs for minor, major, zenith
export const cleaverAbilities: Ability[] = [
    {
        name: "Call of the Wild",
        description: "Gain 'Wild' domain, summon horde of beasts once per session.",
        type: "minor",
        staticBonuses: [addDomain("wild")],
    },
    {
        name: "Darkling Eyes",
        description: "Gain 'Delve' skill, see in darkness.",
        type: "minor",
        staticBonuses: [addSkill("delve")],
    },
    {
        name: "Vessel",
        description: "Gain +2 'Echo' protection.",
        type: "minor",
        staticBonuses: [addProtection("echo", 2)],
    },
    // ...
    // Major
    {
        name: "Bloodbound Beast",
        description: "Gain 'Delve' skill, see in darkness.",
        type: "major",
        // TODOdin: Add a static bonus that affects equipment; in this case "Bloodbound" to all weapons
        staticBonuses: [],
    },
    {
        name: "Pack Hunter",
        description:
            "If you mark stress to 'Blood' to activate the 'Bloodbound' tag, roll with mastery on the 'Delve' and 'Hunt' skills for the situation.",
        type: "minor",
        staticBonuses: [],
        parentName: "Bloodbound Beast",
    },
]
