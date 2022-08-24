//Deck of Lucky Duck Tarot Cards
let luckyDuckDeckArray = [
    {
        // IMG SOURCE: https://twitter.com/zruedella/status/1313685121086689282
      number: 12,
      img: './media/./12.jpeg',
      description:`Are you diving into your passions? Follow your desires. Don't be afraid - be like Duck Fieri!`,
    },
    {
        // IMG SOURCE: https://www.pinterest.com/pin/reaction-photos--685884218246681370/
      number: 13,
      img: './media/./13.jpeg',
      description:`Are your duckling needs being met? Sometimes you have to fight for what you quackin' want.`,
    },
    {
        // IMG SOURCE: https://www.pinterest.com/pin/695595104961696433/
      number: 14,
      img: './media/./14.jpeg',
      description:`It's not that duckin' serious. Learn to take a waddle back and QOL! Strive to be above the other birds. QUACK OUT LOUD!`,
    },
    {
        // IMG SOURCE: https://twitter.com/goose_stir/status/1447998810521837569
      number: 15,
      img: './media/./15.jpg',
      description:`Clearly you know what you duckin' want. It's just a matter of quacking it verbally into existence.`,
    },
    {
        // IMG SOURCE: https://www.facebook.com/UntitledGooseMemes/photos/a.125287848872569/444785073589510/?type=3
      number: 16,
      img: './media/./16.jpg',
      description:`Do you find yourself not fitting in? Or is there someone that rubs you the wrong way? Don't let your anger or disappointment be the cause of your downfall.`,
    },
    {
        // IMG SOURCE: https://www.amazon.com/Peace-Never-Option-Goose-Notebook/dp/B08NWZCRVJ
      number: 17,
      img: './media/./17.jpg',
      description:'Conflicts between other ducks may arise. Reconsider before the consequences are dire.',
    },
    // {
    //     number: 18,
    //     img: './media/./18.jpeg',
    //     description:'',
    //   },
    //   {
    //     number: 19,
    //     img: './media/./19.jpeg',
    //     description:'',
    //   },
      {
        // IMG SOURCE: https://www.pinterest.com/pin/670473463268707974/
        number: 20,
        img: './media/./20.jpeg',
        description:'You may be blanketed with sadness either by choice or natural causes. Let the storm pass.',
      },
      {
        // IMG SOURCE: https://www.kindpng.com/imgv/iioTmix_shook-psyduck-duck-pokemon-omg-yellow-drawn-pokemon/
        number: 21,
        img: './media/./21.jpeg',
        description:`Confusion is just a state of mind. Recollect your duckin' thoughts and gain clarity.`,
      },
      {
        // IMG SOURCE: https://imgflip.com/memetemplate/213228225/Screaming-Duck-2
        number: 22,
        img: './media/./22.jpeg',
        description:`Big duck energy never quacks down.`,
      },
      {
        // IMG SOURCE: https://z-upload.facebook.com/farfa11a/posts/1725364527863110
        number: 23,
        img: './media/./23.jpeg',
        description:`A lover duck may be waddling into your life!`,
      },
      {
        // IMG SOURCE: https://www.pinterest.com/pin/688769336753774520/
        number: 24,
        img: './media/./24.jpeg',
        description:`Who said ducks can't chill? It's time to consider that trip.`,
      },
      {
        // IMG SOURCE: https://imgflip.com/memetemplate/194424215/SMILE-DUCK
        number: 25,
        img: './media/./25.jpeg',
        description:`A happy duck is the best kind of duck. Other's may appreciate your light-hearted presence and loud quacks.`,
      },
    //   {
    //     number: 26,
    //     img: './media/./26.jpeg',
    //     description:``,
    //   },
    //   {
    //     number: 27,
    //     img: './media/./27.jpeg',
    //     description:``,
    //   },
      {
        // IMG SOURCE: https://pixabay.com/photos/duck-mallard-drake-bird-water-bird-3319107/
        number: 28,
        img: './media/./28.jpeg',
        description:`The dive for survival, may leave your butt-quack vulnerable. Be wary of your pond environment.`,
      },
      {
        // IMG SOURCE: https://www.pinterest.com/pin/mokkaquillart--1038431626550525947/
        number: 29,
        img: './media/./29.jpeg',
        description:`Investment is just luck and some skill. That risk you've been pond-ering? It's time to take flight and make it happen.`,
      },
      {
        // IMG SOURCE: https://www.reddit.com/r/photoshopbattles/comments/2ukipw/psbattle_duck_wearing_a_bow_tie/
        number: 30,
        img: './media/./30.jpeg',
        description:`Some things can only be learned through eggs-perience. A mentor duck of some sorts will fly into your life.`,
      },
      {
        // IMG SOURCE: https://picsart.com/i/sticker-340193481043211
        number: 31,
        img: './media/./31.jpeg',
        description:`Boundaries aren't meant to be waddled across. Show the other ducks that you're putting your flipper down.`
      },
      {
        //  IMG SOURCE: https://picsart.com/i/sticker-326497007105211
        number: 32,
        img: './media/./32.jpeg',
        description:`Take time to consider if certain habits are supporting your duck goals or drowning you down...`
      },
      {
        // IMG SOURCE: https://www.pinterest.com/pin/457326537170393192/
        // IMG SOURCE: https://i.imgur.com/AmbqClS.jpeg
        number: 33,
        img: './media/./33.jpeg',
        description:`A like minded duck will be entering your life. They'll appreciate your "quarkiness".`
      },
    //   {
    //     number: 34,
    //     img: './media/./34.jpeg',
    //     description:``
    //   },
    //   {
    //     number: 35,
    //     img: './media/./35.jpeg',
    //     description:``
    //   },
      {
        // IMG SOURCE: https://wallpapercave.com/w/wp3364096
        number: 36,
        img: './media/./36.jpeg',
        description:`The river's current might be too strong, but just keep swimming duckling. The other side of the river bank is just a few more paddles.`
      },
      {
        // IMG SOURCE: https://www.reddit.com/r/aww/comments/8vsc6i/a_duck_and_a_dog_snuggling/
        number: 37,
        img: './media/./37.jpeg',
        description:`This person may not be related by duck blood, but they're considered part of your nest. Let them know how much you appreciate their presence.`
      },
      {
        // IMG SOURCE: https://www.boredpanda.com/blog/wp-content/uploads/2019/10/B2uum6BnoSh-1-png__700.jpg
        number: 38,
        img: './media/./38.jpeg',
        description:`There's no need to compare yourself to other ducks, that's just quacktalk."Oh, ducky, you should go and love yourself..." - DUCKIN BIEBER.`
      },
      {
        // IMG SOURCE: https://www.reddit.com/r/MadeMeSmile/comments/hp6q2i/day_2_of_posting_cute_ducks/
        number: 39,
        img: './media/./38.jpeg',
        description:`Is there something you've been shy about? Ask and you shall receive. Muster up the courage to just qu-ask...`
      },
      {
        // IMG SOURCE: https://www.reddit.com/r/aww/comments/ezdig9/duckling_with_inner_tube/
        number: 40,
        img: './media/./40.jpeg',
        description:`This is your message to just have fun and enjoy your life Duckling!`
      },
      {
        // IMG SOURCE: https://www.boredpanda.com/blog/wp-content/uploads/2019/10/wholesome-cute-duck-pics-5da03e4cdeb76__700.jpg
        number: 41,
        img: './media/./41.jpeg',
        description:`You've been working hard Duckling. You deserve to rest and take care of your duckling needs.`
      },
    //   {
    //     // IMG SOURCE: 
    //     number: 42,
    //     img: './media/./42.jpeg',
    //     description:``
    //   },
    //   {
    //     // IMG SOURCE: 
    //     number: 43,
    //     img: './media/./43.jpeg',
    //     description:``
    //   },
  ]

