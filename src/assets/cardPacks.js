export const allAncestryCards = {
    dwarf: [
        {
            cardName:'For Karl!',
            action: 'Active',
            description: 'Make a Melee attack. If you hit you deal an extra +1d6 damage. If you miss, you can make another melee attack.',
            from: 'dwarf',
            level: 1
        },
        {
            cardName:'Finally a Fair Fight',
            action: 'Passive',
            description: 'When 3 or more enemies are adjacent to you, you have minor advantage on all attacks.',
            from: 'dwarf',
            level: 1
        },
        {
            cardName:'Shrug It Off',
            action: 'Triggered - Burn',
            description: 'When you get hit with an attack it deals no damage nor does it inflict any negative status effects.',
            from: 'dwarf',
            level: 2
        },
        {
            cardName:'Ballad of the Mountain King',
            action: 'Active - Spell',
            description: 'For 10 minutes you sing of the triumphs of past kings. While you sing Allies within 10 yards that can hear the song cannot be moved by enemies, knocked prone, or be frightened. Additionally they deal an extra +1d6 damage with weapon attacks.',
            from: 'dwarf',
            level: 7
        }
    ],
    elf: [
        {
            cardName:'Wisdom of Age',
            action: 'Triggered',
            description: 'When you roll one of the following skill, roll with major advantage: History, Magic Knowledge, Nature, Stealth, Animal Handling, Perception',
            from: 'elf',
            level: 1
        },
        {
            cardName:'Made to Move',
            action: 'Active',
            description: 'You can move up to twice your movement speed. ',
            from: 'elf',
            level: 1
        },
        {
            cardName:'From the Shadows',
            action: 'Triggered - Burn',
            description: 'When combat starts you are hidden from all enemies and move to the nearest cover.',
            from: 'elf',
            level: 2
        },
        {
            cardName:'One with Nature',
            action: 'Passive',
            description: 'You take half damage from the following types: Cold, Fire, Electric. Additionally, when you are hit with one of the above types your next attack deals extra damage equal to what you took.',
            from: 'elf',
            level: 7
        }
    ],
    faeling: [
        {
            cardName:'Otherworldly Step',
            action: 'Active - Burn',
            description: 'Teleport to an empty space you can see,  that is up to your move speed away.',
            from: 'faeling',
            level: 1
        },
        {
            cardName:'Pain and Pleasure',
            action: 'Active',
            description: 'Make an attack, if the attack hits the target, make a “Resist Manipulation” roll against your “Manipulation” roll. On a failure the target is Charmed for 1 round.',
            from: 'faeling',
            level: 1
        },
        {
            cardName:'Glamor',
            action: 'Active - Burn - Spell',
            description: 'You weave fae magic and can disguise yourself as another person, though not your voice, that is in your size category. You can also keep your facial features and just change your outfit’s appearance. If you change your face the effect lasts for 1 hour and 1 minute. Any other changes last until midnight.',
            from: 'faeling',
            level: 2
        }
    ],
    goblin: [
        {
            cardName:'Cheese it!',
            action: 'Active - Burn',
            description: 'Move twice your move speed without taking attacks of opportunity.',
            from: 'goblin',
            level: 1
        },
        {
            cardName:'Sneaky Buggers',
            action: 'Passive',
            description: 'You gain minor advantage on “Stealth” rolls',
            from: 'goblin',
            level: 1
        },
        {
            cardName:'Adaptable',
            action: 'Active',
            description: 'For the next hour, pick one damage type. You have damage resistance 2 for that type for the next hour.',
            from: 'goblin',
            level: 2
        }
    ],
    human: [
        {
            cardName:'Human Tenacity',
            action: 'Triggered - Burn',
            description: 'When you successfully resist a spell or ability effect, heal your healing rate.',
            from: 'human',
            level: 1
        },
        {
            cardName:'Jack of All Trades',
            action: 'Triggered',
            description: 'When you roll any skill roll, roll with minor advantage.',
            from: 'human',
            level: 1
        },
        {
            cardName:'Will to Survive',
            action: 'Triggered - Burn',
            description: 'When you are knocked to 0 hit points, At the beginning of your next turn you heal your healing rate, stand up, and have major advantage on all attacks for the turn.',
            from: 'human',
            level: 7
        }
    ]
}

