import { Ability } from "../abilities"
import { domain, skill, protection, noBonuses } from "./ability_utils"

// TODOdin: How to represent "pick any domain" abilities like "DOMINION"?
// TODOdin: Create an ability-pick modal with tabs for minor, major, zenith

export const cleaverAbilities: Ability[] = [
    {
        name: "Call of the Wild",
        description: "Gain 'Wild' domain, summon horde of beasts once per session.",
        type: "minor",
        staticBonuses: domain("wild"),
    },
    {
        name: "Darkling Eyes",
        description: "Gain 'Delve' skill, see in darkness.",
        type: "minor",
        staticBonuses: skill("delve"),
    },
    {
        name: "Desperate Measures",
        description: "Gain 'Desolate' domain. Gain an associated skill for a scene when eating the flesh of something you recently killed.",
        type: "minor",
        staticBonuses: domain("desolate"),
    },
    // TODOdin: Add "Dominion" here once you have choose-your-domain logic
    {
        name: "Fell Metabolism",
        description:
            "Gain 'Endure' skill. When you use 'The Red Feast', you may get 'Brutal' on your attacks for [dice-roll] actions on the resource dice instead of gaining a domain.",
        type: "minor",
        staticBonuses: skill("endure"),
    },
    {
        name: "Fractured Form",
        description: "Gain 'Evade' skill. Once per delve, a swarm of insects and small animals will serve you as equipment (Delve D8).",
        type: "minor",
        staticBonuses: skill("evade"),
    },
    // TODOdin: Add "Gut Instinct" here once you have choose-your-skill logic
    // TODOdin: Add "Inhuman" here once you have choose-your-protections logic
    {
        name: "Pitchskin",
        description: "Gain 'Sneak' skill. Your skin can secrete flammable and adhesive goo at will.",
        type: "minor",
        staticBonuses: skill("sneak"),
    },
    {
        name: "Symbiotic",
        description: "Gain +2 'Fortune' protection.",
        type: "minor",
        staticBonuses: protection("fortune", 2),
    },
    {
        name: "Twisting Territory",
        description:
            "Gain 'Warren' domain. Once per situation, ask GM who's in charge of immediate area. They get the uncanny feeling that they're under threat.",
        type: "minor",
        staticBonuses: domain("warren"),
    },
    {
        name: "Unmaking Claws",
        description: "Gain 'Kill' skill. Your unarmed attacks are 'Piercing'.",
        type: "minor",
        staticBonuses: skill("kill"),
    },
    {
        name: "Vessel",
        description: "Gain +2 'Echo' protection.",
        type: "minor",
        staticBonuses: protection("echo", 2),
    },

    // Major & sub-skills

    // Bloodbound Beast
    {
        name: "Bloodbound Beast",
        description: "Gain 'Delve' skill, see in darkness.",
        type: "major",
        // TODOdin: Add a static bonus that affects equipment; in this case "Bloodbound" to all weapons
        staticBonuses: noBonuses(),
    },
    {
        name: "Pack Hunter",
        description:
            "If you mark stress to 'Blood' to activate the 'Bloodbound' tag, roll with 'Mastery' on the 'Delve' and 'Hunt' skills for the situation.",
        type: "major",
        staticBonuses: noBonuses(),
        parentName: "Bloodbound Beast",
    },
    {
        name: "Pounce",
        description: "Once per situation, your companion pounces an adversary you can see for D6 stress.",
        type: "major",
        staticBonuses: noBonuses(),
        parentName: "Bloodbound Beast",
    },
    {
        name: "Faithful until the End",
        description:
            "If you die, get dragged to safety by your companion. Your companion dies; replace it with a new major ability. You can never take 'Bloodbound Beast' again.",
        type: "major",
        staticBonuses: noBonuses(),
        parentName: "Bloodbound Beast",
    },
    // Chimeric Strain
    {
        name: "Chimeric Strain",
        description: "You can mark D4 stress to 'Echo' to gain 'Brutal' and 'Wyrd' to your melee attacks for a situation.",
        type: "major",
        staticBonuses: noBonuses(),
    },
    {
        name: "Blighted",
        description:
            "When you activate 'Chimeric Strain', increase 'Echo' stress inflicted by 1 step and gain +2 'Blood' protection for one situation.",
        type: "major",
        staticBonuses: noBonuses(),
        parentName: "Chimeric Strain",
    },
    {
        name: "Horned",
        description:
            "When you activate 'Chimeric Strain', increase 'Echo' stress inflicted by 1 step and increase your melee damage by 1 step for one situation.",
        type: "major",
        staticBonuses: noBonuses(),
        parentName: "Chimeric Strain",
    },
    {
        name: "Bezerk",
        description:
            "When you activate 'Chimeric Strain', increase 'Echo' stress inflicted by 1 step and ignore effects of 'Blood' fallout for one situation.",
        type: "major",
        staticBonuses: noBonuses(),
        parentName: "Chimeric Strain",
    },
    // Extinction Bow
    {
        name: "Extinction Bow",
        description: "Gain an enourmous ranged weapon with 'Kill' D10, 'Tiring', 'Ranged', 'Expensive'.",
        type: "major",
        staticBonuses: noBonuses(),
    },
    {
        name: "Harpoon",
        description: "Once per situation, you can attach yourself to an adversary you hit with 'Extinction Bow' with a rope or chain.",
        type: "major",
        staticBonuses: noBonuses(),
        parentName: "Extinction Bow",
    },
    {
        name: "Hunter's Eye",
        description:
            "Once per situation, point out a helpful element of the landscape. The first time an ally interacts with it they roll with 'Mastery'.",
        type: "major",
        staticBonuses: noBonuses(),
        parentName: "Extinction Bow",
    },
    {
        name: "Nighmare Arrow",
        description: "Gain a weapon with 'Kill' D8, 'Spread', 'Ranged', 'One-Shot'.",
        type: "major",
        staticBonuses: noBonuses(),
        parentName: "Extinction Bow",
    },
    // Monstrous Apetite
    {
        name: "Monstrous Appetite",
        description: "When using 'The Red Feast' for a domain you already have, remove stress from 'Blood' or 'Echo' by [dice-roll].",
        type: "major",
        staticBonuses: noBonuses(),
    },
    {
        name: "Rejuvenation",
        description:
            "Once per session when using 'Monstrous Appetite' on a resource of value D8 or higher, remove a minor 'Blood' or 'Echo' fallout.",
        type: "major",
        staticBonuses: noBonuses(),
        parentName: "Monstrous Apetite",
    },
    {
        name: "Tainted Meat",
        description:
            "Once per session when using 'Monstrous Appetite' on a 'Cursed' resource of value D8 or higher, add 1 to the minimum protection provided by 'Heartsblood' for one situation instead of removing stress.",
        type: "major",
        staticBonuses: noBonuses(),
        parentName: "Monstrous Apetite",
    },
    {
        name: "Horrendous Bite",
        description:
            "Once per situation, when you inflict stress with an unarmed attack, you can lower their difficulty by one step to a minimum of Standard for this situation.",
        type: "major",
        staticBonuses: noBonuses(),
        parentName: "Monstrous Apetite",
    },
    // The Wild Hunt
    {
        name: "The Wild Hunt",
        description:
            "Pass an 'Endure' + 'Cursed' roll ('Risky' if you're in a 'Haven') to make yourself and your allies to gain the 'Hunt' skill and increase stress they inflict on delves by 1 step for the current delve.",
        type: "major",
        staticBonuses: noBonuses(),
    },
    {
        name: "Echoes of the City Beneath",
        description: "When you use 'The Wild Hunt', instead of 'Hunt' you may grant the 'Delve' skill.",
        type: "major",
        staticBonuses: noBonuses(),
        parentName: "The Wild Hunt",
    },
    {
        name: "Storyteller",
        description:
            "Once per session, when tracking a beast, you can declare it a renowned beast. Tell the party what makes it dangerous. Increase the beast's protection by 1, it's damage by 1 step and resources gathered from it by 2 steps.",
        type: "major",
        staticBonuses: noBonuses(),
        parentName: "The Wild Hunt",
    },
    {
        name: "Bounty Shared",
        description:
            "When you complete a delve, hunt or kill a renowned beast, everyone who took part in 'The Wild Hunt' may remove D6 stress from 'Fortune' or 'Supplies'.",
        type: "major",
        staticBonuses: noBonuses(),
        parentName: "The Wild Hunt",
    },
    // Zenith
    {
        name: "Angelic",
        description:
            "Transform into a towering, ruinous and powerful Angel. You retain your will for the current situation, after which you will be absorbed back into the flesh of the Heart and beset delvers in centuries to come.",
        type: "zenith",
        staticBonuses: noBonuses(),
    },
    {
        name: "Legendary Beast",
        description:
            "Hunt an ancient creature. You will kill it and become the new beast, a legendary terror in the City Beneath. Create a new landmark that you call your territory. You rule this place, but you can never leave. One day another Cleaver will kill you and take your place.",
        type: "zenith",
        staticBonuses: noBonuses(),
    },
    {
        name: "Weald and Woe",
        description:
            "When you die, the landmark you are currently occupying is overwhelmed by 'The Forest'. If you're on a delve, establish a new landmark. When you are reborn, you awaken in the Forest, where you have an afterlife of hunting, feasting and howling.",
        type: "zenith",
        staticBonuses: noBonuses(),
    },
]
