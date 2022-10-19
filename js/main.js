/*MOSTRAR DROPDOWN EMAIL NAV*/

const navbarEmailClick = document.querySelector(".navbar-email").addEventListener("click", toggleDropdownMenu);
const navbarEmailOver = document.querySelector(".navbar-email").addEventListener("mouseover", toggleDropdownMenu);
const dropdownMenu = document.querySelector(".desktop-menu");


function toggleDropdownMenu() {
    return dropdownMenu.classList.toggle("inactive");
}


/*MOSTRAR BURGER MENU EN MOBILE*/
const burgerMenuClick = document.querySelector(".icon-menu").addEventListener("click", toggleMobileMenu);
const burgerMenuClickOver = document.querySelector(".icon-menu").addEventListener("mouseover", toggleMobileMenu);
const mobileMenu = document.querySelector(".mobile-menu");
const closeMobilemenuClick = document.querySelector(".close-mobilemenu").addEventListener("click", closeMobileMenu);
const closeMobilemenuOut = document.querySelector(".close-mobilemenu").addEventListener("mouseout", closeMobileMenu);


function toggleMobileMenu() {
    return mobileMenu.classList.toggle("inactive");
}

function closeMobileMenu() {
    return mobileMenu.classList.add("inactive");
}