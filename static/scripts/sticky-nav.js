if (window.matchMedia("(min-width: 800px)").matches) {
  // wait for the window to load and identify dom elements
  window.onload = () => {
    // Get the navbar
    const navbar = document.getElementById("nav-bar");

    // Get the offset position of the navbar
    const sticky = navbar.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function addSticky() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    }

    // When the user scrolls the page, execute myFunction
    window.onscroll = function() {
      addSticky();
    };
  };
}
