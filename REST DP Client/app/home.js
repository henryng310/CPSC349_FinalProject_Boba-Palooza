
import {BobaOrder} from '/drink.js'

console.log('Browser downloaded and is about to execute the following logic: ') 

const cartButton = document.getElementsByClassName('cart-btn')
for (var i = 0; i < cartButton.length; i++) {
	var button = cartButton[i]
button.addEventListener('click', function(event){
	var cupSize = document.getElementsByClassName('size')[0].value
	var liquid = document.getElementsByClassName('drink')[0].value
	var boba = document.getElementsByClassName('boba')[0].value
	const stObj = new BobaOrder(cupSize, liquid, boba)
	console.log(stObj) 

	const xhr = new XMLHttpRequest()
	xhr.open('POST', 'http://localhost:3000/api/drinksordered')
	xhr.setRequestHeader('Content-Type', 'application/json')
	xhr.responseType = 'json'
	xhr.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log(this.response)
		}
	}
	const jsonStr = JSON.stringify(stObj)
	xhr.send(jsonStr)
})
}



