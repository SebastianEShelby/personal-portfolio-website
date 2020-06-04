import { handleNavBar } from './scripts/sticky-nav';
import './scss/styles.scss';
import { preventScrollOverFlow } from './scripts/scrollEffects';

// wait for the window to load and identify dom elements
window.onload = () => {
  // make sure to call this function at the end to replace feather icons with svg images
  feather.replace();
  handleNavBar();
  preventScrollOverFlow();
};
