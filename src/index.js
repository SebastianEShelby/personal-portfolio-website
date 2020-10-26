import { handleNavBar } from './scripts/sticky-nav';
import './scss/styles.scss';
import { preventScrollOverFlow } from './scripts/scrollEffects';
import { handleHamburgerMenu } from './scripts/hamburger-menu';

export let isMobile = true;
let IsHandleHamburgerMenuCalled = false;

// wait for the window to load and identify dom elements
window.onload = () => {

  checkScreenSize();

  // function replaces feather icon tags with svg images
  feather.replace();
  handleNavBar();
  preventScrollOverFlow();

  if (isMobile) {
    handleHamburgerMenu();
    IsHandleHamburgerMenuCalled = true;
  }
};

window.onresize = () => {
  checkScreenSize();
  if (isMobile && !IsHandleHamburgerMenuCalled) {
    handleHamburgerMenu();
    IsHandleHamburgerMenuCalled = true;
  }
}

/**
* Function checks for screen size
* Make sure this width matches the media query in responcive.scss
*/
const checkScreenSize = () => {
  if (window.matchMedia("(min-width: 1000px)").matches) {
    isMobile = false;
  } else {
    isMobile = true;
    console.warn('small screen triggered');
  }
}


