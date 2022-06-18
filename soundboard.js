var firstbuttonel = document.getElementById("first-button")
var music = new Audio('applause_y.wav')

firstbuttonel.addEventListener('click', function () {
    music.play()
})