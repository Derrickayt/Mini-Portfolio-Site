const projects = [
  {
    id: "1",
    title: "Weather Snapshot",
    category: "Weather App",
    shortDescription: "A geolocated weather app with hourly and 7-day forecasts.",
    fullDescription:
      "Weather Snapshot geocodes a searched city and pulls live current, hourly, and 7-day forecast data from the free Open-Meteo API (no API key required). It maps weather codes to icons, handles loading/error states with a refresh option, and wraps it all in a polished glassmorphism UI.",
    techStack: ["React", "Vite", "Tailwind CSS", "lucide-react", "Open-Meteo API"],
    liveUrl: "",
    repoUrl: "https://github.com/Derrickayt/Weather-Snapshot",
    image: "/project-screenshots/weather-snapshot.png",
  },
  {
    id: "2",
    title: "Themed Notes App with Persistence",
    category: "Productivity",
    shortDescription: "A note-taking app that persists to localStorage.",
    fullDescription:
      "A notes app for creating, updating, and deleting notes, persisted with a custom useLocalStorage hook so data survives page reloads. Includes a light/dark theme toggle backed by Context, a running note count, and dedicated link and image managers for richer note content.",
    techStack: ["React", "Vite", "Tailwind CSS", "lucide-react", "Context API", "LocalStorage"],
    liveUrl: "",
    repoUrl: "https://github.com/Derrickayt/Themed-Notes-App",
    image: "/project-screenshots/themed-notes-app.png",
  },
  {
    id: "3",
    title: "Themed CRUD Todo App",
    category: "Productivity",
    shortDescription: "A full CRUD todo list with search, filters, and theming.",
    fullDescription:
      "A todo list app supporting create, edit, delete, search, and status filtering, built around dedicated Theme and Todo Context providers with custom useTheme and useTodos hooks. Includes a light/dark ThemeToggle powered by custom CSS variables.",
    techStack: ["React", "Vite", "Context API", "Custom CSS"],
    liveUrl: "",
    repoUrl: "https://github.com/Derrickayt/Themed-CRUD-Todo-App",
    image: "/project-screenshots/themed-crud-todo-app.png",
  },
  {
    id: "4",
    title: "Student Directory",
    category: "Directory",
    shortDescription: "A searchable, sortable student roster with expandable cards.",
    fullDescription:
      "A single-page student roster with a sidebar search box, a skill-level filter dropdown, A-Z/Z-A sorting, and expandable student cards. Uses a lifted-state pattern to keep a live count of how many cards are currently expanded.",
    techStack: ["React", "Vite", "Tailwind CSS"],
    liveUrl: "",
    repoUrl: "https://github.com/Derrickayt/Student-Directory",
    image: "/project-screenshots/student-directory.png",
  },
  {
    id: "5",
    title: "Multi-Page Student Directory",
    category: "Directory",
    shortDescription: "A multi-route student directory with dynamic profile pages.",
    fullDescription:
      "A multi-page student directory built with React Router, featuring Home, About, and Contact routes, a dynamic StudentProfile page keyed off /students/:id, a form success page, and a custom 404 page, all wrapped in a shared Navbar layout.",
    techStack: ["React", "Vite", "React Router", "Tailwind CSS", "lucide-react"],
    liveUrl: "",
    repoUrl: "https://github.com/Derrickayt/Multi-Page-Student-Directory",
    image: "/project-screenshots/multi-page-student-directory.png",
  },
  {
    id: "6",
    title: "Team Card Gallery",
    category: "UI Components",
    shortDescription: "A grid of expandable team profile cards.",
    fullDescription:
      "A responsive grid of team member cards showing name, role, photo, and bio, each independently expandable to reveal more detail and a GitHub link. A header counter tracks how many cards are currently expanded across the gallery.",
    techStack: ["React", "Vite", "Tailwind CSS", "lucide-react"],
    liveUrl: "",
    repoUrl: "https://github.com/Derrickayt/Team-Card-Gallery",
    image: "/project-screenshots/team-card-gallery.png",
  },
  {
    id: "7",
    title: "Live Data Dashboard",
    category: "Dashboard",
    shortDescription: "A dashboard with a live clock and real API-backed data.",
    fullDescription:
      "A small dashboard combining a live-updating clock driven by setInterval with a Users panel that fetches real data from the JSONPlaceholder API, complete with loading, error, and manual refresh states.",
    techStack: ["React", "Vite", "Tailwind CSS", "lucide-react", "REST API"],
    liveUrl: "",
    repoUrl: "https://github.com/Derrickayt/Live-Data-Dashboard",
    image: "/project-screenshots/live-data-dashboard.png",
  },
  {
    id: "8",
    title: "Skool — Student Registration System",
    category: "Full-Stack",
    shortDescription: "A Firebase-backed student registration system with auth.",
    fullDescription:
      "A full-stack school management landing app backed by Firebase. Firestore powers real-time CRUD on student records via onSnapshot/addDoc/updateDoc/deleteDoc, while Firebase Auth gates a multi-view dashboard covering registration, course listings, and student management.",
    techStack: ["React", "Vite", "Tailwind CSS", "Firebase Firestore", "Firebase Auth", "uuid"],
    liveUrl: "",
    repoUrl: "",
    image: "/project-screenshots/crude.png",
  },
  {
    id: "9",
    title: "ShopMart",
    category: "E-commerce",
    shortDescription: "A furniture e-commerce storefront in progress.",
    fullDescription:
      "A furniture e-commerce site scaffolded with React Router across Home, Products, About, Contact, and Cart routes, backed by a full product image catalog spanning chairs, sofas, beds, tables, lighting, and decor. The About page and shared Navbar/Footer are built out; Home, Products, and Cart are still in progress.",
    techStack: ["React", "Vite", "React Router", "Tailwind CSS", "lucide-react"],
    liveUrl: "",
    repoUrl: "",
    image: "/project-screenshots/shopmart.png",
  },
];

export default projects;
