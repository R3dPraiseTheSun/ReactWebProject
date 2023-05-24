import React from 'react';

const Home = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae commodo urna. Nulla facilisi. Fusce ut ex id felis rhoncus rutrum.',
      imageUrl: 'project1.jpg',
      githubUrl: 'https://github.com/project1',
      demoUrl: 'https://demo.project1.com',
    },
    {
      title: 'Project 2',
      description: 'Sed non urna id mi dapibus feugiat. Fusce malesuada risus eget mauris eleifend fringilla. Donec auctor orci id eleifend volutpat.',
      imageUrl: 'project2.jpg',
      githubUrl: 'https://github.com/project2',
      demoUrl: 'https://demo.project2.com',
    },
    // Add more project objects as needed
  ];

  return (
    <div className="homepage">
      <h1>Student CV Website</h1>
      <h2>Passion Projects</h2>
      <div className="project-container">
        {projects.map((project, index) => (
          <div key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <img src={project.imageUrl} alt={project.title} />
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;