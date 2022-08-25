let computerModeTurnK1 = () => {
    playerPastCard.src = `${luckyDuckDeckArray[0].img}`
        popUpBoxImage.src=`${luckyDuckDeckArray[0].img}`
        playerPastCard.style.pointerEvents = 'auto';
        playerPastCardInfo.innerText = luckyDuckDeckArray[0].description
        decideTurn.innerText = `Computer's`
        decideTurn.style.color = randomRGB()
        moveDisplay.innerText = 'Past'
        p1PastCard.src = `${luckyDuckDeckArray[0].img}`
        p1PastValue.innerText = `${luckyDuckDeckArray[0].number}`
        p1PastResult =`${luckyDuckDeckArray[0].number}`
        p1TotalLuck -= luckyDuckDeckArray[0].number
        keepBtn.style.pointerEvents = 'none'
        shuffleBtn.style.pointerEvents = 'none'
        
        if (c == 1) {
          let computerShuffle1 = setInterval(function() {
            decideTurn.innerText = `Computer chose to shuffle card.`;
            computerPastCard.src = `${luckyDuckDeckArray[7].img}`;
            computerPastCard.style.pointerEvents = 'auto';
            computerPastCardInfo.innerText = luckyDuckDeckArray[7].description;
            decideTurn.style.color = randomRGB();
            moveDisplay.innerText = `Player 1's Present`;
            p2PastCard.src = `${luckyDuckDeckArray[7].img}`;
            p2PastValue.innerText = `${luckyDuckDeckArray[7].number}`;
            p2PastResult =`${luckyDuckDeckArray[7].number}`;
            p2TotalLuck -= luckyDuckDeckArray[7].number;
            keepBtn.style.pointerEvents = 'auto'
            shuffleBtn.style.pointerEvents = 'auto'
            moves += 1
            clearInterval(computerShuffle1)
            }, 2000)
        } else if (c == 2) {
          let computerKeep1 = setInterval(function() {
            decideTurn.innerText = `Computer chose to keep card.`;
            computerPastCard.src = `${luckyDuckDeckArray[1].img}`;
            computerPastCard.style.pointerEvents = 'auto';
            computerPastCardInfo.innerText = luckyDuckDeckArray[1].description;
            decideTurn.style.color = randomRGB();
            moveDisplay.innerText = `Player 1's Present`;
            p2PastCard.src = `${luckyDuckDeckArray[1].img}`;
            p2PastValue.innerText = `${luckyDuckDeckArray[1].number}`;
            p2PastResult =`${luckyDuckDeckArray[1].number}`;
            p2TotalLuck -= luckyDuckDeckArray[1].number;
            keepBtn.style.pointerEvents = 'auto'
            shuffleBtn.style.pointerEvents = 'auto'
            moves += 1
            clearInterval(computerKeep1)
            }, 2000)
        }
}

