import { Ability } from "../abilities"
import { domain, skill, protection, noBonuses } from "./ability_utils"

export const witchAbilities: Ability[] = [
    {
        name: "A Mind of Many Doorways",
        description: "Gain +2 'Mind' protection.",
        type: "minor",
        staticBonuses: protection("mind", 2),
    },
    {
        name: "Blood-Quiet",
        description: "Gain 'Sneak' skill. When you enter 'True Form', 'Sneak' and 'Evade' rolls are no longer 'Risky'.",
        type: "minor",
        staticBonuses: skill("sneak"),
    },
    // TODOdin: add 'Books of Lore' once we have domainpick
    // TODOdin: Add 'Charms and Wards' once we have protectionPick
    {
        name: "Distinguished Lineage",
        description: "Gain 'Haven' domain. Once per session, when you mark stress to a bond, do not roll for fallout.",
        type: "minor",
        staticBonuses: domain("haven"),
    },
    {
        name: "Divinity",
        description:
            "Gain 'Religion' domain. Roll 'Discern' + 'Religion' to follow the secret signs in an inhabited landmark that lead to the hidden places of worship where you are revered as a messenger of the Heart Itself.",
        type: "minor",
        staticBonuses: domain("religion"),
    },
    // TODOdin: Add Heart-Wise once we have skillpick
    {
        name: "Implacable",
        description:
            "Gain 'Endure' skill. Once per session, add 1 to a resistance of your choice. Remove the +1 at the end of the session.",
        type: "minor",
        staticBonuses: skill("endure"),
    },
    {
        name: "The Old Blood",
        description:
            "Gain 'Discern' skill. When you observe someone for a few seconds, you can read their aura and discern their surface-level emotions.",
        type: "minor",
        staticBonuses: skill("discern"),
    },
    {
        name: "Ramblewyrd",
        description:
            "Gain 'Cursed' domain. Once per session, when you are in a 'Cursed' area, remove D6 stress from resistances of your choice.",
        type: "minor",
        staticBonuses: domain("cursed"),
    },
    {
        name: "Red Dominion",
        description: "Gain +2 'Blood' protection.",
        type: "minor",
        staticBonuses: protection("blood", 2),
    },
    {
        name: "Wild-Witch",
        description:
            "Gain 'Wild' domain. When you're in a landmark and have time to prepare, you can turn a resource with the 'Wild' domain into a healing draught. When drunk, this draught removes 'Blood' or 'Mind' stress equal to its dice size minus one step - choose whether it's 'Blood' or 'Mind' when you create it.",
        type: "minor",
        staticBonuses: domain("wild"),
    },
    {
        name: "Witch-Spit",
        description: "Gain 'Mend' skill. When you want it to be, your spit becomes adhesive and can harden into a tarry, sticky substance.",
        type: "minor",
        staticBonuses: skill("mend"),
    },
    // Major

    // Ascendancy
    {
        name: "Ascendancy",
        description:
            "Roll 'Compel' + 'Occult' to cast this spell and draw the Heart Itself into the area around you. The area you're in gains the 'Occult' domain, and reacts appropriately: magic circles blossom on the floor and thrum with dark power, mist floods the air and so on. This lasts until the end of your current situation.",
        type: "major",
        staticBonuses: noBonuses(),
    },
    {
        name: "Bypass",
        description: "The first time you cast this spell on a delve, it functions as a D6 Boon.",
        type: "major",
        staticBonuses: noBonuses(),
        parentName: "Ascendancy",
    },
    {
        name: "Blood Calls for Blood",
        description: "All weapons used in the area increase their stress dice by 1 step for both adversaries and player characters.",
        type: "major",
        staticBonuses: noBonuses(),
        parentName: "Ascendancy",
    },
    {
        name: "Refuge",
        description: "Clear D6 'Fortune' stress on you or an ally each time you cast this spell.",
        type: "major",
        staticBonuses: noBonuses(),
        parentName: "Ascendancy",
    },
    // Crimson Mirror
    {
        name: "Crimson Mirror",
        description:
            "Roll 'Discern' + 'Occult' to cast this spell before you embark on a delve. On a success, you see three omens; describe them. You don't have to be too specific - in fact, the more vague you are, the better. These are fated to come up on the delve. The first time you interact with whatever you find that relates to each omen, you roll with mastery.",
        type: "major",
        staticBonuses: noBonuses(),
    },
    {
        name: "Shared Visions",
        description: "Your allies can also roll with mastery when they interact with the portentous items.",
        type: "major",
        staticBonuses: noBonuses(),
        parentName: "Crimson Mirror",
    },
    {
        name: "Scarlet Insight",
        description: "Once per session, when you cast this spell, clear D8 stress from 'Mind' or 'Fortune'.",
        type: "major",
        staticBonuses: noBonuses(),
        parentName: "Crimson Mirror",
    },
    {
        name: "Dire Portents",
        description:
            "Once per session, re-roll any dice that you or anyone else rolled; the original roll is a vision you received, and you shout a warning (or act differently this time around).",
        type: "major",
        staticBonuses: noBonuses(),
        parentName: "Crimson Mirror",
    },
    // Exsanguinate
    {
        name: "Exsanguinate",
        description:
            "This spell functions as a weapon with the following tags: 'Kill' D6, 'Ranged'. You can mark stress accrued as a result of using this spell to 'Echo'.",
        type: "major",
        staticBonuses: noBonuses(),
    },
    {
        name: "Retch",
        description: "Increase stress dice to D8.",
        type: "major",
        staticBonuses: noBonuses(),
        parentName: "Exsanguinate",
    },
    {
        name: "Maestro",
        description: "'Exsanguinate' gains 'Piercing'.",
        type: "major",
        staticBonuses: noBonuses(),
        parentName: "Exsanguinate",
    },
    {
        name: "As Above, So Below",
        description:
            "You do not need line of sight to use 'Exsanguinate' as long as you have a sympathetic token connected to your target (their hair, a figurine in their shape, a favoured item of theirs, etc.), but you are still limited to making an attack within the usual distance of the 'Ranged' tag.",
        type: "major",
        staticBonuses: noBonuses(),
        parentName: "Exsanguinate",
    },
    // Familiar
    {
        name: "Familiar",
        description:
            "You are accompanied by a small creature - no bigger than a dog - that is cowardly and strange to look at. Describe it. When you take stress from magical sources (including your own), you may assign that stress to your familiar instead of your own resistances. When you mark 4 total stress to your familiar, it is unavailable until the start of the next session. It returns changed; describe what aspect of it has been transformed by the magical energy coursing through it. At the start of each session, remove all stress marked against your familiar",
        type: "major",
        staticBonuses: noBonuses(),
    },
    {
        name: "Resilient",
        description: "You can mark 6 total stress, instead of 4, before you lose access to your familiar for the remainder of the session.",
        type: "major",
        staticBonuses: noBonuses(),
        parentName: "Familiar",
    },
    {
        name: "Hungry",
        description: "Your familiar functions as a D8 'Kill', 'Ranged', 'Unreliable' item.",
        type: "major",
        staticBonuses: noBonuses(),
        parentName: "Familiar",
    },
    {
        name: "Curious ",
        description: "Your familiar functions as a D8 'Delve', 'Unreliable' item.",
        type: "major",
        staticBonuses: noBonuses(),
        parentName: "Familiar",
    },
    // Great and Terrible
    {
        name: "Great and Terrible",
        description:
            "You are no longer forced to assume your true form when you take major fallout. When you choose to enter your true form, all adversaries who can see you take D4 stress.",
        type: "major",
        staticBonuses: noBonuses(),
    },
    {
        name: "Enthrall",
        description:
            "When you enter your true form, you may mark D4 stress to 'Echo'; all who see you transform are stunned into inaction, and you have enough time to make a single action entirely unopposed.",
        type: "major",
        staticBonuses: noBonuses(),
        parentName: "Great and Terrible",
    },
    {
        name: "Sacred Object",
        description:
            "Once per session, when you assume your true form, downgrade one 'Blood' fallout result you are suffering from by one step.",
        type: "major",
        staticBonuses: noBonuses(),
        parentName: "Great and Terrible",
    },
    {
        name: "Union",
        description:
            "Once per situation, when you are in your true form and an action you perform would be considered 'Risky', treat it as 'Standard' difficulty instead.",
        type: "major",
        staticBonuses: noBonuses(),
        parentName: "Great and Terrible",
    },
    // Lair
    {
        name: "Lair",
        description:
            "The building in question is no larger than a small shop or study. Any non-witch who enters your lair must roll 'Resist '+ 'Occult' and mark D6 stress to 'Echo' on a failure or D4 stress to 'Echo' on a partial success. When you are in a landmark, roll 'Mend' + 'Occult' to summon your lair. On a success, it's always been here, as far as anyone knows. Your lair acts as a bond (p. 98) - if it suffers fallout, it's either eaten someone who'll be missed or been damaged by suspicious locals.",
        type: "major",
        staticBonuses: noBonuses(),
    },
    {
        name: "Calm",
        description:
            "Your lair no longer inflicts stress on non-witches when they enter, unless you wish it to. You can't pick specific targets - it's either active or inactive.",
        type: "major",
        staticBonuses: noBonuses(),
        parentName: "Lair",
    },
    {
        name: "Rule",
        description: "While in your lair, you roll with mastery on all actions.",
        type: "major",
        staticBonuses: noBonuses(),
        parentName: "Lair",
    },
    {
        name: "Feed",
        description:
            "Once per session, you may feed a helpless or dead person or animal to your lair to remove stress from your bond. The larger the creature, the more stress you remove from the bond - a cat is D4, a person is D6, and if you can haul or lure a bear in there it's D12.",
        type: "major",
        staticBonuses: noBonuses(),
        parentName: "Lair",
    },

    // Zenith
    {
        name: "Final Form",
        description:
            "You turn into a being of wrath and ruin. You have complete control over the landmark you are currently occupying (or the nearby area, if you're on a delve) and you are omniscient and omnipresent within its borders. You alone chooses who lives and dies inside. At the end of the situation after you activate this power, the area you are in is stained forever with your essence. It counts as one tier deeper than it was before and changes to become appropriately strange. You live on as an echo, a mark on the place; it becomes part of you, and you part of it",
        type: "zenith",
        staticBonuses: noBonuses(),
    },
    {
        name: "Perfect Resurrection",
        description:
            "You can make a perfect copy of someone who has died, but only once. The copy is absolutely the same as the original, right down to the soul. The copy is so good, in fact, that the person can no longer permanently die. If they sustain damage that would kill them, they appear dead, but in fact a new copy is pupating somewhere in the depths of the Heart. It will slide out wetly within a lunar month. They get no say in this, and there is no known way to turn it off short of destroying the Heart Itself. Casting this spell takes an hour or so of ritual chanting and kills you.",
        type: "zenith",
        staticBonuses: noBonuses(),
    },
    {
        name: "The Red Queen",
        description:
            "Following a long period of scheming or a single night of decisive action, you are now in charge of all the witches of Hallow. After a session or two, the realities of being the head witch set in - there is a surprising amount of admin to do, and other witches are always coming to you with requests for aid. Pretty soon you're going to be interred in the Red Vaults beneath Hallow (as all the leaders of the witches are) to join the chorus of elders.",
        type: "zenith",
        staticBonuses: noBonuses(),
    },
]