export const allClassOneCards = {
    fighter: [
         {
            cardName:'Weapons Training',
            action: 'Passive',
            description: 'All basic weapon attack rolls made with weapons are made with minor advantage.',
            from: 'fighter',
            level: 1
        },
        {
            cardName:'Precision Strike',
            action: 'Active',
            description: 'Make a weapon attack, on a hit deal +2d6 extra damage.',
            from: 'fighter',
            level: 1
        },
        {
            cardName:'Quick Strikes',
            action: 'Active',
            description: 'Make 2 weapon attacks. You can swap weapons between attacks.',
            from: 'fighter',
            level: 1
        },
        {
            cardName:'Push Through the Pain',
            action: 'Active - Burn',
            description: 'Make a weapon attack with major advantage. In addition, Heal your healing rate.',
            from: 'fighter',
            level: 1
        },
        {
            cardName:'Nothing Beats Experience',
            action: 'Passive',
            description: 'Attacks with the “Ranged Attack” or “Melee Attack” skills deal an extra +1d6 physical damage.',
            from: 'fighter',
            level: 4
        },
    ],
    mage: [
         {
            cardName:'Magic Bolt ',
            action: 'Passive - Spell',
            description: 'You can spend an action point to cast a bolt of raw magic at one target you can see. Roll any “Magic School” skill against the target’s defense. On a hit deal 1d6 arcane damage. In addition you can discard a card to have it explode instead dealing 1d6 to a 3 hex area or deal additional +1d6 damage.',
            from: 'mage',
            level: 1
        },
        {
            cardName:'Magical Blast',
            action: 'Active - Spell - Burn',
            description: 'In a 6 yard long, 2 yard wide line originating from you, all creatures must make a “Reflexes” skill roll against any of your “Magic School” skills. If they fail each target takes 2d6 + Int arcane damage. If they succeed they take half that.',
            from: 'mage',
            level: 1
        },
        {
            cardName:'Minor Telekinesis',
            action: 'Active - Spell',
            description: 'Choose one size 1 target within 6 yards, You can move them 3 yards in any direction. If the target resists they roll “Athletics” against any of your “Magic School” skills. If they succeed, they aren’t moved by your spell.',
            from: 'mage',
            level: 1
        },
        {
            cardName:'Magical Shards',
            action: 'Active - Spell - Burn',
            description: 'In a 5 yard wide circle within 10 yards of you, all creatures must make a “Toughness” roll against any of your “Magic School” skills. If they fail they take 2d6 arcane damage and have major disadvantage on their next attack. If they succeed they take half the damage. Finally, the affected area is difficult terrain for a number of rounds equal to your intelligence trait.',
            from: 'mage',
            level: 1
        },
        {
            cardName:'Improved Magic Bolt',
            action: 'Passive - Spell',
            description: 'You can spend an action point to cast a bolt of raw magic at one target you can see. Roll any “Magic School” skill against the target’s defense. On a hit deal 1d6 +  your Int, Will, or Charm in arcane damage. In addition you can discard a card to have it explode instead dealing 1d6 to a 3 yards area or deal additional +2d6 damage.',
            from: 'mage',
            level: 4
        },
    ],
    nomad: [
         {
            cardName:'Sure Feet, Quick Hands',
            action: 'Passive',
            description: 'You’re unaffected by difficult terrain and when you make a free attack you can use a ranged attack without disadvantage instead of a melee attack.',
            from: 'nomad',
            level: 1
        },
        {
            cardName:'Sure Shot',
            action: 'Active',
            description: 'Make a “Ranged Attack” roll with minor advantage, on a hit the attack deals an extra +1d6 damage.',
            from: 'nomad',
            level: 1
        },
        {
            cardName:'Hit to the Knee',
            action: 'Triggered',
            description: 'When you hit with an attack, the target makes an “Athletics” roll against your “Ranged Attack” roll. If they fail, they fall prone.',
            from: 'nomad',
            level: 1
        },
        {
            cardName:'Volley of Arrows',
            action: 'Active - Burn',
            description: 'Make 3 “Ranged Attack” rolls against a creature or creatures within range. On a hit, in addition to dealing damage the target is immobilized until the end of their next turn.',
            from: 'nomad',
            level: 1
        },
        {
            cardName:'Smoke Bomb',
            action: 'Triggered ',
            description: 'When you hit a target with a weapon attack, smoke bursts out covering a 4 yard wide area originating from the target of the attack. Creatures in the smoke are considered blind while in the area. The smoke lasts for 1 minute.',
            from: 'nomad',
            level: 4
        },
    ],
    priest: [
         {
            cardName:'Rebuke',
            action: 'Passive - Spell',
            description: 'When an enemy attacks you, you can use your Free Attack against them using a “Magic School: Divine” against their defense. On a hit you deal 1d3 + Will divine damage.',
            from: 'priest',
            level: 1
        },
        {
            cardName:'Heal',
            action: 'Active - Spell',
            description: 'Heal one target up to 3 yards away from you by their healing rate.',
            from: 'priest',
            level: 1
        },
        {
            cardName:'Prayer for the Righteous',
            action: 'Active - Spell',
            description: 'Target one ally within 5 yards. For a number of rounds equal to your Will, you and that ally deal an extra divine damage equal to your Will when you hit with your attacks.',
            from: 'priest',
            level: 1
        },
        {
            cardName:'Justice for the Wicked & Holy',
            action: 'Active - Burn',
            description: 'Make an attack against an enemy within 10 yards, rolling “Magic School: Divine” against their defense. Roll 2d6 + your Will, if you succeed they take that as damage. Additionally, an ally within 10 yards is also healed for their healing rate.',
            from: 'priest',
            level: 1
        },
        {
            cardName:'Holy Flare',
            action: 'Active - Spell',
            description: 'You hurl a bolt of divine energy at a single target within 10 yards. Roll “Magic School: Divine” for the attack, on a hit you deal 3d6 + your Will divine damage and attacks against the target have minor advantage until the end of your next turn.',
            from: 'priest',
            level: 4
        },
    ],
    rogue: [
         {
            cardName:'Weak Points',
            action: 'Passive',
            description: 'When you hit with an attack you have minor/major advantage on, or with a small weapon, deal an extra +1d3 damage.',
            from: 'rogue',
            level: 1
        },
        {
            cardName:'Hit and Run',
            action: 'Active',
            description: 'Make a weapon attack. Afterwards, regardless of if you hit, you can move up to half your speed (rounded down) without provoking free attacks.',
            from: 'rogue',
            level: 1
        },
        {
            cardName:'Sap',
            action: 'Triggered',
            description: 'When you hit with a melee attack, The target rolls “Toughness” vs your “Melee Attack”. On a failure, they are dazed until the end of the target’s next turn.',
            from: 'rogue',
            level: 1
        },
        {
            cardName:'Assassinate',
            action: 'Triggered - Burn',
            description: 'When you hit with a weapon attack, deal +4d6 extra damage.',
            from: 'rogue',
            level: 1
        },
        {
            cardName:'Gun & Run & Gun',
            action: 'Active',
            description: 'Make an attack, then you can move up to your speed and make another attack.',
            from: 'rogue',
            level: 4
        },
    ],
    socialite: [
         {
            cardName:'Encouraging Words',
            action: 'Active',
            description: 'You can remove a status effect or minor disadvantage from an ally with 5 yards. Whether or not they have an effect removed they can use their Free Attack to make a basic weapon attack.',
            from: 'socialite',
            level: 1
        },
        {
            cardName:'Not My Kind of Show',
            action: 'Triggered',
            description: 'After you are attacked you can move up to half your speed without taking free attacks. Additionally if an ally is adjacent to your attacker they can use their Free Attack against them.',
            from: 'socialite',
            level: 1
        },
        {
            cardName:'Keep the Party Going',
            action: 'Active - Burn',
            description: 'All allies within 5 yards have minor advantage on all attacks until the end of their next turn. In addition they can take 2 cards from their discard and put it back in their hand.',
            from: 'socialite',
            level: 1
        },
        {
            cardName:'Fast Friends',
            action: 'Active',
            description: 'Target a creature that can hear or see you within 8 yards. Make a “Manipulation” roll against their “Resist Manipulation” roll. If they fail, the target is charmed by you for 1 hour. You can’t use this ability again until the target is no longer charmed. ',
            from: 'socialite',
            level: 4
        },
    ],
    storyteller: [
         {
            cardName:'Aim',
            action: 'Active',
            description: 'The creature you currently control makes an attack with minor advantage',
            from: 'storyteller',
            level: 1
        },
        {
            cardName:'Aim',
            action: 'Active',
            description: 'The creature you currently control makes an attack with minor advantage',
            from: 'storyteller',
            level: 1
        },
        {
            cardName:'Deflect',
            action: 'Triggered',
            description: 'When a creature you control gets hit want an attack you can halve the damage.',
            from: 'storyteller',
            level: 1
        },
        {
            cardName:'Deflect',
            action: 'Triggered',
            description: 'When a creature you control gets hit want an attack you can halve the damage.',
            from: 'storyteller',
            level: 1
        },
        {
            cardName:'Ability Card',
            action: 'Determined by Creature',
            description: 'You can use an ability of the creature you\'re controlling.',
            from: 'storyteller',
            level: 1
        },
        {
            cardName:'Ability Card',
            action: 'Determined by Creature',
            description: 'You can use an ability of the creature you\'re controlling.',
            from: 'storyteller',
            level: 1
        },
        {
            cardName:'Ability Card',
            action: 'Determined by Creature',
            description: 'You can use an ability of the creature you\'re controlling.',
            from: 'storyteller',
            level: 1
        },
        {
            cardName:'Ability Card',
            action: 'Determined by Creature',
            description: 'You can use an ability of the creature you\'re controlling.',
            from: 'storyteller',
            level: 1
        },
        {
            cardName:'Ability Card',
            action: 'Determined by Creature',
            description: 'You can use an ability of the creature you\'re controlling.',
            from: 'storyteller',
            level: 1
        },
        {
            cardName:'Ability Card',
            action: 'Determined by Creature',
            description: 'You can use an ability of the creature you\'re controlling.',
            from: 'storyteller',
            level: 1
        },
    ]
}

