const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get("roll");
//where does "roll" come from?

//TODO: change header title 
const headerTitle = document.querySelector(".header-title");
headerTitle.innerText = rollType + " cinnamon roll";

//TODO: change roll image 
const imageSource = rolls[rollType]["imageFile"];
const detailImage = document.querySelector(".detail-img");
detailImage.src = "assets/products/" + imageSource;

//TODO: change base price
let basePrice = rolls[rollType]["basePrice"];

// hw 3 content 

// filling glazing dropdown with glazing optoins
let selectedGlazing = document.querySelector("#glazing");

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
    selectedGlazing.add(option);
}

//filling pack size dropdown with pack size options
let selectedPack = document.querySelector("#pack-size");

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
    selectedPack.add(option);
}

// adding event listeners to detect when someone changes options
selectedGlazing.addEventListener('change', onGlazingChange);

let glazingPrice = 0;

selectedPack.addEventListener('change', onPackChange);

let packPrice = 1;
 
function onGlazingChange(){
    glazingPrice = Number(this.value);
    onPriceChange();
}

function onPackChange(){
    packPrice = Number(this.value);
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




