let home = document.getElementById("home");
let login = document.getElementById("login");
let register = document.getElementById("register");
let contact = document.getElementById("contact");
let product = document.getElementById("product");


home.addEventListener("click",(e)=>{
    window.location.href="index.html";
});


login.addEventListener("click",(e)=>{
    window.location.href="login.html";
});


register.addEventListener("click",(e)=>{
    window.location.href="register.html";
});


contact.addEventListener("click",(e)=>{
    window.location.href="contact.html";
});


product.addEventListener("click",(e)=>{
    window.location.href="product.html";
});


// Mobile
let addBtn1 = document.getElementById("Btn1");

addBtn1.addEventListener("click",(e)=>{

    let product = {
        name:"Mobile",
        image:"/javascripttask/assests/download.webp",
        description:"6GB RAM, 128GB Storage",
        price:"20000"
    };

    localStorage.setItem("product",JSON.stringify(product));
    alert("Mobile Added")


    window.location.href="detail.html";

});


// Laptop
let addBtn2 = document.getElementById("Btn2");

addBtn2.addEventListener("click",(e)=>{

    let product = {
        name:"Laptop",
        image:"./assests/download (1).webp",
        description:"i5 Processor, 8GB RAM",
        price:"50000"
    };

    localStorage.setItem("product",JSON.stringify(product));
    alert("Laptop Added")


    window.location.href="detail.html";

});


// Watch
let addBtn3 = document.getElementById("Btn3");

addBtn3.addEventListener("click",(e)=>{

    let product = {
        name:"Watch",
        image:"./assests/OIP1.jfif",
        description:"Smart Watch",
        price:"3000"
    };

    localStorage.setItem("product",JSON.stringify(product));
    alert("Watch Added")

    window.location.href="detail.html";

});


// Headphone
let addBtn4 = document.getElementById("Btn4");

addBtn4.addEventListener("click",(e)=>{

    let product = {
        name:"Headphone",
        image:"./assests/OIP.webp",
        description:"Wireless Headphone",
        price:"2000"
    };

    localStorage.setItem("product",JSON.stringify(product));
    alert("Head Phone Added")


    window.location.href="detail.html";

});


// Camera
let addBtn5 = document.getElementById("Btn5");

addBtn5.addEventListener("click",(e)=>{

    let product = {
        name:"Camera",
        image:"./assests/download (3).webp",
        description:"HD Camera",
        price:"30000"
    };

    localStorage.setItem("product",JSON.stringify(product));

    alert("Canera Added")


    window.location.href="detail.html";

});


// Tablet
let addBtn6 = document.getElementById("Btn6");

addBtn6.addEventListener("click",(e)=>{

    let product = {
        name:"Tablet",
        image:"./assests/download (4).webp",
        description:"10 inch Display",
        price:"15000"
    };

    localStorage.setItem("product",JSON.stringify(product));
    alert("Tablet Added")


    window.location.href="detail.html";

});