let computerModeTurnK2 = () => {
    playerPresentCard.src = `${luckyDuckDeckArray[2].img}`
        popUpBoxImage.src=`${luckyDuckDeckArray[2].img}`
        playerPresentCard.style.pointerEvents = 'auto';
        playerPresentCardInfo.innerText = luckyDuckDeckArray[2].description
        decideTurn.innerText = `Computer's`
        decideTurn.style.color = randomRGB()
        moveDisplay.innerText = 'Present'
        p1PresentCard.src = `${luckyDuckDeckArray[2].img}`
        p1PresentValue.innerText = `${luckyDuckDeckArray[2].number}`
        p1PresentResult =`${luckyDuckDeckArray[2].number}`
        p1TotalLuck += luckyDuckDeckArray[2].number
        keepBtn.style.pointerEvents = 'none'
        shuffleBtn.style.pointerEvents = 'none'
      if (c == 1) {
        let computerShuffle1 = setInterval(function() {
          decideTurn.innerText = `Computer chose to shuffle card.`;
          computerPresentCard.src = `${luckyDuckDeckArray[9].img}`;
          computerPresentCard.style.pointerEvents = 'auto';
          computerPresentCardInfo.innerText = luckyDuckDeckArray[9].description;
          decideTurn.style.color = randomRGB();
          moveDisplay.innerText = `Player 1's Future`;
          p2PresentCard.src = `${luckyDuckDeckArray[9].img}`;
          p2PresentValue.innerText = `${luckyDuckDeckArray[9].number}`;
          p2PresentResult =`${luckyDuckDeckArray[9].number}`;
          p2TotalLuck += luckyDuckDeckArray[9].number;
          keepBtn.style.pointerEvents = 'auto'
          shuffleBtn.style.pointerEvents = 'auto'
          moves += 1
          clearInterval(computerShuffle1)
          }, 2000)
      } else if (c == 2) {
        let computerKeep1 = setInterval(function(){
          decideTurn.innerText = `Computer chose to keep card.`
          computerPresentCard.src = `${luckyDuckDeckArray[3].img}`;
          computerPresentCard.style.pointerEvents = 'auto';
          computerPresentCardInfo.innerText = luckyDuckDeckArray[3].description;
          decideTurn.style.color = randomRGB();
          moveDisplay.innerText = `Player 1's Future`;
          p2PresentCard.src = `${luckyDuckDeckArray[3].img}`;
          p2PresentValue.innerText = `${luckyDuckDeckArray[3].number}`;
          p2PresentResult =`${luckyDuckDeckArray[3].number}`;
          p2TotalLuck += luckyDuckDeckArray[3].number;
          keepBtn.style.pointerEvents = 'auto'
          shuffleBtn.style.pointerEvents = 'auto'
          moves += 1
          clearInterval(computerKeep1)
          }, 2000)
      }
}

