// find which option was selected 
// find pricing adjustment 
// display pricing adjustment on cart price

let selectedGlazing = document.querySelector("#glazing");

selectedGlazing 
//array
allGlazing = {
    "Keep original": 0,
    "Sugar milk": 0,
    "Vanilla milk": 0.5,
    "Double chocolate": 1.5,
}

selectedGlazing.addEventListener('change', onGlazingChange);

let glazingPrice = 0;

let selectedPack = document.querySelector("#pack-size");

selectedPack.addEventListener('change', onPackChange);

let packPrice = 1;
 
let basePrice = 2.49;

function onGlazingChange(){
    //console.log(this.value);
    glazingPrice = Number(this.value);
    //console.log(glazingPrice);
    //console.log(typeof glazingPrice);
    onPriceChange();
}

function onPackChange(){
    packPrice = Number(this.value);
    onPriceChange();
}
//multiplying this makes some weird decimals

let displayedPrice = document.querySelector(".roll-price");

function onPriceChange(){
    let newPrice = (basePrice + glazingPrice) * packPrice;
    console.log(basePrice)
    console.log(glazingPrice)
    console.log(packPrice)
    newPrice = newPrice.toFixed(2)
    console.log("this is" + newPrice);
    displayedPrice.innerText = "$" + newPrice;
}




