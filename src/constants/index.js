import RivoWeb from "../assets/projects/RivoWeb.png";
import FreshLeaf from "../assets/projects/FreshLeaf.png";
import Doctor from "../assets/projects/Doctor.png";
import Blog from "../assets/projects/Blg.png";
import chat from "../assets/projects/chat.png";

export const HERO_CONTENT = `I am a dedicated full-stack developer with expertise in
 MERN (MongoDB, Express.js, React.js, Node.js and Spring Boot. 
 I am passionate about creating efficient and intuitive applications to meet business goals. With a strong 
 software development foundation and a commitment to continuous learning, I am eager to contribute to innovative 
 projects and collaborate with like-minded professionals. Let's connect to explore opportunities for impactful solutions.`;

export const ABOUT_TEXT = `I am a dedicated student at SLIIT with a strong interest in full-stack development.
Proficient in various languages and frameworks such as React and Express,
I excel in enhancing user experiences and am adept at database management. 
My objective is to apply my expertise to dynamic projects that challenge and inspire, 
leveraging strong problem-solving abilities, a commitment to excellence, and 
effective teamwork skills. I thrive in both independent and collaborative 
environments across a wide range of technologies. Additionally, I enjoy sharing my 
knowledge by teaching programming topics to peers. My ambition is to develop
innovative products that create a positive impact globally`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "RivoWeb E-commerce Application",
    image: RivoWeb,
    description:
      "This application is built with React and Tailwind CSS for a modern and visually appealing front-end, while the back-end is powered by Spring Boot.It features role-based authentication to ensure secure access and includes a basic CRUD system for managing product details. The back-end implements token-based authentication, with custom token creation, security configuration, and API filtering to allow only authorized requests.",
    technologies: ["React", "Tailwind", "Spring Boot", "My SQL"],
  },
  {
    title: "Rivo - E-commerce Application",
    image: RivoWeb,
    description:
      "This project application is a feature-rich platform designed with a focus on simplicity and efficiency. It incorporates role-based authentication to ensure secure access control, allowing administrators and users to have distinct privileges based on their roles. The platform supports image uploading to enhance content presentation, such asattaching images to products or profiles. Additionally, it features a basic CRUD system also",
    technologies: ["React","Tailwind", "Node js","Express js", "MongoDB"],
  },
  {
    title: "Fresh Leaf - Tea leaves sale and management",
    image: FreshLeaf,
    description:
      "I developed the logo and most of the UI for a MERN-based tea sales and management web app. Using Tailwind CSS for styling, we created a smooth user interface. The app includes inventory, user, and product management systems, authentication, and allows the owner to download user and product details in PDF and Excel formats.",
    technologies: ["React", "Tailwind", "MongoDB", "Node js","Express js"],
  },
  {
    title: "Doctor Appointment - Booking Doctor website ",
    image: Doctor,
    description:
      "I developed a doctor appointment website using MERN stack technology.The platform allows users to find doctors, view detailed profiles, and securely pay to book appointments. It offers a seamless user experience for scheduling healthcare services..",
    technologies: ["React","Tailwind", "Node js","Express js", "MongoDB"],
  },
  {
    title: "Blogging Platform",
    image: Blog,
    description:
      "This is a simple blog website at a basic level. The only purpose of this is to try to test my knowledge of Next.js in this user.Contact us using the contact form, and the search bar will work efficiently. ",
    technologies: ["Next js","Tailwind","MongoDB"],
  },
  {
    title: "Chat app - MERN",
    image: chat,
    description:
      "This is a simple chat app. This was created using MERN tech logos, especially since I was using the socket.io plugin, as it usually has an authentication part and a context part.",
    technologies: ["Next js","Tailwind","MongoDB"],
  },
];

export const CONTACT = {
  address: "87 c Samudrasanna Mawatta,Mount-Lavinia,Colomb ",
  phoneNo: "078-8840339",
  email: "prashathhari2002@gmail.com",
};
