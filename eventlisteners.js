
    // onclick duplicate body background
body.addEventListener('click', ()=> {
    duplicateBackground();
})

clickADuck.forEach(e => {
    e.addEventListener('click', ()=> {
        mainGameAudio.play()
        gameScreen1.setAttribute('style', `display: block`)
        playMusic.setAttribute('style', `display: none`)
    })
})

//on start default the cards to be set as the tarot deck back cover 
startGameBtn.addEventListener('click', ()=> {
    startGame();
    
})

// vs computer settings
vsComputerBtn.addEventListener('click', ()=> {
  computerMode();
})

// view deck gallery for players to view card artworks.
viewDeck.addEventListener('click', ()=> {
    viewMode();
})

// return btn to return main menu from view deck gallery
escapeDeckGallery.addEventListener('click', ()=> {
    escViewMode();
})


// on restart reset game to default settings
restartGameBtn.addEventListener('click', ()=>{
    restartMode();
})
// How to playbtn on screen 1
howToPlayBtn.addEventListener('click', ()=> {
    gameScreen1.setAttribute('style', `display: none`)
    howToPlayScreen.setAttribute('style', `display: block`)
})

// Exit button for How to play on screen 1
exitHTP.addEventListener('click', ()=> {
    gameScreen1.setAttribute('style', `display: block`)
    howToPlayScreen.setAttribute('style', `display: none`)
})

// How to play button on screen 2
howToPlayBtn2.addEventListener('click', ()=> {
    howToPlay2();
})
// exit how to play on screen 2
exitHTP2.addEventListener('click', ()=> {
    escHowtoPlay2();
})

// return to screen 1 from screen 2
return2Start.addEventListener('click', () => {
    gameScreen1.setAttribute('style', `display: block`)
    gameScreen2.setAttribute('style', `display: none`)
    decideTurn.style.color = randomRGB()
    decideTurn2.style.color = randomRGB()
})

// return button for the PopUpCard viewer
returnBtn.addEventListener(('click'), ()=> {
    popUpBox.setAttribute('style', `display: none`)
    howToPlayBtn2.style.pointerEvents = 'auto'
    return2Start.style.pointerEvents = 'auto'
})

// game logic dependent on keep button
// cards are only clickable/viewable once loaded
keepBtn.addEventListener(('click'), ()=> {
    moves +=1
    let c = computermode();

    // computer will choose either shuffle or keep after player 1's 1st turn.
    if (moves == 1 && trackComputerMode == 1) {
        computerModeTurnK1();
    } else if (moves == 1) {
      keepTurn1();
    } else if (moves == 2) {
      keepTurn2();
        // computer will choose either shuffle or keep after player 1's 2nd turn.
    } else if (moves == 3 && trackComputerMode == 1) {
        computerModeTurnK2();
  } else if (moves == 3) {
        keepTurn3();
    } else if (moves == 4) {
        keepTurn4();
        //computer will choose either shuffle or keep after player 1's 3rd turn.
    } else if (moves == 5 && trackComputerMode == 1) {
      computerModeTurnK3();
  } else if (moves == 5) {
        keepTurn5();
    } else if (moves == 6) {
        keepTurn6();
    } 
})

// game logic dependent on shuffle button
// cards are only clickable once loaded
shuffleBtn.addEventListener(('click'), ()=> {
    moves +=1
    let c = computermode();
    // computer will choose either shuffle or keep after player 1's 1st turn.
    if (moves == 1 && trackComputerMode == 1) {
      computerModeTurnS1();
  } else if (moves == 1) {
        shuffleTurn1();
    } else if (moves == 2) {
        shuffleTurn2();
        // computer will choose either shuffle or keep after player 1's 2rd turn.
    } else if (moves == 3 && trackComputerMode == 1) {
      computerModeTurnS2();
  } else if (moves == 3) {
        shuffleTurn3();
    } else if (moves == 4) {
        shuffleTurn4();
        // computer will choose either shuffle or keep after player 1's 3rd turn.
    } else if (moves == 5 && trackComputerMode == 1) {
      computerModeTurnS3();
  } else if (moves == 5) {
        shuffleTurn5();
    } else if (moves == 6) {
        shuffleTurn6();
    }
})

//gameResults btn that appears with game over
resultsBtn.addEventListener('click', ()=> {
    gameScreen2.setAttribute('style', `display: none`)
    gameScreen3.setAttribute('style', `display: block`)
    postGameView.setAttribute('style', `display: block`)

    // when gameResultsbtn is clicked, display winner on results screen 3
    if (p1TotalLuck > p2TotalLuck && trackComputerMode == 1) {
        gameResults.innerText = "Player 1 is a Luckier Duck!"
      } else if (p1TotalLuck > p2TotalLuck) {
        gameResults.innerText = "Player 1 is a Luckier Duck!"
      } else if (p1TotalLuck < p2TotalLuck && trackComputerMode == 1) {
        gameResults.innerText = "Computer is a Luckier Duck!"
      } else if (p1TotalLuck < p2TotalLuck) {
        gameResults.innerText = "Player 2 is a Luckier Duck!"
      } else if (p1TotalLuck == p2TotalLuck){
        gameResults.innerText = `It's a Draw. Must be fate! Play Again!`
        fortuneBtn.setAttribute('style', 'display: none')
      }
    postGameViewimg.src = luckyDuckDeckCardBack[0].img
})
// return to screen 1 from screen 3
return2Menu.addEventListener('click',()=> {
    gameScreen1.setAttribute('style', `display: absolute`)
    gameScreen3.setAttribute('style', `display: none`)
    postGameView.setAttribute('style', `display: none`)
    decideTurn.style.color = randomRGB()
    decideTurn2.style.color = randomRGB()
})
// return to screen 2 from screen 3
return2Game.addEventListener('click', ()=> {
    gameScreen3.setAttribute('style', `display: none`)
    gameScreen2.setAttribute('style', `display: grid`)
    postGameView.setAttribute('style', `display: none`)
    decideTurn.style.color = randomRGB()
    decideTurn2.style.color = randomRGB()
})

