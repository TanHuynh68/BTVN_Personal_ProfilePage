"use client"
import React, { useEffect, useState } from 'react';
import projectsData from '../components/data/project.json';

// Định nghĩa kiểu dữ liệu cho một dự án
interface Project {
  name: string;
  description: string;
  github_url: string;
  vercel_url: string;
  technologies: string[];
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]); // Sử dụng kiểu dữ liệu Project[]

  useEffect(() => {
    setProjects(projectsData.projects);
  }, []);

  return (
    <div id='projects' className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Projects</h1>
      {projects.map((project, index) => (
        <div key={index} className="border rounded-lg p-4 shadow-md mb-4">
          <h2 className="text-xl font-semibold">{project.name}</h2>
          <p className="text-gray-700">{project.description}</p>
          <p className="text-blue-500 hover:underline">
            <a href={project.github_url}>Github</a>
          </p>
          <p className="text-blue-500 hover:underline">
            <a href={project.vercel_url}>Vercel</a>
          </p>
          <div className="mt-2">
            <h3 className="text-md font-semibold">Technologies:</h3>
            <ul className="list-disc list-inside">
              {project.technologies.map((tech, idx) => (
                <li key={idx} className="text-gray-600">{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
