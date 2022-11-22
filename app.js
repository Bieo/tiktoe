const squares = document.querySelectorAll('.square')
const result = document.querySelector(`.result`)
let count = 0
let end = false

squares.forEach((item) => {
    const p = item.querySelector('p')

    item.addEventListener('click', () => {
        if (!end)
            if (p.innerText != 'o' && p.innerText != 'x') {
                p.style.opacity = 1
                if (count % 2 == 0) {
                    p.innerText = `x`
                } else {
                    p.innerText = `o`
                }
                win()
                count++

            }

    })
})

function win() {
    let winnerLetter = 'x'
    if (count % 2 != 0) {
        winnerLetter = 'o'
    }
    if (squares[0].innerHTML == squares[1].innerHTML && squares[1].innerHTML == squares[2].innerHTML) {
        result.innerHTML = `<p>win ${winnerLetter}</p>`
        end = true
    } else if (squares[3].innerHTML == squares[4].innerHTML && squares[4].innerHTML == squares[5].innerHTML) {
        result.innerHTML = `<p>win ${winnerLetter}</p>`
        end = true
    } else if (squares[6].innerHTML == squares[7].innerHTML && squares[7].innerHTML == squares[8].innerHTML) {
        result.innerHTML = `<p>win ${winnerLetter}</p>`
        end = true
    } else if (squares[0].innerHTML == squares[3].innerHTML && squares[3].innerHTML == squares[6].innerHTML) {
        result.innerHTML = `<p>win ${winnerLetter}</p>`
        end = true
    } else if (squares[1].innerHTML == squares[4].innerHTML && squares[4].innerHTML == squares[7].innerHTML) {
        result.innerHTML = `<p>win ${winnerLetter}</p>`
        end = true
    } else if (squares[2].innerHTML == squares[5].innerHTML && squares[5].innerHTML == squares[8].innerHTML) {
        result.innerHTML = `<p>win ${winnerLetter}</p>`
        end = true
    } else if (squares[0].innerHTML == squares[4].innerHTML && squares[4].innerHTML == squares[8].innerHTML) {
        result.innerHTML = `<p>win ${winnerLetter}</p>`
        end = true
    } else if (squares[2].innerHTML == squares[4].innerHTML && squares[4].innerHTML == squares[6].innerHTML) {
        result.innerHTML = `<p>win ${winnerLetter}</p>`
        end = true
    } else if (count == 8) {
        result.innerHTML = `<p>Ничья</p>`
        end = true
    }
}