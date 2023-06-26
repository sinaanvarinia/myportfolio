import {
  bamilo,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  kosar,
  jobit,
  tripguide,
  threejs,
  vesta,
  kosarweb,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Fast Learner",
    icon: mobile,
  },
  {
    title: "Reliable",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Bamilo",
    icon: bamilo,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing web pages using html,css,javascript and other related technologies.",
      "Collaborating with team members including designers, product managers, and other developers to create high-quality products.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Simaye Hooshmand Vesta",
    icon: vesta,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing SPA using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Kowsar Investment Group",
    icon: kosar,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Sina proved me wrong.",
    name: "Pouria",
    designation: "CEO ",
    company: " Foulad Gostar Kowsar Iran ",
    image: "https://fgkinv.com/images/personel/pouria.jpeg",
  },
  {
    testimonial:
      "I've never met a frontend developer who truly cares about their clients' success like Sina does.",
    name: "Kousha ghodsizad",
    designation: "Backend developer ",
    company: " Stuocu Netherland",
    image:
      "https://media.licdn.com/dms/image/D4E03AQFB8MRS8laEHA/profile-displayphoto-shrink_400_400/0/1680952713509?e=1693440000&v=beta&t=rRoLsBUM266E7_W45MYkyp3d-msvdU-xba7icnbtE9I",
  },
  {
    testimonial:
      " Sina is a hardworking team member who has no feer in learning new technologies!",
    name: "Hesam Sadri",
    designation: " Data scientist ",
    company: " SchoolsFirst california",
    image:
      "https://media.licdn.com/dms/image/C5603AQEimwOm1YRMHQ/profile-displayphoto-shrink_100_100/0/1654579020179?e=1693440000&v=beta&t=SshAGiP9nZFWy2ah_0Ay8qjv37fjdBdYfUlPJ4Uz_Q0",
  },
];

const projects = [
  {
    name: "Mining Company",
    description:
      "Web-based platform that allows users to become familiar with the products of the Holding and contact with the company.",
    tags: [
      {
        name: "HTML,CSS",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: kosarweb,
    source_code_link: "https://fgkinv.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];
export { services, technologies, experiences, testimonials, projects };