// fortunes sources: https://fortuneandframe.com/apps/fortunes/ff-originals
// https://www.wisesayings.com/duck-quotes/
// https://kidadl.com/funnies/puns/best-duck-puns-to-send-you-quacking
// fortunes to give the luckier duck at the end of game.
let luckyduckfortune = [
    `"Change comes from embracing the future, not fighting your past."`,
    `"Set yourself up to experience what you love."`,
    `"If you want to fly, you have to be willing to learn."`,
    `"It's not your job to fix other ducks."`,
    `"Be kind to other types of duck."`,
    `"The egg laid by the duck is sometimes hatched by the hen."`,
    `"Duck love is recognizable in any language."`,
    `"A healthy duck will be bright and will try to get away from people."`,
    `"Ducks are the happiest animals in the barnyard."`,
    `"Some birds avoid water, the duck searches for it."`,
    `"Ducks are really good at saving because they have their bills under control."`,
    `"Stop saying yes to things you don't want to do."`,
    `"The only duck who has to believe in you is you"`,
    `"Trust the process."`,
    `"A duck will not always dabble in the same gutter."`,
    `"If you are going to breed a duck, breed a good one."`,
    `"Ducks are often the most colorful waterfowl."`,
    `"If it looks like a duck and sounds like a duck, it could be a really ugly swan."`,
    `"Practice not-so-random acts of discipline"`,
    `"If you're not where you want to be, don't waddle there for too long."`,
    `"Everything that is was first a duck's dream."`,
    `"If you don't like it change it. If you can't change it, change your attitude."`,
    `"Learn to delay gratification."`,
    `"Learn as much from joy as you do from pain."`,
    `"Listen for quacks. Look for the signs."`,
    `"Migrate with the change of seasons to survive. Be adaptable."`,
    `"It's better to wait for the right duck than rush into it with the wrong one."`,
    `"Be careful who you trust. Grass and sea-weed look the same."`,
    `"Turn your duck wounds into widsom."`,
    `"Breathe, Duckling, this is just a chapter, not your whole story."`,
    `"Perfect is boring. Duck is beautiful"`,
    `"To the world, you're one Duck. But to one Duck, you're the world."`
]
// cloneddeck used for deck gallery, so cards show up in chronological order
  let clonedLuckyDeck = luckyDuckDeckArray.slice()

 // function to shuffle array
 function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

