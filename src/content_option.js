import backGroundImage from './assets/images/atari-2600-1548365_1920.jpg'
import theWorstAssasin from './assets/images/TheWorstAssasin.png'
import carCircuitAndRocks from './assets/images/CarCircuit.png'
import thePunkerScape from './assets/images/ThepunkerScape.png'
import astroBabaProject from './assets/images/AstroBabaProject.png'
import getAnimalsDrunk from './assets/images/CoverGetDrunksAnimals.png'
import whackAFood from './assets/images/WhackAFood.png'
import dancingChickens from './assets/images/CountingPrototype.png'
const logotext = "JORGE";
const meta = {
  title: "Jorge Navarro",
  description:
    "I’m Jorge Navarro Unity Developer, Gameplay Developer, currently working in Sincelejo",
};

const introdata = {
  title: "I’m Jorge Navarro",
  animated: {
    first: "I love coding",
    second: "I create a cool videogames",
    third: "I'm a gameplay developer",
  },
  description:
    "Hello i'm Unity Developer, i currently work as gameplay programmer. If you want to see my portfolio you can click on the button below.",
  your_img_url: `${backGroundImage}`,
};

const dataabout = {
  title: "abit about my self",
  aboutme:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla. Nunc non commodo dolor. Nunc mollis dignissim facilisis. Morbi ut magna ultricies.",
};
const worktimeline = [
  {
    jobtitle: "Designer of week",
    where: "YAdfi",
    date: "2020",
  },
  {
    jobtitle: "Designer of week",
    where: "Jamalya",
    date: "2019",
  },
  {
    jobtitle: "Designer of week",
    where: "ALquds",
    date: "2019",
  },
];

const skills = [
  {
    name: "Python",
    value: 90,
  },
  {
    name: "Djano",
    value: 85,
  },
  {
    name: "Javascript",
    value: 80,
  },
  {
    name: "React",
    value: 60,
  },
  {
    name: "Jquery",
    value: 85,
  },
];

const services = [
  {
    title: "UI & UX Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
  {
    title: "Mobile Apps",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
  {
    title: "Wordpress Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
];

const dataportfolio = [
  {
    img: `${astroBabaProject}`,
    title: "AstroBaba Project",
    role:"Roles: Gameplay developer - Level designer/Programmer ",
    description: "This game is the result of participation in the GameJam organized by Generation Colombia, where a functional video game was created in 72 hours.",
    link: "https://stevens1707.itch.io/astrobaba",
  },
  {
    img: `${carCircuitAndRocks}`,
    title: "Car Circuit and Rocks",
    role:"Roles: Gameplay developer - Level designer/Programmer ",
    description: "A single-level game, you can have fun avoiding all the obstacles on the track, collecting coins along the way, try to reach the finish line before time runs out, good luck.",
    link: "https://jorgnavarrogamedeveloper.itch.io/car-circuit-and-rocks",
  },
  {
    img: `${theWorstAssasin}`,
    title: "The worst assassin",
    role:"Roles: Gameplay developer - Level designer/Programmer ",
    description: "This game is the result of participation in the GameJam organized by Generation Colombia, where a functional video game was created in 24 hours.",
    link: "https://sofiarizap.itch.io/the-worst-assassin",
  },
  {
    img: `${whackAFood}`,
    title: "Whack a food",
    role:"Roles: Gameplay developer - Level designer/Programmer ",
    description: "In this game, you can select the difficulty, try to destroy the food and avoid the skeleton faces to score points.",
    link: "https://jorgnavarrogamedeveloper.itch.io/whack-a-food",
  },
  {
    img: `${dancingChickens}`,
    title: "Dancing chickens",
    role:"Roles: Gameplay developer - Level designer/Programmer ",
    description: "This fun game tests concepts like Object Pooling, we must prevent the eggs from falling to the floor to avoid losing.",
    link: "https://sofiarizap.itch.io/the-worst-assassin",
  },
  {
    img: `${getAnimalsDrunk}`,
    title: "Get the Animals drunk",
    role:"Roles: Gameplay developer - Level designer/Programmer ",
    description: "In this game you prevent the animals from reaching your position, you must feed them with wine bottles to stay in the game.",
    link: "https://jorgnavarrogamedeveloper.itch.io/get-the-animals-drunk",
  },
];

const contactConfig = {
  YOUR_EMAIL: "jorgluisnavarro@gmail.com",
  //YOUR_FONE: "(555)123-4567",
  description:
    "I am very passionate about developing video games, if you are interested in my work, do not hesitate to contact me, I would like to create interactive and immersive experiences with you.",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_6fy7tb7",
  YOUR_TEMPLATE_ID: "template_wik2p4q",
};

const socialprofils = {
  github: "https://github.com/Jorgnavarro",
  linkedin: "https://www.linkedin.com/in/jorge-navarro-unity-developer/",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
