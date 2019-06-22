// import fs from 'fs'
import { handleNavBar } from "./scripts/sticky-nav";
import { generateProject } from "./scripts/addProjects";
import "./scss/styles.scss";

// wait for the window to load and identify dom elements
window.onload = () => {
  handleNavBar();

  const projectElements = document.getElementById("project-items");
  generateProject(projectElements);
  // make sure to call this function at the end to replace feather icons with svg images
  feather.replace();
};
