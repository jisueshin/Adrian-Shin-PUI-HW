const cartSet = new Set();

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

function addNewRoll(rollType, rollGlazing, packSize){
    let basePrice = rolls[rollType]["basePrice"];
    const roll = new Roll(rollType, rollGlazing, packSize, basePrice);
    cartSet.add(roll);
    return roll;
}

const cartOriginal = addNewRoll("Original", "Sugar milk", "1");

const cartWalnut = addNewRoll("Walnut", "Vanilla milk", "12");

const cartRaisin = addNewRoll("Raisin", "Sugar milk", "3");

const cartApple = addNewRoll("Apple", "Keep original", "3");

for (const roll of cartSet){
    createElement(roll);
}

function createElement(roll){
    console.log("hehe"); 
}