// let ui = (product) => {
//     console.log(product);
//     product.map((e) => {
//         let img = document.createElement("img");
//         img.src = e.img;
//         img.setAttribute("class", "recommed-img-box")
//         let name = document.createElement("h3");
//         name.innerHTML = e.title;
//         name.setAttribute("class", "card-title font-20 fw-bold mt-4")
//         let desc = document.createElement("p");
//         desc.innerHTML = e.description;
//         desc.setAttribute("class", "")
//         let price = document.createElement("h2");
//         price.innerHTML = e.price;
//         let div = document.createElement("div");

//         let btn = document.createElement("button");
//         btn.innerHTML = "Add Item";
//         btn.addEventListener("click", () => {
//             let cart = JSON.parse(localStorage.getItem("cart")) || [];
//             let exsiting = false;
//             cart.map((item, idx) => {
//                 if (item.id == e.id) {
//                     exsiting = true;
//                     cart[idx].qty += 1;
//                 }
//             });
//             if (!exsiting) {
//                 cart.push({ ...e, qty: 1 });
//                 alert("product has been added successfully");
//             }
//             localStorage.setItem("cart", JSON.stringify(cart));
//         });

//         btn.setAttribute("class", "btn btn-primary")

//         div.append(img, name, desc, price, btn);
//         div.setAttribute("class", "product-box");
//         let div2 = document.createElement("div");
//         div2.append(div);
//         div2.setAttribute("class", "product");
//         document.querySelector(".box-2").appendChild(div2);
//     });
// };



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
                    <button class="btn btn-primary me-1" onclick="plus()">+</button>
                    <span class="fs-3" id="qty">${product.qty}</span><button class="btn btn-primary ms-2" onclick="minus()">-</button>
                    </div>
                    </div>
                    
                </div>
              </div>
              <div class="hstack">
                <h2 class="font-20 fw-bold pt-3">${product.price}</h2>
              </div>
              </div>`
  })
}

let totalprice = 0;
for (let i = 0; i < cart.length; i++) {
  totalprice += cart[i].price * cart[i].qty;
}
cartui(cart);
document.querySelector(".row").innerHTML = ui;



document.getElementById("total").innerHTML = `total price : ${totalprice}`;