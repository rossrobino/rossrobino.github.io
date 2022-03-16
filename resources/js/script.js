/*
    Ross Robino
    Personal Website
    linked to index.html
*/

/* header animation */
window.addEventListener("scroll", function() {
    const distance = window.scrollY;
    document.querySelector("header").style.transform = `translateY(${distance * 0.5}px)`;
    if (distance < 720) {
        document.querySelector("h1").style.fontSize = `${distance * window.innerWidth/8000}px`;
        document.querySelector("h1").style.transform = `rotate(${distance * 0.5}deg)`;
    } else {
        document.querySelector("h1").style.fontSize = `${0.09 * window.innerWidth}px`;
        document.querySelector("h1").style.transform = 'rotate(0deg)';
    }
  });

$("header").click(function(){
    window.scrollTo({
        top: 1100,
        behavior: 'smooth'
    });
});