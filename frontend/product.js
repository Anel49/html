
// variables for cart totals
let subtotal = 0, taxed = 0, total = 0;
// array of dictionary objects with full size name, size letter, and price
let sizePrices = [
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

// prevents page from refreshing after clicking OK
function prevReload(e){
    e.preventDefault();
}
document.getElementById("add-to-cart-form").addEventListener('submit', prevReload);

// grabs the selected size and finds its price
function sizeSelection(size){
    let price = 0;
    for (let i = 0; i < sizePrices.length; i++){
        if (sizePrices[i]["letter"] == size){
            price = sizePrices[i]["price"];
        }
    }
    addItemToCart(price);
}

// adds the price of the product to the cart total
function addItemToCart(price){
    subtotal += price;
    taxed = Number(subtotal * 1.06);
    alert("Cart total: $" + taxed.toFixed(2));
}