//Load HTML before retrieving data
document.addEventListener('DOMContentLoaded', () => {
    //variables for gameplay
    let mainaudio = document.getElementById('mainaudio')
    let fortuneaudio = document.getElementById('fortuneaudio')
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

    // variables for view deck gallery
    let viewdeck = document.querySelector('#viewdeck')
    let deckgallery = document.querySelector('#deckgallery')
    let escapeDeckGallery = document.querySelector('#escapeDeckGallery')
    let viewDeckGallery = document.querySelector('#viewDeckGallery')
    let viewDeckGalleryImg = document.querySelector('#viewDeckGalleryImg')
    let viewCardDescription = document.querySelector('#viewCardDescription')

    // function to create imgs of card variations
    let createViewDeck = () => {
    for (let i = 0; i < clonedLuckyDeck.length; i++) {
        const createImg = document.createElement('img')
        createImg.classList.add('cardsize')
        createImg.src = `${clonedLuckyDeck[i].img}`
        createImg.alt = `${clonedLuckyDeck[i].description}`
        deckgallery.append(createImg)
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
    // load library of card gallery before clicking viewdeckgallerybtn
    createViewDeck();

    // returning to screen 1 from viewdeck screen 
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

    // originally game was meant to be played vs computer, computer is now variable for player 2***
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

    // post game - results page/screen3 
    let GameResults = document.querySelector('#GameResults')
    let postgameview = document.querySelector('#postgameview')
    let postgameviewimg = document.querySelector('#postgameviewimg')
    let return2menu = document.querySelector('#return2menu')
    let return2game = document.querySelector('#return2game')
    
    // fortune page, screen 4
    let fortunebtn = document.querySelector('#fortunebtn')
    let gamescreen4 = document.querySelector('#gamescreen4')
    let escapefortunebtn = document.querySelector('#escapefortune')
    let displaywinner = document.querySelector('#displaywinner')
    let displayloser = document.querySelector('#displayloser')
    let winningplayerfortune = document.querySelector('#winningplayerfortune')
    let returntoresults = document.querySelector('#returntoresults')


    //   player 1 and player 2, text-color change
    const RandomRGB = () => {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        return `rgb(${r}, ${g}, ${b})`
        }

     //each time the user clicks screen 2x, duplicate the background 
    let vw = 100
    let vh = 100
    let clickcounter = 0
    let startclickcounter = 0
    let galleryclickcounter = 0
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
        body.setAttribute('style', `background-size: ${vw}vw ${vh}vh;`)
    })

    // shuffle the fortunes for gameplay
    shuffle(luckyduckfortune)

    //on start default the cards to be set as the tarot deck back cover 
    startgamebtn.addEventListener('click', ()=> {
        gamescreen1.setAttribute('style', `display: none;`)
        gamescreen2.setAttribute('style', `display: grid;`)
        decideTurn.style.color = RandomRGB()
        startclickcounter ++
        if (startclickcounter == 1){
            shuffle(luckyDuckDeckArray)
            popupboximage.src=`${luckyDuckDeckCardBack[0].img}`
            popupbox.setAttribute('style', `display: block`)

        }
        // popupbox.setAttribute('style', `display: block;`)
    })
    // loop to create imgs of original deck in div so players can view artwork.
    viewdeck.addEventListener('click', ()=> {
        deckgallery.setAttribute('style', `display: block;`)
        gamescreen1.setAttribute('style', `display: none;`)
        viewDeckGallery.setAttribute('style', `display: block;`)
        viewDeckGalleryImg.src = `${luckyDuckDeckCardBack[0].img}`
        viewCardDescription.innerText = 'Lucky Duck Tarot Card Back Design'
    })
    
    // return btn to actual main menu
    escapeDeckGallery.addEventListener('click', ()=> {
        deckgallery.setAttribute('style', `display: none;`)
        viewDeckGallery.setAttribute('style', `display: none;`)
        gamescreen1.setAttribute('style', `display: block;`)
    })
    

    // on restart reset game to default settings
    restartgamebtn.addEventListener('click', ()=>{
        startclickcounter = 0
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
        decideTurn.style.color = `rgb(255, 255, 255)`
        decideTurn2.style.color = `rgb(255, 255, 255)`
        P1TotalLuck = 0
        P2TotalLuck = 0
        moves = 0
        // if (moves < 0) {
        //     moves = 0
        // }
        decideTurn2.innerText = ''
        movedisplay.innerText = 'Past';
        placeholdercard.innerText = "Card"
        shuffle(luckyDuckDeckArray)
        shuffle(luckyduckfortune)
        resultsbtn.setAttribute('style', `display: none`)
        shufflebtn.setAttribute('style', `display: inline-block`)
        keepbtn.setAttribute('style', `display: inline-block`)
        fortunebtn.setAttribute('style', 'display: inline-block')

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
        decideTurn.style.color = RandomRGB()
        decideTurn2.style.color = RandomRGB()
    })

    // return to screen 1
    return2start.addEventListener('click', () => {
        gamescreen1.setAttribute('style', `display: block`)
        gamescreen2.setAttribute('style', `display: none`)
        decideTurn.style.color = RandomRGB()
        decideTurn2.style.color = RandomRGB()
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
            decideTurn.style.color = RandomRGB()
            popupbox.setAttribute('style', `display: block`)
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
            decideTurn.style.color = RandomRGB()
            popupbox.setAttribute('style', `display: block`)
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
            decideTurn.style.color = RandomRGB()
            popupbox.setAttribute('style', `display: block`)
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
            decideTurn.style.color = RandomRGB()
            popupbox.setAttribute('style', `display: block`)
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
            decideTurn.style.color = RandomRGB()
            popupbox.setAttribute('style', `display: block`)
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
            decideTurn.style.color = RandomRGB()
            decideTurn2.style.color = RandomRGB()
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
                GameResults.innerText = `It's a Draw. Must be fate! Play Again!`
                fortunebtn.setAttribute('style', 'display: none')
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
        if (moves == 1) {
            playerpastcard.src = `${luckyDuckDeckArray[6].img}`
            popupboximage.src=`${luckyDuckDeckArray[6].img}`
            playerpastcard.style.pointerEvents = 'auto';
            playerpastcardinfo.innerText = luckyDuckDeckArray[6].description
            decideTurn.innerText = `Player 2's`
            decideTurn.style.color = RandomRGB()
            popupbox.setAttribute('style', `display: block`)
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
            decideTurn.style.color = RandomRGB()
            popupbox.setAttribute('style', `display: block;`)
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
            decideTurn.style.color = RandomRGB()
            popupbox.setAttribute('style', `display: block`)
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
            decideTurn.style.color = RandomRGB()
            popupbox.setAttribute('style', `display: block`)
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
            decideTurn.style.color = RandomRGB()
            popupbox.setAttribute('style', `display: block`)
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
            decideTurn.style.color = RandomRGB()
            decideTurn2.style.color = RandomRGB()
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
                GameResults.innerText = `It's a Draw. Must be fate! Play Again!`
                fortunebtn.setAttribute('style', 'display: none')
            }
            popupbox.setAttribute('style', 'display: block')
            resultsbtn.setAttribute('style', `display: inline-block`)

            // remove shuffle and keep buttons on turn 6
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
        decideTurn.style.color = RandomRGB()
        decideTurn2.style.color = RandomRGB()
    })
    // return to screen 2 from screen 3
    return2game.addEventListener('click', ()=> {
        gamescreen3.setAttribute('style', `display: none`)
        gamescreen2.setAttribute('style', `display: grid`)
        postgameview.setAttribute('style', `display: none`)
        decideTurn.style.color = RandomRGB()
        decideTurn2.style.color = RandomRGB()
    })
    
    //on click, set the popupbox view to a random card from the tarot deck
    luckyducktarotdeck.addEventListener('click', ()=> {
        x = Math.floor(Math.random() * 21)
        popupboximage.src =`${luckyDuckDeckArray[x].img}`
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

    // Fortunes Page
    fortunebtn.addEventListener('click', ()=>{
        gamescreen4.setAttribute('style', `display: block`)
        gamescreen3.setAttribute('style', `display: none`)
        postgameview.setAttribute('style', `display: none`)
        fortuneaudio.play()
        mainaudio.pause()
        if (P1TotalLuck > P2TotalLuck) {
            displaywinner.innerText = "Player 1 Fortune"
            displayloser.innerText = "Player 2 Fortune"
            winningplayerfortune.innerText = luckyduckfortune[0]
            winningplayerfortune.style.color = RandomRGB()
        } else if (P2TotalLuck > P1TotalLuck){
            displaywinner.innerText = "Player 2 Fortune"
            displayloser.innerText = "Player 1 Fortune"
            winningplayerfortune.innerText = luckyduckfortune[0]
            winningplayerfortune.style.color = RandomRGB()
        }
    })

    returntoresults.addEventListener('click', ()=> {
        gamescreen4.setAttribute('style', `display: none`)
        gamescreen3.setAttribute('style', `display: block`)
        fortuneaudio.pause()
        fortuneaudio.currentTime = 0
        mainaudio.play()
    })

    escapefortunebtn.addEventListener('click', ()=> {
        gamescreen4.setAttribute('style', `display: none`)
        gamescreen1.setAttribute('style', `display: absolute`)
        fortuneaudio.pause()
        fortuneaudio.currentTime = 0
        mainaudio.play()
    })
})

