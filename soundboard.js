var firstbuttonel = document.getElementById("first-button")
var secondbuttonel = document.getElementById("second-button")
var thirdbuttonel = document.getElementById("third-button")

var music = new Audio('applause_y.wav')
var music2 = new Audio('boo.wav')
var music3 = new Audio('cheering.wav')

firstbuttonel.addEventListener('click', function () {
    music.play()
})

secondbuttonel.addEventListener('click', function () {
    music2.play()
})

thirdbuttonel.addEventListener('click', function () {
    music3.play()
})

