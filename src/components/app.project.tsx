'use client'
import React, { useEffect, useState } from 'react';
import projectsData from '../app/data/project.json'; // Đường dẫn tới file JSON

// Định nghĩa interface cho đối tượng dự án
interface Project {
  name: string;
  description: string;
  github_url: string;
  vercel_url: string;
  technologies: string[];
  created_at: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Giả lập lấy dữ liệu từ file JSON
    setProjects(projectsData.projects);
  }, []);

  return (
    <div id='projects' className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p className="text-gray-700">{project.description}</p>
            <p className="text-gray-500 text-sm">Created at: {new Date(project.created_at).toLocaleDateString()}</p>
            <div className="flex space-x-4 mt-2">
              <a href={project.github_url} className="text-blue-500" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.vercel_url} className="text-blue-500" target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
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
    </div>
  );
};

export default Projects;
