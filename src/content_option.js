import backGroundImage from './assets/images/atari-2600-1548365_1920.jpg'
import theWorstAssasin from './assets/images/TheWorstAssasin.png'
import carCircuitAndRocks from './assets/images/CarCircuit.png'
import thePunkerScape from './assets/images/ThepunkerScape.png'
import miniSoccer from './assets/images/MiniSoccer fullscreen.png'
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
    "Hello i'm Unity Developer, i currently work as gameplay programmer",
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
    img: `${theWorstAssasin}`,
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: `${carCircuitAndRocks}`,
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: `${thePunkerScape}`,
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: `${thePunkerScape}`,
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: `${thePunkerScape}`,
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: `${miniSoccer}`,
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
];

const contactConfig = {
  YOUR_EMAIL: "name@domain.com",
  YOUR_FONE: "(555)123-4567",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_id",
  YOUR_TEMPLATE_ID: "template_id",
  YOUR_USER_ID: "user_id",
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
