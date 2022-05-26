/*
    Ross Robino
    Personal Website
    linked to index.html
*/

/* header animation */
window.addEventListener("scroll", function() {
    const distance = window.scrollY;
    document.querySelector("header").style.transform = `translateY(${distance * 0.5}px)`;
});