export const allClassTwoCards = {
    alchemist: [
        {
            cardName:'Alchemical Elixir',
            action: 'Active - Spell - Burn',
            description: 'You can hand these elixirs out to party members who can then put them in their hand. Upon drinking the elixir the target gains the effects of one of the following potions: Potion of Healing, Potion of Growth, Minor Luck Potion, Potion of Speed',
            from: 'alchemist',
            level: 3
        },
        {
            cardName:'Alchemical Elixir',
            action: 'Active - Spell - Burn',
            description: 'You can hand these elixirs out to party members who can then put them in their hand. Upon drinking the elixir the target gains the effects of one of the following potions: Potion of Healing, Potion of Growth, Minor Luck Potion, Potion of Speed',
            from: 'alchemist',
            level: 3
        },
        {
            cardName:'Alchemical Bomb',
            action: 'Active',
            description: 'You throw a bomb at a spot within 10 yards of you. On Impact the bomb explodes in a 2 yard wide area. All creatures in the area make a “Reflexes” roll against your “Magic School: Arcane” roll. If they fail, they take 2d6 + your Intelligence in arcane damage and are burning for 3 rounds. If they succeed they take half the damage and aren’t burning.',
            from: 'alchemist',
            level: 3
        },
        {
            cardName:'Alchemical Bomb',
            action: 'Active',
            description: 'You throw a bomb at a spot within 10 yards of you. On Impact the bomb explodes in a 2 yard wide area. All creatures in the area make a “Reflexes” roll against your “Magic School: Arcane” roll. If they fail, they take 2d6 + your Intelligence in arcane damage and are burning for 3 rounds. If they succeed they take half the damage and aren’t burning.',
            from: 'alchemist',
            level: 5
        },
        {
            cardName:'Alchemical Bomb',
            action: 'Active',
            description: 'You throw a bomb at a spot within 10 yards of you. On Impact the bomb explodes in a 2 yard wide area. All creatures in the area make a “Reflexes” roll against your “Magic School: Arcane” roll. If they fail, they take 2d6 + your Intelligence in arcane damage and are burning for 3 rounds. If they succeed they take half the damage and aren’t burning.',
            from: 'alchemist',
            level: 5
        },
        {
            cardName:'Alchemical Elixir',
            action: 'Active - Spell - Burn',
            description: 'You can hand these elixirs out to party members who can then put them in their hand. Upon drinking the elixir the target gains the effects of one of the following potions: Potion of Healing, Potion of Growth, Minor Luck Potion, Potion of Speed',
            from: 'alchemist',
            level: 5
        },
    ],
    armsman: [
        {
            cardName:'Perfect Aim',
            action: 'Passive',
            description: 'When you hit with a ranged weapon attack you deal an extra 1d3 + 1 physical damage.',
            from: 'armsman',
            level: 3
        },
        {
            cardName:'Whirlwind Strike',
            action: 'Active',
            description: 'Make a melee attack against each enemy within 2 yards of you.',
            from: 'armsman',
            level: 3
        },
        {
            cardName:'Disarm',
            action: 'Triggered',
            description: 'When you hit an enemy with a weapon attack and they are wielding a weapon or shield you can knock it out of their hands and fling it a number of yards in any direction equal to your strength or dexterity. Additionally you deal an extra +1d6 physical damage.',
            from: 'armsman',
            level: 5
        }
    ],
    barbarian: [
        {
            cardName:'Blood Rage',
            action: 'Active',
            description: 'For as long as the blood rage lasts you gain the following benefits: +1d6 damage with melee weapons, 3 points of damage resistance, and +3 to your move. At the end of each round you must discard a card to continue the rage. If you cannot, the rage ends. Once the rage ends you’re dazed for one round.',
            from: 'barbarian',
            level: 3
        },
        {
            cardName:'Brutal Strike',
            action: 'Triggered',
            description: 'When you hit with an attack you can make a normal hit a minor critical or a minor critical a major critical.',
            from: 'barbarian',
            level: 3
        },
        {
            cardName:'Blood Drinker',
            action: 'Passive',
            description: 'When you drop an enemy to 0hp you can choose to regain a discarded card or heal 1d6 health.',
            from: 'barbarian',
            level: 5
        }
    ],
    bard: [
        {
            cardName:'Song of Quickness',
            action: 'Active - Spell',
            description: 'You and two allies within 10 yards that can hear you gain +3 move. Keep the beat: Action > Move | Action > Feinting Attack => All allies affected gain a fly speed equal to their move speed',
            from: 'bard',
            level: 3
        },
        {
            cardName:'Song of Heroism',
            action: 'Active',
            description: 'For 1 minute, You and all allies within 6 yards that can hear you are immune to the frightened condition and have minor advantage on “Resist Manipulation” rolls. Keep the beat: Action > Attack | Attack > Move => You can also add your Charm to your damage rolls and the damage rolls of  allies affected by the song.',
            from: 'bard',
            level: 3
        },
        {
            cardName:'Song of Sorrow',
            action: 'Active',
            description: 'For 1 minute, all enemies within 6 yards that can hear you are slowed and make attacks with minor disadvantage. At the end of their turn they can roll “Resist Manipulation” against your “Magic School: Charm”, if they succeed then they are no longer affected by the song. Keep the beat: Action > Move | Action > Defend => Affected enemies are fatigued.',
            from: 'bard',
            level: 5
        }
    ],
    beasttamer: [
        {
            cardName:'Team Tactics',
            action: 'Passive',
            description: 'As long as you and your beast ally are attacking the same target both your attacks have minor advantage.',
            from: 'beast tamer',
            level: 3
        },
        {
            cardName:'One in, One out',
            action: 'Active - Burn',
            description: 'Either you or your beast ally can move your move speed without provoking free attack and heal your healing rate. Whichever one didn’t take that action, can move up to their speed and make an attack with major advantage. On a hit deal the attack deals an extra +2d6 physical damage.',
            from: 'beast tamer',
            level: 3
        },
        {
            cardName:'Stay With Me Buddy',
            action: 'Active - Burn',
            description: 'You can either Revive your animal companion or heal them for their twice healing rate. When revived your animal companion has 1 health.',
            from: 'beast tamer',
            level: 5
        }
    ],
    druid: [
        {
            cardName:'Field of Thorns',
            action: 'Active - Spell',
            description: 'At a point within 10 yards you conjure a 3 yard wide thicket of thorns. When the spell is cast, the targets in the area roll “Athletics” vs your “Magic School: Elemental” roll. If they fail they take 3d6 physical damage, half as much if they succeed. In addition the area is difficult terrain for 1 minute.',
            from: 'druid',
            level: 3
        },
        {
            cardName:'Poisonous Spores',
            action: 'Active - Spell - Burn',
            description: 'At a point within 6 yards you conjure a 3 yard wide cloud of poison. Each target in the area makes a “resist poison” roll against your “Magic School: Elemental” roll. If they fail they take 4d6 poison damage and suffer from major poison for a number of rounds equal to your Will. On a success they take half that damage and suffer from minor poison for a number of rounds equal to your Will.',
            from: 'druid',
            level: 3
        },
        {
            cardName:'Animal Spirits',
            action: 'Active - Burn',
            description: 'For a number of hours equal to your Will can choose 2 of the following animal spirit abilities: Flight Equal to your movement, Claws that deal 1d6 + your will. You can attack with “Magic School: Elemental”. You can dual wield with these, Major advantage on toughness rolls, Major advantage on perception rolls, Darkvision up to 10 yards or if you have darkvision already an additional 10 yards added on, +3 to your movement',
            from: 'druid',
            level: 5
        }
    ],
    elementalist: [
        {
            cardName:'Seismic Entry',
            action: 'Active - Spell',
            description: 'You launch yourself into the air and land in an open space up to 6 yards away. Upon landing a shockwave bursts out from you. Everyone within 2 yards of you rolls “Athletics” against your “Magic School: Elemental”. If they Fail they take 2d6 + your will in physical damage. If they succeed they take half that.',
            from: 'elementalist',
            level: 3
        },
        {
            cardName:'Armor of Thorns',
            action: 'Active - Spell',
            description: 'For 10 minutes when you are hit by melee attacks your attacker takes damage equal to your Will.',
            from: 'elementalist',
            level: 3
        }
    ],
    faithful: [
        {
            cardName:'Shielded by Light',
            action: 'Active - Spell ',
            description: 'Target an ally within 3 yards. For 1 minute they have DR/1. While under this effect,  when you deal damage with a spell they heal half your Will (rounded up).',
            from: 'faithful',
            level: 3
        },
        {
            cardName:'Embolden the Faithful',
            action: 'Active - Spell',
            description: 'You and all allies within 4 yards of you gain +2 movement and +1 defense for a number of rounds equal to your Will. Additionally, while this effect is active you deal an extra +1d6 divine damage with any attack using “Magic School: Divine”.',
            from: 'faithful',
            level: 3
        },
        {
            cardName:'Undeniable Faith',
            action: 'Active - Spell - Burn',
            description: 'Divine flames burst out all around you, reaching 4 yards away. Enemies caught in this area roll “Toughness” vs your “Magic School: Divine” roll. If they fail they take 3d6 + your Will in divine damage, they take half as much if they succeed. They take an extra +1d6 divine damage if they are undead. Finally, allies in this area heal their healing rate.',
            from: 'faithful',
            level: 5
        },
    ],
    gunslinger: [
        {
            cardName:'Fire-breath Powder Charge',
            action: 'Active',
            description: 'Make a ranged attack against a target. Additionally a burst of flames come out of your gun in a 3 yard cone. All targets within the cone make a “Reflexes” roll against your “Ranged Attack” roll. If they fail they take 3d6 fire damage, if they succeed they take half that.',
            from: 'gunslinger',
            level: 3
        },
        {
            cardName:'Overheat',
            action: 'Triggered',
            description: 'When you hit with an attack your target takes an extra +2d6 fire damage. Additionally creatures within 2 yards must roll “Reflexes” vs your “Ranged Attack”. If they fail they take 2d6 fire damage, half as much on a success.',
            from: 'gunslinger',
            level: 5
        }
    ],
    knight: [
        {
            cardName:'Charge',
            action: 'Active',
            description: 'You move up to your move speed and make an attack. On a hit the attack deals an extra physical damage equal to the amount of yards you moved + 1d6.',
            from: 'knight',
            level: 3
        },
        {
            cardName:'Protection',
            action: 'Triggered',
            description: 'When an adjacent ally is attacked, they can use your defense instead of their own.',
            from: 'knight',
            level: 3
        },
        {
            cardName:'Knightly Challenge',
            action: 'Active',
            description: 'You make a challenge to a single enemy. For 1 minute they have major disadvantage attacking anyone but you. At the end of each of their turns they roll a “Resist Manipulation” against your “Manipulation” if they succeed they can attack normally. Finally, for the duration you gain +1 defense and +1d3 physical damage to attacks.',
            from: 'knight',
            level: 5
        }
    ],
    paladin: [
        {
            cardName:'Inspiring Zealotry',
            action: 'Active - Spell',
            description: 'For 1 minute, while allies are within 3 yards of you they have minor advantage on attacks. In addition you can add your Will to damage rolls.',
            from: 'paladin',
            level: 3
        },
        {
            cardName:'Shield of Faith',
            action: 'Passive - Spell',
            description: 'Attacks against your defense are made with minor disadvantage.',
            from: 'paladin',
            level: 3
        },
        {
            cardName:'Divine Bond',
            action: 'Active - Spell - Burn',
            description: 'Pick an ally within 6 yards to form a bond with. For a number of hours equal to your Will, when you or your bonded ally take damage you both can choose to equally split the damage between each other. You can also choose to split healing equally. The bond can be broken early if dispelled or either target chooses to end it.',
            from: 'paladin',
            level: 5
        }
    ],
    swashbuckler: [
        {
            cardName:'Fail with Flair',
            action: 'Triggered',
            description: 'Whenever you make a skill or attack roll and fail, you can either ignore the failure and try again or make your next roll with minor advantage.',
            from: 'swashbuckler',
            level: 3
        },
        {
            cardName:'Daring Deeds Indeed',
            action: 'Passive',
            description: 'Whenever you have 2 or more enemies adjacent to you. You make all attacks with minor advantage and can discard a card to deal an extra +1d6 physical damage.',
            from: 'swashbuckler',
            level: 3
        },
        {
            cardName:'Roll with It',
            action: 'Triggered',
            description: 'When you’re hit by an attack or take fall damage you can half the damage you would normally have taken.',
            from: 'swashbuckler',
            level: 5
        }
    ],
    warlock: [
        {
            cardName:'Psychic Wounds',
            action: 'Active - Spell',
            description: 'Select 3 enemies within 6 yards that you can see, they roll “Toughness” against your “Magic School: Arcane” roll. If they fail they take 2d6 + your Intelligence in Necrotic damage. If they have a condition caused by your Hex ability they take an extra +1d6 damage and also gain the Bleeding condition for a number of rounds equal to your Intelligence. ',
            from: 'warlock',
            level: 3
        },
        {
            cardName:'Summon Familiar',
            action: 'Active - Spell - Burn',
            description: 'You summon a familiar that serves you until your next rest, it’s banished, or its health drops to 0. In combat, you control the familiar. It takes its turn directly after you in the initiative order. You can only have one underling at a time.',
            from: 'warlock',
            level: 3
        },
        {
            cardName:'A Quick Coven',
            action: 'Active - Spell - Burn',
            description: 'Pick 3 Allies within 4 yards. For a number rounds equal to your Intelligence whenever a coven member uses a character ability that makes them discard or burn a card, another member can allow them to use a card from their hand. Additionally If your Familiar is in the coven its attacks deal an extra +1d6 necrotic damage and it can use your ‘Hex’ ability',
            from: 'warlock',
            level: 5
        }
    ],
    wizard: [
        {
            cardName:'Fireball',
            action: 'Active - Spell - Burn',
            description: 'You throw a bolt of fire at a spot you can see within 20 yards. The spell  explodes, creatures in a 5 yard area make a Reflex roll against your Magic School: Arcane roll. If they fail they take 6d6 fire damage, on a success they take half that.',
            from: 'wizard',
            level: 3
        },
        {
            cardName:'Arcane Spears',
            action: 'Active - Spell',
            description: 'You summon 4 arcane spears and throw them at any targets you can see. They deal 1d6 Arcane damage each.',
            from: 'wizard',
            level: 3
        }
    ]
}

