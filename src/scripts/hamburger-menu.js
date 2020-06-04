const handleHamburgerMenu = () => {
	// Check for hamburger menu existense
	if (!window.matchMedia("(min-width: 1000px)").matches) {
		// Get all the anchor menues
		document.querySelectorAll('a.nav-link').forEach(navLink => {
			navLink.addEventListener('click', event => {
				document.getElementById('nav-toggle').checked = false;
			})
		})
	}
};

export { handleHamburgerMenu };