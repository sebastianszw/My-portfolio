/*Navbar background scroll*/
const nav = document.querySelector('nav');
window.addEventListener('scroll', function () {
    const offset = window.pageYOffset;
    if (offset > 10)
        nav.classList.add('scroll')
    else
        nav.classList.remove('scroll')
});

/*freeze scroll*/
const timeout = setTimeout(enableScroll, 2000)
function enableScroll() {
    const scroll = document.querySelector("body");
    scroll.classList.add("scrollEnable")
}

/*Nav logo*/
gsap.fromTo(".logo",
    { top: '50vh', height: 100 }, { top: 0, height: 40, duration: 1 }
).delay(1);

/*Main content*/
gsap.fromTo("header",
    { opacity: 0 }, { opacity: 1 }
).delay(1.1);

/*Header text*/
gsap.fromTo(".headerText",
    { top: 500, opacity: 0 }, { top: 0, opacity: 1 }
).delay(1.4);

gsap.fromTo(".headerIcon",
    { opacity: 0 }, { opacity: 1 }
).delay(1.6);

/*Projects container*/
gsap.fromTo(".portfolioContainer", { opacity: 0, y: 100 }, {
    scrollTrigger: ".portfolioContainer",
    opacity: 1,
    y: 0,
    delay: 1,
    ease: Power0.easeNone
});

gsap.fromTo(".projectsContainer", { opacity: 0, y: 100 }, {
    scrollTrigger: ".portfolioContainer",
    opacity: 1,
    y: 0,
    delay: 1,
    ease: Power0.easeNone
});

/*Footer*/
gsap.fromTo("footer", { opacity: 0, y: 100 }, {
    scrollTrigger: "footer",
    opacity: 1,
    y: 0,
    delay: 1,
    ease: Power0.easeNone
});