let navbar = null;
let sticky = null;

const handleNavBar = () => {
  if (window.matchMedia('(min-width: 1000px)').matches) {
    // Get the navbar
    navbar = document.getElementById('nav-bar');
    // Get the offset position of the navbar
    sticky = navbar.offsetTop;
    // Call the sticky function on window load
    toggleSticky();

    // When the user scrolls the page, execute myFunction
    window.onscroll = () => {
      toggleSticky();
    };
  }
};

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
const toggleSticky = () => {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
};

export { handleNavBar };
