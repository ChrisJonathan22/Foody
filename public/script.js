let navBar = document.getElementById('nav-bar');    // Access the element with an id of nav-bar.
let mobileButton = document.getElementsByClassName('mobile-button')[0];  // This is the mobile menu button.
let mobileMenu = document.getElementById('mobile-menu');    // This is the mobile menu. 
let timer = null;   // Create a variable and assign it to null;

window.addEventListener('scroll', () => {   // When a user scrolls the page do this.
    navBar.style.backgroundColor = "black"; // Change the background color of the navbar black.
    if(timer !== null) {    // If timer isn't equal to null do this.
        clearTimeout(timer);    // Clear the timeout.
    }
    timer = setTimeout(() => {  // Set up a timer which will be triggered after 250 ms / 0.25 sec.
        navBar.style.backgroundColor = "rgba(10, 10, 10, 0.3)"; // Once the timer is active change the navbar's background color to its original color.
    }, 250);
}, false);


mobileButton.addEventListener('click', (e) => {
   mobileMenu.classList.toggle('show');
   e.stopPropagation();
}, false);