let computerModeTurnK3 = () => {
    playerFutureCard.src = `${luckyDuckDeckArray[4].img}`
      popUpBoxImage.src=`${luckyDuckDeckArray[4].img}`
      playerFutureCard.style.pointerEvents = 'auto';
      playerFutureCardInfo.innerText = luckyDuckDeckArray[4].description
      decideTurn.innerText = `Computer's`
      decideTurn.style.color = randomRGB()
      moveDisplay.innerText = 'Future'
      p1FutureCard.src = `${luckyDuckDeckArray[4].img}`
      p1FutureValue.innerText = `${luckyDuckDeckArray[4].number}`
      p1FutureResult =`${luckyDuckDeckArray[4].number}`
      p1TotalLuck += luckyDuckDeckArray[4].number
      keepBtn.style.pointerEvents = 'none'
      shuffleBtn.style.pointerEvents = 'none'
      if (c == 1) {
        let computerShuffle1 = setInterval(function() {
          decideTurn.innerText = `Computer chose to shuffle card.`;
          computerFutureCard.src = `${luckyDuckDeckArray[11].img}`;
          computerFutureCard.style.pointerEvents = 'auto';
          computerFutureCardInfo.innerText = luckyDuckDeckArray[11].description;
          decideTurn.style.color = randomRGB();
          moveDisplay.innerText = ``;
          placeHolderCard.innerText = ""
          p2FutureCard.src = `${luckyDuckDeckArray[11].img}`;
          p2FutureValue.innerText = `${luckyDuckDeckArray[11].number}`;
          p2FutureResult =`${luckyDuckDeckArray[11].number}`;
          p2TotalLuck += luckyDuckDeckArray[11].number;
          keepBtn.style.pointerEvents = 'none'
          shuffleBtn.style.pointerEvents = 'none'
          moves += 1
          
          let gameover = setInterval(function() {
            p2TotalValue.innerText = p2TotalLuck
            p1TotalValue.innerText = p1TotalLuck
            decideTurn.innerText = `Game Over`;
            decideTurn.style.color = randomRGB();
            decideTurn2.innerText = 'Ducks'
            decideTurn2.style.color = randomRGB()
            moveDisplay.innerText = ""
            placeHolderCard.innerText = ""
            resultsBtn.setAttribute('style', `display: inline-block`)
            shuffleBtn.setAttribute('style', `display: none`)
            keepBtn.setAttribute('style', `display: none`)
            clearInterval(gameover)
          },2000)
          clearInterval(computerShuffle1)
          }, 2000)
      } else if (c == 2) {
        let computerKeep1 = setInterval(function(){
          decideTurn.innerText = `Computer chose to keep card.`
          computerFutureCard.src = `${luckyDuckDeckArray[5].img}`;
          computerFutureCard.style.pointerEvents = 'auto';
          computerFutureCardInfo.innerText = luckyDuckDeckArray[5].description;
          decideTurn.style.color = randomRGB();
          moveDisplay.innerText = ``;
          placeHolderCard.innerText = ""
          p2FutureCard.src = `${luckyDuckDeckArray[5].img}`;
          p2FutureValue.innerText = `${luckyDuckDeckArray[5].number}`;
          p2FutureResult =`${luckyDuckDeckArray[5].number}`;
          p2TotalLuck += luckyDuckDeckArray[5].number;
          p2TotalValue.innerText = p2TotalLuck
          p1TotalValue.innerText = p1TotalLuck
          keepBtn.style.pointerEvents = 'none'
          shuffleBtn.style.pointerEvents = 'none'
          moves += 1
        
          let gameover = setInterval(function() {
            p2TotalValue.innerText = p2TotalLuck
            p1TotalValue.innerText = p1TotalLuck
            decideTurn.innerText = `Game Over`;
            decideTurn.style.color = randomRGB();
            decideTurn2.innerText = 'Ducks'
            decideTurn2.style.color = randomRGB()
            moveDisplay.innerText = ""
            placeHolderCard.innerText = ""
            resultsBtn.setAttribute('style', `display: inline-block`)
            shuffleBtn.setAttribute('style', `display: none`)
            keepBtn.setAttribute('style', `display: none`)
            clearInterval(gameover)
          },2000)
          clearInterval(computerKeep1)
          }, 2000) 
      }
}

let keepTurn1 = () => {
    playerPastCard.src = `${luckyDuckDeckArray[0].img}`
      popUpBoxImage.src=`${luckyDuckDeckArray[0].img}`
      playerPastCard.style.pointerEvents = 'auto';
      playerPastCardInfo.innerText = luckyDuckDeckArray[0].description
      decideTurn.innerText = `Player 2's`
      decideTurn.style.color = randomRGB()
      popUpBox.setAttribute('style', `display: block`)
      moveDisplay.innerText = 'Past'
      p1PastCard.src = `${luckyDuckDeckArray[0].img}`
      p1PastValue.innerText = `${luckyDuckDeckArray[0].number}`
      p1PastResult =`${luckyDuckDeckArray[0].number}`
      p1TotalLuck -= luckyDuckDeckArray[0].number
}

let keepTurn2 = () => {
    computerPastCard.src = `${luckyDuckDeckArray[1].img}`
      popUpBoxImage.src=`${luckyDuckDeckArray[1].img}`
      computerPastCard.style.pointerEvents = 'auto';
      computerPastCardInfo.innerText = luckyDuckDeckArray[1].description
      decideTurn.innerText = `Player 1's`
      decideTurn.style.color = randomRGB()
      popUpBox.setAttribute('style', `display: block`)
      moveDisplay.innerText = 'Present'
      p2PastCard.src = `${luckyDuckDeckArray[1].img}`
      p2PastValue.innerText = `${luckyDuckDeckArray[1].number}`
      p2PastResult =`${luckyDuckDeckArray[1].number}`
      p2TotalLuck -= luckyDuckDeckArray[1].number
}

