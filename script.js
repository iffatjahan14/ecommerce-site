let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(product, price) {
  cart.push({ product, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(product + " added to cart!");
}

function displayCart() {
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  let cartList = document.getElementById("cart-items");
  let totalPrice = document.getElementById("total-price");
  if (!cartList) return;

  cartList.innerHTML = "";
  let total = 0;
  cartItems.forEach(item => {
    let li = document.createElement("li");
    li.textContent = `${item.product} - ৳${item.price}`;
    cartList.appendChild(li);
    total += item.price;
  });
  totalPrice.textContent = "Total: ৳" + total;
}

if (window.location.pathname.includes("cart.html")) {
  displayCart();
}
