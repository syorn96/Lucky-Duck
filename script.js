// let popup = document.getElementById(playercard1)

let luckyduckdeck = {[],[],[],[]}


document.addEventListener('DOMContentLoaded', () => {
    let gamescreen = document.querySelector('#game-screen2')
    let selectpastcard = document.querySelector('#playercard1')
    let selectpresentcard = document.querySelector('#playercard2')
    let selectfuturecard = document.querySelector('#playercard3')
    let popupbox = document.querySelector('.PopUpCard')
    let vw = 100
    let vh = 100
    let clickcounter = 0 
    gamescreen.addEventListener('click', ()=> {
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
        console.log(body.style.backgroundSize)
    })
    selectpastcard.addEventListener(('click'), ()=> {
        popupbox.innerHTML = ('<img src="./media/./12.jpeg" height="800px" width="550px"/><button id="returnbtn">Return</button>')
        let returnbtn = document.querySelector('#returnbtn')
        returnbtn.addEventListener(('click'), ()=> {
        popupbox.innerHTML = ""
        })
    })
    selectpresentcard.addEventListener(('click'), ()=> {
        popupbox.innerHTML = ('<img src="./media/LuckyDuckCard.jpeg" height="800px" width="550px"/><button id="returnbtn">Return</button>')
        let returnbtn = document.querySelector('#returnbtn')
        returnbtn.addEventListener(('click'), ()=> {
        popupbox.innerHTML = ""
        })
    })
    selectfuturecard.addEventListener(('click'), ()=> {
        popupbox.innerHTML = ('<img src="./media/LuckyDuckCard.jpeg" height="800px" width="550px"/><button id="returnbtn">Return</button>')
        let returnbtn = document.querySelector('#returnbtn')
        returnbtn.addEventListener(('click'), ()=> {
        popupbox.innerHTML = ""
    })
    })
})

