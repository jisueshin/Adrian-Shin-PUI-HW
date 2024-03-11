const cartBadge = document.querySelector(".cart-badge")

let cartNumber = 0
//cart is initialized to zero
cartBadge.innerText = cartNumber

if (cartNumber != JSON.parse(localStorage.getItem("storedRolls")).length){
    updateCartNumber();
}

function updateCartNumber(){
    cartNumber = JSON.parse(localStorage.getItem("storedRolls")).length;
    //update value of cart number
    cartBadge.innerText = cartNumber;
}
