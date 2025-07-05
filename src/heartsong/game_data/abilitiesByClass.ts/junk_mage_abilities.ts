import { Ability } from "../abilities"
import { domain, skill, protection, noBonuses, pickFrom } from "./ability_utils"

export const junkMageAbilities: Ability[] = [
    {
        name: "Back Pocket Arcana",
        description: "Gain +2 'Supplies' protection.",
        type: "minor",
        staticBonuses: protection("supplies", 2),
        pickFrom: pickFrom({}),
    },
    // TODOdin: Add "By Any Means" once we have skillpick
    {
        name: "Frontier Etiquette",
        description: "Gain 'Haven' domain. The first time each session that you use a haunt, your spent resource counts as one dice size higher.",
        type: "minor",
        staticBonuses: domain("haven"),
        pickFrom: pickFrom({}),
    },
    {
        name: "Litanies of False Power",
        description: "Gain 'Religion' domain. When you use 'Sacrifice', you may also consume 'Religion' resources.",
        type: "minor",
        staticBonuses: domain("religion"),
        pickFrom: pickFrom({}),
    },
    {
        name: "Mark of Hunger",
        description: "Gain 'Delve' skill. You can smell sources of magical power and discern the potency and type of magic by the smell.",
        type: "minor",
        staticBonuses: skill("delve"),
        pickFrom: pickFrom({}),
    },
    {
        name: "Mark of the Phantom",
        description:
            "Gain 'Evade' skill. Once per situation, when you mark stress due to physical harm or detection, you may make the GM reroll the stress dice. Keep the second result, even if it's higher",
        type: "minor",
        staticBonuses: skill("evade"),
        pickFrom: pickFrom({}),
    },
    {
        name: "Mark of Shadow",
        description: "Gain 'Sneak' skill. Hiding from someone or something is always 'Standard' difficulty for you, never 'Risky' or 'Dangerous'.",
        type: "minor",
        staticBonuses: skill("sneak"),
        pickFrom: pickFrom({}),
    },
    {
        name: "Mark of the Weaver",
        description:
            "Gain 'Mend' skill. Once per session, you can fix someone or something in a matter of seconds, even if it would usually take hours of careful work.",
        type: "minor",
        staticBonuses: skill("mend"),
        pickFrom: pickFrom({}),
    },
    {
        name: "Rust and Iron",
        description:
            "Gain 'Technology' domain. Learn the following spell: roll 'Mend' + 'Technology' to improve a piece of equipment that has moving parts using a ritual that takes around half an hour. On a success, increase the equipment's quality by 1 step (standard becomes good, good becomes excellent) and give it the 'Dangerous' and 'Unreliable' tags. Once you have improved a piece of equipment with this spell, you can't improve it again.",
        type: "minor",
        staticBonuses: domain("technology"),
        pickFrom: pickFrom({}),
    },
    {
        name: "Siphon of Fortune",
        description: "Gain +2 'Fortune' protection.",
        type: "minor",
        staticBonuses: protection("fortune", 2),
        pickFrom: pickFrom({}),
    },
    // TODOdin: Add "Warding Spells" here once we have resistancepick
    {
        name: "Wretched and Glorious",
        description: "Gain 'Cursed' domain. When you use 'Sacrifice', you may also consume 'Cursed' resources.",
        type: "minor",
        staticBonuses: domain("cursed"),
        pickFrom: pickFrom({}),
    },
    // Major

    // Curse of the Sky Court
    {
        name: "Curse of the Sky Court",
        description:
            "Roll 'Compel' + 'Occult' to cast this spell by drinking strong liquor or taking narcotics and intoning an ancient contract. On a success, all those nearby are compelled to seek immediate pleasure: drink, drugs, dance, wild creation of art, music, general hedonism and miscellaneous frivolity. The alien creatures of the Heart may have an unusual definition of 'pleasure' that defies mortal minds.",
        type: "major",
        staticBonuses: noBonuses(),
        pickFrom: pickFrom({}),
    },
    {
        name: "Ecstasy",
        description:
            "When you cast 'Curse of the Sky Court', you can focus it on a single target rather than everyone nearby. This individual is overwhelmed with joy, and energised to seek more of it - they find it hard to focus on even immediate dangers. As long as you maintain your concentration on them, their difficulty is reduced to 'Standard'.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Curse of the Sky Court",
        pickFrom: pickFrom({}),
    },
    {
        name: "A Moment Eternal",
        description:
            "Roll 'Evade' + 'Occult' to cast this spell. On a success, your immediate area is time-shifted. For each hour outside of the area, those in the area experience 4 hours of time passing. While intended to stretch out a perfect moment, this can make time-sensitive tasks easier to attempt. The barrier that surrounds the area is blurry and indistinct, and if anyone from outside the area intrudes, the spell is broken and time resumes to normal speed.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Curse of the Sky Court",
        pickFrom: pickFrom({}),
    },
    {
        name: "Steal the Night Away",
        description:
            "Once per session, when you engage in reckless hedonism, refresh D6. If you spend time with someone who fascinates you during the process, refresh D8 instead. These refreshes can be spent to remove fallout as though you were making use of a haunt.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Curse of the Sky Court",
        pickFrom: pickFrom({}),
    },
    // Fire of the Red King
    {
        name: "Fire of the Red King",
        description:
            "This spell causes your unarmed attacks to gain the 'Ranged' tag as you conjure flames on the clothing and bodies of those nearby. Each successive unarmed attack you inflict on the same target increases the size of your stress dice against that target by one step until the end of the situation.",
        type: "major",
        staticBonuses: noBonuses(),
        pickFrom: pickFrom({}),
    },
    {
        name: "Words of Flame",
        description: "Your unarmed attacks inflict D6 stress rather than D4.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Fire of the Red King",
        pickFrom: pickFrom({}),
    },
    {
        name: "Superheat",
        description: "In melee, your unarmed attacks have the 'Piercing' tag.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Fire of the Red King",
        pickFrom: pickFrom({}),
    },
    {
        name: "Coin-Gold Blood",
        description: "You gain Protection 5 against stress marked due to flame or heat.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Fire of the Red King",
        pickFrom: pickFrom({}),
    },
    // Frenzy of the Sky Court
    {
        name: "Frenzy of the Sky Court",
        description:
            "Roll 'Evade' + 'Occult' to cast this spell. On a success, you are filled with the mercurial energy of the Sky Court, and you gain +1 Protection to all resistances for the remainder of the situation. However, until the spell ends (and you can't end it early), any actions that require more than a couple of seconds of attention become Risky.",
        type: "major",
        staticBonuses: noBonuses(),
        pickFrom: pickFrom({}),
    },
    {
        name: "Temporary Perfection",
        description: "When you cast 'Frenzy of the Sky Court', you gain access to a skill that you do not possess until the end of the situation.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Frenzy of the Sky Court",
        pickFrom: pickFrom({}),
    },
    {
        name: "Brisk Conjuration",
        description:
            "You are able to summon an indiscriminate blast of air in a direction of your choice. This spell functions as a 'Kill' D4, 'Spread', 'Debilitating', 'One-Shot') weapon.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Frenzy of the Sky Court",
        pickFrom: pickFrom({}),
    },
    {
        name: "Maddening Storm",
        description:
            "Roll 'Compel' + 'Occult' to cast this spell. On a success, an area roughly the size of a city block - centred on you - is assailed with stiff winds that stir up debris and howl deafeningly through tunnels and vents, but everything within ten feet of you remains calm. All 'Sneak' and 'Evade' checks in this area are made with mastery, but the inhabitants definitely know something's going on. This effect lasts until the end of the current situation; if you move outside of the zone of calm at the centre beforehand, the spell ends.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Frenzy of the Sky Court",
        pickFrom: pickFrom({}),
    },
    // Greed of the Red King
    {
        name: "Greed of the Red King",
        description:
            "Roll 'Discern' + 'Occult' to cast the spell. On a success, you determine what a target you can see wants most of all right now. In addition, you can smell money, or anything of particular value",
        type: "major",
        staticBonuses: noBonuses(),
        pickFrom: pickFrom({}),
    },
    {
        name: "Only the Finest",
        description: "Once per situation, an item you are holding becomes Excellent quality. At the end of the situation, the item is destroyed.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Greed of the Red King",
        pickFrom: pickFrom({}),
    },
    {
        name: "Gorge",
        description:
            "Once per situation, when you eat (destroy) a resource with the Haven domain, remove stress from Blood, Mind or Echo equal to half the amount rolled on the resource's dice.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Greed of the Red King",
        pickFrom: pickFrom({}),
    },
    {
        name: "A King Demands",
        description: "Once per session, you can demand that a target holding any item gives you that item, and they must obey.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Greed of the Red King",
        pickFrom: pickFrom({}),
    },
    // Kiss of the Drowned Queen
    {
        name: "Kiss of the Drowned Queen",
        description:
            "With a touch, you can conjure salt water in the lungs of those who oppose you.This spell functions as the following weapon: 'Kill' D6, 'Piercing'. If the target is at least shin-deep in water, it inflicts D8 damage.",
        type: "major",
        staticBonuses: noBonuses(),
        pickFrom: pickFrom({}),
    },
    {
        name: "Slumbering Eternal",
        description:
            "You no longer need to breathe air; no matter the situation, you will not asphyxiate. Once per session, you can also locate a useful source of water - a stream, a pipe, a drain, a reservoir, a waterfall, etc.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Kiss of the Drowned Queen",
        pickFrom: pickFrom({}),
    },
    {
        name: "Body of Water",
        description:
            "You may no longer remove 'Blood' fallout or stress by using haunts. However, once per session, choose one of the following when you spend at least an hour submerged in water: remove all stress from 'Blood', remove all minor 'Blood' fallout or downgrade one major 'Blood' fallout to minor",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Kiss of the Drowned Queen",
        pickFrom: pickFrom({}),
    },
    {
        name: "Grace",
        description: "You may walk on water as though it were solid ground.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Kiss of the Drowned Queen",
        pickFrom: pickFrom({}),
    },
    // Sanctum of the Stone Chorus
    {
        name: "Sanctum of the Stone Chorus",
        description:
            "Roll 'Discern' + 'Religion' to cast this spell. On a success, you find (or spontaneously create) a path to one of the parasitic temples of the Old Gods, which sucks existence from the world like ticks. When you meditate here, remove D6 stress from 'Echo'; your allies may use the temple in the same way. You may not open more than one path to a temple at any one time. After an hour or so, the path will seal shut - but not without warning, so you'll have time to leave.",
        type: "major",
        staticBonuses: noBonuses(),
        pickFrom: pickFrom({}),
    },
    {
        name: "Benevolent",
        description: "Instead of removing D6 stress from 'Echo', you or any allies may remove D6 stress from 'Supplies' or 'Fortune' instead.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Sanctum of the Stone Chorus",
        pickFrom: pickFrom({}),
    },
    {
        name: "Omnipresent",
        description:
            "When you cast this spell, you access the same temple every time, no matter where you are; it becomes a Fracture. At the GM's discretion, major 'Mind' fallout could result in you losing access to this specific temple, and minor 'Mind' fallout could see it robbed or otherwise compromised.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Sanctum of the Stone Chorus",
        pickFrom: pickFrom({}),
    },
    {
        name: "Bountiful",
        description: "Once per session, when you access the temple, you can locate a non-unique item of D8 value or lower.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Sanctum of the Stone Chorus",
        pickFrom: pickFrom({}),
    },
    // Zenith
    {
        name: "The Herald of the Red King",
        description:
            "You can only cast this spell once. The Red King appears and burns anyone or anything you direct him towards. When you cast the spell, roll 'Endure' + 'Occult'. On a success, you become the new Red King, a furious engine of desire, and can be summoned by other Junk Mages. On a failure, you are added to his hoard. Either way, there's no coming back.",
        type: "zenith",
        staticBonuses: noBonuses(),
        pickFrom: pickFrom({}),
    },
    {
        name: "The Herald of the Drowned Queen",
        description:
            "You can only cast this spell once. The landmark you're currently in is flooded and half-submergedin water. The throne of the Drowned Queen rises in it's center, and she claims ownership of the landmark. You are her trusted advisor and gain control over the landmark. You have a session or two to get what you need out of the situation, before you get retired as a PC (driven mad, assassinated or betrothed to the Queen).",
        type: "zenith",
        staticBonuses: noBonuses(),
        pickFrom: pickFrom({}),
    },
    {
        name: "The Herald of the Stone Chorus",
        description:
            "You can only cast this spell once. A creature or entity you are touching is sealed away in the Stone Chorus' prison eternally; you become part of the mechanism that locks the door, and cease to exist in any meaningful sense. Nothing can free the target from its prison short of you, the door, agreeing to open.",
        type: "zenith",
        staticBonuses: noBonuses(),
        pickFrom: pickFrom({}),
    },
]
