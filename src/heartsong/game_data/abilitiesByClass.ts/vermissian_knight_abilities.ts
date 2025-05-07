import { Ability } from "../abilities"
import { domain, skill, protection, noBonuses } from "./ability_utils"

export const vermissianKnightAbilities: Ability[] = [
    {
        name: "Arcane Rebreather",
        description: "Gain +2 'Echo' protection.",
        type: "minor",
        staticBonuses: protection("echo", 2),
    },
    {
        name: "Armour Plating",
        description: "Gain +2 'Blood' protection.",
        type: "minor",
        staticBonuses: protection("blood", 2),
    },
    {
        name: "Black Knight",
        description:
            "Gain 'Occult' domain. Once per session, when you enter a landmark, you can intuit the location of an occult sect who are hiding information that will aid you in your quest.",
        type: "minor",
        staticBonuses: domain("occult"),
    },
    {
        name: "Knight Protector",
        description:
            "Gain 'Kill' skill. Once per situation, when an ally within arm's reach would mark stress to 'Blood', you mark an equivalent amount to 'Blood' instead.",
        type: "minor",
        staticBonuses: skill("kill"),
    },
    {
        name: "Hellwalker",
        description: "Gain 'Cursed' domain. You can use a resource with the 'Cursed' domain to activate 'Vermissian Plate'.",
        type: "minor",
        staticBonuses: domain("cursed"),
    },
    {
        name: "Phantom Lens",
        description: "Gain 'Hunt' skill. While you wear these lenses, you can track anything - even if it doesn't leave a tangible trail",
        type: "minor",
        staticBonuses: skill("hunt"),
    },
    {
        name: "Protector's Gauntlets",
        description: "Gain +1 'Blood' protection and +1 'Fortune' protection.",
        type: "minor",
        staticBonuses: {
            domains: [],
            skills: [],
            protections: [
                {
                    resistance: "blood",
                    amount: 1,
                },
                {
                    resistance: "fortune",
                    amount: 1,
                },
            ],
        },
    },
    {
        name: "Sanguinary Array",
        description:
            "Gain 'Discern' skill. If one of your senses becomes damaged or unusable, you can replace it with the weird echoes that shudder through your exposed blood - it's not perfect, but it'll do.",
        type: "minor",
        staticBonuses: skill("discern"),
    },
    // TODOdin: Add "Stalwart" once we have resistancepick
    {
        name: "Steelbones",
        description: "Gain 'Endure' skill. You can fall distances of up to 3 storeys without taking damage.",
        type: "minor",
        staticBonuses: skill("endure"),
    },
    // TODOdin: add 'Student of the Sages' once we have skillpick
    {
        name: "Tunnel Rat",
        description:
            "Gain 'Warren' domain. You can hold your breath for a very long time, allowing you to stay underwater or in toxic areas for extended periods.",
        type: "minor",
        staticBonuses: domain("warren"),
    },
    // TODOdin: Add 'Well Travelled' once we have domainpick

    // Major

    // Aetheric Field
    {
        name: "Aetheric Field",
        description: "Once per session, gain +3 'Echo' protection until the end of the situation.",
        type: "major",
        staticBonuses: noBonuses(),
    },
    {
        name: "Helixican Burst",
        description: "When you activate 'Aetheric Field', deal damage equal to your 'Echo' protection to nearby adversaries.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Aetheric Field",
    },
    {
        name: "Recharge",
        description:
            "You can use 'Aetheric Field' multiple times per session by consuming a D6 or higher 'Occult' or 'Cursed' resource for each additional use.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Aetheric Field",
    },
    {
        name: "Anathema",
        description: "While 'Aetheric Field' is active, your melee attacks against heartsblood creatures or people gain 'Brutal'.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Aetheric Field",
    },
    // Dragon-Killer
    {
        name: "Dragon-Killer",
        description:
            "Gain a Greatblade with two profiles: 'Kill', D6, 'Tiring' against humans, and 'Kill', D10, 'Tiring' against targets significantly larger than yourself.",
        type: "major",
        staticBonuses: noBonuses(),
    },
    {
        name: "Hunt",
        description:
            "Name the creature that is coming after you. Once per session, you can declare that it replaces the opposition in a dangerous scene as it eats them, chases them off or causes a big distraction - the GM decides. You'll have to fight or evade it yourself now, of course. If you kill it, gain a minor advance and remove this ability.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Dragon-Killer",
    },
    {
        name: "Endurance Training",
        description: "Your greatblade no longer has the Tiring tag, and inflicts D8 stress against human-sized targets.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Dragon-Killer",
    },
    {
        name: "Applied Research",
        description:
            "Once per situation, when you inflict stress on an adversary, you can identify its weak spots. For the remainder of the situation, you treat that adversary's difficulty as one step lower (to a minimum of 'Standard') when acting against it.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Dragon-Killer",
    },
    // Get Behind Me
    {
        name: "Get Behind Me",
        description:
            "Any ally within arm's reach of you gains +1 'Blood' protection thanks to your interventions. Once per situation, you can bellow an order and remove D4 'Blood' or 'Mind' stress from a nearby ally.",
        type: "major",
        staticBonuses: noBonuses(),
    },
    {
        name: "Last-Minute Intervention",
        description:
            "Once per session, when an ally within arm's reach of you suffers 'Blood' fallout, immediately downgrade it by one step (or remove it if it's minor fallout).",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Get Behind Me",
    },
    {
        name: "Steam Vent",
        description: "Your armour gains the 'Smoke' tag, and you can activate it at will.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Get Behind Me",
    },
    {
        name: "Back-to-Back",
        description: "If there's only one ally within arm's reach of you, they gain +2 'Blood' protection instead of +1.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Get Behind Me",
    },
    // Overclock
    {
        name: "Overclock",
        description:
            "You may activate this ability at any time. When you do, make an immediate melee attack; your weapon gains the 'Brutal' tag. After using the ability, mark D4 stress to 'Fortune' as you push your luck and strain your engines.",
        type: "major",
        staticBonuses: noBonuses(),
    },
    {
        name: "Puncture",
        description:
            "When you activate 'Overclock', you may choose to add 'Piercing' to your attacks in addition to 'Brutal'. If you do this, mark D6 'Fortune' stress after using the ability.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Overclock",
    },
    {
        name: "Momentum",
        description: "When you activate 'Overclock', you may choose to add 'Trusty' to a 'Delve' roll instead of 'Brutal' to an attack.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Overclock",
    },
    {
        name: "Galvanic Crucible",
        description:
            "You may activate 'Vermissian Plate' twice per session instead of once. The second time you do it, mark D4 stress to 'Fortune'.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Overclock",
    },
    // Trailblazer
    {
        name: "Trailblazer",
        description:
            "When you lead a party on a delve, you may activate this ability. When active, increase the stress dice inflicted on the delve (and that the delve inflicts on you) by one step.",
        type: "major",
        staticBonuses: noBonuses(),
    },
    {
        name: "First to the Front",
        description:
            "When you lead a party in a fight you may activate this ability. When active, increase the stress dice that you and the adversary inflict on each other by one step",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Trailblazer",
    },
    {
        name: "Pathfinder",
        description: "When you attempt to establish a connection on a delve, roll with mastery.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Trailblazer",
    },
    {
        name: "Keep Your Heads Down",
        description: "Whilst on a delve, any ally who can see or hear you while you give orders gains +1 'Fortune' protection.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Trailblazer",
    },

    // Zenith
    {
        name: "End of the Line",
        description:
            "On tier 2 or deeper, you may activate this power. You learn of the location of a unique and extraordinary landmark. Work out what it is with the GM. Once you complete a delve to reach it, you cannot leave again. Instead, die in some tragic fashion, vow to protect it forever or ascend into a pure state of electricity and echoing rails. Your character is removed from the story.",
        type: "minor",
        staticBonuses: noBonuses(),
    },
    {
        name: "Perpetual Motion Machine",
        description:
            "Upon implantation of the heartseed into your suit's furnace, you become an unstoppable force within the City Beneath - indeed, you can never stop moving. You stamp off into the darkness, and your character is removed from the story except for the 'Deus Ex Machina' ability that is granted to all surviving members of your party.\n\n'Deus Ex Machina': May only be used once per campaign. When you are outside of a landmark and you or an ally suffers Major or Critical fallout, an inhuman collection of meat and twisted steel - the Vermissian Knight - arrives. They've been watching you this whole time. They immediately inflict 25 stress on an adversary of the GM's choosing, then disappear into the City Beneath to protect other delvers.",
        type: "minor",
        staticBonuses: noBonuses(),
    },
    {
        name: "The Last Train",
        description:
            "The Last Train arrives at your current position by the most direct and destructive route, destroying anything in its path. You are killed when this ability is used, crushed under the wheels of the train, riddled with strange energies and cooked in your armour or burned out from the occult strain.",
        type: "minor",
        staticBonuses: noBonuses(),
    },
]
