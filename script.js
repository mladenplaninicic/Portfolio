document.body.addEventListener('wheel', (event) => {
    if (event.deltaY < 0) {
        document.querySelector("header").style.top = "0";
    } else if (event.deltaY > 0) {
        document.querySelector("header").style.top = "-100px";
    }
});

let ul = document.querySelector('.header-navigation-nav-links');

document.getElementById('check').addEventListener('click', () => {
    ul.classList.toggle('active');
});