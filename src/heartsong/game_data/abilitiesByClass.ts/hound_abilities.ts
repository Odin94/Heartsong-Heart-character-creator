import { Ability } from "../abilities"
import { domain, skill, protection, noBonuses } from "./ability_utils"

export const houndAbilities: Ability[] = [
    // TODOdin: Add "Advanced Training" once we have skillpick
    {
        name: "The Better Part of Valour",
        description: "Gain 'Evade' skill. If you succeed on an 'Evade' roll, all nearby allies roll with mastery for one turn.",
        type: "minor",
        staticBonuses: skill("evade"),
    },
    {
        name: "Close Quarters",
        description: "Gain 'Warren' domain. When in a 'Warren' domain, gain +1 'Blood' protection.",
        type: "minor",
        staticBonuses: domain("warren"),
    },
    {
        name: "Custodian",
        description:
            "Gain 'Mend' skill. If you are in a populated location you can always find someone willing to take you in and show great hospitality.",
        type: "minor",
        staticBonuses: skill("mend"),
    },
    // TODOdin: Add Echoes of the 33rd once we have domainpick
    // TODOdin: Add Hard as Nails once we have protectionpick
    {
        name: "Kill Count",
        description: "Gain 'Kill' skill. Whenever you kill a creature, remove 1 stress.",
        type: "minor",
        staticBonuses: skill("kill"),
    },
    {
        name: "Liquid Courage",
        description:
            "Gain +1 'Mind' protection. When you go drinking to remove 'Mind' stress or fallout, treat the spent resource as one dice higher.",
        type: "minor",
        staticBonuses: protection("mind", 1),
    },
    {
        name: "Marshal",
        description:
            "Gain 'Compel' skill. Once per session, when you enter a landmark, you learn of an injustice, threat or danger that's worrying the people there. You may get paid for helping.",
        type: "minor",
        staticBonuses: skill("compel"),
    },
    {
        name: "Our Glorious Lady",
        description: "Gain 'Religion' domain. Once per session, clear D4 'Blood' stress from an ally.",
        type: "minor",
        staticBonuses: domain("religion"),
    },
    {
        name: "Quartermaster Training",
        description:
            "Gain +1 'Supplies' protection. You can easily improvise weapons. Your 'unarmed' attacks become 'Kill' D6 'Brutal', 'Unreliable'. On a failure, your weapon breaks and your unarmed attacks are D4 as standard.",
        type: "minor",
        staticBonuses: protection("supplies", 1),
    },
    {
        name: "Round the Next Corner",
        description: "Gain 'Delve' skill. Once per delve, find a hidden safe spot where you can rest and heal without incurring a bane.",
        type: "minor",
        staticBonuses: skill("delve"),
    },
    {
        name: "Sergeant",
        description:
            "Gain +1 'Blood' protection. Once per situation, when an adversary or NPC directs their attention towards an ally, declare that they pay attention to you instead.",
        type: "minor",
        staticBonuses: protection("blood", 1),
    },
    // Major

    // Condemn
    {
        name: "Condemn",
        description:
            "Once per session, when you find evidence of someone's (or something's) crimes, you can publicly condemn them. When you or another Hound tracks down a condemned target, roll with mastery.",
        type: "major",
        staticBonuses: noBonuses(),
    },
    {
        name: "Judge",
        description: "When you track a condemned target as part of a delve, increase your stress dice size by 1 step",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Condemn",
    },
    {
        name: "Jury",
        description: "You no longer need evidence to condemn a target, but you do need a name, a picture or a first-hand description.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Condemn",
    },
    {
        name: "Executioner",
        description: "When you attack a condemned target, increase your stress dice size by 1 step.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Condemn",
    },
    // Forewarned and Forearmed
    {
        name: "Forewarned and Forearmed",
        // TODOdin: Check if newlines are working, and maybe find a good way to have better text formatting. Maybe render markdown?
        description:
            "Once per session, when you have an hour or two to spare in a landmark, you can make preparations for the coming challenges. Pick one of the benefits from the list below. You and all other characters who choose to take part in preparations gain this benefit until they next enter a landmark. \n• Whetstone and Weapon Drill: One piece of 'Kill' equipment gains the 'Brutal' tag.\n• Checked and Triple-Checked: One piece of Delve equipment gains the 'Trusty' tag.\n• Toughen Up: Gain +1 'Blood' protection. \n• One for the Road. Gain +1 'Mind' protection.\n• Creative Acquisitions: Gain +1 'Supplies' protection.",
        type: "major",
        staticBonuses: noBonuses(),
    },
    {
        name: "Double Duty",
        description: "Choose two different benefit options instead of one.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Forewarned and Forearmed",
    },
    {
        name: "Encampment",
        description: "You may now perform this action on a delve; add a D6 bane to the delve's resistance if you do.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Forewarned and Forearmed",
    },
    {
        name: "Emergency Supplies",
        description:
            "If you have a few minutes to spare, you can give yourself or one ally one of the benefits from the list by consuming a resource worth D6 or higher. This does not count as the per-session use of the ability.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Forewarned and Forearmed",
    },
    // Stare Down
    {
        name: "Stare Down",
        description:
            "Your gaze functions as a weapon 'Kill' D6, 'ranged'. It only works when your target can see you and if they have the capacity to be scared of you - so criminals are fair game, but  heartsblood predators aren't. You can use this 'weapon' in a haven or other landmark without causing a huge ruckus. Your gaze won't kill people - it's disheartening, and if you reduce an opponent's resistance to 0 with it they surrender, try to bargain their way out or trip and incapacitate themselves whilst fleeing.",
        type: "major",
        staticBonuses: noBonuses(),
    },
    {
        name: "Legendary",
        description: "Your gaze now works on things that shouldn't be scared of you",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Stare Down",
    },
    {
        name: "Nose-to-Nose",
        description: "Your gaze gains the 'Point-blank' tag.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Stare Down",
    },
    {
        name: "No Sympathy",
        description:
            "Once per situation, your gaze functions as 'Mend' 'Mind'/'Blood' D6, 'Ranged' as you give your allies a disapproving glance that spurs them into action.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Stare Down",
    },
    // Trench Fighter
    {
        name: "Trench Fighter",
        description: "When you attack at close range, your attacks gain the 'Piercing' tag, even if you're unarmed.",
        type: "major",
        staticBonuses: noBonuses(),
    },
    {
        name: "Over the Top",
        description: "Gain +2 'Blood' protection against ranged attacks.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Trench Fighter",
    },
    {
        name: "Keep Smiling",
        description: "The first time you suffer 'Mind' stress in a situation, do not roll for fallout.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Trench Fighter",
    },
    {
        name: "Homecoming",
        description:
            "When you enter a location with the Haven domain after a delve, refresh stress according to the size and importance of the location. Three shacks with a campfire is D4; Derelictus is D12.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Trench Fighter",
    },
    // Unstoppable
    {
        name: "Unstoppable",
        description: "When you are suffering from ongoing 'Blood' fallout, increase your Kill stress dice size by one step.",
        type: "major",
        staticBonuses: noBonuses(),
    },
    {
        name: "Limping Onward",
        description: "'Unstoppable' also increases your delve stress dice by one step.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Unstoppable",
    },
    {
        name: "Scars like Medals",
        description: "Gain +1 'Blood' protection for each ongoing fallout you have.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Unstoppable",
    },
    {
        name: "On Your Feet",
        description: "Once per session, downgrade a major 'Blood' fallout you have to a minor 'Blood' fallout.",
        type: "minor",
        staticBonuses: noBonuses(),
        parentName: "Unstoppable",
    },

    // Zenith
    {
        name: "Everlasting Stand",
        description:
            "When a landmark is under threat from outside powers, become the original owner of your badge. You are subsumed into the Hounds and the 33rd will watch the landmark as safe indefinitely.",
        type: "zenith",
        staticBonuses: noBonuses(),
    },
    {
        name: "Fulcrum",
        description:
            "Until the end of the current situation, you roll five dice and pick the highest whenever you make an action as you are filled with the hopes and fears of everyone in the Heart. Once the situation ends, you slope off into the depths of the Heart to fight metaphysical battles beyond the understanding of mortals",
        type: "zenith",
        staticBonuses: noBonuses(),
    },
    {
        name: "Incursion",
        description:
            "Smash your badge apart on an altar to summon the last moments of the 33rd to your location. Reality comes undone as your surroundings turn into a trench warfare zone. The landmark you’re in is destroyed, pretty much everything inside it dies and your mind is blasted into pieces as you witness the lengths they went to in order to survive.",
        type: "zenith",
        staticBonuses: noBonuses(),
    },
]
