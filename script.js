

document.addEventListener('DOMContentLoaded', () => {
    let gamescreen = document.querySelector('#game-screen')
    let vw = 100
    let vh = 100
    let clickcounter = 0 
    gamescreen.addEventListener('click', ()=> {
        clickcounter ++
        if (clickcounter % 2) {
        vw -= 25
        vh -= 25
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
})
