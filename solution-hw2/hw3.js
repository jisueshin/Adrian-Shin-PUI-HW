// find which option was selected 
// find pricing adjustment 
// display pricing adjustment on cart price

let selectedGlazing = document.querySelector("#glazing");

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

let displayedPrice = document.querySelector(".roll-price");
console.log(displayedPrice);

function onPriceChange(){
    let newPrice = (basePrice + glazingPrice) * packPrice;
    console.log("this is" + newPrice); 
    displayedPrice.innerText = "$" + newPrice;
    console.log(typeof newPrice);
}




