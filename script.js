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
  ]
//Load HTML before retrieving data
document.addEventListener('DOMContentLoaded', () => {
    //variables for gameplay
    let body = document.querySelector('#body')
    let gamescreen1 = document.querySelector('#game-screen1')
    let startgamebtn = document.querySelector('#startbtn')
    let howtoplaybtn = document.querySelector('#HTPbtn')
    let howtoplayscreen = document.querySelector('#howtoplay')
    let exitHTP = document.querySelector('#exith2p')
    let return2start = document.querySelector('#return2start') 
    let gamescreen2 = document.querySelector('#game-screen2')
    let playerpastcard = document.querySelector('#playercard1')
    let playerpastcardinfo = document.querySelector('#PlayerCard1info')
    let playerpresentcard = document.querySelector('#playercard2')
    let playerpresentcardinfo = document.querySelector('#PlayerCard2info')
    let playerfuturecard = document.querySelector('#playercard3')
    let playerfuturecardinfo = document.querySelector('#PlayerCard3info')
    let computerpastcard = document.querySelector('#computercard1')
    let computerpastcardinfo = document.querySelector('#CompCard1info')
    let computerpresentcard = document.querySelector('#computercard2')
    let computerpresentcardinfo = document.querySelector('#CompCard2info')
    let computerfuturecard = document.querySelector('#computercard3')
    let computerfuturecardinfo = document.querySelector('#CompCard3info')
    let popupbox = document.querySelector('.PopUpCard')
    let ShuffledDuckArray = luckyDuckDeckArray.sort(() => 0.5 - Math.random())
    let vw = 100
    let vh = 100
    let clickcounter = 0
    //each time the user clicks screen 2x, duplicate the background 
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
    startgamebtn.addEventListener('click', ()=> {
        gamescreen1.setAttribute('style', `display: none`)
        gamescreen2.setAttribute('style', `display: grid`)
        playerpastcard.src = `${ShuffledDuckArray[0].img}`
        console.log(playerpastcard.src)
        playerpresentcard.src =`${ShuffledDuckArray[1].img}`
        playerfuturecard.src =`${ShuffledDuckArray[2].img}`
        computerpastcard.src = `${ShuffledDuckArray[3].img}`
        computerpresentcard.src = `${ShuffledDuckArray[4].img}`
        computerfuturecard.src = `${ShuffledDuckArray[5].img}`
        console.log(ShuffledDuckArray)
        playerpastcardinfo.innerText = ShuffledDuckArray[0].description
        playerpresentcardinfo.innerText = ShuffledDuckArray[1].description
        playerfuturecardinfo.innerText = ShuffledDuckArray[2].description
        computerpastcardinfo.innerText = ShuffledDuckArray[3].description
        computerpresentcardinfo.innerText = ShuffledDuckArray[4].description
        computerfuturecardinfo.innerText = ShuffledDuckArray[5].description
        console.log(ShuffledDuckArray[4].description)
    })
    howtoplaybtn.addEventListener('click', ()=> {
        gamescreen1.setAttribute('style', `display: none`)
        howtoplayscreen.setAttribute('style', `display: block`)
    })
    exitHTP.addEventListener('click', ()=> {
        gamescreen1.setAttribute('style', `display: block`)
        howtoplayscreen.setAttribute('style', `display: none`)
    })
    return2start.addEventListener('click', () => {
        gamescreen1.setAttribute('style', `display: block`)
        gamescreen2.setAttribute('style', `display: none`)
    })
    
    playerpastcard.addEventListener(('click'), ()=> {
        popupbox.innerHTML = (`<img src="${ShuffledDuckArray[0].img}" height="800px" width="550px"/><button id="returnbtn">Return</button>`)
        let returnbtn = document.querySelector('#returnbtn')
        returnbtn.addEventListener(('click'), ()=> {
        popupbox.innerHTML = ""
        })
    })
    playerpresentcard.addEventListener(('click'), ()=> {
        popupbox.innerHTML = (`<img src="${ShuffledDuckArray[1].img}" height="800px" width="550px"/><button id="returnbtn">Return</button>`)
        let returnbtn = document.querySelector('#returnbtn')
        returnbtn.addEventListener(('click'), ()=> {
        popupbox.innerHTML = ""
        })
    })
    playerfuturecard.addEventListener(('click'), ()=> {
        popupbox.innerHTML = (`<img src="${ShuffledDuckArray[2].img}" height="800px" width="550px"/><button id="returnbtn">Return</button>`)
        let returnbtn = document.querySelector('#returnbtn')
        returnbtn.addEventListener(('click'), ()=> {
        popupbox.innerHTML = ""
        })
    })
    computerpastcard.addEventListener(('click'), ()=> {
        popupbox.innerHTML = (`<img src="${ShuffledDuckArray[3].img}" height="800px" width="550px"/><button id="returnbtn">Return</button>`)
        let returnbtn = document.querySelector('#returnbtn')
        returnbtn.addEventListener(('click'), ()=> {
        popupbox.innerHTML = ""
        })
    })
    
    computerpresentcard.addEventListener(('click'), ()=> {
        popupbox.innerHTML = (`<img src="${ShuffledDuckArray[4].img}" height="800px" width="550px"/><button id="returnbtn">Return</button>`)
        let returnbtn = document.querySelector('#returnbtn')
        returnbtn.addEventListener(('click'), ()=> {
        popupbox.innerHTML = ""
        })
    })
    computerfuturecard.addEventListener(('click'), ()=> {
        popupbox.innerHTML = (`<img src="${ShuffledDuckArray[5].img}" height="800px" width="550px"/><button id="returnbtn">Return</button>`)
        let returnbtn = document.querySelector('#returnbtn')
        returnbtn.addEventListener(('click'), ()=> {
        popupbox.innerHTML = ""
        })
    })
})

