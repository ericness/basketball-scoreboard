let homeScore = 0
let homeEl = document.getElementById("home-score")

let guestScore = 0
let guestEl = document.getElementById("guest-score")

function addHome(n) {
    homeScore += n
    homeEl.textContent = homeScore
}

function addGuest(n) {
    guestScore += n
    guestEl.textContent = guestScore
}

function newGame() {
    homeScore = 0
    homeEl.textContent = homeScore
    guestScore = 0
    guestEl.textContent = guestScore
}