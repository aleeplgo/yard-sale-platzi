/*MOSTRAR DROPDOWN EMAIL NAV*/

const navbarEmailClick = document.querySelector(".navbar-email").addEventListener("click", toggleDropdownMenu);
const navbarEmailOver = document.querySelector(".navbar-email").addEventListener("mouseover", toggleDropdownMenu);
const dropdownMenu = document.querySelector(".desktop-menu");


function toggleDropdownMenu() {
    const isAsideCartClosed = shoppingCartAside.classList.contains("inactive");

    if (!isAsideCartClosed) {
        return shoppingCartAside.classList.add("inactive");
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
        return shoppingCartAside.classList.add("inactive");
    } else if (!isDropdownMenuClosed) {
        return dropdownMenu.classList.add("inactive");
    } else {
        return shoppingCartAside.classList.toggle("inactive");
    }
}

/*MOSTRAR PRODUCTO DETAIL */
const productCard = document.querySelector(".product-card").addEventListener("click", toggleProductDetail);
const productDetailAside = document.querySelector(".product-detail");
const iconProductDetailClosed = document.querySelector(".product-detail-close").addEventListener("click", closeProductDetail);


function toggleProductDetail() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isAsideCartClosed = shoppingCartAside.classList.contains("inactive");
    const isDropdownEmailClosed = dropdownMenu.classList.contains("inactive");

    if (!isMobileMenuClosed) {
        return mobileMenu.classList.add("inactive");
    } else if (!isAsideCartClosed) {
        return shoppingCartAside.classList.add("inactive");
    } else if (!isDropdownEmailClosed) {
        return dropdownMenu.classList.add("inactive");
    } else {
        return productDetailAside.classList.toggle("inactive");
    }

}

function closeProductDetail() {
    return productDetailAside.classList.add("inactive");
}