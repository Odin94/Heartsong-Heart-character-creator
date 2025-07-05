import { Ability } from "../abilities"
import { domain, skill, protection, noBonuses, pickFrom } from "./ability_utils"

export const deepApiaristAbilities: Ability[] = [
    {
        name: "A Perfect Machine",
        description: "Gain 'Technology' domain. Given time, you can repair devices even without the right parts.",
        type: "minor",
        staticBonuses: domain("technology"),
        pickFrom: pickFrom({}),
    },
    {
        name: "Apisambulation",
        description:
            "Gain 'Delve' skill. Once per session, while on a delve, you can fall asleep and let your bees control your body. Getting a few hours of rest this way lets you remove D6 stress.",
        type: "minor",
        staticBonuses: skill("delve"),
        pickFrom: pickFrom({}),
    },
    {
        name: "Hiveborn",
        description:
            "Gain 'Warren' domain. You can fit yourself through any small gap by fyling through bee by bee. This can take more than 6 hours, or you can rush it by marking D8 'Blood' stress.",
        type: "minor",
        staticBonuses: domain("warren"),
        pickFrom: pickFrom({}),
    },
    {
        name: "Hunter of the Damned",
        description: "Gain 'Hunt' skill. Once per session, when eliminating a heartsblooded creature, remove D6 stress.",
        type: "minor",
        staticBonuses: skill("hunt"),
        pickFrom: pickFrom({}),
    },
    {
        name: "Intoxicant",
        description:
            "Gain 'Compel' skill. Once per session, talk to someone for 5 minutes or more to revert them to their basest impulses (lust, hunger, need for shelter - whatever they need right now).",
        type: "minor",
        staticBonuses: skill("compel"),
        pickFrom: pickFrom({}),
    },
    {
        name: "Intrusion",
        description:
            "Gain 'Wild' domain. You can send your swarm to control the body of a wild animal with a 'Compel' + 'Wild' roll. You can direct the animal to perform basic tasks. While your control is active, your own body slumps to the floor. When your control ends, the animal dies.",
        type: "minor",
        staticBonuses: domain("wild"),
        pickFrom: pickFrom({}),
    },
    {
        name: "Many Eyes",
        description: "Gain 'Discern' skill. Stand still and close your eyes to see through your bees eyes.",
        type: "minor",
        staticBonuses: skill("discern"),
        pickFrom: pickFrom({}),
    },
    {
        name: "Perfect Structure",
        description: "Gain +2 'Echo' Protection.",
        type: "minor",
        staticBonuses: protection("echo", 2),
        pickFrom: pickFrom({}),
    },
    {
        name: "Thrice-Warded",
        description:
            "Gain 'Cursed' domain. Each session, the first time you would take minor 'Fortune' fallout, avoid the fallout and do not remove stress from 'Fortune'.",
        type: "minor",
        staticBonuses: domain("cursed"),
        pickFrom: pickFrom({}),
    },
    {
        name: "Uncanny Biology",
        description: "Gain +2 'Blood' Protection.",
        type: "minor",
        staticBonuses: protection("blood", 2),
        pickFrom: pickFrom({}),
    },
    // TODOdin: add Waxen Sigils here once we have protectionpick
    // TODOdin: add 'Whispers of the Hive' once we have domainpick
    // TODOdin: add 'Wisdom Flows so Sweet' once we have skillpick

    // Major

    // Annihilation
    {
        name: "Annihilation",
        description: "Against heartsblooded people or creatures, your touch functions as a 'Kill' D8 weapon. Against any other target as 'Kill' D6.",
        type: "major",
        staticBonuses: noBonuses(),
        pickFrom: pickFrom({}),
    },
    {
        name: "Blossom within the Skull",
        description: "'Annihilation' gains the 'Ranged' tag.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Annihilation",
        pickFrom: pickFrom({}),
    },
    {
        name: "Dark Flowers",
        description: "'Annihilation' gains the 'Debilitating' tag.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Annihilation",
        pickFrom: pickFrom({}),
    },
    {
        name: "That which is Golden",
        description: "Increase the damage of any weapon you touch by 2 steps. The weapon is destroyed after inflicing stress once.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Annihilation",
        pickFrom: pickFrom({}),
    },
    // Blessed Toxin
    {
        name: "Blessed Toxin",
        description:
            "Your bees create an addictive narcotic. Your body functions as 'Mend' Mind D6 item. You can mark D4 stress to 'Blood' to have it function as a 'Mend' Mind D8 item on your next action.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Blessed Toxin",
        pickFrom: pickFrom({}),
    },
    {
        name: "Fearless",
        description: "Once per session, remove minor 'Mind' fallout from an ally or let them ignore the effects of Major 'Mind' fallout for a situation.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Blessed Toxin",
        pickFrom: pickFrom({}),
    },
    {
        name: "Painless",
        description:
            "Your body functions as a 'Mend' Blood D6 item. You can mark D4 stress to 'Blood' to have it function as a 'Mend' Blood D8 item on your next action.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Blessed Toxin",
        pickFrom: pickFrom({}),
    },
    {
        name: "Bloodless",
        description: "Gain +1 'Blood' Protection. You are immune to mundane poisons.",
        type: "minor",
        staticBonuses: protection("blood", 1),
        parentName: "Blessed Toxin",
        pickFrom: pickFrom({}),
    },
    // Delerium Spike
    {
        name: "Delerium Spike",
        description:
            "The stress inflicted by 'Release the Swarm' increases to D6. The first time you inflict stress using 'Release the Swarm' in a situation, add your 'Mind' stress. After that, reduce your 'Mind' stress to 0.",
        type: "major",
        staticBonuses: noBonuses(),
        pickFrom: pickFrom({}),
    },
    {
        name: "Imperfect Balance",
        description: "When you mark stress to 'Blood', halve the amount (rounding up) if it is lower than your current 'Mind' stress.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Delerium Spike",
        pickFrom: pickFrom({}),
    },
    {
        name: "Venomous Hex",
        description: "You may replace 'Spread' with 'Piercing' on your 'Release the Swarm'.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Delerium Spike",
        pickFrom: pickFrom({}),
    },
    {
        name: "Inquisitive Burrowers",
        description: "'Release the Swarm' gains the 'Brutal' tag.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Delerium Spike",
        pickFrom: pickFrom({}),
    },
    // Sacred Geometry
    {
        name: "Sacred Geometry",
        description:
            "When you are rolling to inflict stress on a delve or adversary, or remove stress from yourself or an ally, and you roll a 6, roll an additional D6 and add it to your total.",
        type: "major",
        staticBonuses: noBonuses(),
        pickFrom: pickFrom({}),
    },
    {
        name: "Majestic",
        description: "Once per situation, when you roll to resolve an action and you roll a 6, count that dice as if it rolled 10.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Sacred Geometry",
        pickFrom: pickFrom({}),
    },
    {
        name: "Pristine",
        description: "When you arrive in a landmark after a delve, roll with 'Mastery' when you make a first impression.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Sacred Geometry",
        pickFrom: pickFrom({}),
    },
    {
        name: "Regal",
        description: "Once per situation, after you mark stress to a resistance, gain +2 Protection in that resistance for the situation.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Sacred Geometry",
        pickFrom: pickFrom({}),
    },
    // Unchaos
    {
        name: "Unchaos",
        description:
            "Roll 'Mend' + 'Occult' to cast this spell. On a success, for the remainder of the situation, you or one nearby ally treats 'Risky' actions as Standard actions.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Unchaos",
        pickFrom: pickFrom({}),
    },
    {
        name: "Stabilisation",
        description:
            "'Unchaos' may now affect all allies within arm's reach rather than a single nearby ally. If they leave your side, they lose access to the effect.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Unchaos",
        pickFrom: pickFrom({}),
    },
    {
        name: "Perfection",
        description: "Once per situation, a target under the effect of 'Unchaos' can treat a Dangerous action as a Standard action.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Unchaos",
        pickFrom: pickFrom({}),
    },
    {
        name: "Filed Away",
        description: "Once per situation, when you cast 'Unchaos', all those affected by the spell remove D4 stress from 'Fortune'.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Unchaos",
        pickFrom: pickFrom({}),
    },
    // Zenith
    {
        name: "Absolute Stasis",
        description:
            "Touch another creature to bind both of you into an inviolable, immobile, glittering crystal-like statue. No one ever managed to break such a statue.",
        type: "zenith",
        staticBonuses: noBonuses(),
        pickFrom: pickFrom({}),
    },
    {
        name: "Dimensional Bastion",
        description:
            "You dissolve into bees, which fly out and place wards against the heart in the landmark, protecting it from the heart's influence. Rename the landmark.",
        type: "zenith",
        staticBonuses: noBonuses(),
        pickFrom: pickFrom({}),
    },
    {
        name: "Surrender to Chaos",
        description: "Create absolute destructive chaos around yourself for a few seconds, killing you in the process.",
        type: "zenith",
        staticBonuses: noBonuses(),
        pickFrom: pickFrom({}),
    },
]
