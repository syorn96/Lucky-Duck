//Deck of Lucky Duck Tarot Cards
let luckyDuckDeckArray = [
    {
      number: 12,
      img: './media/./12.jpeg',
      description:`Are you diving into your passions? Follow your desires. Don't be afraid - be like Duck Fieri!`,
    },
    {
      number: 13,
      img: './media/./13.jpeg',
      description:`Are your duckling needs being met? Sometimes you have to fight for what you quackin' want.`,
    },
    {
      number: 14,
      img: './media/./14.jpg',
      description:`It's not that duckin' serious. Learn to take a waddle back and QOL! Strive to be above the other birds. QUACK OUT LOUD!`,
    },
    {
      number: 15,
      img: './media/./15.jpg',
      description:`Clearly you know what you duckin' want. It's just a matter of quacking it verbally into existence.`,
    },
    {
      number: 16,
      img: './media/./16.jpg',
      description:`Do you find yourself not fitting in? Or is there someone that rubs you the wrong way? Don't let your anger or disappointment be the cause of your downfall.`,
    },
    {
      number: 17,
      img: './media/./17.jpg',
      description:'Conflicts between other ducks may arise. Reconsider before the consequences are dire.',
    },
    // {
    //     number: 18,
    //     img: './media/./17.jpg',
    //     description:'Conflicts between other ducks may arise. Reconsider before the consequences are dire.',
    //   },
    //   {
    //     number: 19,
    //     img: './media/./17.jpg',
    //     description:'Conflicts between other ducks may arise. Reconsider before the consequences are dire.',
    //   },
      {
        number: 20,
        img: './media/./20.jpeg',
        description:'You may be blanketed with sadness either by choice or natural causes. Let the storm pass.',
      },
      {
        number: 21,
        img: './media/./21.jpeg',
        description:`Confusion is just a state of mind. Recollect your duckin' thoughts and gain clarity.`,
      },
      {
        number: 22,
        img: './media/./22.jpeg',
        description:`A real duck only quacks when absolutely necessary.`,
      },
      {
        number: 23,
        img: './media/./23.jpeg',
        description:`A lover duck may be coming into your life!`,
      },
      {
        number: 24,
        img: './media/./24.jpeg',
        description:`Who said ducks can't chill? It's time to consider that trip.`,
      },
      {
        number: 25,
        img: './media/./25.jpeg',
        description:`A happy duck is the best kind of duck.`,
      },
  ]
  let clonedLuckyDeck = luckyDuckDeckArray.slice(0)
