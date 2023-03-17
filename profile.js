let faveColor = document.getElementById('color')
let favePlace = document.getElementById('place')
let faveRitual = document.getElementById('ritual')

const fColor = (evt) => {
	evt.preventDefault()

	alert("My favorite color is Red.")
}
const fplace = (evt) => {
	evt.preventDefault()

	alert("My favorite place to be is with my fiance.")
}
const fRitual = (evt) => {
	evt.preventDefault()

	alert("My favorite Ritual, that I have yet to do, is the 'Ice Plunge'.")
}

faveColor.addEventListener('click', fColor)
favePlace.addEventListener('click', fplace)
faveRitual.addEventListener('click', fRitual)