export const allClassThreeCards = {};
export const allFiveSkillCards = {
    animal_handling: {
        cardName:'Speak with Animals',
        action: 'Active - Spell',
        description: 'For an hour you can speak with animals as though they spoke your native language.',
        from: 'animal handling',
        level: 5
    },
    appraise: {
        cardName:'Extra-Dimensional Chest',
        action: 'Active - Spell - Burn',
        description: 'You can summon a chest at your feet that is 3ft x 2ft wide and has a depth of 2 ft. The chest remains for 10 minutes or until dismissed. After being summoned once, the chest can be summoned once more before a rest.',
        from: 'appraise',
        level: 5
    },
    athletics: {
        cardName:'Sprint',
        action: 'Triggered',
        description: 'When you move you can move up to twice your speed.',
        from: 'athletics',
        level: 5
    },
    magic_knowledge: {
        cardName:'Identify Item',
        action: 'Active - Spell',
        description: 'You can identify what a magic item does, any bonuses it gives, and if it is cursed.',
        from: 'magic knowledge',
        level: 5
    },
    magic_school_arcane: {
        cardName:'Detect Magic',
        action: 'Active - Spell',
        description: 'For the next hour you can see if a person, object, or place is magical or under the effects of magic. You also know which type, out of the 4 schools, the magic is. Spellcasters would be detected by this and would show as whatever magic school is highest for them. ',
        from: 'magic school: arcane',
        level: 5
    },
    magic_school_creation: {
        cardName:'Basic Illusion',
        action: 'Active - Spell',
        description: 'For the next 10 minutes you conjure an illusion within 10 yards of yourself. The illusion can take up an area of no larger than 2 yards in any dimension. If a creature comes within 3 yards of your illusion they make a “perception” roll against your “magic school: creation” roll. If they fail they don’t notice the illusion unless they move through it. If they succeed they see through the illusion.',
        from: 'magic school: creation',
        level: 5
    },
    magic_school_divine: {
        cardName:'Sun Drop',
        action: 'Active - Spell',
        description: 'For the next 4 hours you can summon and dismiss a light source that creates a “well lit” area of up to 10 yards around it and an equal area of “dim light” past that. The area that is “well lit” counts as sunlight.',
        from: 'magic school: divine',
        level: 5
    },
    magic_school_elemental: {
        cardName:'Shape the Earth',
        action: 'Active - Spell',
        description: 'You can mold an area of earth that is 2 yards wide and 2 yards tall.',
        from: 'magic school: elemental',
        level: 5
    },
    manipulation: {
        cardName:'Far Talker',
        action: 'Active - Spell',
        description: 'You can send a magical, mental message to anyone you know. The message must be 25 words or less. The target knows it comes from you and can respond in the same manner.',
        from: 'manipulation',
        level: 5
    },
    medicine: {
        cardName:'Homeostasis',
        action: 'Active/Triggered',
        description: 'As an action or when you heal someone you can remove one condition.',
        from: 'medicine',
        level: 5
    },
    nature: {
        cardName:'Toxic Additive',
        action: 'Active',
        description: 'Make a single target attack with either a weapon or spell. You mix some toxic plants into the spell components or onto the weapon. On a hit, the target must make a “Resist Poison” roll against your attack roll or be poisoned (minor) for a number of rounds equal to your intelligence.',
        from: 'nature',
        level: 5
    },
    ranged_attack: {
        cardName:'Rapid Shot',
        action: 'Active',
        description: 'Make two ranged attacks at minor disadvantage.',
        from: 'ranged attack',
        level: 5
    },
    read_intent: {
        cardName:'“I feel ya pal”',
        action: 'Triggered',
        description: 'When you roll a successful “Read Intent” check against a target your next “Manipulation” roll against them has minor advantage.',
        from: 'read intent',
        level: 5
    },
    reflexes: {
        cardName:'“Oops, wrong spot!”',
        action: 'Triggered - Burn',
        description: 'At the top of a round of combat you can select where you want to be in the initiative order for the remainder of combat.',
        from: 'reflexes',
        level: 5
    },
    resist_manipulation: {
        cardName:'Don’t Get Fooled Again',
        action: 'Triggered - Burn',
        description: 'When you roll a successful “Resist Manipulation” against an ability or spell. You can become immune to that effect until a rest.',
        from: 'resist manipulation',
        level: 5
    },
    resist_poison: {
        cardName:'Toxic Toad Syndrome',
        action: 'Active',
        description: 'For the next hour whenever you are hit with a melee attack your attacker takes 1d3 poison damage.',
        from: 'resist poison',
        level: 5
    },
    slight_of_hand: {
        cardName:'Magic Pockets!',
        action: 'Active - Spell',
        description: 'You summon a small weapon or item that has a dim purple magic glow  into your hand. This weapon or item  lasts a number of rounds equal to your Sleight of Hand skill.',
        from: 'slight of hand',
        level: 5
    },
    social_knowledge: {
        cardName:'The Local Cuisine',
        action: 'Active - Burn',
        description: 'You make a succulent meal. A number of allies equal to your charm that consume the meal gain 2d6 temporary health. This health lasts until damage exceeds it or until a rest.',
        from: 'social knowledge',
        level: 5
    },
    stealth: {
        cardName:'Guiding Steps',
        action: 'Triggered',
        description: 'When you roll “Stealth” you can choose an ally to share your roll with. If you or the ally move further than 3 yards away from one another. The ally loses your stealth roll and must now roll their own.',
        from: 'stealth',
        level: 5
    },
    toughness: {
        cardName:'Rooted',
        action: 'Passive',
        description: 'If you didn’t move on your previous turn you can’t be knocked prone until you take the move action.',
        from: 'toughness',
        level: 5
    }
};

