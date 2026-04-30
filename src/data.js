import HeroImage from "../assets/hero-img.jpg";


const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "../assets/tools/vscode.png";
import Tools2 from "../assets/tools/reactjs.png";
import Tools3 from "../assets/tools/Python.png";
import Tools4 from "../assets/tools/tailwind.png";
import Tools5 from "../assets/tools/bootstrap.png";
import Tools6 from "../assets/tools/js.png";
import Tools7 from "../assets/tools/Cplus.png";
import Tools8 from "../assets/tools/github.png";
import Tools9 from "../assets/tools/CSS.png";
import Tools10 from "../assets/tools/HTML5.svg";
import Tools11 from "../assets/tools/ts-logo-256.png";
import Tools12 from "../assets/tools/Symbol.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Library",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Python",
    ket: "Language",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 6,
    gambar: Tools11,
    nama: "typescript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "C++",
    ket: "Language",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "CSS 3",
    ket: "Language",
    dad: "800",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "HTML 5",
    ket: "Language",
    dad: "800",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Next JS",
    ket: "Framework",
    dad: "800",
  },
];

import project1 from "../assets/proyek/noble.png";
import project2 from "../assets/proyek/Revolution.png";
import project3 from "../assets/proyek/Food-Deleviry.png";
import project4 from "../assets/proyek/ecommerce.png";
import project5 from "../assets/proyek/lamaDev.png";
import project6 from "../assets/proyek/metaVersal.png";


export const listProyek = [
  {
    id: 1,
    gambar: project1,
    nama: "Noble Finance",
    desk: "Noble Finance website with Responsive Web Design",
    tools: ["HTML", "CSS", "Javascript", "Bootstrap"],
    href: 'https://noble-finances.netlify.app',
    dad: "200",
  },
  {
    id: 2,
    gambar: project2,
    nama: "AI Revolution",
    desk: "Landing Page of AI Revolution with Responsive Web Design",
    tools: ["HTML", "CSS", "Javascript", "Tailwind", "React"],
    href: 'https://ai-revouloution.vercel.app/',
    dad: "400",
  },
  {
    id: 3,
    gambar: project4,
    nama: "Ecommerce",
    desk: "ecommerce Project use Dummy APi",
    tools: ["HTML", "CSS", "Javascript", "Tailwind", "React"],
    href: 'https://reda-ecommerce-git-master-mohamed-aymans-projects-a200a46f.vercel.app',
    dad: "600",
  },
  {
    id: 4,
    gambar: project3,
    nama: "Food Deleviry",
    desk: "Food Deleviry Landing Page with responsive design",
    tools: ["HTML", "CSS", "Javascript", "Tailwind", "React"],
    href: 'https://food-deleviry-smoky.vercel.app',
    dad: "800",
  },
  {
    id: 5,
    gambar: project5,
    nama: "Lama Project",
    desk: "FUll Stack website use RestFul Api to Fetch data",
    tools: ["HTML", "CSS", "Javascript", "Tailwind", "next js"],
    href: 'https://lama-six-ochre.vercel.app/',
    dad: "1000",
  },
  {
    id: 6,
    gambar: project6,
    nama: "Meta Versal",
    desk: "Simple landing page of Meta Versal with responsive design",
    tools: ["HTML", "CSS", "Javascript", "Tailwind", "React js"],
    href: 'https://meta-versal.vercel.app/',
    dad: "1200",
  },
 
];

import poster1 from '/assets/proyek/ecommerce-poster.png';

export const Video = [
  {
    id: 1,
    src: "https://www.youtube.com/embed/IIr5pWCyCTw",
    poster: poster1,
    nama: "E-commerce",
    desk: 'A comprehensive E-commerce platform featuring a dynamic shopping experience, secure JWT authentication, and a dual-role Admin Dashboard (Super Admin & Sales) for seamless inventory and user management. Integrated with a RESTful API for real-time data handling.',
    tools: ["HTML", "CSS", "Javascript", "BootStrap", "React"],
    dad: "200",
  }
]
