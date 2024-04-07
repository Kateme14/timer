'use strict'

//Функциональность приложения:
// Клавиша start - для запуска таймера
// Клавиша pause - для остановки таймера
// Циферблат с текущим временем в формате XX sec
// Примечания:
// Таймер измеряет время только в секундах
// После остановки таймера, если снова нажать клавишу start таймер
// запуститься с текущего результата, а не с начала


let timer
let seconds = 0
let isRunning = false

const display = document.getElementById('display')
const startBtn = document.getElementById('startBtn')
const pauseBtn = document.getElementById('pauseBtn')

function startTimer() {
    if(!isRunning){
        isRunning = true
        timer = setInterval(updateTimer, 1000)
    }
}

function pauseTimer(){
    clearInterval(timer)
    isRunning = false
}

function updateTimer(){
    seconds++
    display.textContent = formatTime(seconds)
}

function formatTime(timeInSeconds){
    const minutes = Math.floor(timeInSeconds / 60)
    const remainingSeconds = timeInSeconds % 60
    return `${padZero(minutes)}:${padZero(remainingSeconds)} sec`
}

function padZero(num){
    return num < 10 ? `0${num}` : num
}

startBtn.addEventListener('click', startTimer)
pauseBtn.addEventListener('click', pauseTimer)