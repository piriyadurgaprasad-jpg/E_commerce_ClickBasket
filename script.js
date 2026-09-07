 let home=document.getElementById("home")
 let login=document.getElementById("login")
 let register=document.getElementById("register")
 let contact=document.getElementById("contact")
 let cart=document.getElementById("cart")

 
 home.addEventListener("click",(e)=>{
    window.location.href="register.html"
 })


 let name=document.getElementById("name")
let email=document.getElementById("email")
let psw=document.getElementById("psw")
let confirmpsw=document.getElementById("confirmpsw")
let btn2=document.getElementById("btn2")



register.addEventListener("click",(e)=>{
    window.location.href="register.html"
 })
btn2.addEventListener("click",(e)=>{
   e.preventDefault()
   console.log(name.value);
   console.log(email.value);
   console.log(psw.value);
   console.log(confirmpsw.value);
   if(psw.value==confirmpsw.value){
      alert("register successfully")
      window.location.href="login.html"
   }
   else{
      alert("password not matching")
   }
});

 login.addEventListener("click",(e)=>{
    window.location.href="login.html"
 })
let username=document.getElementById("username")
let password=document.getElementById("password")
let btn1=document.getElementById("btn1")

btn1.addEventListener("click",(e)=>{
   e.preventDefault()
   // console.log(username.value);
   // console.log(password.value);
   if(username.value==""||password.value==""){
      alert("please fill all Fields")
   }
   // else if(username.value=="durga" && password.value=="12345"){
   //    alert("login sucessfully")
   // window.location.href="index.html";
   // }
   else{
      alert(" Login successfully");
      window.location.href="index.html";
   }
});

