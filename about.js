console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	// console.log('form submit');
	alert('The form has been submitted')
}



let form = document.querySelector('form#contact');
console.log(form)

form.addEventListener('submit', handleSubmit);

document.getElementById("rubber-liberty").addEventListener('mouseover', () => { alert('Your good enough!'); });

