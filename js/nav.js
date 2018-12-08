const navToggle = document.querySelector(".menu-button");
const nav = document.querySelector('nav');

navToggle.addEventListener('click',function kit() {
    document.body.classList.toggle("nav_is_open")

});
nav.addEventListener('click', _ => {
    document.body.classList.remove("nav_is_open")
});