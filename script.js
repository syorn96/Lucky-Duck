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
  ]
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
    let return2start = document.querySelector('#return2start') 
    let menu2 = document.querySelector('.BotR3')
    let luckyducktarotdeck = document.querySelector('#TarotDeck')
    let luckyDuckDeckCardBack = [
        {
            img: './media/./LuckyDuckCardBack.jpeg'
        }
    ]
    //variables for card selection + move gameplay
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
    let popupbox = document.querySelector('#PopUpCard')
    let popupboximage = document.querySelector('#PopUpCardImg')
    let returnbtn = document.getElementById('returnbtn')
    ShuffledDuckArray = luckyDuckDeckArray.sort(() => 0.5 - Math.random());
    let turncontainer = document.querySelector('#turntracker')
    let decideTurn = document.querySelector('#turncounter')
    let decideTurn2 = document.querySelector('#turncounter2')
    let movedisplay = document.querySelector('#turndisplay')
    let moves = 0
    let shufflebtn = document.querySelector('#shufflebtn')
    let keepbtn = document.querySelector('#keepbtn')
    let resultsbtn = document.querySelector('#resultsbtn')
    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
      }
    // console.log(ShuffledDuckArray)
     //each time the user clicks screen 2x, duplicate the background 
    let vw = 100
    let vh = 100
    let clickcounter = 0
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
        popupbox.setAttribute('style', `display: none;`)
        console.log(ShuffledDuckArray[4].description)
        console.log(popupboximage.height)
    })
    // on restart reset game to default settings
    restartgamebtn.addEventListener('click', ()=>{
        playerpastcard.src = `${luckyDuckDeckCardBack[0].img}` 
        playerpresentcard.src = `${luckyDuckDeckCardBack[0].img}` 
        playerfuturecard.src = `${luckyDuckDeckCardBack[0].img}` 
        computerpastcard.src = `${luckyDuckDeckCardBack[0].img}` 
        computerpresentcard.src = `${luckyDuckDeckCardBack[0].img}` 
        computerfuturecard.src = `${luckyDuckDeckCardBack[0].img}`
        playerpastcardinfo.innerText = ""
        playerpresentcardinfo.innerText = ""
        playerfuturecardinfo.innerText = ""
        computerpastcardinfo.innerText = ""
        computerpresentcardinfo.innerText = ""
        computerfuturecardinfo.innerText = ""
        playerpastcard.style.pointerEvents = 'none';
        playerpresentcard.style.pointerEvents = 'none';
        playerfuturecard.style.pointerEvents = 'none';
        computerpastcard.style.pointerEvents = 'none';
        computerpresentcard.style.pointerEvents = 'none';
        computerfuturecard.style.pointerEvents = 'none';
        decideTurn.innerText = 'Player 1'
        moves -= 50
        if (moves < 0) {
            moves = 0
        }
        movedisplay.innerText = 'Past';
        shuffle(ShuffledDuckArray)
        console.log(ShuffledDuckArray)

    })
    howtoplaybtn.addEventListener('click', ()=> {
        gamescreen1.setAttribute('style', `display: none`)
        howtoplayscreen.setAttribute('style', `display: block`)
    })
    exitHTP.addEventListener('click', ()=> {
        gamescreen1.setAttribute('style', `display: block`)
        howtoplayscreen.setAttribute('style', `display: none`)
    })
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

    })
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
    })
    return2start.addEventListener('click', () => {
        gamescreen1.setAttribute('style', `display: block`)
        gamescreen2.setAttribute('style', `display: none`)
    })
    returnbtn.addEventListener(('click'), ()=> {
        popupbox.setAttribute('style', `display: none`)
    })
    // game logic dependent on keep or shuffle button
    // cards are only clickable once loaded
    keepbtn.addEventListener(('click'), ()=> {
        moves +=1
        if (moves == 1) {
            playerpastcard.src = `${ShuffledDuckArray[0].img}`
            popupboximage.src=`${ShuffledDuckArray[0].img}`
            playerpastcard.style.pointerEvents = 'auto';
            playerpastcardinfo.innerText = ShuffledDuckArray[0].description
            decideTurn.innerText = 'Player 2'
            popupbox.setAttribute('style', `display: absolute`)
            popupboximage.setAttribute('style', `display: inline-block`)
            movedisplay.innerText = 'Past'
            
        } else if (moves == 2) {
            computerpastcard.src = `${ShuffledDuckArray[1].img}`
            popupboximage.src=`${ShuffledDuckArray[1].img}`
            computerpastcard.style.pointerEvents = 'auto';
            computerpastcardinfo.innerText = ShuffledDuckArray[1].description
            decideTurn.innerText = 'Player 1'
            popupbox.setAttribute('style', `display: absolute`)
            popupboximage.setAttribute('style', `display: inline-block`)
            movedisplay.innerText = 'Present'
            
        } else if (moves == 3) {
            playerpresentcard.src = `${ShuffledDuckArray[2].img}`
            popupboximage.src=`${ShuffledDuckArray[2].img}`
            playerpresentcard.style.pointerEvents = 'auto';
            playerpresentcardinfo.innerText = ShuffledDuckArray[2].description
            decideTurn.innerText = 'Player 2'
            popupbox.setAttribute('style', `display: absolute`)
            popupboximage.setAttribute('style', `display: inline-block`)
            movedisplay.innerText = 'Present'
            
        } else if (moves == 4) {
            computerpresentcard.src = `${ShuffledDuckArray[3].img}`
            popupboximage.src=`${ShuffledDuckArray[3].img}`
            computerpresentcard.style.pointerEvents = 'auto';
            computerpresentcardinfo.innerText = ShuffledDuckArray[3].description
            decideTurn.innerText = 'Player 1'
            popupbox.setAttribute('style', `display: absolute`)
            popupboximage.setAttribute('style', `display: inline-block`)
            movedisplay.innerText = 'Future'
            
        } else if (moves == 5) {
            playerfuturecard.src = `${ShuffledDuckArray[4].img}`
            popupboximage.src=`${ShuffledDuckArray[4].img}`
            playerfuturecard.style.pointerEvents = 'auto';
            playerfuturecardinfo.innerText = ShuffledDuckArray[4].description
            decideTurn.innerText = 'Player 2'
            popupbox.setAttribute('style', `display: absolute`)
            popupboximage.setAttribute('style', `display: inline-block`)
            movedisplay.innerText = 'Future'
            
        } else if (moves == 6) {
            computerfuturecard.src = `${ShuffledDuckArray[5].img}`
            popupboximage.src=`${ShuffledDuckArray[5].img}`
            computerfuturecard.style.pointerEvents = 'auto';
            computerfuturecardinfo.innerText = ShuffledDuckArray[5].description
            decideTurn.innerText = 'Game Over'
            decideTurn2.innerText = 'Ducks'
            popupbox.setAttribute('style', `display: absolute`)
            popupboximage.setAttribute('style', `display: inline-block`)
            resultsbtn.setAttribute('style', `display: block`)
        } else {
            decideTurn.innerText = 'Game Over'
            decideTurn2.innerText = 'Ducks'
        }
    })
    shufflebtn.addEventListener(('click'), ()=> {
        moves +=1
        console.log(moves)
        if (moves == 1) {
            playerpastcard.src = `${ShuffledDuckArray[6].img}`
            popupboximage.src=`${ShuffledDuckArray[6].img}`
            playerpastcard.style.pointerEvents = 'auto';
            playerpastcardinfo.innerText = ShuffledDuckArray[6].description
            decideTurn.innerText = 'Player 2'
            popupbox.setAttribute('style', `display: absolute`)
            popupboximage.setAttribute('style', `display: inline-block`)
            movedisplay.innerText = 'Past'
            
        } else if (moves == 2) {
            computerpastcard.src = `${ShuffledDuckArray[7].img}`
            popupboximage.src=`${ShuffledDuckArray[7].img}`
            computerpastcard.style.pointerEvents = 'auto';
            computerpastcardinfo.innerText = ShuffledDuckArray[7].description
            decideTurn.innerText = 'Player 1'
            popupbox.setAttribute('style', `display: absolute;`)
            popupboximage.setAttribute('style', `display: inline-block`)
            movedisplay.innerText = 'Present'
            
        } else if (moves == 3) {
            playerpresentcard.src = `${ShuffledDuckArray[2].img}`
            popupboximage.src=`${ShuffledDuckArray[2].img}`
            playerpresentcard.style.pointerEvents = 'auto';
            playerpresentcardinfo.innerText = ShuffledDuckArray[2].description
            decideTurn.innerText = 'Player 2'
            popupbox.setAttribute('style', `display: absolute`)
            popupboximage.setAttribute('style', `display: inline-block`)
            movedisplay.innerText = 'Present'
            
        } else if (moves == 4) {
            computerpresentcard.src = `${ShuffledDuckArray[3].img}`
            popupboximage.src=`${ShuffledDuckArray[3].img}`
            computerpresentcard.style.pointerEvents = 'auto';
            computerpresentcardinfo.innerText = ShuffledDuckArray[3].description
            decideTurn.innerText = 'Player 1'
            popupbox.setAttribute('style', `display: absolute`)
            popupboximage.setAttribute('style', `display: inline-block`)
            movedisplay.innerText = 'Future'
            
        } else if (moves == 5) {
            playerfuturecard.src = `${ShuffledDuckArray[4].img}`
            popupboximage.src=`${ShuffledDuckArray[4].img}`
            playerfuturecard.style.pointerEvents = 'auto';
            playerfuturecardinfo.innerText = ShuffledDuckArray[4].description
            decideTurn.innerText = 'Player 2'
            popupbox.setAttribute('style', `display: absolute`)
            popupboximage.setAttribute('style', `display: inline-block`)
            movedisplay.innerText = 'Future'
            
        } else if (moves == 6) {
            computerfuturecard.src = `${ShuffledDuckArray[5].img}`
            popupboximage.src=`${ShuffledDuckArray[5].img}`
            computerfuturecard.style.pointerEvents = 'auto';
            computerfuturecardinfo.innerText = ShuffledDuckArray[5].description
            decideTurn.innerText = 'Game Over'
            decideTurn2.innerText = 'Ducks'
            popupbox.setAttribute('style', `display: absolute`)
            popupboximage.setAttribute('style', `display: inline-block`)
            resultsbtn.setAttribute('style', `display: block`)
        
        } else {
            decideTurn.innerText = 'Game Over'
            decideTurn2.innerText = 'Ducks'
        }
    })
    resultsbtn.addEventListener('click', ()=> {
        gamescreen2.setAttribute('style', `display: none`)
        gamescreen3.setAttribute('style', `display: block`)

    })
    //on click, set the popupbox to the image selected
    luckyducktarotdeck.addEventListener(('click'), ()=> {
        popupboximage.src =`${luckyDuckDeckCardBack[0].img}`
        popupbox.setAttribute('style', `display: absolute`)
        popupboximage.setAttribute('style', `display: inline-block`)
    })
    playerpastcard.addEventListener(('click'), ()=> {
        popupboximage.src = playerpastcard.src
        popupbox.setAttribute('style', `display: absolute`)
        popupboximage.setAttribute('style', `display: inline-block`)  
    })
    playerpresentcard.addEventListener(('click'), ()=> {
        popupboximage.src = playerpresentcard.src
        popupbox.setAttribute('style', `display: absolute`)
        popupboximage.setAttribute('style', `display: inline-block`)
    })
    playerfuturecard.addEventListener(('click'), ()=> {
        popupboximage.src = playerfuturecard.src
        popupbox.setAttribute('style', `display: absolute`)
        popupboximage.setAttribute('style', `display: inline-block`)
    })
    computerpastcard.addEventListener(('click'), ()=> {
        popupboximage.src = computerpastcard.src
        popupbox.setAttribute('style', `display: absolute`)
        popupboximage.setAttribute('style', `display: inline-block`)
    })
    
    computerpresentcard.addEventListener(('click'), ()=> {
        popupboximage.src = computerpresentcard.src
        popupbox.setAttribute('style', `display: absolute`)
        popupboximage.setAttribute('style', `display: inline-block`)
    })
    computerfuturecard.addEventListener(('click'), ()=> {
        popupboximage.src = computerfuturecard.src
        popupbox.setAttribute('style', `display: absolute`)
        popupboximage.setAttribute('style', `display: inline-block`)
    })

})
