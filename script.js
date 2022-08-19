// let body = document.getElementById('body')
document.addEventListener('DOMContentLoaded', () => {
    let gamescreen = document.querySelector('#game-screen')
    // let body = document.querySelector('body')
    let vw = 100
    let vh = 100
    console.log(document.body)
    console.log(gamescreen)
    
    gamescreen.addEventListener('click', ()=> {
        
        vw -= 25
        vh -= 25
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
