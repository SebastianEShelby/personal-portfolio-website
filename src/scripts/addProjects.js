/**
 * This file is outdated. Archived in src for reference
 */
import empMangImgUrl from '../images/employee-management-nodejs.jpg';
import IAPImgUrl from '../images/iap-website.jpg';

const myProjects = [
  {
    projectName: 'Seneca International Student Application',
    projectText: 'Written using Angular, NodeJs',
    imgSource: IAPImgUrl,
    imgAlt: 'Seneca International Student Application',
    iconTypes: {
      website: 'globe',
      sourceCode: null
    },
    links: {
      website: 'https://intl.senecacollege.ca/'
    }
  },
  {
    projectName: 'Employee Management',
    projectText: 'Written using NodeJS, Express, MongoDB',
    imgSource: empMangImgUrl,
    imgAlt: 'Employee Management System',
    iconTypes: {
      website: 'globe',
      sourceCode: 'git-branch'
    },
    links: {
      website: 'https://employee-management-2019.herokuapp.com',
      sourceCode: 'https://github.com/Alex-Samari/web322-app'
    }
  }
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

const generateProject = () => {
  const projectItems = document.getElementById('project-items');

  for (let i = 0; i < myProjects.length; i++) {
    projectElements.project = setMultipleAttributes('div', {
      class: 'project'
    });
    projectItems.appendChild(projectElements.project);

    projectElements.figure = document.createElement('figure');
    projectElements.project.appendChild(projectElements.figure);

    projectElements.img = setMultipleAttributes('img', {
      src: myProjects[i].imgSource,
      alt: myProjects[i].imgAlt
    });
    projectElements.figure.appendChild(projectElements.img);

    projectElements.figcaption = document.createElement('figcaption');
    projectElements.figure.appendChild(projectElements.figcaption);

    projectElements.figcaptionText = setMultipleAttributes('div', {
      class: 'figcaption-text'
    });

    projectElements.figcaption.appendChild(projectElements.figcaptionText);

    projectElements.headline = setMultipleAttributes('h', {
      class: 'figcaption-headline'
    });
    projectInfo.projectName = document.createTextNode(
      myProjects[i].projectName
    );

    projectElements.headline.appendChild(projectInfo.projectName);

    projectElements.paragraph = setMultipleAttributes('p', {
      class: 'figcaption-paragraph'
    });
    projectInfo.projectText = document.createTextNode(
      myProjects[i].projectText
    );
    projectElements.paragraph.appendChild(projectInfo.projectText);

    projectElements.figcaptionText.appendChild(projectElements.headline);
    projectElements.figcaptionText.appendChild(projectElements.paragraph);

    projectElements.figcaptionLink = setMultipleAttributes('div', {
      class: 'figcaption-link'
    });
    projectElements.figcaption.appendChild(projectElements.figcaptionLink);

    Object.entries(myProjects[i].iconTypes).forEach(icon => {
      const key = icon[0];
      const value = icon[1];
      if (value) {
        const newLink = setMultipleAttributes('a', {
          class: 'button is-secondary is-outlined is-round is-large ',
          href: myProjects[i].links[key],
          target: '_blank'
        });

        const newLinkIcon = setMultipleAttributes('i', {
          class: 'icon',
          'data-feather': myProjects[i].iconTypes[key]
        });
        //   projectElements.links.push({ newLink, newLinkIcon });

        projectElements.figcaptionLink.appendChild(newLink);
        newLink.appendChild(newLinkIcon);
      }
    });

    // for (let key in myProjects[i].iconTypes) {
    //   if (key.valueOf(!null)) {

    //   }
    // }

    projectElements.overlay = setMultipleAttributes('div', {
      class: 'overlay'
    });
    projectElements.figure.appendChild(projectElements.overlay);
  }
};

export { generateProject };