//on click, set the popUpBox view to a random card from the tarot deck
// acts like a deck of cards for players to play with
luckyDuckTarotDeck.addEventListener('click', ()=> {
    x = Math.floor(Math.random() * 44)
    popUpBoxImage.src =`${luckyDuckDeckArray[x].img}`
    popUpBox.setAttribute('style', `display: block`)
})

// on click, display the selected image in the pop-up box
playerPastCard.addEventListener('click', ()=> {
    popUpBoxImage.src = playerPastCard.src
    
})
playerPresentCard.addEventListener('click', ()=> {
    popUpBoxImage.src = playerPresentCard.src
    disableHtpAndReturn();
})
playerFutureCard.addEventListener('click', ()=> {
    popUpBoxImage.src = playerFutureCard.src
    disableHtpAndReturn();
})
computerPastCard.addEventListener('click', ()=> {
    popUpBoxImage.src = computerPastCard.src
    disableHtpAndReturn();
})
computerPresentCard.addEventListener('click', ()=> {
    popUpBoxImage.src = computerPresentCard.src
    disableHtpAndReturn();
})
computerFutureCard.addEventListener('click', ()=> {
    popUpBoxImage.src = computerFutureCard.src
    disableHtpAndReturn();
})

//Postgame click images to view in displayer
p1PastCard.addEventListener('click', ()=> {
    postGameViewimg.src = playerPastCard.src
    postGameViewBlock();
})
p1PresentCard.addEventListener('click', ()=> {
    postGameViewimg.src = playerPresentCard.src
    postGameViewBlock();
})
p1FutureCard.addEventListener('click', ()=> {
    postGameViewimg.src = playerFutureCard.src
    postGameViewBlock();
})
p2PastCard.addEventListener('click', ()=> {
    postGameViewimg.src = computerPastCard.src
    postGameViewBlock();
})
p2PresentCard.addEventListener('click', ()=> {
    postGameViewimg.src = computerPresentCard.src
    postGameViewBlock();
})
p2FutureCard.addEventListener('click', ()=> {
    postGameViewimg.src = computerFutureCard.src
    postGameViewBlock();
})

// Fortunes Page (screen 4)
fortuneBtn.addEventListener('click', ()=>{
    gameScreen4.setAttribute('style', `display: block`)
    gameScreen3.setAttribute('style', `display: none`)
    postGameView.setAttribute('style', `display: none`)
    fortuneAudio.play()
    mainGameAudio.pause()
    if (p1TotalLuck > p2TotalLuck && trackComputerMode == 1) {
      displayWinner.innerText = "Player 1's Fortune"
      displayLoser.innerText = "Computer's Fortune"
      winningPlayerFortune.innerText = luckyDuckFortuneArray[0]
      winningPlayerFortune.style.color = randomRGB()
  } else if (p1TotalLuck > p2TotalLuck) {
        displayWinner.innerText = "Player 1's Fortune"
        displayLoser.innerText = "Player 2's Fortune"
        winningPlayerFortune.innerText = luckyDuckFortuneArray[0]
        winningPlayerFortune.style.color = randomRGB()
    } else if (p2TotalLuck > p1TotalLuck && trackComputerMode == 1){
      displayWinner.innerText = "Computer's Fortune"
      displayLoser.innerText = "Player 1's Fortune"
      winningPlayerFortune.innerText = availableComputerFortunesArray[0]
      winningPlayerFortune.style.color = randomRGB()
  } else if (p2TotalLuck > p1TotalLuck){
        displayWinner.innerText = "Player 2's Fortune"
        displayLoser.innerText = "Player 1's Fortune"
        winningPlayerFortune.innerText = luckyDuckFortuneArray[0]
        winningPlayerFortune.style.color = randomRGB()
    }
})
// return to screen 3 from screen 4
returnToResults.addEventListener('click', ()=> {
    gameScreen4.setAttribute('style', `display: none`)
    gameScreen3.setAttribute('style', `display: block`)
    fortuneAudio.pause()
    fortuneAudio.currentTime = 0
    mainGameAudio.play()
})
// return to screen 1 (main page) from screen 4
escapeFortuneBtn.addEventListener('click', ()=> {
    gameScreen4.setAttribute('style', `display: none`)
    gameScreen1.setAttribute('style', `display: absolute`)
    fortuneAudio.pause()
    fortuneAudio.currentTime = 0
    mainGameAudio.play()
})

