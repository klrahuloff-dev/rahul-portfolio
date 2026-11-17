import { FaCode,  FaMicrochip,  FaReact, FaSchool,FaDatabase } from 'react-icons/fa6'
import { MdBuild } from 'react-icons/md'
import { FaProjectDiagram } from 'react-icons/fa'
import cardimage1 from "../assets/cardimage1.png"
import cardimage2 from "../assets/cardimage2.png"
import cardimage3 from "../assets/cardimage3.png"





export const navMenu = ['Home', 'Work', 'Skills', 'About', 'Contact']


export const skillsData = [
    {
        icon: FaMicrochip,
        title: 'Backend',
        technologies: ['Express Js','Node Js']
    },
    {
        icon: FaReact,
        title: 'Frontend',
        technologies: ['Html', 'Css', 'Tailwindcss', 'React Js']
    },
    {
        icon: FaCode,
        title: 'Language',
        technologies: ['Core Java', 'JavaScript(Es+6)']
    },
    {
        icon: MdBuild,
        title: 'Tools',
        technologies: [ 'Git', 'Github', 'VS Code','PostMan']
    },
    {
        icon: FaDatabase,
        title: 'DataBase',
        technologies: ['MongoDB', 'Mongoose']
    },
]



export const projectData = [
    {
        title: 'Menz World',
        description: "Designed and developed a responsive men's fashion e-commerce website featuring product showcases, category navigation, search functionality, and a modern shopping interface.",
        image: cardimage2,
        tech: ['Html', 'Tailwindcss']
    },
    {
        title: 'Quantavise Solutions',
        description: 'Developed a modern corporate website for Quantavise Solutions, showcasing its SAP-based business solutions, Variant Configuration services, and Generative AI capabilities through a responsive and user-friendly interface',
        image: cardimage1,
        tech: ['Html', 'Tailwindcss', 'React']
    },
    {
        title: 'Portfolio',
        description: 'Designed and developed a personal portfolio website to showcase my skills, projects, and experience, featuring a modern UI, responsive design, and smooth navigation across all devices.',
        image: cardimage3,
        tech: ['Html', 'Tailwindcss', 'React']
    },
]

export const profileData = [
    {
        icon: FaCode,
        title: 'Language',
        technologies: ['Core Java', 'JavaScript(Es+6)']
    },
    {
        icon: FaSchool,
        title: 'Education',
        technologies: ['B.Tech in Information Technology']
    },
    {
        icon: FaProjectDiagram,
        title: 'Projects',
        technologies: ['Built more than 3+']
    },
]