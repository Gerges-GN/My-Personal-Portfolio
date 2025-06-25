import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faCogs,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";

export const skills = [
  { name: "HTML5", icon: faHtml5 },
  { name: "CSS3", icon: faCss3Alt },
  { name: "JavaScript", icon: faJsSquare },
  { name: "React.js", icon: faReact },
  { name: "Context API", icon: faCogs },
  { name: "Git", icon: faGitAlt },
  { name: "Tailwind CSS", icon: faCode },
  { name: "Responsive Design", icon: faMobileScreenButton },
];

export const projects = [
  {
    title: "YouTube Clone",
    description: `Tech Stack: Vite, ReactJS, React Router, YouTube Data API v3 (via RapidAPI), Material UI (MUI)
    
    Built a fully functional YouTube Clone with: 
    - Video Search & Playback - Fetches data using YouTube Data API v3
    - React Router for Navigation - Seamless page transitions
    - Category-based Content - Dynamic video recommendations
    - Material UI - Clean and responsive UI`,
    src: "/yt-clone Mockup-low.jpg",
    liveURL: "https://yt-clone-six-mu.vercel.app",
  },
  {
    title: "Destiny - Modern Landing Page UI",
    description: `A modern and responsive landing page built using Bootstrap 5, HTML5, and CSS3. Designed to showcase a fictional service with a clean layout, animated elements, and smooth user experience. Integrated with AOS.js for scroll-triggered animations and Font Awesome for rich iconography.`,
    src: "/Destiny Website Mockup low.jpg",
    liveURL: "https://gerges-gn.github.io/Destiny/",
  },
  {
    title: "Responsive React Portfolio",
    description: `A clean, responsive portfolio website built with React.js and Tailwind CSS. It showcases projects, skills, and personal info in a modern layout optimized for both desktop and mobile devices. Features smooth scroll navigation, modular components, and a dark-themed UI with focus on accessibility and performance.`,
    src: "/Portfolio Mock-Up.jpg",
    liveURL: "https://responsive-react-portfolio.netlify.app",
  },
];
