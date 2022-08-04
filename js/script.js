const timeout = setTimeout(enableScroll, 2000)
function enableScroll() {
    const scroll = document.querySelector("body");
    scroll.classList.add("scrollEnable")
}

/*Nav logo*/
gsap.fromTo(".logo",
    { top: 500, height: 100 }, { top: 0, height: 40, duration: 1 }
).delay(1);

/*Main content*/
gsap.fromTo(".content",
    { opacity: 0 }, { opacity: 1 }
).delay(1.1);

/*Header text*/
gsap.fromTo(".headerText",
    { top: 500, opacity: 0 }, { top: 0, opacity: 1 }
).delay(1.4);

gsap.fromTo(".headerIcon",
    { opacity: 0 }, { opacity: 1 }
).delay(1.6);