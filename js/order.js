
let cart = JSON.parse(localStorage.getItem("cart")) || [];

let ui = ``;
let cartui = (products) => {
  products.map((product) => {
    ui += ` <div class="card p-3" style="max-width: 540px">
              <div class="row g-0">
                <div class="col-md-4">
                  <div class="recommed-img-box">
                    <img src="${product.img}" class="img-fluid" alt="..." />
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card-body p-0">
                    <img src="img/veg.svg" alt="" />
                    <h4 class="card-title font-20 fw-bold m-0">
                      ${product.title}
                    </h4>
                    <h5 class="font-14">${product.description}</h5>
                    <div class="d-flex align-items-center">
                    <button class="btn btn-primary me-1" onclick="plus(${product.id})">+</button>
                    <span class="fs-3" id="qty_${product.id}">${product.qty}</span>
                    <button class="btn btn-primary ms-2" onclick="minus(${product.id})">-</button>
                    </div>
                    </div>

                </div>
              </div>
              <div class="hstack">
                <h2 class="font-20 fw-bold pt-3">${product.price}</h2>
              </div>
              </div>`
  });
};
function renderEmptyCartUi() {
  ui = `<div class="empty-class-msg">Your cart is empty</div>`
}


let totalprice = 0;
for (let i = 0; i < cart.length; i++) {
  totalprice += cart[i].price * cart[i].qty;
}


if (cart.length > 0) {
  cartui(cart);
}
else {
  renderEmptyCartUi();
}

document.querySelector(".row").innerHTML = ui;
document.getElementById("total").innerHTML=`Total price:${totalprice}`





function plus(productId) {
  console.log("plus");
  let qtyE = document.getElementById(`qty_${productId}`);
  let qty = parseInt(qtyE.innerText);
  qty++;
  qtyE.innerText = qty;
  updateQtyinCart(productId, qty);
}

function minus(productId) {
  console.log("minus");
  let qtyE = document.getElementById(`qty_${productId}`);
  let qty = parseInt(qtyE.innerText);
  if (qty > 1) {
    qty--;
    qtyE.innerText = qty;
    updateQtyinCart(productId, qty);
  }
  else if (qty === 1) {
    removeItemfromcart(productId);
    updateUi();
  }

}

function removeItemfromcart(productId) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === productId) {
      cart.splice(i, 1);
      break;
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateQtyinCart(productId, qty) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === productId) {
      cart[i].qty = qty;
      break;
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  calTotalPrice();
}

function calTotalPrice() {
  let totalprice = 0;
  for (let i = 0; i < cart.length; i++) {
    totalprice += cart[i].price * cart[i].qty;
  }
  document.getElementById("total").innerHTML = `total price : ${totalprice}`;
}


function updateUi() {
  if (cart.length > 0) {
    ui = '';
    cartui(cart);
  }
  else {
    renderEmptyCartUi();
  }
  document.querySelector(".row").innerHTML = ui;
  calTotalPrice();

}



