// filling glazing dropdown with glazing optoins
let selectedGlazing = document.querySelector("#glazing");

allGlazing = [
{
    glazeName: "Keep original",
    priceAdaptation: 0,
},
{
    glazeName: "Sugar milk",
    priceAdaptation: 0,
},
{
    glazeName: "Vanilla milk",
    priceAdaptation: 0.5,
},
{
    glazeName: "Double chocolate",
    priceAdaptation: 1.5,
}
]

for (let i = 0; i < allGlazing.length; i++){
    var option = document.createElement('option');
    option.text = allGlazing[i].glazeName;
    option.value = allGlazing[i].priceAdaptation;  
    selectedGlazing.add(option);
}

//filling pack size dropdown with pack size options

let selectedPack = document.querySelector("#pack-size");

allPackSize = [
{
    packSize: "1",
    priceAdaptation: 1,
},
{
    packSize: "3",
    priceAdaptation: 3,
},
{
    packSize: "6",
    priceAdaptation: 5,
},
{
    packSize: "12",
    priceAdaptation: 10,
}
]

for (let i = 0; i < allPackSize.length; i++){
    var option = document.createElement('option');
    option.text = allPackSize[i].packSize;
    option.value = allPackSize[i].priceAdaptation;  
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




