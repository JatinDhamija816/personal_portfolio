const About = () => {
  return (
    <div className="bg-gray-800 min-h-screen flex items-center justify-center">
      <div className="p-10 md:max-w-screen-lg">
        <p className="text-gray-50 text-2xl  font-semibold py-10">About</p>
        <div className="text-gray-300 font-mono">
          <p className=" py-2">
            Hi, I’m Jatin Dhamija, a Full Stack Developer with a passion for
            creating modern, scalable web and mobile applications. My expertise
            includes working with technologies like React, React Native,
            Node.js, Express, MongoDB, Firebase, TypeScript, Tailwind CSS.
          </p>
          <p className=" py-2">
            I completed my B.Tech in Computer Science and Engineering from
            Panipat Institute of Engineering and Technology and recently wrapped
            up a 3-month internship where I developed a React Native mobile app
            for a startup. In this role, I turned the provided Figma designs
            into a fully functional app, focusing on development, integration of
            backend services, and ensuring a smooth user experience.
          </p>
          <p className=" py-2">
            I also have experience building responsive, user-friendly websites
            and enjoy solving complex technical challenges with efficient,
            scalable solutions. My goal is always to deliver high-quality
            products that provide both functionality and great user experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
