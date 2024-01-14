function Hamburgerflip() {
    var Hamburger = document.getElementsByClassName("header__menu");
    var overlay = document.getElementsByClassName("overlay")
    
    // Assuming you want to toggle the class on the first element with the class "header__menu"
    if (Hamburger.length > 0 && overlay.length > 0) {
        Hamburger[0].classList.toggle("open");
        overlay[0].classList.toggle("openMenu");
        console.log('You stink of chips');
    } else {
        console.error('No element with the class "header__menu" found');
    }
}