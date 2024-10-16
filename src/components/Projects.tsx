const Projects = () => {
  const projects = [
    {
      name: "TextTides",
      description:
        "A browser-accessible web-based blogging platform where users can register, log in, read blogs, and write their own blogs. Users have the ability to update and delete their own blogs, with a secure JWT-based authentication system (using access and refresh tokens). The platform also includes user profile management, password reset functionality, and profile photo uploads.",
      technologies:
        "Vite-React, Node.js, Express, TypeScript, Cloud Firestore, Firebase Storage, JWT (Access & Refresh Tokens)",
      githubLink: "https://github.com/JatinDhamija816/textTides",
    },
    {
      name: "Quiz App",
      description:
        "A web-based quiz platform where admins can create quizzes by specifying the number of questions and quiz name. Admins can add multiple questions to each quiz, and regular users can take any quiz. After completing the quiz, users receive their score. The application is fully functional within the browser.",
      technologies: "Vite-React, Context API, LocalStorage, Tailwind CSS",
      githubLink: "https://github.com/JatinDhamija816/quiz_app",
    },
    {
      name: "Figma Page Conversion",
      description:
        "A simple conversion of a Figma design into a responsive web page using React, Vite, and Tailwind CSS. Demonstrates proficiency in front-end development and pixel-perfect design implementation.",
      technologies: "Vite-React Tailwind CSS",
      githubLink: "https://github.com/JatinDhamija816/finance_app_landing_page",
    },
  ];

  return (
    <div
      id="projects"
      className="bg-gray-800 min-h-screen flex items-center justify-center"
    >
      <div className="py-10 px-7 md:max-w-screen-lg">
        <p className="text-gray-50 text-2xl font-semibold py-10">Projects</p>
        <div className="space-y-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
            >
              <h3 className="text-cyan-500 text-xl font-semibold">
                {project.name}
              </h3>
              <p className="text-gray-400 mt-2">{project.description}</p>
              <p className="text-gray-400 mt-2">
                <strong>Technologies:</strong> {project.technologies}
              </p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-500 hover:underline mt-3 block"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
