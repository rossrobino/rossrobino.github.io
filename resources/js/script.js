/*
    Ross Robino
    Personal Website
    linked to index.html
*/

/* header animation */
window.addEventListener("scroll", function() {
    const distance = window.scrollY;
    document.querySelector("header").style.transform = `translateY(${distance * 0.5}px)`;
    if (distance < 250) {
        document.querySelector("h1").style.fontSize = `${32 + (distance * window.innerWidth/3000)}px`;
    } else {
        document.querySelector("h1").style.fontSize = `${32 + (250 * window.innerWidth/3000)}px`;
    }
});