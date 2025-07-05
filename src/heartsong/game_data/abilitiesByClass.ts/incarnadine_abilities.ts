import { Ability } from "../abilities";
import { domain, skill, protection, noBonuses, pickFrom } from "./ability_utils";

export const incarnadineAbilities: Ability[] = [
    {
        name: "A Red and Bloody Business",
        description: "Gain 'Kill' skill. If you're killing something that's shed your blood before, your attack gains the 'Brutal' tag.",
        type: "minor",
        staticBonuses: skill("kill"),
        pickFrom: pickFrom({}),
    },
    {
        name: "An Eye for the Strange",
        description: "Gain 'Occult' domain. Once per session, you may change the domain of a resource.",
        type: "minor",
        staticBonuses: domain("occult"),
        pickFrom: pickFrom({}),
    },
    // TODOdin: Add 'Better Safe than Sorry' here once we have protectionpick
    {
        name: "Creative Acquisitions",
        description: "Gain 'Sneak' skill. When you try to steal something of D10 value or higher, roll with mastery.",
        type: "minor",
        staticBonuses: skill("sneak"),
        pickFrom: pickFrom({}),
    },
    {
        name: "Creative Book-Keeping",
        description: "Gain +2 'Supplies' protection.",
        type: "minor",
        staticBonuses: protection("supplies", 2),
        pickFrom: pickFrom({}),
    },
    {
        name: "Eyes in the Back of your Head",
        description: "Gain 'Discern' skill. When you stand still and concentrate, you can see behind you like you had eyes on the back of your head.",
        type: "minor",
        staticBonuses: skill("discern"),
        pickFrom: pickFrom({}),
    },
    // TODOdin: Add "Jack of all Trades" here once we have skillpick
    {
        name: "Lost it All",
        description: "Gain 'Desolate' domain. Once per session, the GM will tell you where the nearest source of wealth is.",
        type: "minor",
        staticBonuses: domain("desolate"),
        pickFrom: pickFrom({}),
    },
    {
        name: "Make Do",
        description:
            "Gain 'Mend' skill. Once per session, you can immediately fix something that's broken - but it only works once. After that, it's destroyed past the point of repair.",
        type: "minor",
        staticBonuses: skill("mend"),
        pickFrom: pickFrom({}),
    },
    {
        name: "On the Run",
        description: "Gain 'Evade' skill. Mark D4 stress to 'Supplies' to shift the attention of a person or creature to another PC or an important NPC.",
        type: "minor",
        staticBonuses: skill("evade"),
        pickFrom: pickFrom({}),
    },
    {
        name: "Priest of Incarne",
        description:
            "Gain 'Religion' domain. Once per session, when you visit a shrine of Incarne and preach to the faithful, refresh equal to the size of the shrine (D4 for cupboard-sized devotionals, D12 for a glorious temple).",
        type: "minor",
        staticBonuses: domain("religion"),
        pickFrom: pickFrom({}),
    },
    {
        name: "Red Marketeer",
        description: "Gain 'Warren' domain. If someone tries to take what's yours, your attacks gain the 'Brutal' tag when you attempt to stop them",
        type: "minor",
        staticBonuses: domain("warren"),
        pickFrom: pickFrom({}),
    },
    {
        name: "Valuable Asset",
        description: "Gain +2 'Fortune' protection.",
        type: "minor",
        staticBonuses: protection("fortune", 2),
        pickFrom: pickFrom({}),
    },
    // TODOdin: Add 'Areas of Opportunity' here once we have domainpick

    // Major

    // Backstab
    {
        name: "Backstab",
        description: "When you attack a target that is unaware of your position with a one-handed melee weapon, your attacks gain the 'Piercing' tag.",
        type: "major",
        staticBonuses: noBonuses(),
        pickFrom: pickFrom({}),
    },
    {
        name: "Dead Eye",
        description: "The benefit also applies to ranged weapons.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Backstab",
        pickFrom: pickFrom({}),
    },
    {
        name: "Never Saw it Coming",
        description:
            "Mark D4 stress to 'Mind' to activate this for your next 'Backstab' against a living person. You attack dice increase in size by two steps.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Backstab",
        pickFrom: pickFrom({}),
    },
    {
        name: "Remuneration",
        description: "When you reduce a target to 0 resistance with 'Backstab', remove stress from 'Supplies' equal to double the value of your current tier.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Backstab",
        pickFrom: pickFrom({}),
    },
    //Broker
    {
        name: "Broker",
        description:
            "Roll 'Mend' + 'Haven' to cast this spell. On a success, remove D6 stress from any resistance (other than Supplies) for one nearby character other than yourself.",
        type: "major",
        staticBonuses: noBonuses(),
        pickFrom: pickFrom({}),
    },
    {
        name: "Invest",
        description: "You can use 'Broker' on yourself.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Broker",
        pickFrom: pickFrom({}),
    },
    {
        name: "Transferral",
        description:
            "Roll 'Mend' + 'Haven' to cast this spell. On a success, move a Minor fallout from any willing target other than yourself to any other willing target. Both targets must be within arm's reach of one another, and the receiving party must be able to bear the fallout (i.e. a creature with no legs can't receive 'Limping')",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Broker",
        pickFrom: pickFrom({}),
    },
    {
        name: "Inflict",
        description:
            "When you cast 'Transferral', the target receiving the fallout does not have to be willing to receive it. Casting the spell in this way uses the target's difficulty instead of standard difficulty.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Broker",
        pickFrom: pickFrom({}),
    },
    // Crave
    {
        name: "Crave",
        description:
            "Roll 'Compel' + 'Haven' to cast this spell on an NPC you're speaking to. On a success, you can instill a great desire for something in them. If the thing they want is unusual for them, casting this spell is Risky. On a success, they now fiercely want whatever it is you've specified until the end of the current situation.",
        type: "major",
        staticBonuses: noBonuses(),
        pickFrom: pickFrom({}),
    },
    {
        name: "Addict",
        description:
            "Extend the duration of 'Crave' until the end of the session. If they don't get what they want, they either descend into violence to get it or lose their mind (GM's choice).",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Crave",
        pickFrom: pickFrom({}),
    },
    {
        name: "Viral",
        description: "A target of 'Crave' has a 1 in 6 chance to spread the desire to anyone they talk to for over 1 Minute (you are immune).",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Crave",
        pickFrom: pickFrom({}),
    },
    {
        name: "Conditioning",
        description:
            "You may take D6 'Mind' stress to scar the target of your 'Crave' with the desire. The first time they see you each session, treat them as if you had just cast 'Crave' on them with the same desire.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Crave",
        pickFrom: pickFrom({}),
    },
    // Debtor's Reds
    {
        name: "Debtor's Reds",
        description:
            "When you wear the sacred robes of Incarne and a myriad of holy symbols, ledgers and freshly-minted coins, you may automatically cause 1 stress to an adversary who can see you each time you act.",
        type: "major",
        staticBonuses: noBonuses(),
        pickFrom: pickFrom({}),
    },
    {
        name: "Buy Off",
        description: "Once per situation, while wearing 'Debtor's Reds', and incur stress, mark the stress to 'Supplies' instead.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Debtor's Reds",
        pickFrom: pickFrom({}),
    },
    {
        name: "Cycle of Debt",
        description:
            "Roll 'Kill' + 'Religion' to cast this spell. Target an adversary who has been marked by 'Debtor's Reds' and make them take stress equal to your 'Supplies' stress.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Debtor's Reds",
        pickFrom: pickFrom({}),
    },
    {
        name: "Assume Debt",
        description:
            "While wearing 'Debtor's Reds', any time you mark 'Supplies' stress, you may choose to ignore your 'Supplies' protection. If you do so, you may immediately cause someone in arms reach to take the same amount of stress you've just taken.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Debtor's Reds",
        pickFrom: pickFrom({}),
    },
    // Karmic Ledger
    {
        name: "Karmic Ledger",
        description:
            "Roll 'Discern' + 'Haven' to cast this spell on a target you can see and hear. On a success, you determine their deepest karmic debt: the greatest thing that they've taken from someone else (money, valuables, freedom, a son, etc). When you act on this information, roll with mastery.",
        type: "major",
        staticBonuses: noBonuses(),
        pickFrom: pickFrom({}),
    },
    {
        name: "Connection",
        description: "When you cast 'Karmic Ledger', you can see who the debt is owed to via an ephemeral red string connecting the two parties.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Karmic Ledger",
        pickFrom: pickFrom({}),
    },
    {
        name: "Harvest",
        description:
            "When you cast 'Karmic Ledger', you can ask the GM to rate the value of their debt from D4 to D12. When you murder the target and give their debt to Incarne, remove stress equal to the dice size of their debt.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Karmic Ledger",
        pickFrom: pickFrom({}),
    },
    {
        name: "Candidate",
        description:
            "Once per session, when you spend a few minutes communing with Incarne, they show you a vision of a person with outstanding karmic debt in your area.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Karmic Ledger",
        pickFrom: pickFrom({}),
    },
    // Network
    {
        name: "Network",
        description:
            "When in a 'Haven' landmark, roll 'Mend' + 'Religion' to cast this spell as you build a shrine to Incarne. On success, you add the landmark to your trade network. When you enter a haven that is part of your trade network, gain a D4 (increased by 1 step for each haven in your network, max. D10) 'Haven' resource. You can lose a connected haven through a new major 'Fortune'/'Supplies' fallout called 'Severed'.",
        type: "major",
        staticBonuses: noBonuses(),
        pickFrom: pickFrom({}),
    },
    {
        name: "Proliferation",
        description:
            "Whilst at a haven that's in your trade network, you and your party may use haunts located in havens that you are not currently visiting. When you use a haunt in this way, halve the value rolled on the dice when determining how much stress to remove from your resistances. If you use such a haunt to remove fallout, increase the cost by 1 step",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Network",
        pickFrom: pickFrom({}),
    },
    {
        name: "Pathways",
        description:
            "When you and your allies attempt to establish a Connection between landmarks and at least one of them is part of your trade network, roll with mastery.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Network",
        pickFrom: pickFrom({}),
    },
    {
        name: "Money Talks",
        description: "Whilst at a shrine to Incarne, you can communicate with bonds or haunts in any haven that's part of your trade network.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Network",
        pickFrom: pickFrom({}),
    },

    // Zenith
    {
        name: "Ultimate Credit",
        description:
            "Once, you can buy anything (except the Heart itself). You have as much control over this item or concept as you have over any object you own. Two sessions from now, the debt will be recalled and it will take your life.",
        type: "zenith",
        staticBonuses: noBonuses(),
        pickFrom: pickFrom({}),
    },
    {
        name: "Ultimate Debt",
        description:
            "Once you can unload the weight of Incarne's debt upon a single individual, location or entity (except the Heart itself). Everything will go catastrophically wrong for the target, but they do not die. Once per situation, you can harvest the debt on the target to clear stress from your resistance tracks. When doing so, roll a D10. 2 or higher: Remove that much stress. 1: Your luck runs out and a cosmic loophole sees Incarne claim your life.",
        type: "zenith",
        staticBonuses: noBonuses(),
        pickFrom: pickFrom({}),
    },
    {
        name: "Ultimate Reward",
        description: "You got out of Incarne's debt. You can retire to a normal life. You die several decades from now, surrounded by loved ones.",
        type: "zenith",
        staticBonuses: noBonuses(),
        pickFrom: pickFrom({}),
    },
];
