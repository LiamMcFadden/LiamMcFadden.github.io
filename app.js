// get screen height
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

// for when the window is resized
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

window.addEventListener('scroll',  () => {
    if (scrollY > 500) {
        document.documentElement.style.setProperty
    }
});