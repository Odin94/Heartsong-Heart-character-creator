import { Ability } from "../abilities"
import { domain, skill, protection, noBonuses, pickFrom } from "./ability_utils"

export const hereticAbilities: Ability[] = [
    {
        name: "Blessed Deprivation",
        description: "Gain 'Desolate' domain. When suffering from ongoing 'Supplies' fallout, gai 'Trusty' on your rolls to inflict stress on delves.",
        type: "minor",
        staticBonuses: domain("desolate"),
        pickFrom: pickFrom({}),
    },
    {
        name: "Grave Duty",
        description:
            "Gain 'Warren' domain. Once per session, when bolstering an ally in times of fear or uncertainty, they gain +1 'Mind' protection for the session.",
        type: "minor",
        staticBonuses: domain("warren"),
        pickFrom: pickFrom({}),
    },
    // TODOdin: Add 'The Goddess' Gifts' here once we have skillpick
    {
        name: "The Left Hand of the Goddess",
        description: "Gain 'Kill' skill and +1 'Blood' protection.",
        type: "minor",
        staticBonuses: {
            skills: ["kill"],
            domains: [],
            protections: [{ resistance: "blood", amount: 1 }],
        },
        pickFrom: pickFrom({}),
    },
    {
        name: "Liar's Burden",
        description:
            "Gain 'Discern' skill. If you suspect an NPC is lying to you, roll 'Discern' + 'Religion'. On a success, if they were lying, they mark D4 stress; their mouth streams with blood",
        type: "minor",
        staticBonuses: skill("discern"),
        pickFrom: pickFrom({}),
    },
    {
        name: "Incandescent Communion",
        description: "Gain 'Cursed' domain. You can see in darkness as if there was candle-light.",
        type: "minor",
        staticBonuses: domain("cursed"),
        pickFrom: pickFrom({}),
    },
    {
        name: "Righteous Rhetoric",
        description: "Gain 'Compel' skill. When you invoke your holy texts in conversation with another member of your faith, roll with 'Mastery'.",
        type: "minor",
        staticBonuses: skill("compel"),
        pickFrom: pickFrom({}),
    },
    {
        name: "Rite of Placidity",
        description: "Gain +2 'Mind' protection.",
        type: "minor",
        staticBonuses: protection("mind", 2),
        pickFrom: pickFrom({}),
    },
    {
        name: "Sacred Tattoo",
        description: "Gain +2 'Fortune' protection.",
        type: "minor",
        staticBonuses: protection("fortune", 2),
        pickFrom: pickFrom({}),
    },
    // TODOdin: Add Tomes of Knowledge here once we have domainpick
    // TODODin: Add Unwavering Faith here once we have protectionpick
    {
        name: "Words of Grace",
        description: "Gain 'Haven' domain. Once per session, when you lead the community in an act of mercy and grace, refresh D6.",
        type: "minor",
        staticBonuses: domain("haven"),
        pickFrom: pickFrom({}),
    },
    // Major

    // Oath of Community
    {
        name: "Oath of Community",
        description: "Gain +1 'Blood' protection. When a nearby ally is attacked and you're ready to defend them, their 'Blood' Protection increases by 1.",
        type: "major",
        staticBonuses: protection("blood", 1),
        pickFrom: pickFrom({}),
    },
    {
        name: "Martyr's Blood",
        description: "Once per session, when a nearby ally takes major 'Blood' fallout, you both take minor 'Blood' fallout instead.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Oath of Community",
        pickFrom: pickFrom({}),
    },
    {
        name: "Miraculous Intervention",
        description:
            "Once per situation, when you would mark stress to 'Blood' but before the GM rolls to determine how much, activate this power. The attack only inflicts D4 stress.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Oath of Community",
        pickFrom: pickFrom({}),
    },
    {
        name: "Cast Asunder",
        description: "Once per situation, when an adversary inflicts 'Blood' fallout on you, reduce that adversary's stress dice by 1 step.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Oath of Community",
        pickFrom: pickFrom({}),
    },
    // Oath of Fury
    {
        name: "Oath of Fury",
        description:
            "Roll 'Endure' + 'Religion', on success you gain the 'Kill' skill (or an appropriate Knack, if you already have it) and your attacks gain 'Brutal' for the session. At the end of the session, if you have not killed a worthy creature, mark D6 stress to 'Mind'.",
        type: "major",
        staticBonuses: noBonuses(),
        pickFrom: pickFrom({}),
    },
    {
        name: "Avatar of Flame",
        description: "When you use 'Oath of Fury', you can replace the benefits with +2 'Blood' protection and gaining 'Debilitating' on your attacks.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Oath of Fury",
        pickFrom: pickFrom({}),
    },
    {
        name: "Avatar of Moonlight",
        description:
            "When you use 'Oath of Fury', you can replace the benefits with +2 'Echo' protection. Your 'Mend' skill can remove an ally's minor 'Blood' or 'Mind' fallout instead of reducing stress on a successful roll. If you have not removed both 'Blood' and 'Mind' fallout at the end of the session, mark D6 stress to 'Mind'.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Oath of Fury",
        pickFrom: pickFrom({}),
    },
    {
        name: "Avatar of Shadows",
        description: "When you use 'Oath of Fury', you can replace the benefits with +2 'Fortune' protection and all your attacks gain 'Extreme Range'.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Oath of Fury",
        pickFrom: pickFrom({}),
    },
    //  Oath of Sagacity
    {
        name: "Oath of Sagacity",
        description: "You know the name of the Goddess, and it functions as a 'Kill' D6, 'Spread', 'Debilitating', 'Maddening', 'One-Shot' weapon.",
        type: "major",
        staticBonuses: noBonuses(),
        pickFrom: pickFrom({}),
    },
    {
        name: "Fragment of Lekole",
        description: "The weapon gains 'Brutal'.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Oath of Sagacity",
        pickFrom: pickFrom({}),
    },
    {
        name: "Fragment of Lombre",
        description: "The weapon gains 'Smoke', creates no noise and dampens nearby noise.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Oath of Sagacity",
        pickFrom: pickFrom({}),
    },
    {
        name: "Fragment of Limye",
        description: "When you use 'Oath of Sagacity', you and nearby allies remove D4 stress from 'Blood'.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Oath of Sagacity",
        pickFrom: pickFrom({}),
    },
    // Oath of Tenacity
    {
        name: "Oath of Tenacity",
        description:
            "When you succeed at a 'Risky' action, increase the size of the stress dice you inflict by 1 step. When you succeed at a 'Dangerous' action, increase the size of the stress dice you inflict by 2 steps. You can choose to make an action 'Risky' or 'Dangerous', even if it's 'Standard', to gain access to this benefit.",
        type: "major",
        staticBonuses: noBonuses(),
        pickFrom: pickFrom({}),
    },
    {
        name: "Implacable faith",
        description: "When you take stress due to attempting a Risky or Dangerous action, the stress dice is reduced by 1 step.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Oath of Tenacity",
        pickFrom: pickFrom({}),
    },
    {
        name: "Glorious Resurgence",
        description: "Once per session, when you succeed at a 'Risky' or 'Dangerous' action, clear all stress marked against your resistances.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Oath of Tenacity",
        pickFrom: pickFrom({}),
    },
    {
        name: "Abide with Me",
        description: "Once per situation, you may grant the benefits of 'Oath of Tenacity' to a nearby ally.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Oath of Tenacity",
        pickFrom: pickFrom({}),
    },
    // Rite of Vigilance
    {
        name: "Rite of Vigilance",
        description:
            "Roll 'Discern' + 'Religion'. On a success, when you close your eyes, you can see the souls of creatures around you, regardless of physical obstructions.",
        type: "major",
        staticBonuses: noBonuses(),
        pickFrom: pickFrom({}),
    },
    {
        name: "Hunter",
        description: "When an ally acts on information from this ability, they roll with 'Mastery' on their first attack.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Rite of Vigilance",
        pickFrom: pickFrom({}),
    },
    {
        name: "Heart's Sight",
        description: "When an ally acts on information from this ability, they roll with 'Mastery' on attempts to socialise with the target.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Rite of Vigilance",
        pickFrom: pickFrom({}),
    },
    {
        name: "Blessing",
        description: "When this ability is active, you can touch an ally and confer the benefits of soul-sight to them as well.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Rite of Vigilance",
        pickFrom: pickFrom({}),
    },
    // Zenith
    {
        name: "Ascension",
        description:
            "The goddess appears before you and blesses you. You become an Angel of the Moon, reshaping your appearance. In your new form, inflict D10 damage with 'Piercing', 6D10 if rolling against those who would threaten the faithful or desecrate sacred ground. All actions aside from attacks automatically fail. At the end of the situation you are transfused into ossified bone-crystal and retired as a player character.",
        type: "zenith",
        staticBonuses: noBonuses(),
        pickFrom: pickFrom({}),
    },
    {
        name: "Glory",
        description:
            "You keep your face covered. When you uncover it, all who can see you are stunned and fall to their knees. After about an hour, they remove on minor 'Blood' or 'Mind' fallout, or downgrade a major to minor. Most NPCs convert to your faith. In the City Above, a team of aelfir hunters working for the solar church are dispatched. They will find and kill you.",
        type: "zenith",
        staticBonuses: noBonuses(),
        pickFrom: pickFrom({}),
    },
    {
        name: "Testament of Faith",
        description:
            "When you die a martyrs death, the ground on which you died (or where you're burried) becomes holy to the church of the Moon Beneath. Over the next few months, pilgrims will visit the site and erect a suitable shrine. For the remainder of the campaign, and at the GM's discretion any future campaigns, the shrine functions as a landmark with some appropriate haunts. Once per campaign, when the surviving player characters visit it, they can beseech your spirit to answer a question. You will deliver valuable wisdom.",
        type: "zenith",
        staticBonuses: noBonuses(),
        pickFrom: pickFrom({}),
    },
]