let keepTurn3 = () => {
    playerPresentCard.src = `${luckyDuckDeckArray[2].img}`
        popUpBoxImage.src=`${luckyDuckDeckArray[2].img}`
        playerPresentCard.style.pointerEvents = 'auto';
        playerPresentCardInfo.innerText = luckyDuckDeckArray[2].description
        decideTurn.innerText = `Player 2's`
        decideTurn.style.color = randomRGB()
        popUpBox.setAttribute('style', `display: block`)
        moveDisplay.innerText = 'Present'
        p1PresentCard.src = `${luckyDuckDeckArray[2].img}`
        p1PresentValue.innerText = `${luckyDuckDeckArray[2].number}`
        p1PresentResult =`${luckyDuckDeckArray[2].number}`
        p1TotalLuck += luckyDuckDeckArray[2].number
}

let keepTurn4 = () => {
    computerPresentCard.src = `${luckyDuckDeckArray[3].img}`
        popUpBoxImage.src=`${luckyDuckDeckArray[3].img}`
        computerPresentCard.style.pointerEvents = 'auto';
        computerPresentCardInfo.innerText = luckyDuckDeckArray[3].description
        decideTurn.innerText = `Player 1's`
        decideTurn.style.color = randomRGB()
        popUpBox.setAttribute('style', `display: block`)
        moveDisplay.innerText = 'Future'
        p2PresentCard.src = `${luckyDuckDeckArray[3].img}`
        p2PresentValue.innerText = `${luckyDuckDeckArray[3].number}`
        p2PresentResult =`${luckyDuckDeckArray[3].number}`
        p2TotalLuck +=luckyDuckDeckArray[3].number
}

let keepTurn5 = () => {
    playerFutureCard.src = `${luckyDuckDeckArray[4].img}`
        popUpBoxImage.src=`${luckyDuckDeckArray[4].img}`
        playerFutureCard.style.pointerEvents = 'auto';
        playerFutureCardInfo.innerText = luckyDuckDeckArray[4].description
        decideTurn.innerText = `Player 2's`
        decideTurn.style.color = randomRGB()
        popUpBox.setAttribute('style', `display: block`)
        moveDisplay.innerText = 'Future'
        p1FutureCard.src = `${luckyDuckDeckArray[4].img}`
        p1FutureValue.innerText = `${luckyDuckDeckArray[4].number}`
        p1FutureResult =`${luckyDuckDeckArray[4].number}`
        p1TotalLuck += luckyDuckDeckArray[4].number

}

let keepTurn6 = () => {
    computerFutureCard.src = `${luckyDuckDeckArray[5].img}`
        popUpBoxImage.src=`${luckyDuckDeckArray[5].img}`
        computerFutureCard.style.pointerEvents = 'auto';
        computerFutureCardInfo.innerText = luckyDuckDeckArray[5].description

        // on player 2's last turn display game over ducks
        decideTurn.innerText = 'Game Over'
        decideTurn2.innerText = 'Ducks'
        decideTurn.style.color = randomRGB()
        decideTurn2.style.color = randomRGB()
        moveDisplay.innerText = ""
        placeHolderCard.innerText = ""
        p2FutureCard.src = `${luckyDuckDeckArray[5].img}`
        p2FutureValue.innerText = `${luckyDuckDeckArray[5].number}`
        p2FutureResult =`${luckyDuckDeckArray[5].number}`
        p2TotalLuck += luckyDuckDeckArray[5].number
        // display each players total luck on screen 3
        p2TotalValue.innerText = p2TotalLuck
        p1TotalValue.innerText = p1TotalLuck

        // only display game results, get rid of shuffle and keep btn
        popUpBox.setAttribute('style', 'display: block')
        resultsBtn.setAttribute('style', `display: inline-block`)
        shuffleBtn.setAttribute('style', `display: none`)
        keepBtn.setAttribute('style', `display: none`)
}

