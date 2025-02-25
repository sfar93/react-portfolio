import Project from './Project';

// function will display all projects and assignments that were done on portfolio tab of web
//showing an image, deployed link, and link to github repository.
function Portfolio() {
  const projects = [
    {
      title: 'Project 1',
      image: './image/image1.png',
      deployedLink: 'https://sfar93.github.io/project-1/',
      githubLink: 'https://github.com/sfar93/project-1'
    },
    {
      title: 'Project 2',
      image: './image/image_3.JPG.png',
      deployedLink: 'https://challenge9-weather.onrender.com/',
      githubLink: 'https://github.com/sfar93/challenge9-weather'
    },
    {
      title: 'Project 3',
      image: './image/image_3.JPG.png',
      deployedLink: 'https://challenge9-weather.onrender.com/',
      githubLink: 'https://github.com/sfar93/challenge9-weather'
    },
    {
      title: 'Project 4',
      image: './image/image 4.png',
      deployedLink: 'https://drive.google.com/file/d/18pzOpr6SaRHyDatgHcN7dqaNm38SUnwt/view',
      githubLink: 'https://github.com/sfar93/challenge10-employee-Manager'
    },
    {
      title: 'Project 5',
      image: './image/image 5.png',
      deployedLink: 'https://drive.google.com/file/d/10pHxcPNJKyGp-gcv-sE6HEhYjICzYdzU/view?usp=sharing',
      githubLink: 'https://github.com/sfar93/Challenge8-vehicle-generator/tree/main/02-Challenge/Develop'
    },
    {
      title: 'Project 6',
      image: './image/image 6.png',
      deployedLink: 'https://drive.google.com/file/d/12yEj9_iq_MATXQW82JffPKxRlJMhvzHj/view?usp=sharing',
      githubLink: 'https://github.com/sfar93/Readme-generator/tree/challenge7'
    },
    // Add more projects as needed
  ];

  return (
    <div>
      <h2>Portfolio</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
