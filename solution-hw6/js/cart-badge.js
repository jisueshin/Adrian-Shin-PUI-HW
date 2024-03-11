const cartBadge = document.querySelector(".cart-badge")
//console.log(JSON.parse(localStorage.getItem("storedRolls")).length)

//updateCartNumber()

let cartNumber = 0

if (cartNumber != JSON.parse(localStorage.getItem("storedRolls")).length){
    updateCartNumber();
}

function updateCartNumber(){
    cartNumber = JSON.parse(localStorage.getItem("storedRolls")).length
    cartBadge.innerText = cartNumber;
}

console.log(cartNumber)
