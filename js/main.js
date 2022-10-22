/*MOSTRAR DROPDOWN EMAIL NAV*/

const navbarEmailClick = document.querySelector(".navbar-email").addEventListener("click", toggleDropdownMenu);
const navbarEmailOver = document.querySelector(".navbar-email").addEventListener("mouseover", toggleDropdownMenu);
const dropdownMenu = document.querySelector(".desktop-menu");


function toggleDropdownMenu() {
    const isAsideCartClosed = shoppingCartAside.classList.contains("inactive");
    const isProductDetailAsideClosed = productDetailAside.classList.contains("inactive");


    if (!isAsideCartClosed) {
        return shoppingCartAside.classList.add("inactive");
    } else if (!isProductDetailAsideClosed) {
        return productDetailAside.classList.add("inactive");
    } else {
        return dropdownMenu.classList.toggle("inactive");
    }
}


/*MOSTRAR BURGER MENU EN MOBILE*/
const burgerMenuClick = document.querySelector(".icon-menu").addEventListener("click", toggleMobileMenu);
const burgerMenuClickOver = document.querySelector(".icon-menu").addEventListener("mouseover", toggleMobileMenu);
const mobileMenu = document.querySelector(".mobile-menu");
const closeMobilemenuClick = document.querySelector(".close-mobilemenu").addEventListener("click", closeMobileMenu);
const closeMobilemenuOut = document.querySelector(".close-mobilemenu").addEventListener("mouseout", closeMobileMenu);


function toggleMobileMenu() {
    const isAsideCartClosed = shoppingCartAside.classList.contains("inactive");

    if (!isAsideCartClosed) {
        return shoppingCartAside.classList.add("inactive");
    } else {
        return mobileMenu.classList.toggle("inactive");
    }
}

function closeMobileMenu() {
    return mobileMenu.classList.add("inactive");
}

/*MOSTRAR MENU CARRITO */
const navbarShoppingCartClick = document.querySelector(".navbar-shopping-cart").addEventListener("click", toggleCartAside);
const navbarShoppingCartOver = document.querySelector(".navbar-shopping-cart").addEventListener("mouseover", toggleCartAside);
const shoppingCartAside = document.querySelector(".shopping-cart-aside");

function toggleCartAside() {
    dropdownMenu.classList.add("inactive");
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isProductDetailAsideClosed = productDetailAside.classList.contains("inactive");
    const isDropdownMenuClosed = dropdownMenu.classList.contains("inactive");


    if (!isMobileMenuClosed) {
        return mobileMenu.classList.add("inactive");
    } else if (!isProductDetailAsideClosed) {
        return productDetailAside.classList.add("inactive");
    } else if (!isDropdownMenuClosed) {
        return dropdownMenu.classList.add("inactive");
    } else {
        return shoppingCartAside.classList.toggle("inactive");
    }
}


/*Lista de productos: HTML a partir de arrays */
const cardsContainer = document.querySelector(".cards-container");
const productList = [];

productList.push({
    name: "Bici",
    price: 3500,
    image: "./assets/imgs/product-demo.jpg",
});

productList.push({
    name: "Laptop",
    price: 10500,
    image: "./assets/imgs/product-demo.jpg",
});

productList.push({
    name: "TV",
    price: 7500,
    image: "./assets/imgs/product-demo.jpg",
});

productList.push({
    name: "Play Station",
    price: 19000,
    image: "./assets/imgs/product-demo.jpg",
});

productList.push({
    name: "Mouse",
    price: 100,
    image: "./assets/imgs/product-demo.jpg",
});


function renderProducts(arr) {
    /*Recorremos el arreglo de la lista de productos*/
    for (product of arr) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const productImg = document.createElement("img");
        productImg.classList.add("product-img");
        //ProductImg es = a los producto de los arreglos
        productImg.setAttribute("src", product.image);
        productImg.addEventListener("click", openProductDetailAside);

        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        const productInfoDiv = document.createElement("div");
        const productPrice = document.createElement("p");
        productPrice.classList.add("product-price");
        productPrice.innerText = `$${product.price}`;

        productInfo.appendChild(productInfoDiv);


        const productTitle = document.createElement("p");
        productTitle.classList.add("product-title");
        productTitle.innerText = `${product.name}`;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productTitle);


        const productInfoFigure = document.createElement("figure");
        const productInfoIconCart = document.createElement("img");
        productInfoIconCart.setAttribute("src", "./assets/icons/bt_add_to_cart.svg");
        productInfoFigure.appendChild(productInfoIconCart);

        productInfo.appendChild(productInfoFigure);
        cardsContainer.appendChild(productCard);

    }
}

renderProducts(productList);


/*MOSTRAR PRODUCTO DETAIL */
const productDetailAside = document.querySelector(".product-detail");
const productDetailCloseIcon = document.querySelector(".product-detail-close").addEventListener("click", closeProductDetail);


function openProductDetailAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isAsideCartClosed = shoppingCartAside.classList.contains("inactive");
    const isDropdownEmailClosed = dropdownMenu.classList.contains("inactive");

    shoppingCartAside.classList.add("inactive");

    if (!isMobileMenuClosed) {
        return mobileMenu.classList.add("inactive");
    } else if (!isAsideCartClosed) {
        return shoppingCartAside.classList.add("inactive");
    } else if (!isDropdownEmailClosed) {
        return dropdownMenu.classList.add("inactive");
    } else {
        return productDetailAside.classList.remove("inactive");
    }

}

function closeProductDetail() {
    return productDetailAside.classList.add("inactive");
}