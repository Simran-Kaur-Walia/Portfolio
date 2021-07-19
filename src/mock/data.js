import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Simran Kaur',
  subtitle: 'I\'m a developer',
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'savsim.png',
  paragraphOne: 'I am a passionate coder with a keen eye for design, structure, logic and implementation of evergrowing web and software technologies',
  paragraphTwo: 'Initiating my coding journey with C++, I developed immense interest and passion for digging deeper in programming, strategic thinking and creative forces that merge this world of computers with our world like magic.With emerging technologies I have learned, developed and worked with web technologies like HTML, CSS, JavaScript, React.js and gained project-based expertise in developing Android and Ios applications using Flutter and Dart.',
  paragraphThree: 'Creativity, Imagination, Organization, Planning, Adaptability and Communication both with the inner world of my mind and soul and with people  are the key aspects that comprise me.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Snake.png',
    title: 'SnakeZones',
    info: 'A web game application developed using Javascript, HTML and CSS',
    info2: 'The game consists of two visual tiles that tend to act as key points of the game. The main tile or Snake increases in length on interaction and so does the Score! Light, Dark, Matrix and other themes make this game interesting and fun to play!',
    url: 'https://simran-kaur-walia.github.io/SnakeZones/',
    repo: 'https://github.com/Simran-Kaur-Walia/SnakeZones', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'quizapp.png',
    title: 'Flutter Quiz App',
    info: 'A mobile application for Android and ios built using Flutter and Dart.',
    info2: 'This quiz application consists of two main screens that display questions and the Restart option at the end of the last question. The user can choose from four options and score is calculated internally according to the option chosen. The app gives a remark on completion of quiz calculated based on score and options chosen.',
    url: '',
    repo: 'https://github.com/Simran-Kaur-Walia/FlutterQuizApp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'todo.png',
    title: 'TaskOn Web App',
    info: 'A To-Do list application developed using JavaScript, Css and Html',
    info2: 'This web application allows users to create a task list using the add button on the screen and an option to clear or delete after the task has been completed.',
    url: 'https://simran-kaur-walia.github.io/TaskOn-App/',
    repo: 'https://github.com/Simran-Kaur-Walia/TaskOn-App', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Let\'s get in contact! E-mail me by clicking on the button below!',
  btn: '',
  email: 'simrankaurwalia.o1@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/simran-kaur-523677217/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Simran-Kaur-Walia',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
