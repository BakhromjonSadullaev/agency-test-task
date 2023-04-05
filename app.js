import { products } from "./utils/data.js";

const burgerMenu = document.querySelector(".burger_menu");
const mobileLink = document.querySelector(".mobile_link");
const productContainer = document.querySelector(".product_container");

burgerMenu.addEventListener("click", () => {
  mobileLink.classList.toggle("showNav");
});

products.forEach(({ id, img, name, price }) => {
  const product = document.createElement("article");
  product.className = "product";
  product.setAttribute("key", id);
  product.innerHTML = `
    <span>Free Shipping</span>
          <img src=${img} alt="" />
          <div class="product_info">
            <h1>${name}</h1>
            <p>&#9733; &#9733; &#9733; &#9733; &#9733;</p>
            <p>$ ${price}</p>
          </div>
  `;
  productContainer.append(product);
});
