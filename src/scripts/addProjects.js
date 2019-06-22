const div = document.createElement("div");
const figure = document.createElement("figure");
const img = document.createElement("img");
const figcaption = document.createElement("figcaption");
const headline = document.createElement("h3");
const paragraph = document.createElement("p");
const anchor = document.createElement("a");
const icon = document.createElement("i");

import imageURL from "../images/employee-management-nodejs.JPG";

const myProjects = [
  {
    projectName: "Employee Management",
    projectText: "Written using NodeJS, Express, MongoDB",
    imgSource: imageURL,
    imgAlt: "employee-management-nodejs",
    iconTypes: {
      website: "globe",
      sourceCode: "git-branch"
    },
    links: {
      website: "https://floating-woodland-29394.herokuapp.com",
      sourceCode: "https://github.com/Alex-Samari/web322-app"
    }
  }
  // {
  //   projectName: 'Pet Shop',
  //   projectText: 'Written using HTML, CSS, JavaScript',
  //   imgSource: 'images/petshop.JPG',
  //   imgAlt: 'pet-shop',
  //   iconTypes: {
  //     website: null,
  //     sourceCode: 'git-branch'
  //   }
  // }
];

const projectElements = {
  project: null,
  figure: null,
  img: null,
  figcaption: null,
  figcaptionText: null,
  headline: null,
  paragraph: null,
  figcaptionLink: null,
  //   links: [{ anchor, icon }],
  links: [],
  overlay: null
};

let projectInfo = {
  projectName: null,
  projectText: null,
  imgSource: null,
  imgAlt: null
};

function setMultipleAttributes(elementType, attributes) {
  const element = document.createElement(elementType);
  for (let key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
  return element;
}

const generateProject = projectElements => {
  for (let i = 0; i < myProjects.length; i++) {
    projectElements.project = setMultipleAttributes("div", {
      class: "project"
    });
    projectElements.appendChild(projectElements.project);

    projectElements.figure = figure;
    projectElements.project.appendChild(projectElements.figure);

    projectElements.img = setMultipleAttributes("img", {
      src: myProjects[i].imgSource,
      alt: myProjects[i].imgAlt
    });
    projectElements.figure.appendChild(projectElements.img);

    projectElements.figcaption = figcaption;
    projectElements.figure.appendChild(projectElements.figcaption);

    projectElements.figcaptionText = setMultipleAttributes("div", {
      class: "figcaption-text"
    });

    projectElements.figcaption.appendChild(projectElements.figcaptionText);

    projectElements.headline = setMultipleAttributes("h", {
      class: "figcaption-headline"
    });
    projectInfo.projectName = document.createTextNode(
      myProjects[i].projectName
    );

    projectElements.headline.appendChild(projectInfo.projectName);

    projectElements.paragraph = setMultipleAttributes("p", {
      class: "figcaption-paragraph"
    });
    projectInfo.projectText = document.createTextNode(
      myProjects[i].projectText
    );
    projectElements.paragraph.appendChild(projectInfo.projectText);

    projectElements.figcaptionText.appendChild(projectElements.headline);
    projectElements.figcaptionText.appendChild(projectElements.paragraph);

    projectElements.figcaptionLink = setMultipleAttributes("div", {
      class: "figcaption-link"
    });
    projectElements.figcaption.appendChild(projectElements.figcaptionLink);

    for (let key in myProjects[i].iconTypes) {
      const newLink = setMultipleAttributes("a", {
        class: "button is-secondary is-outlined is-round is-medium",
        href: myProjects[i].links[key],
        target: "_blank"
      });

      const newLinkIcon = setMultipleAttributes("i", {
        class: "icon",
        "data-feather": myProjects[i].iconTypes[key]
      });
      //   projectElements.links.push({ newLink, newLinkIcon });

      projectElements.figcaptionLink.appendChild(newLink);
      newLink.appendChild(newLinkIcon);
    }

    projectElements.overlay = setMultipleAttributes("div", {
      class: "overlay"
    });
    projectElements.figure.appendChild(projectElements.overlay);
  }
};

export { generateProject };