let computerModeTurnS1 = () => {
    playerPastCard.src = `${luckyDuckDeckArray[6].img}`
      popUpBoxImage.src=`${luckyDuckDeckArray[6].img}`
      playerPastCard.style.pointerEvents = 'auto';
      playerPastCardInfo.innerText = luckyDuckDeckArray[6].description
      decideTurn.innerText = `Computer's`
      decideTurn.style.color = randomRGB()
      moveDisplay.innerText = 'Past'
      p1PastCard.src = `${luckyDuckDeckArray[6].img}`
      p1PastValue.innerText = `${luckyDuckDeckArray[6].number}`
      p1PastResult =`${luckyDuckDeckArray[6].number}`
      p1TotalLuck -= luckyDuckDeckArray[6].number
      keepBtn.style.pointerEvents = 'none'
      shuffleBtn.style.pointerEvents = 'none'
      
      if (c == 1) {
        let computerShuffle1 = setInterval(function() {
          decideTurn.innerText = `Computer chose to shuffle card.`;
          computerPastCard.src = `${luckyDuckDeckArray[7].img}`;
          computerPastCard.style.pointerEvents = 'auto';
          computerPastCardInfo.innerText = luckyDuckDeckArray[7].description;
          decideTurn.style.color = randomRGB();
          moveDisplay.innerText = `Player 1's Present`;
          p2PastCard.src = `${luckyDuckDeckArray[7].img}`;
          p2PastValue.innerText = `${luckyDuckDeckArray[7].number}`;
          p2PastResult =`${luckyDuckDeckArray[7].number}`;
          p2TotalLuck -= luckyDuckDeckArray[7].number;
          keepBtn.style.pointerEvents = 'auto'
          shuffleBtn.style.pointerEvents = 'auto'
          moves += 1
          clearInterval(computerShuffle1)
          }, 2000)
      } else if (c == 2) {
        let computerKeep1 = setInterval(function() {
          decideTurn.innerText = `Computer chose to keep card.`;
          computerPastCard.src = `${luckyDuckDeckArray[1].img}`;
          computerPastCard.style.pointerEvents = 'auto';
          computerPastCardInfo.innerText = luckyDuckDeckArray[1].description;
          decideTurn.style.color = randomRGB();
          moveDisplay.innerText = `Player 1's Present`;
          p2PastCard.src = `${luckyDuckDeckArray[1].img}`;
          p2PastValue.innerText = `${luckyDuckDeckArray[1].number}`;
          p2PastResult =`${luckyDuckDeckArray[1].number}`;
          p2TotalLuck -= luckyDuckDeckArray[1].number;
          keepBtn.style.pointerEvents = 'auto'
          shuffleBtn.style.pointerEvents = 'auto'
          moves += 1
          clearInterval(computerKeep1)
          }, 2000)
      }
}
let computerModeTurnS2 = () => {
    playerPresentCard.src = `${luckyDuckDeckArray[8].img}`
      popUpBoxImage.src=`${luckyDuckDeckArray[8].img}`
      playerPresentCard.style.pointerEvents = 'auto';
      playerPresentCardInfo.innerText = luckyDuckDeckArray[8].description
      decideTurn.innerText = `Computer's`
      decideTurn.style.color = randomRGB()
      moveDisplay.innerText = 'Present'
      p1PresentCard.src = `${luckyDuckDeckArray[8].img}`
      p1PresentValue.innerText = `${luckyDuckDeckArray[8].number}`
      p1PresentResult =`${luckyDuckDeckArray[8].number}`
      p1TotalLuck += luckyDuckDeckArray[8].number
      keepBtn.style.pointerEvents = 'none'
      shuffleBtn.style.pointerEvents = 'none'
      if (c == 1) {
        let computerShuffle1 = setInterval(function() {
          decideTurn.innerText = `Computer chose to shuffle card.`;
          computerPresentCard.src = `${luckyDuckDeckArray[9].img}`;
          computerPresentCard.style.pointerEvents = 'auto';
          computerPresentCardInfo.innerText = luckyDuckDeckArray[9].description;
          decideTurn.style.color = randomRGB();
          moveDisplay.innerText = `Player 1's Future`;
          p2PresentCard.src = `${luckyDuckDeckArray[9].img}`;
          p2PresentValue.innerText = `${luckyDuckDeckArray[9].number}`;
          p2PresentResult =`${luckyDuckDeckArray[9].number}`;
          p2TotalLuck += luckyDuckDeckArray[9].number;
          keepBtn.style.pointerEvents = 'auto'
          shuffleBtn.style.pointerEvents = 'auto'
          moves += 1
          clearInterval(computerShuffle1)
          }, 2000)
      } else if (c == 2) {
        let computerKeep1 = setInterval(function(){
          decideTurn.innerText = `Computer chose to keep card.`
          computerPresentCard.src = `${luckyDuckDeckArray[3].img}`;
          computerPresentCard.style.pointerEvents = 'auto';
          computerPresentCardInfo.innerText = luckyDuckDeckArray[3].description;
          decideTurn.style.color = randomRGB();
          moveDisplay.innerText = `Player 1's Future`;
          p2PresentCard.src = `${luckyDuckDeckArray[3].img}`;
          p2PresentValue.innerText = `${luckyDuckDeckArray[3].number}`;
          p2PresentResult =`${luckyDuckDeckArray[3].number}`;
          p2TotalLuck += luckyDuckDeckArray[3].number;
          keepBtn.style.pointerEvents = 'auto'
          shuffleBtn.style.pointerEvents = 'auto'
          moves += 1
          clearInterval(computerKeep1)
          }, 2000)
      }
}
let computerModeTurnS3 = () => {
    playerFutureCard.src = `${luckyDuckDeckArray[10].img}`
      popUpBoxImage.src=`${luckyDuckDeckArray[10].img}`
      playerFutureCard.style.pointerEvents = 'auto';
      playerFutureCardInfo.innerText = luckyDuckDeckArray[10].description
      decideTurn.innerText = `Computer's`
      decideTurn.style.color = randomRGB()
      moveDisplay.innerText = 'Future'
      p1FutureCard.src = `${luckyDuckDeckArray[10].img}`
      p1FutureValue.innerText = `${luckyDuckDeckArray[10].number}`
      p1FutureResult =`${luckyDuckDeckArray[10].number}`
      p1TotalLuck += luckyDuckDeckArray[10].number
      keepBtn.style.pointerEvents = 'none'
      shuffleBtn.style.pointerEvents = 'none'
      if (c == 1) {
        let computerShuffle1 = setInterval(function() {
          decideTurn.innerText = `Computer chose to shuffle card.`;
          computerFutureCard.src = `${luckyDuckDeckArray[11].img}`;
          computerFutureCard.style.pointerEvents = 'auto';
          computerFutureCardInfo.innerText = luckyDuckDeckArray[11].description;
          decideTurn.style.color = randomRGB();
          moveDisplay.innerText = ``;
          placeHolderCard.innerText = ""
          p2FutureCard.src = `${luckyDuckDeckArray[11].img}`;
          p2FutureValue.innerText = `${luckyDuckDeckArray[11].number}`;
          p2FutureResult =`${luckyDuckDeckArray[11].number}`;
          p2TotalLuck += luckyDuckDeckArray[11].number;
          keepBtn.style.pointerEvents = 'none'
          shuffleBtn.style.pointerEvents = 'none'
          moves += 1
          
          let gameover = setInterval(function() {
            p2TotalValue.innerText = p2TotalLuck
            p1TotalValue.innerText = p1TotalLuck
            decideTurn.innerText = `Game Over`;
            decideTurn.style.color = randomRGB();
            decideTurn2.innerText = 'Ducks'
            decideTurn2.style.color = randomRGB()
            moveDisplay.innerText = ""
            placeHolderCard.innerText = ""
            resultsBtn.setAttribute('style', `display: inline-block`)
            shuffleBtn.setAttribute('style', `display: none`)
            keepBtn.setAttribute('style', `display: none`)
            clearInterval(gameover)
          },2000)
          clearInterval(computerShuffle1)
          }, 2000)
      } else if (c == 2) {
        let computerKeep1 = setInterval(function(){
          decideTurn.innerText = `Computer chose to keep card.`
          computerFutureCard.src = `${luckyDuckDeckArray[5].img}`;
          computerFutureCard.style.pointerEvents = 'auto';
          computerFutureCardInfo.innerText = luckyDuckDeckArray[5].description;
          decideTurn.style.color = randomRGB();
          moveDisplay.innerText = ``;
          placeHolderCard.innerText = ""
          p2FutureCard.src = `${luckyDuckDeckArray[5].img}`;
          p2FutureValue.innerText = `${luckyDuckDeckArray[5].number}`;
          p2FutureResult =`${luckyDuckDeckArray[5].number}`;
          p2TotalLuck += luckyDuckDeckArray[5].number;
          p2TotalValue.innerText = p2TotalLuck
          p1TotalValue.innerText = p1TotalLuck
          keepBtn.style.pointerEvents = 'none'
          shuffleBtn.style.pointerEvents = 'none'
          moves += 1
  
          let gameover = setInterval(function() {
            p2TotalValue.innerText = p2TotalLuck
            p1TotalValue.innerText = p1TotalLuck
            
            decideTurn.innerText = `Game Over`;
            decideTurn.style.color = randomRGB();
            decideTurn2.innerText = 'Ducks'
            decideTurn2.style.color = randomRGB()
            moveDisplay.innerText = ""
            placeHolderCard.innerText = ""
            resultsBtn.setAttribute('style', `display: inline-block`)
            shuffleBtn.setAttribute('style', `display: none`)
            keepBtn.setAttribute('style', `display: none`)
            clearInterval(gameover)
          },2000)
          clearInterval(computerKeep1)
          }, 2000) 
      }
}