//Load HTML before retrieving data
document.addEventListener('DOMContentLoaded', () => {
    //variables for gameplay
    let body = document.querySelector('#body')
    let gamescreen1 = document.querySelector('#game-screen1')
    let gamescreen2 = document.querySelector('#game-screen2')
    let gamescreen3 = document.querySelector('#game-screen3')
    let startgamebtn = document.querySelector('#startbtn')
    let restartgamebtn = document.querySelector('#restartgame') 
    let howtoplaybtn = document.querySelector('#HTPbtn')
    let howtoplaybtn2 = document.querySelector('#HTPbtn2')
    let howtoplayscreen = document.querySelector('#howtoplay')
    let exitHTP = document.querySelector('#exith2p')
    let howtoplayscreen2 = document.querySelector('#howtoplay2')
    let exitHTP2 = document.querySelector('#exith2p2')
    let viewdeck = document.querySelector('#viewdeck')
    let deckgallery = document.querySelector('#deckgallery')
    let escapeDeckGallery = document.querySelector('#escapeDeckGallery')
    let viewDeckGallery = document.querySelector('#viewDeckGallery')
    let viewDeckGalleryImg = document.querySelector('#viewDeckGalleryImg')
    let escViewDeckGallery = document.querySelector('#escViewDeckGallery')

    let return2start = document.querySelector('#return2start') 
    let menu2 = document.querySelector('.BotR3')

    // variable to showcase card design
    let TarotDeckContainer = document.querySelector('#TarotDeckContainer')
    let luckyducktarotdeck = document.querySelector('#TarotDeck')
    let luckyDuckDeckCardBack = [
        {
            img: './media/./LuckyDuckCardBack.jpeg'
        }
    ]

    //variables for card selection + set cards to no click function
    let playerpastcard = document.querySelector('#playercard1')
    playerpastcard.style.pointerEvents = 'none';
    let playerpastcardinfo = document.querySelector('#PlayerCard1info')
    let playerpresentcard = document.querySelector('#playercard2')
    playerpresentcard.style.pointerEvents = 'none';
    let playerpresentcardinfo = document.querySelector('#PlayerCard2info')
    let playerfuturecard = document.querySelector('#playercard3')
    playerfuturecard.style.pointerEvents = 'none';
    let playerfuturecardinfo = document.querySelector('#PlayerCard3info')
    let computerpastcard = document.querySelector('#computercard1')
    computerpastcard.style.pointerEvents = 'none';
    let computerpastcardinfo = document.querySelector('#CompCard1info')
    let computerpresentcard = document.querySelector('#computercard2')
    computerpresentcard.style.pointerEvents = 'none';
    let computerpresentcardinfo = document.querySelector('#CompCard2info')
    let computerfuturecard = document.querySelector('#computercard3')
    computerfuturecard.style.pointerEvents = 'none';
    let computerfuturecardinfo = document.querySelector('#CompCard3info')

    // variables for pop-up box
    let popupbox = document.querySelector('#PopUpCard')
    let popupboximage = document.querySelector('#PopUpCardImg')
    let returnbtn = document.getElementById('returnbtn')
    // let ShuffledDuckArray = luckyDuckDeckArray.sort(() => 0.5 - Math.random());
    // function to shuffle array on restart
    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
      }
    // variables for turn display
    let turncontainer = document.querySelector('#turntracker')
    let decideTurn = document.querySelector('#turncounter')
    let decideTurn2 = document.querySelector('#turncounter2')
    let movedisplay = document.querySelector('#turndisplay')
    let placeholdercard = document.querySelector('#placeholdercard')
    // move tracker
    let moves = 0
    // shuffle and keep button
    let shufflebtn = document.querySelector('#shufflebtn')
    let keepbtn = document.querySelector('#keepbtn')

    // variables for post-game results & screen 3 usage
    let resultsbtn = document.querySelector('#resultsbtn')

    // player 1 card's
    let P1PresentCard = document.querySelector('#P1PresentCard')
    let P1PastCard = document.querySelector('#P1PastCard')
    let P1FutureCard = document.querySelector('#P1FutureCard')

    // player 2 card's
    let P2PresentCard = document.querySelector('#P2PresentCard')
    let P2PastCard = document.querySelector('#P2PastCard')
    let P2FutureCard = document.querySelector('#P2FutureCard')

    // player 1 values from card
    let P1PresentValue = document.querySelector('#P1PresentValue')
    let P1PastValue = document.querySelector('#P1PastValue')
    let P1FutureValue = document.querySelector('#P1FutureValue')
    let P1TotalValue = document.querySelector('#P1TotalValue')

    // player 2 values from card
    let P2PresentValue = document.querySelector('#P2PresentValue')
    let P2PastValue = document.querySelector('#P2PastValue')
    let P2FutureValue = document.querySelector('#P2FutureValue')
    let P2TotalValue = document.querySelector('#P2TotalValue')

    // varibles for player 1 to use for total luck calculation
    let P1PastResult = null
    let P1PresentResult = null
    let P1FutureResult = null
    let P1TotalLuck = 0

    // varibles for player 2 to use for total luck calculation
    let P2PastResult = null
    let P2PresentResult = null
    let P2FutureResult = null
    let P2TotalLuck = 0

    // post game 
    let GameResults = document.querySelector('#GameResults')
    let postgameview = document.querySelector('#postgameview')
    let postgameviewimg = document.querySelector('#postgameviewimg')
    let return2menu = document.querySelector('#return2menu')
    let return2game = document.querySelector('#return2game')
    

    // console.log(ShuffledDuckArray)
     //each time the user clicks screen 2x, duplicate the background 
    let vw = 100
    let vh = 100
    let clickcounter = 0
    let startclickcounter = 0
    let galleyclickcounter = 0
    body.addEventListener('click', ()=> {
        clickcounter ++
        if (clickcounter % 2) {
        vw -= 10
        vh -= 10
        }
        if (vw == 0) {
            vw = 100
        }
        if (vh == 0) {
            vh = 100
        }
        console.log(vw, vh)
        body.setAttribute('style', `background-size: ${vw}vw ${vh}vh;`)
    })
    //on start default the cards to be set as the tarot deck back cover 
    startgamebtn.addEventListener('click', ()=> {
        gamescreen1.setAttribute('style', `display: none;`)
        gamescreen2.setAttribute('style', `display: grid;`)
        startclickcounter ++
        if (startclickcounter == 1){
            shuffle(luckyDuckDeckArray)
        }
        // popupbox.setAttribute('style', `display: block;`)
    })
    // loop to create imgs of original deck in div so players can view artwork.
    viewdeck.addEventListener('click', ()=> {
        deckgallery.setAttribute('style', `display: block;`)
        gamescreen1.setAttribute('style', `display: none;`)
        // run loop only once
        galleryclickcounter ++
        if (galleryclickcounter == 1){
            for (let i = 0; i <= clonedLuckyDeck.length; i++) {
            const createImg = document.createElement('img')
            createImg.classList.add('cardsize')
            createImg.src = `${clonedLuckyDeck[i].img}`
            deckgallery.append(createImg)
            let newDeckGallery = document.querySelectorAll('.cardsize')
            newDeckGallery.forEach(e => {
                e.addEventListener('click', ()=> {
                    viewDeckGalleryImg.src = e.src
                    viewDeckGallery.setAttribute('style', `display: block;`)
                })
            })
        }
    }
    })
    //return btn for popup when img is selected in lucky duck gallery
    escViewDeckGallery.addEventListener('click', ()=> {
        viewDeckGallery.setAttribute('style', `display: none;`)
    })
    // return btn to actual main menu
    escapeDeckGallery.addEventListener('click', ()=> {
        deckgallery.setAttribute('style', `display: none;`)
        gamescreen1.setAttribute('style', `display: block;`)
    })
    

    // on restart reset game to default settings
    restartgamebtn.addEventListener('click', ()=>{
        //  on restart set the cards to default
        playerpastcard.src = `${luckyDuckDeckCardBack[0].img}` 
        playerpresentcard.src = `${luckyDuckDeckCardBack[0].img}` 
        playerfuturecard.src = `${luckyDuckDeckCardBack[0].img}` 
        computerpastcard.src = `${luckyDuckDeckCardBack[0].img}` 
        computerpresentcard.src = `${luckyDuckDeckCardBack[0].img}` 
        computerfuturecard.src = `${luckyDuckDeckCardBack[0].img}`
        // on restart set the descriptions to default
        playerpastcardinfo.innerText = ""
        playerpresentcardinfo.innerText = ""
        playerfuturecardinfo.innerText = ""
        computerpastcardinfo.innerText = ""
        computerpresentcardinfo.innerText = ""
        computerfuturecardinfo.innerText = ""
        // on restart reset the ability to view cards
        playerpastcard.style.pointerEvents = 'none';
        playerpresentcard.style.pointerEvents = 'none';
        playerfuturecard.style.pointerEvents = 'none';
        computerpastcard.style.pointerEvents = 'none';
        computerpresentcard.style.pointerEvents = 'none';
        computerfuturecard.style.pointerEvents = 'none';

        // on restart set the player1 and player 2 TotalLuck to 0
        decideTurn.innerText = `Player 1's`
        P1TotalLuck = 0
        P2TotalLuck = 0

        moves -= 50
        if (moves < 0) {
            moves = 0
        }
        movedisplay.innerText = 'Past';
        placeholdercard.innerText = "Card"
        shuffle(luckyDuckDeckArray)
        resultsbtn.setAttribute('style', `display: none`)
        shufflebtn.setAttribute('style', `display: inline-block`)
        keepbtn.setAttribute('style', `display: inline-block`)

    })
    // How to play on screen 1
    howtoplaybtn.addEventListener('click', ()=> {
        gamescreen1.setAttribute('style', `display: none`)
        howtoplayscreen.setAttribute('style', `display: block`)
    })
    // Exit button for How to play on screen 1
    exitHTP.addEventListener('click', ()=> {
        gamescreen1.setAttribute('style', `display: block`)
        howtoplayscreen.setAttribute('style', `display: none`)
    })
    // How to play button on screen 2
    howtoplaybtn2.addEventListener('click', ()=> {
        howtoplayscreen2.setAttribute('style', `display: block`)
        playerpastcardinfo.setAttribute('style', `display: none`)
        playerpresentcardinfo.setAttribute('style', `display: none`)
        playerfuturecardinfo.setAttribute('style', `display: none`)
        computerpastcardinfo.setAttribute('style', `display: none`)
        computerpresentcardinfo.setAttribute('style', `display: none`)
        computerfuturecardinfo.setAttribute('style', `display: none`)
        luckyducktarotdeck.setAttribute('style', `display: none`)
        turncontainer.setAttribute('style', `display: none`)
        menu2.setAttribute('style', `display: none`)
        TarotDeckContainer.setAttribute('style', `display: none`)

    })
    // exit how to play on screen 2
    exitHTP2.addEventListener('click', ()=> {
        howtoplayscreen2.setAttribute('style', `display: none`)
        gamescreen2.setAttribute('style', `display: grid`)
        playerpastcardinfo.setAttribute('style', `display: block`)
        playerpresentcardinfo.setAttribute('style', `display: block`)
        playerfuturecardinfo.setAttribute('style', `display: block`)
        computerpastcardinfo.setAttribute('style', `display: block`)
        computerpresentcardinfo.setAttribute('style', `display: block`)
        computerfuturecardinfo.setAttribute('style', `display: block`)
        luckyducktarotdeck.setAttribute('style', `display: block`)
        turncontainer.setAttribute('style', `display: block`)
        menu2.setAttribute('style', `display: block`)
        TarotDeckContainer.setAttribute('style', `display: block`)
    })
    // return to screen 1
    return2start.addEventListener('click', () => {
        gamescreen1.setAttribute('style', `display: block`)
        gamescreen2.setAttribute('style', `display: none`)
    })
    // return button for the PopUpcard viewer
    returnbtn.addEventListener(('click'), ()=> {
        popupbox.setAttribute('style', `display: none`)
    })

    // game logic dependent on keep button
    // cards are only clickable once loaded
    keepbtn.addEventListener(('click'), ()=> {
        moves +=1
        if (moves == 1) {
            playerpastcard.src = `${luckyDuckDeckArray[0].img}`
            popupboximage.src=`${luckyDuckDeckArray[0].img}`
            playerpastcard.style.pointerEvents = 'auto';
            playerpastcardinfo.innerText = luckyDuckDeckArray[0].description
            decideTurn.innerText = `Player 2's`
            popupbox.setAttribute('style', `display: block`)
            popupboximage.setAttribute('style', `display: inline-block`)
            movedisplay.innerText = 'Past'
            P1PastCard.src = `${luckyDuckDeckArray[0].img}`
            P1PastValue.innerText = `${luckyDuckDeckArray[0].number}`
            P1PastResult =`${luckyDuckDeckArray[0].number}`
            P1TotalLuck -= luckyDuckDeckArray[0].number
            
        } else if (moves == 2) {
            computerpastcard.src = `${luckyDuckDeckArray[1].img}`
            popupboximage.src=`${luckyDuckDeckArray[1].img}`
            computerpastcard.style.pointerEvents = 'auto';
            computerpastcardinfo.innerText = luckyDuckDeckArray[1].description
            decideTurn.innerText = `Player 1's`
            popupbox.setAttribute('style', `display: block`)
            popupboximage.setAttribute('style', `display: inline-block`)
            movedisplay.innerText = 'Present'
            P2PastCard.src = `${luckyDuckDeckArray[1].img}`
            P2PastValue.innerText = `${luckyDuckDeckArray[1].number}`
            P2PastResult =`${luckyDuckDeckArray[1].number}`
            P2TotalLuck -= luckyDuckDeckArray[1].number
            
        } else if (moves == 3) {
            playerpresentcard.src = `${luckyDuckDeckArray[2].img}`
            popupboximage.src=`${luckyDuckDeckArray[2].img}`
            playerpresentcard.style.pointerEvents = 'auto';
            playerpresentcardinfo.innerText = luckyDuckDeckArray[2].description
            decideTurn.innerText = `Player 2's`
            popupbox.setAttribute('style', `display: block`)
            popupboximage.setAttribute('style', `display: inline-block`)
            movedisplay.innerText = 'Present'
            P1PresentCard.src = `${luckyDuckDeckArray[2].img}`
            P1PresentValue.innerText = `${luckyDuckDeckArray[2].number}`
            P1PresentResult =`${luckyDuckDeckArray[2].number}`
            P1TotalLuck += luckyDuckDeckArray[2].number
            
        } else if (moves == 4) {
            computerpresentcard.src = `${luckyDuckDeckArray[3].img}`
            popupboximage.src=`${luckyDuckDeckArray[3].img}`
            computerpresentcard.style.pointerEvents = 'auto';
            computerpresentcardinfo.innerText = luckyDuckDeckArray[3].description
            decideTurn.innerText = `Player 1's`
            popupbox.setAttribute('style', `display: block`)
            popupboximage.setAttribute('style', `display: inline-block`)
            movedisplay.innerText = 'Future'
            P2PresentCard.src = `${luckyDuckDeckArray[3].img}`
            P2PresentValue.innerText = `${luckyDuckDeckArray[3].number}`
            P2PresentResult =`${luckyDuckDeckArray[3].number}`
            P2TotalLuck +=luckyDuckDeckArray[3].number
            
        } else if (moves == 5) {
            playerfuturecard.src = `${luckyDuckDeckArray[4].img}`
            popupboximage.src=`${luckyDuckDeckArray[4].img}`
            playerfuturecard.style.pointerEvents = 'auto';
            playerfuturecardinfo.innerText = luckyDuckDeckArray[4].description
            decideTurn.innerText = `Player 2's`
            popupbox.setAttribute('style', `display: block`)
            popupboximage.setAttribute('style', `display: inline-block`)
            movedisplay.innerText = 'Future'
            P1FutureCard.src = `${luckyDuckDeckArray[4].img}`
            P1FutureValue.innerText = `${luckyDuckDeckArray[4].number}`
            P1FutureResult =`${luckyDuckDeckArray[4].number}`
            P1TotalLuck += luckyDuckDeckArray[4].number
        } else if (moves == 6) {
            computerfuturecard.src = `${luckyDuckDeckArray[5].img}`
            popupboximage.src=`${luckyDuckDeckArray[5].img}`
            computerfuturecard.style.pointerEvents = 'auto';
            computerfuturecardinfo.innerText = luckyDuckDeckArray[5].description

            // on player 2's last turn display game over ducks
            decideTurn.innerText = 'Game Over'
            decideTurn2.innerText = 'Ducks'
            movedisplay.innerText = ""
            placeholdercard.innerText = ""
            P2FutureCard.src = `${luckyDuckDeckArray[5].img}`
            P2FutureValue.innerText = `${luckyDuckDeckArray[5].number}`
            P2FutureResult =`${luckyDuckDeckArray[5].number}`
            P2TotalLuck += luckyDuckDeckArray[5].number

            // display each players total luck on screen 3
            P2TotalValue.innerText = P2TotalLuck
            P1TotalValue.innerText = P1TotalLuck

            // condition for win/loss/draw
            if (P1TotalLuck > P2TotalLuck) {
                GameResults.innerText = "Player 1 is a Luckier Duck!"
            } else if (P1TotalLuck < P2TotalLuck) {
                GameResults.innerText = "Player 2 is a Luckier Duck!"
            } else if (P1TotalLuck == P2TotalLuck){
                GameResults.innerText = `It's a Draw. Must be fate!`
            }
            // only display game results, get rid of shuffle and keep btn
            popupbox.setAttribute('style', 'display: block')
            resultsbtn.setAttribute('style', `display: inline-block`)
            shufflebtn.setAttribute('style', `display: none`)
            keepbtn.setAttribute('style', `display: none`)
        } 
    })
    // game logic dependent on shuffle button
    // cards are only clickable once loaded
    shufflebtn.addEventListener(('click'), ()=> {
        moves +=1
        console.log(moves)
        if (moves == 1) {
            playerpastcard.src = `${luckyDuckDeckArray[6].img}`
            popupboximage.src=`${luckyDuckDeckArray[6].img}`
            playerpastcard.style.pointerEvents = 'auto';
            playerpastcardinfo.innerText = luckyDuckDeckArray[6].description
            decideTurn.innerText = `Player 2's`
            popupbox.setAttribute('style', `display: block`)
            popupboximage.setAttribute('style', `display: inline-block`)
            movedisplay.innerText = 'Past'
            P1PastCard.src = `${luckyDuckDeckArray[6].img}`
            P1PastValue.innerText = `${luckyDuckDeckArray[6].number}`
            P1PastResult =`${luckyDuckDeckArray[6].number}`
            P1TotalLuck -= luckyDuckDeckArray[6].number
            
        } else if (moves == 2) {
            computerpastcard.src = `${luckyDuckDeckArray[7].img}`
            popupboximage.src=`${luckyDuckDeckArray[7].img}`
            computerpastcard.style.pointerEvents = 'auto';
            computerpastcardinfo.innerText = luckyDuckDeckArray[7].description
            decideTurn.innerText = `Player 1's`
            popupbox.setAttribute('style', `display: block;`)
            popupboximage.setAttribute('style', `display: inline-block`)
            movedisplay.innerText = 'Present'
            P2PastCard.src = `${luckyDuckDeckArray[7].img}`
            P2PastValue.innerText = `${luckyDuckDeckArray[7].number}`
            P2PastResult =`${luckyDuckDeckArray[7].number}`
            P2TotalLuck -= luckyDuckDeckArray[7].number
            
        } else if (moves == 3) {
            playerpresentcard.src = `${luckyDuckDeckArray[8].img}`
            popupboximage.src=`${luckyDuckDeckArray[8].img}`
            playerpresentcard.style.pointerEvents = 'auto';
            playerpresentcardinfo.innerText = luckyDuckDeckArray[8].description
            decideTurn.innerText = `Player 2's`
            popupbox.setAttribute('style', `display: block`)
            popupboximage.setAttribute('style', `display: inline-block`)
            movedisplay.innerText = 'Present'
            P1PresentCard.src = `${luckyDuckDeckArray[8].img}`
            P1PresentValue.innerText = `${luckyDuckDeckArray[8].number}`
            P1PresentResult =`${luckyDuckDeckArray[8].number}`
            P1TotalLuck += luckyDuckDeckArray[8].number
            
        } else if (moves == 4) {
            computerpresentcard.src = `${luckyDuckDeckArray[9].img}`
            popupboximage.src=`${luckyDuckDeckArray[9].img}`
            computerpresentcard.style.pointerEvents = 'auto';
            computerpresentcardinfo.innerText = luckyDuckDeckArray[9].description
            decideTurn.innerText = `Player 1's`
            popupbox.setAttribute('style', `display: block`)
            popupboximage.setAttribute('style', `display: inline-block`)
            movedisplay.innerText = 'Future'
            P2PresentCard.src = `${luckyDuckDeckArray[9].img}`
            P2PresentValue.innerText = `${luckyDuckDeckArray[9].number}`
            P2PresentResult =`${luckyDuckDeckArray[9].number}`
            P2TotalLuck +=luckyDuckDeckArray[9].number
            
        } else if (moves == 5) {
            playerfuturecard.src = `${luckyDuckDeckArray[10].img}`
            popupboximage.src=`${luckyDuckDeckArray[10].img}`
            playerfuturecard.style.pointerEvents = 'auto';
            playerfuturecardinfo.innerText = luckyDuckDeckArray[10].description
            decideTurn.innerText = `Player 2's`
            popupbox.setAttribute('style', `display: block`)
            popupboximage.setAttribute('style', `display: inline-block`)
            movedisplay.innerText = 'Future'
            P1FutureCard.src = `${luckyDuckDeckArray[10].img}`
            P1FutureValue.innerText = `${luckyDuckDeckArray[10].number}`
            P1FutureResult =`${luckyDuckDeckArray[10].number}`
            P1TotalLuck += luckyDuckDeckArray[10].number
            
        } else if (moves == 6) {
            computerfuturecard.src = `${luckyDuckDeckArray[11].img}`
            popupboximage.src=`${luckyDuckDeckArray[11].img}`
            computerfuturecard.style.pointerEvents = 'auto';
            computerfuturecardinfo.innerText = luckyDuckDeckArray[11].description

            // on player 2's last turn set display to game over
            decideTurn.innerText = 'Game Over'
            decideTurn2.innerText = 'Ducks'
            movedisplay.innerText = ""
            placeholdercard.innerText = ""
            P2FutureCard.src = `${luckyDuckDeckArray[11].img}`
            P2FutureValue.innerText = `${luckyDuckDeckArray[11].number}`
            P2FutureResult =`${luckyDuckDeckArray[11].number}`
            P2TotalLuck += luckyDuckDeckArray[11].number

            // set each players total value
            P2TotalValue.innerText = P2TotalLuck
            P1TotalValue.innerText = P1TotalLuck

            // win conditions
            if (P1TotalLuck > P2TotalLuck) {
                GameResults.innerText = "Player 1 is a Luckier Duck!"
            } else if (P1TotalLuck < P2TotalLuck) {
                GameResults.innerText = "Player 2 is a Luckier Duck!"
            } else if (P1TotalLuck == P2TotalLuck){
                GameResults.innerText = `It's a Draw. Must be fate!`
            }
            popupbox.setAttribute('style', 'display: block')
            resultsbtn.setAttribute('style', `display: inline-block`)
            shufflebtn.setAttribute('style', `display: none`)
            keepbtn.setAttribute('style', `display: none`)
        }
    })

    //game results btn
    resultsbtn.addEventListener('click', ()=> {
        gamescreen2.setAttribute('style', `display: none`)
        gamescreen3.setAttribute('style', `display: block`)
        postgameview.setAttribute('style', `display: block`)
        postgameviewimg.src = luckyDuckDeckCardBack[0].img
    })
    // return to screen 1 from screen 3
    return2menu.addEventListener('click',()=> {
        gamescreen1.setAttribute('style', `display: absolute`)
        gamescreen3.setAttribute('style', `display: none`)
        postgameview.setAttribute('style', `display: none`)
    })
    // return to screen 2 from screen 3
    return2game.addEventListener('click', ()=> {
        gamescreen3.setAttribute('style', `display: none`)
        gamescreen2.setAttribute('style', `display: grid`)
        postgameview.setAttribute('style', `display: none`)
    })
    
    //on click, set the popupbox view to the image selected
    luckyducktarotdeck.addEventListener('click', ()=> {
        popupboximage.src =`${luckyDuckDeckCardBack[0].img}`
        popupbox.setAttribute('style', `display: block`)
    })

    // on click, display the selected image in the pop-up box
    playerpastcard.addEventListener('click', ()=> {
        popupboximage.src = playerpastcard.src
        popupbox.setAttribute('style', `display: block`)
    })
    playerpresentcard.addEventListener('click', ()=> {
        popupboximage.src = playerpresentcard.src
        popupbox.setAttribute('style', `display: block`)
    })
    playerfuturecard.addEventListener('click', ()=> {
        popupboximage.src = playerfuturecard.src
        popupbox.setAttribute('style', `display: block`)
    })
    computerpastcard.addEventListener('click', ()=> {
        popupboximage.src = computerpastcard.src
        popupbox.setAttribute('style', `display: block`)
    })
    computerpresentcard.addEventListener('click', ()=> {
        popupboximage.src = computerpresentcard.src
        popupbox.setAttribute('style', `display: block`)
    })
    computerfuturecard.addEventListener('click', ()=> {
        popupboximage.src = computerfuturecard.src
        popupbox.setAttribute('style', `display: block`)
    })

    //Postgame click images to view in displayer
    P1PastCard.addEventListener('click', ()=> {
        postgameviewimg.src = playerpastcard.src
        postgameview.setAttribute('style', `display: block`)
    })
    P1PresentCard.addEventListener('click', ()=> {
        postgameviewimg.src = playerpresentcard.src
        postgameview.setAttribute('style', `display: block`)
    })
    P1FutureCard.addEventListener('click', ()=> {
        postgameviewimg.src = playerfuturecard.src
        postgameview.setAttribute('style', `display: block`)
    })
    P2PastCard.addEventListener('click', ()=> {
        postgameviewimg.src = computerpastcard.src
        postgameview.setAttribute('style', `display: block`)
    })
    P2PresentCard.addEventListener('click', ()=> {
        postgameviewimg.src = computerpresentcard.src
        postgameview.setAttribute('style', `display: block`) 
    })
    P2FutureCard.addEventListener('click', ()=> {
        postgameviewimg.src = computerfuturecard.src
        postgameview.setAttribute('style', `display: block`)
    })
})

