import cart from "./cart.js";
import products from "./products.js";
let app = document.getElementById('app');
let temporaryContent = document.getElementById('temporaryContent');



// Template dosyası indirme
const loadTemplate = () => {
    fetch('temp.html')
    .then(response => response.text())
    .then(html => {
        app.innerHTML  = html;
        let contentTab = document.getElementById('contentTab');
        contentTab.innerHTML = temporaryContent.innerHTML;
        temporaryContent.innerHTML = null;
        cart();
        initApp();
    })
}
    loadTemplate();
    const initApp = () => {
        let listProduct = document.querySelector('.listProduct');
        listProduct.innerHTML = null;
        products.forEach(product =>{
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.innerHTML =
            `
            <a href="C:/Users/onurm/OneDrive/Masaüstü/cssbastan/uuur hoca/detail.html?id=${product.id}">
                <img src="${product.image}"/>
            </a>
                <h2>${product.name}</h2>
                <div class="price">$${product.price}</div>
                <button class="addCart"
                    data-id="${product.id}">
                    Add To Cart
                </button>
            `;
            listProduct.appendChild(newProduct);
        })
    }