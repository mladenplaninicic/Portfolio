document.body.addEventListener('wheel', (event) => {
    if (event.deltaY < 0) {
        document.querySelector("header").style.top = "0";
    } else if (event.deltaY > 0) {
        document.querySelector("header").style.top = "-100px";
    }
})