
// variables for cart totals
let subtotal = 0, taxed = 0, total = 0;
// array of dictionary objects with full size name, size letter, and price
let sizePrices = [
    {
        size: "Extra Small",
        letter: "XS",
        price: 19.99,
        availability: "In Stock"
    },
    {
        size: "Small",
        letter: "S",
        price: 21.99,
        availability: "In Stock"
    },
    {
        size: "Medium",
        letter: "M",
        price: 23.99,
        availability: "In Stock"
    },
    {
        size: "Large",
        letter: "L",
        price: 25.99,
        availability: "Out of Stock"
    },
    {
        size: "Extra Large",
        letter: "XL",
        price: 27.99,
        availability: "Out of Stock"
    },
    {
        size: "Extra Extra Large",
        letter: "XXL",
        price: 29.99,
        availability: "In Stock"
    }
]

addSelectOptions();

function preventPageReload(e){
    e.preventDefault();
}
document.getElementById("add-to-cart-btn").addEventListener(this, preventPageReload);

// grabs the selected size and finds its price
function sizeSelection(size){
    let price = 0;
    let productSize = "";
    for (let i = 0; i < sizePrices.length; i++){
        if (sizePrices[i]['letter'] == size){
            price = sizePrices[i]['price'];
            productSize = sizePrices[i]['letter'];
        }
    }
    addItemToCart(price, productSize);
}

// adds the price of the product to the cart total
function addItemToCart(price, productSize){
    subtotal += price;
    taxed = Number(subtotal * 1.06);
    alert(productSize + " Shirt Added (Costs $" + price + ") - Total $" + taxed.toFixed(2));
}

// creates the size dropdown menu based on sizePrices dictionary
function addSelectOptions(){

    // sizes and availability table
    const sizes = document.getElementById("sizes-table");
    sizes.innerHTML = 
        `
        <tr>
            <th>Size</th>
            <th>Availability</th>
        </tr>
        `
    for (let i = 0; i < sizePrices.length; i++){
        sizes.innerHTML += 
            `
            <tr>
                <td>${sizePrices[i]["letter"]}</td>
                <td>${sizePrices[i]["availability"]}</td>
            <tr>
            `
    }

    // select box
    const selects = document.getElementById("selects");
    selects.innerHTML = "";
    for (let i = 0; i < sizePrices.length; i++){
        selects.innerHTML +=
            `
            <option value="${sizePrices[i]['letter']}">${sizePrices[i]['letter']}</option>
            `
    }
}

// updates the h2 for the item price upon select change
function updatePriceText(){
    let chosenSize = document.getElementById("selects").value;
    let price = 0;
    for (let i = 0; i < sizePrices.length; i++){
        if (sizePrices[i]["letter"] == chosenSize){
            price = sizePrices[i]["price"];
        }
    }
    document.getElementById("price-txt").innerHTML = "$" + price;
}