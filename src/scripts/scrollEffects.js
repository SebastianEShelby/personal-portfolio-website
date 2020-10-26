let navbar = null;
let navbarheight = null;
let scrollHeight = null;

const preventScrollOverFlow = () => {
  const navLinks = document.getElementsByClassName("nav-link");
  for (let i = 0; i < navLinks.length; i++) {
    if (navLinks[i].getAttribute("href") != "#home") {
      navLinks[i].addEventListener("click", e => {
        /* do not execute default action*/
        e.preventDefault();

        // dynamically determining the height of your navbar
        // console.log(navbar);
        navbar = document.getElementById("nav-bar-container");
        navbarheight = parseInt(window.getComputedStyle(navbar).height, 10);
        // show 50 pixels of previous section just for illustration purposes
        scrollHeight =
          document.querySelector(e.target.hash).offsetTop - navbarheight - 50;
        /* scrolling to the element taking the height of the static bar into account*/
        setTimeout(() => {
          window.scroll(0, scrollHeight);
        }, 0);
        /*properly updating the window location*/
        window.location.hash = e.target.hash;
      });
    }
  }
};

export { preventScrollOverFlow };
