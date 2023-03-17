console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

const picAlert = (evt) => {
	evt.preventDefault()

	alert("The duck thinks you're cute")
}

let img = document.querySelector('img').addEventListener('mouseover', picAlert)