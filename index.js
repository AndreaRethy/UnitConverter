
const meter = 3.281
const liter = 0.264
const kilogram = 2.204

const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")
const inputField = document.getElementById("input-field")
const convertBtn = document.getElementById("convert-btn")
let meters = 0
let feet = 0
let liters = 0
let gallons = 0
let kilos = 0
let pounds = 0

convertBtn.addEventListener("click", function() {
    const input = inputField.value;

    meters = Math.round( (input / meter) * 1000) / 1000
    feet = (input * meter).toFixed(3)

    liters = (input / liter).toFixed(3)
    gallons = (input * liter).toFixed(3)

    kilos = (input / kilogram).toFixed(3)
    pounds = (input * kilogram).toFixed(3)

    length.innerText = `${input} meters = ${feet} feet | ${input} feet = ${meters} meters`
    volume.innerText = `${input} liters = ${gallons} gallons | ${input} gallons = ${liters} liters`
    mass.innerText = `${input} kilos = ${pounds} pounds | ${input} pounds = ${kilos} kilos`
})