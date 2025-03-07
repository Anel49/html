
let subtotal = 0, taxed = 0, total = 0;
let form = document.getElementById("add-to-cart-form");
let products = [
    {
        size: "Extra Small",
        letter: "XS",
        price: 19.99
    },
    {
        size: "Small",
        letter: "S",
        price: 21.99
    },
    {
        size: "Medium",
        letter: "M",
        price: 23.99,
    },
    {
        size: "Large",
        letter: "L",
        price: 25.99
    },
    {
        size: "Extra Large",
        letter: "XL",
        price: 27.99
    },
    {
        size: "Extra Extra Large",
        letter: "XXL",
        price: 29.99
    }
]

function prevReload(e){
    e.preventDefault();
}
form.addEventListener('submit', prevReload);

function addItemToCart(){
    subtotal += 27.99;
    taxed = Number(subtotal * 1.06);
    alert("Cart total: $" + taxed.toFixed(2));
}