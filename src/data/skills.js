import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaJava, 
  FaPython, 
  FaGitAlt, 
  FaGithub
} from 'react-icons/fa';
import { TbBrandVscode } from 'react-icons/tb';

export const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Building responsive, modern, and interactive user interfaces.',
    skills: [
      { name: 'HTML5', icon: FaHtml5, color: '#E34F26', level: 'Advanced' },
      { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', level: 'Advanced' },
      { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', level: 'Intermediate' },
      { name: 'React.js', icon: FaReact, color: '#61DAFB', level: 'Intermediate' },
    ],
  },
  {
    id: 'programming',
    title: 'Programming Languages',
    description: 'Core logic design, data structure implementations, and problem solving.',
    skills: [
      { name: 'Java', icon: FaJava, color: '#007396', level: 'Intermediate' },
      { name: 'Python', icon: FaPython, color: '#3776AB', level: 'Intermediate' },
    ],
  },
  {
    id: 'tools',
    title: 'Developer Tools',
    description: 'Version control, editor extensions, and collaboration workflows.',
    skills: [
      { name: 'Git', icon: FaGitAlt, color: '#F05032', level: 'Intermediate' },
      { name: 'GitHub', icon: FaGithub, color: '#ffffff', level: 'Intermediate' },
      { name: 'VS Code', icon: TbBrandVscode, color: '#007ACC', level: 'Advanced' },
    ],
  },
];
