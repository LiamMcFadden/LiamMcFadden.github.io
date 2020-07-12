// get screen height
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

// for when the window is resized
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// sticky nav bar
window.onscroll = function() {stick()};
var nav = document.getElementById("nav");
var navLinks = nav.getElementsByTagName("A");
var navListItems = nav.getElementsByTagName("LI");
// variable for page offset that the nav becomes sticky
var whenToStick = 400;

// style changes and sticking
function stick() {
    if (window.pageYOffset >= whenToStick) {
        nav.classList.add("sticky");
        for (i = 0; i < navListItems.length; i++) {
            navLinks[i].style.color = 'white';
            navListItems[i].style.padding = '1vw';
        }
    }
    else {
        nav.classList.remove("sticky")
        for (i = 0; i < navLinks.length; i++) {
            navLinks[i].style.color = 'grey';
            navListItems[i].style.padding = '2.5vw';
        }
    }
}