let shuffleTurn1 = () => {
    playerPastCard.src = `${luckyDuckDeckArray[6].img}`
    popUpBoxImage.src=`${luckyDuckDeckArray[6].img}`
    playerPastCard.style.pointerEvents = 'auto';
    playerPastCardInfo.innerText = luckyDuckDeckArray[6].description
    decideTurn.innerText = `Player 2's`
    decideTurn.style.color = randomRGB()
    popUpBox.setAttribute('style', `display: block`)
    moveDisplay.innerText = 'Past'
    p1PastCard.src = `${luckyDuckDeckArray[6].img}`
    p1PastValue.innerText = `${luckyDuckDeckArray[6].number}`
    p1PastResult =`${luckyDuckDeckArray[6].number}`
    p1TotalLuck -= luckyDuckDeckArray[6].number
}
let shuffleTurn2 = () => {
    computerPastCard.src = `${luckyDuckDeckArray[7].img}`
        popUpBoxImage.src=`${luckyDuckDeckArray[7].img}`
        computerPastCard.style.pointerEvents = 'auto';
        computerPastCardInfo.innerText = luckyDuckDeckArray[7].description
        decideTurn.innerText = `Player 1's`
        decideTurn.style.color = randomRGB()
        popUpBox.setAttribute('style', `display: block;`)
        moveDisplay.innerText = 'Present'
        p2PastCard.src = `${luckyDuckDeckArray[7].img}`
        p2PastValue.innerText = `${luckyDuckDeckArray[7].number}`
        p2PastResult =`${luckyDuckDeckArray[7].number}`
        p2TotalLuck -= luckyDuckDeckArray[7].number
}
let shuffleTurn3 = () => {
    playerPresentCard.src = `${luckyDuckDeckArray[8].img}`
        popUpBoxImage.src=`${luckyDuckDeckArray[8].img}`
        playerPresentCard.style.pointerEvents = 'auto';
        playerPresentCardInfo.innerText = luckyDuckDeckArray[8].description
        decideTurn.innerText = `Player 2's`
        decideTurn.style.color = randomRGB()
        popUpBox.setAttribute('style', `display: block`)
        moveDisplay.innerText = 'Present'
        p1PresentCard.src = `${luckyDuckDeckArray[8].img}`
        p1PresentValue.innerText = `${luckyDuckDeckArray[8].number}`
        p1PresentResult =`${luckyDuckDeckArray[8].number}`
        p1TotalLuck += luckyDuckDeckArray[8].number
}
let shuffleTurn4 = () => {
    computerPresentCard.src = `${luckyDuckDeckArray[9].img}`
        popUpBoxImage.src=`${luckyDuckDeckArray[9].img}`
        computerPresentCard.style.pointerEvents = 'auto';
        computerPresentCardInfo.innerText = luckyDuckDeckArray[9].description
        decideTurn.innerText = `Player 1's`
        decideTurn.style.color = randomRGB()
        popUpBox.setAttribute('style', `display: block`)
        moveDisplay.innerText = 'Future'
        p2PresentCard.src = `${luckyDuckDeckArray[9].img}`
        p2PresentValue.innerText = `${luckyDuckDeckArray[9].number}`
        p2PresentResult =`${luckyDuckDeckArray[9].number}`
        p2TotalLuck +=luckyDuckDeckArray[9].number
}
let shuffleTurn5 = () => {
    playerFutureCard.src = `${luckyDuckDeckArray[10].img}`
        popUpBoxImage.src=`${luckyDuckDeckArray[10].img}`
        playerFutureCard.style.pointerEvents = 'auto';
        playerFutureCardInfo.innerText = luckyDuckDeckArray[10].description
        decideTurn.innerText = `Player 2's`
        decideTurn.style.color = randomRGB()
        popUpBox.setAttribute('style', `display: block`)
        moveDisplay.innerText = 'Future'
        p1FutureCard.src = `${luckyDuckDeckArray[10].img}`
        p1FutureValue.innerText = `${luckyDuckDeckArray[10].number}`
        p1FutureResult =`${luckyDuckDeckArray[10].number}`
        p1TotalLuck += luckyDuckDeckArray[10].number
}
let shuffleTurn6 = () => {
    computerFutureCard.src = `${luckyDuckDeckArray[11].img}`
        popUpBoxImage.src=`${luckyDuckDeckArray[11].img}`
        computerFutureCard.style.pointerEvents = 'auto';
        computerFutureCardInfo.innerText = luckyDuckDeckArray[11].description

        // on player 2's last turn set display to game over
        decideTurn.innerText = 'Game Over'
        decideTurn2.innerText = 'Ducks'
        decideTurn.style.color = randomRGB()
        decideTurn2.style.color = randomRGB()
        moveDisplay.innerText = ""
        placeHolderCard.innerText = ""
        p2FutureCard.src = `${luckyDuckDeckArray[11].img}`
        p2FutureValue.innerText = `${luckyDuckDeckArray[11].number}`
        p2FutureResult =`${luckyDuckDeckArray[11].number}`
        p2TotalLuck += luckyDuckDeckArray[11].number

        // set each players total value
        p2TotalValue.innerText = p2TotalLuck
        p1TotalValue.innerText = p1TotalLuck

        popUpBox.setAttribute('style', 'display: block')
        resultsBtn.setAttribute('style', `display: inline-block`)

        // remove shuffle and keep buttons on turn 6
        shuffleBtn.setAttribute('style', `display: none`)
        keepBtn.setAttribute('style', `display: none`)
}