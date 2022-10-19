/*MOSTRAR DROPDOWN EMAIL NAV*/

const navbarEmailClick = document.querySelector(".navbar-email").addEventListener("click", toggleDropdownMenu);
const navbarEmailOver = document.querySelector(".navbar-email").addEventListener("mouseover", toggleDropdownMenu);
const dropdownMenu = document.querySelector(".desktop-menu");

function toggleDropdownMenu() {
    return dropdownMenu.classList.toggle("inactive");
}