const projectListContainer = document.getElementById("projects");
/**
 * @type {{title: string, description: string, image?: string, link?: string, sourceLink: string}[]}
 */
const projects = [
  {
    title: "Nerimity Chat App",
    stack: [
      "Vite",
      "SolidJS",
      "Typescript",
      "SCSS",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Socket.IO",
      "Express"
    ],
    description: "A Feature rich chat app built using SolidJS. Features include file sharing, image editing, share your activity such as what YouTube Video you are watching, Custom animated emojis and avatars and more.",
    link: "https://nerimity.com/",
    sourceLink: "https://github.com/Nerimity",
  },
  {
    title: "Fetcher App",
    description: "Test fetching data from an API from a beautiful minimal interface.",
    stack: ["React", "Electron"],
    sourceLink: "https://github.com/SupertigerDev/fetcher-app",
  },
  {
    title: "Discord Presence Tracker API",
    description: "Track Discord presence using a GET request or websocket.",
    link: "https://supertiger.nerimity.com/trackdispresence/:userId",
    stack: ["Bun", "Elysia"],
    sourceLink: "https://github.com/SupertigerDev/trackdispresence",
  },
  {
    title: "Supertiger Portfolio",
    description: "You are here. This website was made using vanilla HTML, CSS and JS!",
    link: "https://SupertigerDev.github.io",
    stack: ["HTML", "CSS", "JS"],
    sourceLink: "https://github.com/SupertigerDev/SupertigerDev.github.io",
  },
  {
    title: "Solid Emoji Picker",
    description: "An emoji picker built for SolidJS. It utilizes sprites to render emojis, which is more performant. Also used in my Nerimity Chat App project.", 
    stack: ["SolidJS"],
    sourceLink: "https://github.com/Nerimity/solid-emoji-picker",
  },
  {
    title: "Solid Navigator",
    description: "Advanced routing for SolidJS. It supports outlets, query parameters, and more. Also used in my Nerimity Chat App project.", 
    stack: ["SolidJS"],
    sourceLink: "https://github.com/SupertigerDev/solid-navigator",
  },
  {
    title: "Mimiqueue",
    description: "NodeJS group queuing library using Redis. Features include cluster support, group queueing and throttle. Also used in my Nerimity Chat App project to prevent race conditions and spamming.", 
    stack: ["NodeJS"],
    sourceLink: "https://github.com/nerimity/mimiqueue",
  },
  {
    title: "Solid SortableJS",
    description: "A SortableJS wrapper library for SolidJS. Used to drag and drop elements. Also used in my Nerimity Chat App project.", 
    stack: ["SolidJS"],
    sourceLink: "https://github.com/Nerimity/solid-sortablejs",
  },
  {
    title: "Steam Game Update Bypasser",
    description: "Bypass steam game updates by tricking Steam into thinking the game is up to date. Uses steamdb.info to scrape update information.", 
    stack: ["ElectronJS", "HTML", "CSS", "JS"],
    sourceLink: "https://github.com/SupertigerDev/steam-game-update-bypasser",
  },
  {
    title: "React Native JBD BMS",
    description: "Connect to a JBD BMS and track battery information.", 
    stack: ["React Native"],
    sourceLink: "https://github.com/SupertigerDev/react-native-jbd-bms",
  },
  {
    title: "Better In Game Chat",
    description: "In game chat overlay for any game, self hosted. Inspired by Overwatch 1 chat system.", 
    stack: ["ElectronJS", "HTML", "CSS", "JS"],
    sourceLink: "https://github.com/SupertigerDev/better-in-game-chat",
  },
];

export const renderProjects = () => {
  let projectHTML = ``;
  projects.forEach((project) => {
    projectHTML+= `
      <div class="project-item">
    
        <div class="project-info">
          <h3 class="project-title">${project.title}</h3>
          ${project.stack ? `<div class="project-stack-list">${project.stack.map((item) => `<span>${item}</span>`).join("")}</div>` : ""}
          <p class="project-description">${project.description}</p>


          <div class="project-actions">
          ${project.link ? `<a href="${project.link}" target="_blank" rel="noopener noreferrer">Website</a>` : ""}
            <a href="${project.sourceLink}" target="_blank" rel="noopener noreferrer">Source Code</a>
          </div>
        </div>
      </div>
    
    `;
  });
  projectListContainer.innerHTML = projectHTML;
}