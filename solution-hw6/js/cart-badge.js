const cartBadge = document.querySelector(".cart-badge")

let cartNumber = 0
cartBadge.innerText = cartNumber

if (cartNumber != JSON.parse(localStorage.getItem("storedRolls")).length){
    updateCartNumber();
}

function updateCartNumber(){
    cartNumber = JSON.parse(localStorage.getItem("storedRolls")).length
    cartBadge.innerText = cartNumber;
}

console.log(cartNumber)
