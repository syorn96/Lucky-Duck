// FUNCTIONS

// function to shuffle array -- special thanks to Ronald Fisher and Frank Yates for the Fisher-Yates algorith --
const shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  //function to randomize computer choices (either 1 or 2)
  function computermode() {
    c = Math.ceil(Math.random() * 2)
    return c
  }

  // function to create imgs of card variations
 let createViewDeck = () => {
    for (let i = 0; i < clonedLuckyDeckArray.length; i++) {
        const createImg = document.createElement('img')
        createImg.classList.add('cardsize')
        createImg.src = `${clonedLuckyDeckArray[i].img}`
        createImg.alt = `${clonedLuckyDeckArray[i].description}`
        deckGallery.append(createImg)
        let newDeckGallery = document.querySelectorAll('.cardsize')
        newDeckGallery.forEach(e => {
            e.addEventListener('click', ()=> {
                viewDeckGalleryImg.src = e.src
                viewCardDescription.innerText = e.alt
                viewDeckGallery.setAttribute('style', `display: block;`)
                })
            })
        }
    }
   

    // shuffle the fortunes for gameplay
    shuffle(luckyDuckFortuneArray);

    // for player 1 and player 2/computer, text-color change
    const randomRGB = () => {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        return `rgb(${r}, ${g}, ${b})`
        }

    // duplicate background every 2 clicks
    let duplicateBackground = () => {
        clickCounter ++
        if (clickCounter % 2) {
        vw -= 10
        vh -= 10
        }
        if (vw == 0) {
            vw = 100
        }
        if (vh == 0) {
            vh = 100
        }
        body.setAttribute('style', `background-size: ${vw}vw ${vh}vh;`)
    }

    // start game button actions
    let startGame = () => {
        gameScreen1.setAttribute('style', `display: none;`);
        gameScreen2.setAttribute('style', `display: grid;`);
        decideTurn.style.color = randomRGB();
        computerTitle.innerText = 'Player 2';
        vsComputerBtn.style.pointerEvents = 'none';
        startClickCounter ++;
        viewCardInGame.forEach(e => {
            e.style.pointerEvents = 'none';
        })
        if (startClickCounter == 1){
            shuffle(luckyDuckDeckArray)
            shuffle(availableComputerFortunesArray)
            popUpBoxImage.src=`${luckyDuckDeckCardBack[0].img}`
            popUpBox.setAttribute('style', `display: block`)
            howToPlayBtn2.style.pointerEvents = 'none'
            return2Start.style.pointerEvents = 'none'
        }
    }
// VS computer mode button actions
    let computerMode = () => {
      gameScreen1.setAttribute('style', `display: none;`)
      gameScreen2.setAttribute('style', `display: grid;`)
      computerTitle.innerText = 'Computer'
      trackComputerMode = 1
      decideTurn.style.color = randomRGB()
      startGameBtn.style.pointerEvents = 'none';
      startClickCounter ++
      if (startClickCounter == 1){
            shuffle(luckyDuckDeckArray)
            shuffle(availableComputerFortunesArray)
            popUpBoxImage.src=`${luckyDuckDeckCardBack[0].img}`
            popUpBox.setAttribute('style', `display: block`)
            howToPlayBtn2.style.pointerEvents = 'none'
            return2start.style.pointerEvents = 'none'
        }
    }
// View deck gallery btn actions
    let viewMode = () => {
        deckGallery.setAttribute('style', `display: block;`)
        gameScreen1.setAttribute('style', `display: none;`)
        viewDeckGallery.setAttribute('style', `display: block;`)
        viewDeckGalleryImg.src = `${luckyDuckDeckCardBack[0].img}`
        viewCardDescription.innerText = 'Lucky Duck Tarot Card Design'
    }
// restart button actions
    let escViewMode = () => {
        deckGallery.setAttribute('style', `display: none;`)
        viewDeckGallery.setAttribute('style', `display: none;`)
        gameScreen1.setAttribute('style', `display: block;`)
    }

    let restartMode = () => {
        startClickCounter = 0
        trackComputerMode = 0
       
        // on restart set cards and descriptions to default
        cardInfo.forEach(e => {
            e.innerText = ""
        })
        viewCardInGame.forEach(e => {
            e.style.pointerEvents = 'none';
            e.src = `${luckyDuckDeckCardBack[0].img}`
        })

        // on restart restart move# and the player1/player 2 TotalLuck to 0
        decideTurn.innerText = `Player 1's`
        p1TotalLuck = 0
        p2TotalLuck = 0
        moves = 0
        decideTurn2.innerText = ''
        moveDisplay.innerText = 'Past';
        placeHolderCard.innerText = "Card"

        // on restart shuffle the deck, and fortunes
        shuffle(luckyDuckDeckArray)
        shuffle(luckyDuckFortuneArray)
        shuffle(availableComputerFortunesArray)
        resultsBtn.setAttribute('style', `display: none`)
        shuffleBtn.setAttribute('style', `display: inline-block`)
        keepBtn.setAttribute('style', `display: inline-block`)
        fortuneBtn.setAttribute('style', 'display: inline-block')
        startGameBtn.style.pointerEvents = 'auto';
        vsComputerBtn.style.pointerEvents = 'auto';
    }

    let howToPlay2 = () => {
        howToPlayScreen2.setAttribute('style', `display: block`)
        
        cardInfo.forEach(e => {
            e.setAttribute('style', `display: none`)
        })

        luckyDuckTarotDeck.setAttribute('style', `display: none`)
        turnContainer.setAttribute('style', `display: none`)
        menu2.setAttribute('style', `display: none`)
        tarotDeckContainer.setAttribute('style', `display: none`)
    }

    let escHowtoPlay2 = () => {
        howToPlayScreen2.setAttribute('style', `display: none`)
        gameScreen2.setAttribute('style', `display: grid`)
        cardInfo.forEach(e => {
            e.setAttribute('style', `display: block`)
        })
        luckyDuckTarotDeck.setAttribute('style', `display: block`)
        turnContainer.setAttribute('style', `display: block`)
        menu2.setAttribute('style', `display: block`)
        tarotDeckContainer.setAttribute('style', `display: block`)
        decideTurn.style.color = randomRGB()
        decideTurn2.style.color = randomRGB()
    }

    let disableBtns = () => {
        keepBtn.style.pointerEvents = 'none'
        shuffleBtn.style.pointerEvents = 'none'
        howToPlayBtn2.style.pointerEvents = 'none'
        return2Start.style.pointerEvents = 'none'
      }
    let enableBtns = () => {
        keepBtn.style.pointerEvents = 'auto'
        shuffleBtn.style.pointerEvents = 'auto'
        howToPlayBtn2.style.pointerEvents = 'auto'
        return2Start.style.pointerEvents = 'auto'
      }

    let disableHtpAndReturn = () => {
        popUpBox.setAttribute('style', `display: block`)
        howToPlayBtn2.style.pointerEvents = 'none'
        return2Start.style.pointerEvents = 'none'
    }

    let postGameViewBlock = () => {
        postGameView.setAttribute('style', `display: block`)
    }
