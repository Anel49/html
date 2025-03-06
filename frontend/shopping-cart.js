
let products = [];

onload = function(){
    const product1 = new Product(
        "imgs/products/navy-shirtfront.png",
        "Shirt",
        "Navy",
        "XL",
        27.99
    )
    const product2 = new Product(
        "imgs/products/gray-shirtfront.png",
        "Shirt",
        "Gray",
        "XL",
        27.99
    )
    const product3 = new Product(
        "imgs/products/white-shirtfront.png",
        "Shirt",
        "White",
        "XL",
        27.99
    )
    const product4 = new Product(
        "imgs/products/maroon-shirtfront.png",
        "Shirt",
        "Maroon",
        "XL",
        27.99
    )
    const product5 = new Product(
        "imgs/products/black-shirtfront.png",
        "Shirt",
        "Black",
        "XL",
        27.99
    )
    products.push(product1, product2, product3, product4, product5);
    tableRow(products);
}
class Product {
    constructor(picture, title, color, size, price) {
        this.picture = picture;
        this.title = title;
        this.color = color;
        this.size = size;
        this.price = price;
        this.quantity = 1;        
        this.total = price;
    }
}
function tableRow(products){
    // const cartBody = document.getElementById("cartBody");
    // cartBody.innerHTML = "";
    for (i = 0; i < products.length; i++){
        let product = products[i];
        const cartBody = document.getElementById("cartBody");
        cartBody.innerHTML += 
        `
        <tr>
            <td><img src=
                "${product.picture}" alt="${product.color} ${product.title}">
            </td>
            <td>${product.title} - ${product.color} ${product.size}</td>
            <td>$${product.price}</td>
            <td><input type="text" value="${product.quantity}
                onchange="updateQuantity(this, '${product}')"></td>
            <td class="total">$${product.total}</td>
            <td><input type="submit" value="Remove"></td>
        </tr>
        `
    }
}

// attempting to make a function to add a product to make sure all is well
// function addProduct(picture, title, color, size, price){
//     let product = new Product(picture, title, color, size, price);
//     products.push(product);
//     tableRow(products);
// }

function updateQuantity(input, product){
    const newQuantity = parseInt(input.value);
    const item = products.find(item => item.color === product.color);
    console.log(item.quantity);
        item.quantity = newQuantity;
        console.log(item.quantity);
    tableRow(products);
    cartTotals();
}
// calculates subtotal, tax, and total (subtotal + tax)
function cartTotals(){
    let cartSubtotal = 0;

    for (i = 0; i < products.length; i++){
        cartSubtotal += products[i].total;
    }

    let taxed = Number((cartSubtotal * 0.06).toFixed(2));
    let total = Number((taxed + cartSubtotal).toFixed(2));

    document.getElementById("subtotal").innerHTML = "$" + cartSubtotal;
    document.getElementById("tax").innerHTML = "$" + taxed;
    document.getElementById("total").innerHTML = "$" + total;
}

// function cartSubtotal(){
//     let cartSubtotal = 0;
//     for (i = 0; i < products.length; i++){
//         cartSubtotal += products[i].total;
//     }
//     document.getElementById("subtotal").innerHTML = "$" + cartSubtotal;
//     cartTax(cartSubtotal);
// }
// function cartTax(cartSubtotal){
//     let taxed = parseFloat(cartSubtotal * 0.06).toFixed(2);
//     document.getElementById("tax").innerHTML = "$" + taxed;
    
//     cartTotal(cartSubtotal, parseFloat(taxed).toFixed(2));
// }
// function cartTotal(cartSubtotal, taxed){
//     console.log(typeof(cartSubtotal), typeof(taxed));
//     let total = parseFloat((cartSubtotal + taxed).toFixed(2));
//     document.getElementById("total").innerHTML = "$" + total;
// }

