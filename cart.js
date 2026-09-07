let cartItems = document.getElementById("cartItems");


let cart = JSON.parse(localStorage.getItem("cart")) || [] ;
// window.localStorage.clear()


cart.forEach(function(item){

    cartItems.innerHTML += `

        <div>

            <img src="${item.image}" width="150">

            <h2>${item.name}</h2>

            <p>${item.description}</p>

            <p>Price : ₹${item.price}</p>
    

        </div>

    `;

});