
var available_factions = [];

var dealt_factions = [];

var expansions = {
    "gen1" : {
      "name" : "Base Set",
      "gen" : "Gen1",
      "list" : ["Robots", "Zombies", "Pirates", "Aliens", "Dinosaurs", "Ninjas", "Tricksters", "Wizards", "Geeks"]
    },
    "gen2" : {
      "name" : "Awesome Level 9000",
      "gen" : "Gen2",
      "list" : ["Bear Cavalry", "Ghosts", "Killer Plants", "Steampunk"]
    },
    "gen3" : {
      "name" : "Science Fiction Double Feature",
      "gen" : "Gen3",
      "list" : ["Cyborg Apes", "Shape Shifters", "Super Spies", "Time Travelers"]
    },
    "gen4" : {
      "name" : "Monster Smash",
      "gen" : "Gen4",
      "list" : ["Giant Ants", "Mad Scientists", "Vampires", "Werewolves"]
    },
    "gen5" : {
      "name" : "Pretty Pretty Smash Up",
      "gen" : "Gen5",
      "list" : ["Fairies", "Kitty Cats", "Mythic Horses", "Princesses"]
    }
};

/*
    Core 
    Aliens - Return minions back to their owners' hands and gain victory points without breaking bases.
    Dinosaurs - High-powered minions break bases quickly.
    Ninjas - Destroy minions and sneak onto bases at the last second.
    Pirates - Move around from base to base and destroy weak minions.
    Robots - Play lots of weak minions at once.
    Tricksters - Force other players to discard and make bases undesirable to play on.
    Wizards - Draw quickly, and play several cards per turn.
    Zombies - Play minions from the discard pile.
    
    Awesome Level 9000
    Bear Cavalry - Move other players' minions and destroy them.
    Ghosts - Benefit from discarding and having 2 or fewer cards in their hand.
    Killer Plants - Search your deck for weak minions, play extra minions, and setup multi-turn abilities.
    Steampunks - Powerful base actions that can be played from the discard pile.

    The Obligatory Cthulhu 
    Elder Things - Give Madness to other players, and have strong minions that are difficult to play.
    Innsmouth - Lots of power 2 minions that work together well.
    Minions of Cthulhu a.k.a. Cthulhu Cultists - Play lots of actions, recover cards from the discard pile, and slow the game down all the while gaining Madness.
    Miskatonic University - Gain, use, and lose Madness to accomplish a little of everything.
    
    Science Fiction Double Feature
    Cyborg Apes - Play actions on minions to power them up.
    Shapeshifters - Copy other players' power and abilities.
    Super Spies - Sabotage other players' hands and decks, and play specials while bases are scoring.
    Time Travelers - Replay actions and minions.

    Monster Smash
    Giant Ants - Play and move +1 power counters on your minions.
    Mad Scientists - Play and manipulate +1 power counters on your minions.
    Vampires - Destroy minions to gain power.
    Werewolves - Gain power on your turn and destroy minions.

    The Big Geeky Box
    Geeks - Interrupt other players' turns to disrupt their plans.

    Pretty Pretty Smash Up
    Fairies - Choose between effects and manipulate actions played on minions.
    Kitty Cats - Temporarily take control of other player's minions, and destroy minions you control.
    Mythic Horses - Benefit from having lots of minions together.
    Princesses - A few strong minions with powerful abilities.

    Smash Up: Munchkin
    Clerics - return cards from the discard pile and prevent them from going to the discard pile
    Dwarves - benefit from treasures played on their minions
    Elves - help other factions to help self
    Halflings - playing lots of extra minions, often negating their effects to play them
    Mages -  discarding cards for destroying and other effects
    Orcs - huge brute horse against your opponents
    Thieves - steal things sell treasures for VP
    Warriors - playing more monsters on bases and destroying monsters on bases

    Smash up: It's Your Fault 
    Sharks
    Superheros
    Greek Myth
    Dragons
*/
