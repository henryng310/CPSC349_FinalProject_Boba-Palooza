
function Drink(sz, drnk, bba) {
	this.drinkSize = sz
	this.drinkFlavor = drnk
	this.bobaAmnt = bba 
	Object.defineProperty(this, 'bobaDrink', {
		get: function() {return `${this.drinkSize} ${this.drinkFlavor}`}
	})
}

Drink.prototype.getLabel = function() {
	return `${this.drinkSize} ${this.drinkFlavor}`
}

function DrinkOrder(sz, drnk, bba, id) {
	Drink.call(this, sz, drnk, bba)	
	this.drinkID = id 
}

Object.setPrototypeOf(DrinkOrder.prototype, Drink.prototype)

DrinkOrder.prototype.getLabel = function() {
	return `${this.drinkSize} ${this.drinkFlavor} ${this.drinkID}`	
}

export class BobaOrder extends DrinkOrder {
	//export class
}








