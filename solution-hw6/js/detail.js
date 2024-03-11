const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get("roll");

//changing header title 
const headerTitle = document.querySelector(".header-title");
headerTitle.innerText = rollType + " cinnamon roll";

//changing roll image (and alt text)
const imageSource = rolls[rollType]["imageFile"];
const detailImage = document.querySelector(".detail-img");
detailImage.src = "assets/products/" + imageSource;
detailImage.alt = rollType + " cinnamon roll";

//changing base price
let basePrice = rolls[rollType]["basePrice"];

// pricing (hw 3) content ---------------------------------------------

// filling glazing dropdown with glazing optoins
let glazingSelect = document.querySelector("#glazing");

let allGlazing = {
    "Keep original" : 0,
    "Sugar milk" : 0,
    "Vanilla milk" : 0.5,
    "Double chocolate" : 1.5,
}

for (const [glazeName, glazePrice] of Object.entries(allGlazing)){
    var option = document.createElement('option');
    option.text = glazeName;  
    option.value = glazePrice;  
    glazingSelect.add(option);
}

let currentGlaze = Object.keys(allGlazing)[0]
//currently selected glazing is automatically set to first option

//filling pack size dropdown with pack size options
let packSelect = document.querySelector("#pack-size");

let allPackSize = {
    "1": 1,
    "3": 3,
    "6": 5,
    "12": 10,
}

for (const [packSize, packPrice] of Object.entries(allPackSize)){
    var option = document.createElement('option');
    option.text = packSize;  
    option.value = packPrice;  
    packSelect.add(option);
}

let currentPackSize = Object.keys(allPackSize)[0]

// adding event listeners to detect when someone changes options
glazingSelect.addEventListener('change', onGlazingChange);

let glazingPrice = 0;

packSelect.addEventListener('change', onPackChange);

let packPrice = 1;

function onGlazingChange(){
    glazingPrice = Number(this.value);
    currentGlaze = glazingSelect.options[glazingSelect.selectedIndex].text;
    onPriceChange();
}

function onPackChange(){
    packPrice = Number(this.value);
    currentPackSize = packSelect.options[packSelect.selectedIndex].text; 
    onPriceChange();
}

// displaying price calculations
let displayedPrice = document.querySelector(".roll-price");
displayedPrice.innerText = "$" + basePrice;

function onPriceChange(){
    let newPrice = (basePrice + glazingPrice) * packPrice;
    newPrice = newPrice.toFixed(2);
    displayedPrice.innerText = "$" + newPrice;
}

// adding to cart section ---------------------------------------------

//cart array
let cart = []

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

const btnAddCart = document.querySelector("#add-cart-btn");

btnAddCart.onclick = updateCart;

//adds to cart array
function updateCart(){
    item = new Roll(rollType, currentGlaze, currentPackSize, basePrice);
    cart.push(item);
    saveToLocalStorage();
    updateCartNumber();
}

//uploads cart to local storage
function saveToLocalStorage(){
    let cartArrayString = JSON.stringify(cart);
    localStorage.setItem("storedRolls", cartArrayString);
    let currentStorage = localStorage.getItem("storedRolls");
    console.log(currentStorage);
}

//retrieving data if changed on cart page
function retrieveLocalStorage(){
    const cartArrayString = localStorage.getItem("storedRolls");
    const cartArray = JSON.parse(cartArrayString);
    for (const item of cartArray){
        cart.push(item);
    }
}

if (localStorage.getItem("storedRolls") != null){
    retrieveLocalStorage();
}