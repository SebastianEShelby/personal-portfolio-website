import { isMobile } from '../index';

/**
 * Funcrtion handles hamburger menu interactions on mobile/small screen devices
 */
const handleHamburgerMenu = () => {

	const navBar = document.getElementById('nav-bar');
	const navLinks = navBar.querySelectorAll('.nav-link');

	// toggle hamburger menue when the hamburger icon is clicked
	document.querySelector('#nav-toggle').addEventListener('click', event => {
		toggleHamburgerMenu();
	})

	// select all the elements that will
	const navToggleElements = document.querySelectorAll('.nav-link, .main-logo');

	navToggleElements.forEach(element => {
		element.addEventListener('click', event => {
			toggleHamburgerMenu(true);
		})
	})
	const toggleHamburgerMenu = (closeOnly = false) => {
		let newOpacity = 0;
		if (!closeOnly) {
			if (navBar.style.transform === 'scale(1, 1)') {
				newOpacity = 0;
			}
			else {
				newOpacity = 1;
			}
		}
		console.log('newOpacity', newOpacity)
		navBar.style.transform = `scale(1, ${newOpacity})`;

		navLinks.forEach(element => {
			element.style.opacity = newOpacity;
			element.style.transition = 'opacity 250ms ease-in-out 50ms';
		})
	}
};





export { handleHamburgerMenu };