
let home=document.getElementById("home")
 let register=document.getElementById("register")
 let login=document.getElementById("login")
 let contact=document.getElementById("contact")
 let product=document.getElementById("product")

login.addEventListener("click",(e)=>{
    window.location.href="login.html"
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




 let name=document.getElementById("name")
let email=document.getElementById("email")
let psw=document.getElementById("psw")
let confirmpsw=document.getElementById("confirmpsw")
let btn2=document.getElementById("btn2")

btn2.addEventListener("click",(e)=>{
   e.preventDefault()
   // console.log(name.value);
   // console.log(email.value);
   // console.log(psw.value);
   console.log(confirmpsw.value);
   if(name.value==""|| email.value==""|| psw.value==""|| confirmpsw.value==""){
    alert("Please fill all fields")
   }
   else if(psw.value==confirmpsw.value){
      alert("register successfully")
      window.location.href="login.html"
   }
   else{
      alert("password not matching")
   }
});

let users=JSON.parse(localStorage.getItem("users")) || []

let user={
   name:name.value,
   email:email.value,
   password:psw.value
}

users.push(user)

localStorage.setItem("users",JSON.stringify(users))

