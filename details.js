let product = JSON.parse(localStorage.getItem("product"));


let productTitle = document.getElementById("productTitle");
let productImage = document.getElementById("productImage");
let productName = document.getElementById("productName");
let productDescription = document.getElementById("productDescription");
let productPrice = document.getElementById("productPrice");


productTitle.innerText = product.name + " Details";

productImage.src = product.image;

productName.innerText = product.name;

productDescription.innerText = product.description;

productPrice.innerText = "Price : ₹" + product.price;



let btn1 = document.getElementById("btn1");

btn1.addEventListener("click",(e)=>{

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
   

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product Added to Cart");

    window.location.href = "cart.html";
   //  window.localStorage.clear()

});

 let details=document.getElementById("btn2")
 btn2.addEventListener("click",(e)=>{
    alert(" Order Placed Successfully")
    window.location.href="index.html"
 })

