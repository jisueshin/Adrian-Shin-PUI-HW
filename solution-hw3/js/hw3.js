// filling glazing dropdown with glazing optoins
let selectedGlazing = document.querySelector("#glazing");

let allGlazing = {
    "Keep original" : 0,
    "Sugar milk" : 0,
    "Vanilla milk" : 0.5,
    "Double chocolate" : 1.5,
}

for (let [key, value] of Object.entries(allGlazing)){
    var option = document.createElement('option');
    option.text = key;  
    option.value = value;  
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

for (let [key, value] of Object.entries(allPackSize)){
    var option = document.createElement('option');
    option.text = key;  
    option.value = value;  
    selectedPack.add(option);
}

// adding event listeners to detect when someone changes options
selectedGlazing.addEventListener('change', onGlazingChange);

let glazingPrice = 0;

selectedPack.addEventListener('change', onPackChange);

let packPrice = 1;
 
let basePrice = 2.49;

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




