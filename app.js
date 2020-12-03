// variables

const cartBtn = document.querySelector(".cart-btn")
const closeCartBtn = document.querySelector(".close-btn");
const clearCartBtn = document.querySelector(".clear-btn");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".clear-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const productContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".product-centre");
//
let cart = [];

//getting  the products 
class products{
    gets.Products(){
        fetch('producs.json')
    }
}
// display products
class UI {

}
//local storage
class storage{

}

document.addEventListener("DOMContentLoader",() =>{
    const ui = new UI();
    const products = new products();
});

