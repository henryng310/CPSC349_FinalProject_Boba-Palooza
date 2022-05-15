
const xhr = new XMLHttpRequest()
xhr.open('GET', 'http://localhost:3000/api/drinksordered')
xhr.responseType = 'json'
xhr.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		console.log(this.response)
		const body = document.getElementsByTagName('table')[0]
		//
		for (const s of this.response) {
			body.appendChild(document.createElement('tr'))
			let flavor = document.createElement('th')
			let size = document.createElement('th')
			let amnt = document.createElement('th')
			let txt = document.createTextNode(s.drinkFlavor)
			let txt2 = document.createTextNode(s.drinkSize)
			let txt3 = document.createTextNode(s.bobaAmnt)
			flavor.appendChild(txt)
			size.appendChild(txt2)
			amnt.appendChild(txt3)
			body.appendChild(flavor)
			body.appendChild(size)
			body.appendChild(amnt)		
		}
	}
}
xhr.send()