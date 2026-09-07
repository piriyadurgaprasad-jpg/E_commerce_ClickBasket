

let home=document.getElementById("home")
 let register=document.getElementById("register")
 let login=document.getElementById("login")
 let contact=document.getElementById("contact")
 let product=document.getElementById("product")

register.addEventListener("click",(e)=>{
    window.location.href="register.html"
 })

 contact.addEventListener("click",(e)=>{
    window.location.href="contact.html"
 })


 product.addEventListener("click",(e)=>{
    window.location.href="product.html"
 })


//  home.addEventListener("click",(e)=>{
//     window.location.href="index.html"
//  })


let username=document.getElementById("username")
let password=document.getElementById("password")
let btn1=document.getElementById("btn1")


btn1.addEventListener("click",(e)=>{
   e.preventDefault()
   // console.log(username.value);
   // console.log(password.value);
   if(username.value=="" || password.value==""){
      alert("please fill all Fields")
   }
   // else if(username.value=="durga" && password.value=="12345"){
   //    alert("login sucessfully")
   // window.location.href="index.html";
   // }
   else{
      alert(" Login successfully");
      window.location.href="product.html";
   }
});

