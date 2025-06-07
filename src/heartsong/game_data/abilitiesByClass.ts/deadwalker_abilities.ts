import { Ability } from "../abilities"
import { DomainKey } from "../domains"
import { Resistance } from "../resistances"
import { SkillKey } from "../skills"
import { domain, noBonuses, protection, skill } from "./ability_utils"

export const deadwalkerAbilities: Ability[] = [
    // TODOdin: Add "Adept" here once we have skillpick
    {
        name: "Deathless",
        description:
            "Gain 'Endure' skill. Roll 'Endure' + 'Religion' to ignore effects of minor 'Blood' or 'Echo' fallout for this situation.",
        type: "minor",
        staticBonuses: skill("endure"),
    },
    {
        name: "Firt under the Fingernails",
        description: "Gain 'Warren' domain. Dig through earth with bare hands as if you had a shovel.",
        type: "minor",
        staticBonuses: domain("warren"),
    },
    // TODOdin: Add "Explorer" here once we have domainpick
    {
        name: "Grail Armour",
        description: "Gain +2 'Blood' protection.",
        type: "minor",
        staticBonuses: protection("blood", 2),
    },
    {
        name: "Grim Reaper",
        description: "Gain 'Kill' skill. Your death functions as 'Kill' D8, 'Ranged', 'One-Shot' weapon.",
        type: "minor",
        staticBonuses: skill("kill"),
    },
    {
        name: "Last Rites",
        description: "Gain 'Religion' domain. Ask the spirit of a recently dead person a single question before it fades away.",
        type: "minor",
        staticBonuses: domain("religion"),
    },
    {
        name: "Marked for Death",
        description: "Gain 'Hunt' skill. You can mark prey by observing them for 10 minutes. When hunting them, roll with 'Mastery'.",
        type: "minor",
        staticBonuses: noBonuses(),
    },
    {
        name: "Shadow",
        description: "Gain 'Sneak' skill. Blow out a lit candle to extinguish all light sources nearby.",
        type: "minor",
        staticBonuses: skill("sneak"),
    },
    // TODOdin: Add "Survivor" here once we have protectionPick
    {
        name: "Tattered Soul",
        description: "Gain 'Cursed' domain and +1 'Echo' protection.",
        type: "minor",
        staticBonuses: {
            domains: ["cursed"],
            protections: [{ resistance: "echo", amount: 1 }],
            skills: [],
        },
    },
    {
        name: "Walking Reliquary",
        description: "Gain +2 'Supplies' protection",
        type: "minor",
        staticBonuses: protection("supplies", 2),
    },
    // Major

    // Descent
    {
        name: "Descent",
        description:
            "When you are in the Grey, you may delve to one of the eight landmark Heavens (choose which one when taking this). The delve is 'Risky' unless you and your companions dress in ritual garb and make preparations to enter the target Heaven. Returning requires another delve.",
        type: "major",
        staticBonuses: noBonuses(),
    },
    {
        name: "Esoteric Cartographer",
        description: "Choose two additional heavens you can access from the Grey.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Descent",
    },
    {
        name: "Step Between",
        description:
            "You can leave a Heaven and arrive at a different landmark than the one you started at. Your exit point must be within the same tier and share a domain with the Heaven you're exiting. If you've never been there, the delve is 'Risky'.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Descent",
    },
    {
        name: "All Doors as One",
        description: "When you use 'Step Between', your destination point can be one tier above or below your current tier.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Descent",
    },
    // Echoes
    {
        name: "Echoes",
        description:
            "Roll 'Discern' + 'Domain' to witness ghostly recreations of the past in your current location, showing the most dramatic or interesting thing that occured recently.",
        type: "major",
        staticBonuses: noBonuses(),
    },
    {
        name: "Hidden Passageway",
        description: "One per delve, when using 'Echoes', it functions as a D8 boon.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Echoes",
    },
    {
        name: "Fragmentary Recollection",
        description:
            "When you use 'Echoes', you can speak with the echoes of people present. They're just momentary snapshots of psyches, with all limitations on cognition that entails.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Echoes",
    },
    {
        name: "Absorb Memories",
        description:
            "Once per session, when in a location with a domain you don't have, activate this power to gain access to that domnain until the end of the session.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Echoes",
    },
    // Invidious Spectre
    {
        name: "Invidious Spectre",
        description:
            "Any weapon you carry gains 'Conduit', meaning you can mark D4 stress to 'Mind' to roll with 'Mastery' on attacks for one situation.",
        type: "major",
        staticBonuses: noBonuses(),
    },
    {
        name: "Soothe",
        description: "Once per session, when you mark stress, add +1 to any protection until the end of the session.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Invidious Spectre",
    },
    {
        name: "Ghoulish Grasp",
        description: "Once per situation, a weapon you carry has 'Debilitating'.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Invidious Spectre",
    },
    {
        name: "Ethereal Touch",
        description: "If you mark stress to activate 'Conduit', your weapon also gains 'Piercing'.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Invidious Spectre",
    },
    // Reaper's Strike
    {
        name: "Reaper's Strike",
        description:
            "When attacking, you can choose to lose your 'Blood' protection for the attack before you roll. If you hit, add your 'Blood' protection value to the stress inflicted.",
        type: "major",
        staticBonuses: noBonuses(),
    },
    {
        name: "Inexorable",
        description:
            "If the first dice you roll to determine stress inflicted on an adversary shows 1 or 2, roll an additional dice of the same size and add the result to stress inflicted.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Reaper's Strike",
    },
    {
        name: "Bloodied but Unbroken",
        description:
            "When you have 4 of more stress marked to 'Blood' or are suffering from ongoing 'Blood' fallout, gain +2 'Blood' Protection",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Reaper's Strike",
    },
    {
        name: "Scything Blow",
        description: "Once per situation, treat your weapon as though it has the 'Spread' tag when you inflict stress to an adversary.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Reaper's Strike",
    },
    // Sudden Death
    {
        name: "Sudden Death",
        description:
            "'Enter the Grey' no longer takes 10 minutes, it is instantaneous. Bringing others along like this makes the action 'Risky'.",
        type: "major",
        staticBonuses: noBonuses(),
    },
    {
        name: "Liminal",
        description:
            "Gain +2 'Blood' Protection after entering the Grey. You can see and interact with people who are int he living world. You appear to them as a semi-ethereal phantom.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Sudden Death",
    },
    {
        name: "Entropy",
        description:
            "You hands become 'Kill' D8, 'Dangerous' weapons. You can rust and decay machines by touching them. Doing this under pressure requires a 'Kill' + 'Technology' check.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Sudden Death",
    },
    {
        name: "Blood Sacrifice",
        description:
            "Once per situation, when inflicting stress on an adversary that's roughly the same size as you in melee combat, you can transport both of you to the Grey.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Sudden Death",
    },
    // Zenith
    {
        name: "Extinguish",
        description:
            "You can draw any person, entity, landmark or concept (except the Heart itself) into a physical vessel and kill it, destroying the concept and yourself in a final strike. The difficulty of the fight is determined by the GM.",
        type: "zenith",
        staticBonuses: noBonuses(),
    },
    {
        name: "Infernal Claws",
        description:
            "You can drag someone to hell or summon hell to a landmark, trapping the person or place in eternal torment. Doing this consumes your life essence and you die.",
        type: "zenith",
        staticBonuses: noBonuses(),
    },
    {
        name: "Sunder the Veil",
        description:
            "When you die, all nearby allies remove all ongoing fallout and stress, and they gain 'Mastery' on all rolls for the situation.",
        type: "zenith",
        staticBonuses: noBonuses(),
    },
]
