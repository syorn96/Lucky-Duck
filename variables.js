// GAMEPLAY VARIABLES 
    //variables for audio and gameplay screens
    
    let playMusic = document.querySelector('#playmusic')
    let clickADuck = document.querySelectorAll('.clickus')
    let mainGameAudio = document.getElementById('mainaudio')
    let fortuneAudio = document.getElementById('fortuneaudio')
    let body = document.querySelector('#body')
    let gameScreen1 = document.querySelector('#game-screen1')
    let gameScreen2 = document.querySelector('#game-screen2')
    let gameScreen3 = document.querySelector('#game-screen3')

    // game modes
    let startGameBtn = document.querySelector('#startbtn')
    let restartGameBtn = document.querySelector('#restartgame')
    let vsComputerBtn = document.querySelector('#vscomputer')
    let computerTitle = document.querySelector('#computertitle')
    let trackComputerMode = 0
    
    // how to play on screen 1
    let howToPlayScreen = document.querySelector('#howtoplay')
    let exitHTP = document.querySelector('#exith2p')
    let howToPlayBtn = document.querySelector('#HTPbtn')

    // how to play on screen 2
    let howToPlayScreen2 = document.querySelector('#howtoplay2')
    let exitHTP2 = document.querySelector('#exith2p2')
    let howToPlayBtn2 = document.querySelector('#HTPbtn2')

    // variables for view deck gallery
    let viewDeck = document.querySelector('#viewdeck')
    let deckGallery = document.querySelector('#deckgallery')
    let escapeDeckGallery = document.querySelector('#escapeDeckGallery')
    let viewDeckGallery = document.querySelector('#viewDeckGallery')
    let viewDeckGalleryImg = document.querySelector('#viewDeckGalleryImg')
    let viewCardDescription = document.querySelector('#viewCardDescription')

    

    // returning to screen 1 from viewdeck screen 
    let return2Start = document.querySelector('#return2start') 
    let menu2 = document.querySelector('.BotR3')

    // variable to showcase card design
    let tarotDeckContainer = document.querySelector('#TarotDeckContainer')
    let luckyDuckTarotDeck = document.querySelector('#TarotDeck')
    let luckyDuckDeckCardBack = [
        {
            img: './media/./LuckyDuckCardBack.jpeg'
        }
    ]

    //variables for card selection + set cards to cards to unable to click
    let playerPastCard = document.querySelector('#playercard1')
    playerPastCard.style.pointerEvents = 'none';
    let playerPastCardInfo = document.querySelector('#PlayerCard1info')
    let playerPresentCard = document.querySelector('#playercard2')
    playerPresentCard.style.pointerEvents = 'none';
    let playerPresentCardInfo = document.querySelector('#PlayerCard2info')
    let playerFutureCard = document.querySelector('#playercard3')
    playerFutureCard.style.pointerEvents = 'none';
    let playerFutureCardInfo = document.querySelector('#PlayerCard3info')

    //variables for player2/computer card selection + set cards to unable to click
    // *** originally game was meant to be played vs computer, computer and player 2 share the same variables ***
    let computerPastCard = document.querySelector('#computercard1')
    computerPastCard.style.pointerEvents = 'none';
    let computerPastCardInfo = document.querySelector('#CompCard1info')
    let computerPresentCard = document.querySelector('#computercard2')
    computerPresentCard.style.pointerEvents = 'none';
    let computerPresentCardInfo = document.querySelector('#CompCard2info')
    let computerFutureCard = document.querySelector('#computercard3')
    computerFutureCard.style.pointerEvents = 'none';
    let computerFutureCardInfo = document.querySelector('#CompCard3info')

    // variables for pop-up box
    let popUpBox = document.querySelector('#PopUpCard')
    let popUpBoxImage = document.querySelector('#PopUpCardImg')
    let returnBtn = document.getElementById('returnbtn')
   
    // variables for turn display
    let turnContainer = document.querySelector('#turntracker')
    let decideTurn = document.querySelector('#turncounter')
    let decideTurn2 = document.querySelector('#turncounter2')
    let moveDisplay = document.querySelector('#turndisplay')
    let placeHolderCard = document.querySelector('#placeholdercard')

    // move tracker
    let moves = 0

    // shuffle and keep button
    let shuffleBtn = document.querySelector('#shufflebtn')
    let keepBtn = document.querySelector('#keepbtn')

    // variables for post-game results & screen 3 usage
    let resultsBtn = document.querySelector('#resultsbtn')

    // player 1 card's
    let p1PresentCard = document.querySelector('#P1PresentCard')
    let p1PastCard = document.querySelector('#P1PastCard')
    let p1FutureCard = document.querySelector('#P1FutureCard')

    // player 2/computer card's
    let p2PresentCard = document.querySelector('#P2PresentCard')
    let p2PastCard = document.querySelector('#P2PastCard')
    let p2FutureCard = document.querySelector('#P2FutureCard')

    // player 1 values from card
    let p1PresentValue = document.querySelector('#P1PresentValue')
    let p1PastValue = document.querySelector('#P1PastValue')
    let p1FutureValue = document.querySelector('#P1FutureValue')
    let p1TotalValue = document.querySelector('#P1TotalValue')

    // player 2/computer values from card
    let p2PresentValue = document.querySelector('#P2PresentValue')
    let p2PastValue = document.querySelector('#P2PastValue')
    let p2FutureValue = document.querySelector('#P2FutureValue')
    let p2TotalValue = document.querySelector('#P2TotalValue')

    // varibles for player 1 to use for total luck calculation
    let p1PastResult = null
    let p1PresentResult = null
    let p1FutureResult = null
    let p1TotalLuck = 0

    // varibles for player 2//computer to use for total luck calculation
    let p2PastResult = null
    let p2PresentResult = null
    let p2FutureResult = null
    let p2TotalLuck = 0

    // post game - results page/screen3 
    let gameResults = document.querySelector('#GameResults')
    let postGameView = document.querySelector('#postgameview')
    let postGameViewimg = document.querySelector('#postgameviewimg')
    let return2Menu = document.querySelector('#return2menu')
    let return2Game = document.querySelector('#return2game')
    
    // fortune page, screen 4
    let fortuneBtn = document.querySelector('#fortunebtn')
    let gameScreen4 = document.querySelector('#gamescreen4')
    let escapeFortuneBtn = document.querySelector('#escapefortune')
    let displayWinner = document.querySelector('#displaywinner')
    let displayLoser = document.querySelector('#displayloser')
    let winningPlayerFortune = document.querySelector('#winningplayerfortune')
    let returnToResults = document.querySelector('#returntoresults')

     //each time the user clicks screen 2x, duplicate the background 
    let vw = 100
    let vh = 100
    let clickCounter = 0

    // variables to keep track how many times start and view gallery btns are clicked on
    let startClickCounter = 0
    let galleryClickCounter = 0



