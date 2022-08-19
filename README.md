# Lucky-Duck
### Test your luck vs a Computer with an original Duck Tarot Deck!

#### Game Idea
Players: one player vs computer.

At the start of the game, the player and computer are given 3 random Lucky Duck Tarot cards faced down.
Each card represents their past, present, and future respectively.

The winner is the player with the highest value adjudicated by subtracting the Present's card value with the Past's card value, and adding the Future's card value.
Ex: Total Luck = Present - Past + Future

The player and computer will take turns and decide their fate.
The player and computer will each have 3 turns; one for their past card, present card, and finally their future card.
During each turn, the player will decide if they want to switch their card with a random card from the deck, or keep the card they currently have.
Once a turn has passed the player can no longer trade their card and the turn's card will be revealed.

At the end of the game, if the player won they will be given a Lucky Duck Fortune reading based on their Total Luck.
If the player loses, they will have to play the game again.

The deck will consists of 44 cards. Each card will be a Duck meme with it's type, number, and a description.

There will be 12 Major Arcana cards representing a Duck’s life.

There will be 8 Fire Duck cards: 6 Fire Ducks (Popular memes) + 1 Fire Duck King + 1 Fire Duck Queen

There will be 8 Water Duck cards: 6 Water Ducks (Emotional memes) + 1 Water Duck King + 1 Water Duck Queen

There will be 8 Air Duck cards: 6 Air Ducks (Witty memes) + 1 Air Duck King + 1 Air Duck Queen

There will be 8 Earth Duck cards: 6 Earth Ducks (Cute memes) + 1 Earth Duck King + 1 Earth Duck Queen

Based on the number of cards and their possible values, a player's total luck can range from -42 to 85. 
Each fortune is tied to an interval of set values. 
Ex: (-45 to -43), (28 to 32), or (-2 to 2).
There are a total of 26 fortunes that can be given based on the total luck a player has.

### Tech Stack
* DOM Manipulation. 
* Arrays to retreive Duck Tarot Card, description, and number value.
* Game logic to shuffle remaining cards, and retrieve one. 
* Winning logic to give fortune based on total luck value. 
* Possibly use Canvas, but I think all of this can be achieved with just DOM.

### WireFrames!
![Wireframe 1](https://i.imgur.com/mLKepDe.png)
![Wireframe 2](https://i.imgur.com/5aEeo5B.png)
![Wireframe 3](https://i.imgur.com/vz0zU0i.png)
![Wireframe 4](https://i.imgur.com/4gGc9Tc.png)

### MVP Goals
* Use 20-30 cards

### Stretch Goals
* Animation between user interface?
* Create all 44 Tarot Cards from stratch.

### Potential Roadblocks
* Not able to create all Tarot cards?
* Smooth animation between user interface
