import { DomainKey } from "./domains"
import { SkillKey } from "./skills"
import { Ability } from "./abilities"
import { noBonuses } from "./abilitiesByClass.ts/ability_utils"

export const characterClasses = [
    "Cleaver",
    "Deadwalker",
    "Deep Apiarist",
    "Heretic",
    "Hound",
    "Incarnadine",
    "Junk Mage",
    "Vermissian Knight",
    "Witch",
] as const
export type CharacterClass = (typeof characterClasses)[number]

export type CoreTraits = {
    skill: SkillKey
    domain: DomainKey
    resource: string
    equipment: string
    pickEquipment: string[]
    abilities: Ability[]
}

export const isCharacterClass = (key: string): key is CharacterClass => {
    return characterClasses.includes(key as CharacterClass)
}

export const coreTraitsByCharacter: Record<CharacterClass, CoreTraits> = {
    Cleaver: {
        skill: "hunt",
        domain: "cursed",
        resource: "A freshly-harvested heart that still occasionally twitches (D6 'Wild')",
        equipment: "Hunting Knife ('Kill' D6)",
        pickEquipment: [
            "Cleaver ('Kill' D8, 'Brutal', 'Tiring')",
            "Bone charms and animal-gut sutures ('Mend' 'Blood' D6)",
            "Heavy-draw bow ('Kill' D8, 'Ranged', 'Tiring')",
        ],
        abilities: [
            {
                name: "Heartsblood",
                description:
                    "Your minimum protection value for all resistances is equal to the tier of the Heart you are currently on, unless you lose protection to a Fallout.",
                type: "core",
                staticBonuses: noBonuses(),
            },
            {
                name: "The Red Feast",
                description:
                    "When you eat a resource, you gain any domains associated with that resource until the end of the situation. If you already have access to the domain, gain an appropriate knack. There's no limit to what you can eat, but tough or noxious materials might require an 'Endure'+'Cursed' check to avoid causing yourself harm. Consuming resources requires your attention and leaves you exposed, so doing it successfully in stressful situations (such as combat) could require a 'Sneak' or 'Evade' roll.",
                type: "core",
                staticBonuses: noBonuses(),
            },
        ],
    },
    Deadwalker: {
        skill: "delve",
        domain: "desolate",
        resource: "Bag of interesting teeth (D6 'Desolate')",
        equipment: "",
        pickEquipment: [
            "Hunting Rifle ('Kill' D6, 'Extreme Range', 'Reload')",
            "Greatsword ('Kill' D10, 'Tiring')",
            "Bootleg ambrosia ('Mend' 'Mind' D6, 'Potent', 'Expensive') and ritual blade ('Kill' D6)",
        ],
        abilities: [
            {
                name: "Enter the Grey",
                description:
                    "Roll 'Delve' + 'Religion' to enact this ritual. It takes around ten minutes of preparation. On a success, the smoke clears, and you (and anyone you bring with you) are in the Grey. Within the Grey, the world is a shadowy echo of its living counterpart. Some souls linger here, awaiting their eternal reward, but for the most part it is grim, empty and monochrome. (For more information on travelling and surviving the Grey, see Source Book p. 169.) Exiting the Grey is a simple enough task for a Deadwalker and those they ferry across; it's a 'Delve'+'Religion' roll for anyone else.",
                type: "core",
                staticBonuses: noBonuses(),
            },
        ],
    },
    "Deep Apiarist": {
        skill: "mend",
        domain: "occult",
        resource: "Heartsbloom rose in a glass jar (D6 'Occult', 'Fragile')",
        equipment: "Hive Tool ('Kill' D4, 'Brutal')",
        pickEquipment: [
            "Dimensional Barometer ('Delve' D6)",
            "Hunting Rifle ('Kill' D6, 'Reload', 'Extreme Range')",
            "Smoker ('Kill' D4, 'Debilitating', 'Smoke')",
        ],
        abilities: [
            {
                name: "The Hive",
                description:
                    "Your bee hive lives inside you. Their curious buzzing aligns your mind with the Hive. At the beginning of each situation, clear all Mind stress. You can never benefit from 'Mind' protection or remove stress from 'Mind', aside from using this ability.",
                type: "core",
                staticBonuses: noBonuses(),
            },
            {
                name: "Release the Swarm",
                description: "Gain access to the following weapon: ('Kill' D4, 'Spread', 'Ranged').",
                type: "core",
                staticBonuses: noBonuses(),
            },
        ],
    },
    Heretic: {
        skill: "mend",
        domain: "religion",
        resource: "A single devotional candle that burns with a silver flame (D6 'Religion')",
        equipment: "",
        pickEquipment: [
            "Spireblack brazier (Unlit: 'Kill' D6) (Lit: 'Kill' D8, 'Obscuring', 'Dangerous')",
            "Breech-loading Pistol ('Kill' D6, 'Ranged', 'Reload') and Seeker's blade ('Kill' D6, 'Brutal')",
            "Scripture-etched bandages and blessed oils ('Mend' 'Blood'/'Mind' D6) and staff ('Kill' D6)",
        ],
        abilities: [
            {
                name: "Ministrations",
                description:
                    "Once per session, lead your allies in a service of praise to the Moon Beneath (how you practice your faith is up to you). All player characters who took part can remove one Minor 'Blood' or 'Mind' fallout, or downgrade one Major 'Blood' or 'Mind' fallout to Minor, at the end of the service. If you perform this service whilst on a delve, add +D4 to the delve's resistance",
                type: "core",
                staticBonuses: noBonuses(),
            },
        ],
    },
    Hound: {
        skill: "hunt",
        domain: "haven",
        resource: "Bottle of rotgut liquor (D6 'Haven')",
        equipment: "",
        pickEquipment: [
            "Standard-issue Legrande rifle ('Kill' D8, 'Ranged', 'Piercing', 'Expensive')",
            "Repeater sidearm ('Kill' D6, 'Ranged', 'Brutal', 'Reload') and Knife ('Kill' D6)",
            "Well-stocked Haversack ('Mend' 'Supplier' D6) and Cudgel ('Kill' D6)",
        ],
        abilities: [
            {
                name: "In the thick of it",
                description:
                    "Once per situation, when you would mark stress to any other resistance than 'Fortune', mark it to 'Fortune'. When you suffer 'Fortune' fallout, roll with mastery for the remainder of the situation.",
                type: "core",
                staticBonuses: noBonuses(),
            },
        ],
    },
    Incarnadine: {
        skill: "compel",
        domain: "haven",
        resource: "Second-hand wedding ring (D6 'Haven')",
        equipment: "Hooked blade ('Kill' D6)",
        pickEquipment: [
            "Filigreed Revolver ('Kill' D8, 'Ranged', 'Expensive')",
            "Bailiff's Iron Cudgel ('Kill' D8, 'Tiring')",
            "Home-made Spireblack Pipe Bombs ('Kill' D6, 'Ranged', 'Spread', 'One-Shot'",
        ],
        abilities: [
            {
                name: "The Cost of Doing Business",
                description:
                    "At any time you may consume a resource and roll its dice; set this dice aside. When you perform an action or inflict stress, but before you roll the dice to resolve it, you may replace any unrolled dice in your pool with the dice you set aside. Once used in this manner, it is consumed. If you have an unspent dice set aside at the end of the session, you take 'Fortune' stress equal to the value rolled on the dice.",
                type: "core",
                staticBonuses: noBonuses(),
            },
            {
                name: "Mutually Assured Destruction",
                description:
                    "If you die, the wards placed on your soul detonate in an attempt to take down whoever did you in. You explode and inflict stress equal to D8 + your current 'Fortune' stress on anyone standing nearby.",
                type: "core",
                staticBonuses: noBonuses(),
            },
        ],
    },
    "Junk Mage": {
        skill: "discern",
        domain: "occult",
        resource: "Vial of cursed ink (D6 'Cursed')",
        equipment: "",
        pickEquipment: [
            "Two old-fashioned pistols ('Kill' D8, 'Ranged', 'Loud', 'One-Shot')",
            "Hungry knife ('Kill' D6, 'Brutal', 'Bloodbound', 'Dangerous')",
            "Overstuffed coat ('Mend' 'Supplies' D6) and Blunderbuss ('Kill' D4, 'Spread', 'Point-blank', 'One-Shot')",
        ],
        abilities: [
            {
                name: "Ravening Knowledge",
                description: "When your 'Mind' stress is 4 or higher, roll with mastery when you attempt to cast a spell.",
                type: "core",
                staticBonuses: noBonuses(),
            },
            {
                name: "Sacrifice",
                description:
                    "Before you cast a spell from this class, you can opt to destroy a resource with the 'Occult' domain. Roll the resource's dice; the amount rolled is added to your Protection value against any stress incurred as a result of casting the spell.",
                type: "core",
                staticBonuses: noBonuses(),
            },
        ],
    },
    "Vermissian Knight": {
        skill: "delve",
        domain: "technology",
        resource: "Spare capacitors and wires (D6 'Technology')",
        equipment: "",
        pickEquipment: [
            "Pneumatic Hammer ('Kill' D8, 'Brutal', 'Loud', 'Tiring')",
            "Scrapsword ('Kill' D6) and Magelight rig ('Delve' D6)",
            "Steel door shield ('Kill' D6, 'Block')",
        ],
        abilities: [
            {
                name: "Vermissian Plate",
                description:
                    "Once per session, when you consume a resource with the 'Technology' or 'Occult' domains by augmenting or repairing your armour, roll the resource's dice and choose one of the following: \n• Remove stress marked against 'Blood', 'Mind' or 'Echo' equal to the amount rolled. \n• Inflict stress on a delve or adversary equal to the amount rolled. \n• (D8 resource or higher) Gain access to a skill or domain for the rest of the session. \n• (D8 resource or higher) Increase your 'Blood' protection by 1 for the rest of the situation.",
                type: "core",
                staticBonuses: noBonuses(),
            },
        ],
    },
    Witch: {
        skill: "compel",
        domain: "occult",
        resource: "Tattered finery (a silk scarf, worn jewellery, etc.) (D6 'Haven')",
        equipment: "",
        pickEquipment: [
            "Sacred Blade ('Kill' D6, 'Bloodbound')",
            "Goat's Leg Carbine ('Kill' D6, 'Ranged', 'Reload')",
            "Physiker's bag ('Mend' 'Blood' D6)",
        ],
        abilities: [
            {
                name: "Crucible",
                description:
                    "At any time, roll a D6. If it's equal to or under your current 'Echo' stress, clear that much stress from 'Echo' and roll with mastery on your next action. If it's over your current 'Echo' stress, add that much stress to 'Echo'.",
                type: "core",
                staticBonuses: noBonuses(),
            },
            {
                name: "True Form",
                description:
                    "Whenever you want to, or when you suffer Major fallout, you enter your true form - describe it. When in your true form, you roll with mastery on 'Hunt' and 'Kill' checks, but all other checks become 'Risky'. At the end of the current situation, you revert to your humanoid form.",
                type: "core",
                staticBonuses: noBonuses(),
            },
        ],
    },
}
