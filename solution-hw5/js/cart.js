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

//TODO: move this later
let allGlazing = {
    "Keep original" : 0,
    "Sugar milk" : 0,
    "Vanilla milk" : 0.5,
    "Double chocolate" : 1.5,
}

let allPackSize = {
    "1": 1,
    "3": 3,
    "6": 5,
    "12": 10,
}

const cartOriginal = addNewRoll("Original", "Sugar milk", "1");

const cartWalnut = addNewRoll("Walnut", "Vanilla milk", "12");

const cartRaisin = addNewRoll("Raisin", "Sugar milk", "3");

const cartApple = addNewRoll("Apple", "Keep original", "3");

updateTotalPrice();

for (const roll of cartSet){
    createElement(roll);
}

function createElement(roll){
    const template = document.querySelector('#cart-item-template');
    const clone = template.content.cloneNode(true);
    roll.element = clone.querySelector(".cart-item");
    const itemsContainer = document.querySelector("#cart-items-container"); 
    itemsContainer.append(roll.element);
    updateElement(roll);

    const btnRemove = roll.element.querySelector("#item-remove-btn");
    btnRemove.addEventListener("click", ()=>{
        removeItem(roll)
    });
}

function removeItem(roll){
    roll.element.remove();
    cartSet.delete(roll);
    updateTotalPrice();
}

function updateElement(roll){
    //updating image:
    const rollImage = roll.element.querySelector(".cart-item-img"); 
    let imageSource = rolls[roll.type]["imageFile"]; 
    rollImage.src = "assets/products/" + imageSource; 

    //updating name:
    const rollName = roll.element.querySelector("#cart-item-name");
    rollName.innerText = roll.type + " Cinnamon Roll";

    //updating glazing: 
    const rollGlazing = roll.element.querySelector("#cart-item-glazing");
    rollGlazing.innerText = "Glazing: " + roll.glazing; 

    //updating pack size:
    const rollPackSize = roll.element.querySelector("#cart-item-pack-size");
    rollPackSize.innerText = "Pack size: " + roll.size;

    //updating price: 
    const rollPrice = roll.element.querySelector("#cart-item-price");
    itemPrice = findItemPrice(roll);
    rollPrice.innerText = "$" + itemPrice;

    //updateTotalPrice(roll);

    /*
    let glazingPrice = allGlazing[roll.glazing];
    let packPrice = allPackSize[roll.size];
    let itemPrice = (roll.basePrice + glazingPrice) * packPrice;
    itemPrice = itemPrice.toFixed(2);
    rollPrice.innerText = "$" + itemPrice;
    

    //updating total price: 
    //updateTotalPrice(itemPrice);
    const displayedPrice = document.querySelector("#total-price-text");
    totalPrice += Number(itemPrice); 
    displayedPrice.innerText = totalPrice;
    */
}

function findItemPrice(roll){
    let glazingPrice = allGlazing[roll.glazing];
    let packPrice = allPackSize[roll.size];
    let itemPrice = (roll.basePrice + glazingPrice) * packPrice;
    itemPrice = itemPrice.toFixed(2);
    return itemPrice
}

/*
function updateTotalPrice(itemPrice){
    const displayedPrice = document.querySelector("#total-price-text");
    totalPrice += Number(itemPrice); 
    console.log(typeof(itemPrice));
    displayedPrice.innerText = totalPrice;
    console.log(totalPrice)
}*/

console.log(cartSet);

function updateTotalPrice(){
    const displayedPrice = document.querySelector("#total-price-text");
    totalPrice = 0;
    for (const roll of cartSet){
        itemPrice = findItemPrice(roll);
        totalPrice += Number(itemPrice);
        totalPrice.toFixed(2);
        console.log(totalPrice);
    }

    displayedPrice.innerText = "$" + totalPrice;
    console.log(totalPrice)
}

