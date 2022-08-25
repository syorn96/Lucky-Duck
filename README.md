# Lucky-Duck
### Test your luck with an original Lucky Duck Tarot Deck for a chance to receive a fortune!

#### Game Idea
### Link to game: https://syorn96.github.io/Lucky-Duck/
Players: Two.

Game modes: Player 1 vs Player 2, or Player 1 vs. Computer.

Play against another person or computer to see who is the Luckier Duck.
The player with the highest Total Luck is the winner and will receive a fortune!

At the start of the game, two players are given 3 random Lucky Duck Tarot cards faced down.
Each card represents their past, present, and future respectively.
The Luckier Duck is the player with the highest Total Luck calculated by subtracting the Present's card value with the Past's card value, and adding the Future's card value.

Ex: Total Luck = Present - Past + Future

Player 1 and Player 2 will take turns and decide their fate.
Both Players will each have 3 turns; one for their past card, present card, and finally their future card.
During each turn, the current player will decide if they want to switch their card with a random card from the deck, or keep the card they currently have.
Once a turn has passed the player can no longer trade their card and the turn's card will be revealed.

The deck will consists of 44 cards. Each card will be a Duck meme with it's type, number, illustration and a description. 

There will be 12 Major Arcana cards representing a Duck’s life.

There will be 8 (Popular memes) Fire Duck cards: 6 Fire Ducks  + 1 Fire Duck King + 1 Fire Duck Queen.

There will be 8 (Moody memes) Water Duck cards: 6 Water Ducks + 1 Water Duck King + 1 Water Duck Queen.

There will be 8 (Witty memes) Air Duck cards: 6 Air Ducks+ 1 Air Duck King + 1 Air Duck Queen.

There will be 8 (Cute memes) Earth Duck cards: 6 Earth Ducks + 1 Earth Duck King + 1 Earth Duck Queen.

*** All the cards were made using the PicsArt App. I do not own these pictures. Source links can be found in my array.js file. ***
*** I do not own any audio or media files. Source links can be found in my index.html file. ***

### Tech Stack
* DOM Manipulation. 
* Arrays to retreive Duck Tarot Card, description, and number value.
* Game logic to shuffle array and retrieve img, value or description based on array index. 
* Winning logic to compare total luck value between players.

### WireFrames!
![Wireframe 1](https://i.imgur.com/mLKepDe.png)
![Wireframe 2](https://i.imgur.com/5aEeo5B.png)
![Wireframe 3](https://i.imgur.com/vz0zU0i.png)
![Wireframe 4](https://i.imgur.com/4gGc9Tc.png)

### MVP Goals
* Create 20-30 original cards from duck memes.
* Create turns for Player 1 and Player 2.
* Render a start game screen (1) with game title, start button, how to play button, deck gallery button and restart buton.
* Render game screen (2) displaying the deck of cards in the center of screen and 3 cards each on left and right hand side of screen (player1 and player2).
* Render another game screen (3) for comparing cards and results.

### Stretch Goals
* Animations for clicks.
* Each card will display their artwork when clicked.
* Render a game screen (4) that displays a fortune for the winning player.
* Create all 44 Tarot Cards from stratch.
* Create a vs computer game mode.

### Potential Roadblocks
* Not able to create all Tarot cards?
* Smooth animation between user interface.