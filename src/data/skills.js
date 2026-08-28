import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaJava, 
  FaPython, 
  FaGitAlt, 
  FaGithub,
  FaNodeJs,
  FaBootstrap,
  FaFigma,
  FaDatabase,
  FaRobot
} from 'react-icons/fa';
import { 
  SiExpress, 
  SiDjango, 
  SiMongodb, 
  SiMysql, 
  SiSqlite,
  SiEclipseide,
  SiPostman
} from 'react-icons/si';
import { TbBrandVscode, TbBrandOpenai } from 'react-icons/tb';

export const skillCategories = [
  {
    id: 'programming',
    title: 'Programming Languages',
    description: 'Core logic building, object-oriented software engineering, and script development.',
    skills: [
      { name: 'Java', icon: FaJava, color: '#007396', level: 'Advanced' },
      { name: 'Python', icon: FaPython, color: '#3776AB', level: 'Intermediate' },
      { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', level: 'Intermediate' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Creating user interfaces, responsive layouts, and modern web apps.',
    skills: [
      { name: 'HTML5', icon: FaHtml5, color: '#E34F26', level: 'Advanced' },
      { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', level: 'Advanced' },
      { name: 'Bootstrap', icon: FaBootstrap, color: '#7952B3', level: 'Advanced' },
      { name: 'React.js', icon: FaReact, color: '#61DAFB', level: 'Intermediate' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'RESTful API building, server frameworks, and backend business logic.',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, color: '#339933', level: 'Intermediate' },
      { name: 'Express.js', icon: SiExpress, color: '#ffffff', level: 'Intermediate' },
      { name: 'Django', icon: SiDjango, color: '#092E20', level: 'Intermediate' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases & Storage',
    description: 'Relational data modeling, NoSQL document stores, and SQL querying.',
    skills: [
      { name: 'MySQL', icon: SiMysql, color: '#4479A1', level: 'Intermediate' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 'Intermediate' },
      { name: 'SQLite', icon: SiSqlite, color: '#003B57', level: 'Intermediate' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools, APIs & AI Tools',
    description: 'Version control, API testing, IDEs, and AI developer platforms.',
    skills: [
      { name: 'Postman', icon: SiPostman, color: '#FF6C37', level: 'API Testing' },
      { name: 'ChatGPT', icon: TbBrandOpenai, color: '#10A37F', level: 'AI Developer' },
      { name: 'Antigravity', icon: FaRobot, color: '#A855F7', level: 'AI Agent' },
      { name: 'Git', icon: FaGitAlt, color: '#F05032', level: 'Intermediate' },
      { name: 'GitHub', icon: FaGithub, color: '#ffffff', level: 'Intermediate' },
      { name: 'VS Code', icon: TbBrandVscode, color: '#007ACC', level: 'Advanced' },
      { name: 'Eclipse', icon: SiEclipseide, color: '#2C2255', level: 'Intermediate' },
      { name: 'Figma', icon: FaFigma, color: '#F24E1E', level: 'UI Design' },
    ],
  },
];

export const professionalSkills = [
  'Problem Solving',
  'Team Collaboration',
  'Communication',
  'Time Management',
  'Quick Learning'
];

export const languagesSpoken = [
  'English',
  'Marathi',
  'Hindi'
];