export const allTenSkillCards = {
    animal_handling: {
        cardName:'Call Steed',
        action: 'Active - Burn',
        description: 'You gain the trust of a local animal of riding size, one size larger than the caster. They stick with you until midnight.  If combat starts they will run away until the combat is over.',
        from: 'animal handling',
        level: 10
    },
    appraise: {
        cardName:'Trade In Value',
        action: 'Triggered - Burn',
        description: 'When you would discard or burn a card after use you can instead place this card in the burn pile and keep the triggering card in your deck or hand.',
    },
    athletics: {
        cardName:'Second Wind',
        action: 'Active - Burn',
        description: 'You heal your healing rate and gain 1 card back from your burn pile.',
        from: 'athletics',
        level: 10
    },
    history: {
        cardName:'Doomed to Repeat it',
        action: 'Triggered',
        description: 'If an enemy that attacked you last round or this round attacks you again, they roll their attack with minor disadvantage.'
    },
    magic_school_arcane: {
        cardName:'Arcane Displacement',
        action: 'Triggered - Spell',
        description: 'At the end of your turn you step into a pocket dimension. At the beginning of your next turn you are forced out of the dimension either into the space you left from or an adjacent one.',
        from: 'magic school: arcane',
        level: 10
    },
    magic_school_creation: {
        cardName:'Conjure Object',
        action: 'Active - Spell',
        description: 'You materialize an object out of thin air at your feet or in your hand. It is semi-translucent and has a dim purple glow to it. It can be no larger than 1 yard in any dimension. If the object has anything intricate involved, i.e. a clock or lamp, you must have some understanding on how it works. The object lasts 10 minutes.',
        from: 'magic school: creation',
        level: 10
    },
    magic_school_divine: {
        cardName:'Unshakeable Faith',
        action: 'Passive',
        description: 'You cannot be frightened. You also have minor advantage on “Toughness” and “Resist Manipulation” rolls.',
        from: 'magic school: divine',
        level: 10
    },
    magic_school_elemental: {
        cardName:'Lightning Strike',
        action: 'Active - Spell - Burn',
        description: 'You call lighting from the sky even on a clear day. You target one creature that you can see within 10 yards of you and roll “Magic School: Elemental” Against their “Reflexes”. On a success you deal 4d6 damage and the lightning jumps to another target within 4 yards where the spell repeats but deals one less d6 on each successive jump. If you fail they take half damage and the spell ends.',
        from: 'magic school: elemental',
        level: 10
    },
    manipulation: {
        cardName:'Words of Power',
        action: 'Active - Spell',
        description: 'Choose a target within 10 yards that can hear and understand you. Roll a “Resist Manipulation” against your “Manipulation”. If You succeed you can inflict one of the following conditions for 1 minute or until they resolve the condition. I.E standing up from prone: Prone, Dazed, Slowed, Frightened',
        from: 'manipulation',
        level: 10
    },
    medicine: {
        cardName:'Med Packs',
        action: 'Active',
        description: 'These cards can be given to your party members at any time free of action. You heal your healing rate.',
        from: 'medicine',
        level: 10
    },
    melee_attack: {
        cardName:'Sweep',
        action: 'Active',
        description: 'Make a Melee Attack,  if there is an enemy adjacent to you and your target you can make another attack against them.',
        from: 'melee attack',
        level: 10
    },
    nature: {
        cardName:'Sustenance from the Earth',
        action: 'Active - Spell',
        description: 'You find a calm spot in nature and begin to meditate. After 10 minutes you connect with the earth, revitalizing yourself. You heal your healing rate.',
        from: 'nature',
        level: 10
    },
    perception: {
        cardName:'See Invisibility',
        action: 'Active - Spell',
        description: 'For the next hour you can see creatures and objects that are invisible. ',
        from: 'perception',
        level: 10
    },
    ranged_attack: {
        cardName:'Pinning Shot',
        action: 'Triggered',
        description: 'When you hit with a ranged attack you cause the target of the attack to be immobilized for 1 round.',
        from: 'ranged attack',
        level: 10
    },
    read_intent: {
        cardName:'Compel Truth',
        action: 'Active - Spell',
        description: 'You ask a creature that can hear and understand you a question. They roll a “Resist Manipulation” against your “Read Intent” If they fail they have to answer your question truthfully.',
        from: 'read intent',
        level: 10
    },
    reflexes: {
        cardName:'Get Down!',
        action: 'Triggered',
        description: 'When you make a “Reflex” roll, you can take half the damage if you fail or take no damage if you succeed. Additionally, an adjacent ally can benefit from this card though as part of the triggered effect you knock them prone as well.',
        from: 'reflexes',
        level: 10
    },
    resist_manipulation: {
        cardName:'Mind Over Matter',
        action: 'Passive',
        description: 'When you roll a “Toughness” check you can use “Resist Manipulation” instead.',
        from: 'resist manipulation',
        level: 10
    },
    resist_poison: {
        cardName:'Antitoxin Blood ',
        action: 'Active',
        description: 'If you are adjacent to an ally that is suffering from major or minor poison, you can take 1d3 damage to get rid of the poison status.',
        from: 'resist poison',
        level: 10
    },
    slight_of_hand: {
        cardName:'Butterfingers',
        action: 'Active',
        description: 'Target an adjacent creature holding a weapon, they roll “Reflexes” or “Athletics” against your “Sleight of Hand”. If you succeed, you take their weapon from them. If the creature is 2 sizes larger than you or more, you instead knock the weapon 1d6 yards away in a direction of your choice.',
        from: 'sleight of hand',
        level: 10
    },
    social_knowledge: {
        cardName:'Polyglot',
        action: 'Active',
        description: 'For an hour you can understand all languages written and spoken.',
        from: 'social knowledge',
        level: 10
    },
    stealth: {
        cardName:'Startle',
        action: 'Triggered',
        description: '',
        from: 'When you break stealth anyone within 2 yards of you is frightened of you for 1 round.',
        level: 10
    },
    toughness: {
        cardName:'Bulwark',
        action: 'Triggered',
        description: 'When you take the “Defense” action you also take half damage and attacks against you trigger your Free Attack.',
        from: 'toughness',
        level: 10
    }
};