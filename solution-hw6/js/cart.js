const cartSet = new Set();

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

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

//updating cart set
function addNewRoll(rollType, rollGlazing, packSize){
    let basePrice = rolls[rollType]["basePrice"];
    const roll = new Roll(rollType, rollGlazing, packSize, basePrice);
    cartSet.add(roll);
    return roll;
}

//called here to initialize price with all four items first

//maybe add everything in storage to cartset? 
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
    updateLocalStorage();
}

function updateElement(roll){
    //updating image:
    const rollImage = roll.element.querySelector(".cart-item-img"); 
    let imageSource = rolls[roll.type]["imageFile"]; 
    rollImage.src = "assets/products/" + imageSource; 
    rollImage.alt = roll.type + " cinnamon roll";

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
}

function findItemPrice(roll){
    let glazingPrice = allGlazing[roll.glazing];
    let packPrice = allPackSize[roll.size];
    let itemPrice = (roll.basePrice + glazingPrice) * packPrice;
    itemPrice = itemPrice.toFixed(2);
    return itemPrice
}

function updateTotalPrice(){
    const displayedPrice = document.querySelector("#total-price-text");
    //resetting total price to 0: 
    totalPrice = 0;
    for (const roll of cartSet){
        itemPrice = findItemPrice(roll);
        totalPrice += Number(itemPrice);  
    }
    totalPrice = totalPrice.toFixed(2);
    displayedPrice.innerText = "$" + totalPrice;
}

// hw 6 local storage

function retrieveLocalStorage(){
    const cartArrayString = localStorage.getItem("storedRolls");
    const cartArray = JSON.parse(cartArrayString);
    for (const item of cartArray){
        const roll = addNewRoll(item.type, item.glazing, item.size);
        //added to cart set here in addnewroll function
        createElement(roll);
        //display is created in this function
    }
}

if (localStorage.getItem("storedRolls") != null){
    retrieveLocalStorage();
}

updateTotalPrice();

function updateLocalStorage(){
    const cartArray = Array.from(cartSet);
    //basically saving cart set here to local storage
    let cartArrayString = JSON.stringify(cartArray);
    localStorage.setItem("storedRolls", cartArrayString);
}
