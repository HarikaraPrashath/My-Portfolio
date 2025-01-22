import React, { useState } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const ITEMS_PER_PAGE = 3;

const Project = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(PROJECTS.length / ITEMS_PER_PAGE);

  const currentProjects = PROJECTS.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <section id="Project" className="py-16 ">
      <div className="container mx-auto px-4 text-neutral-50">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-4xl font-bold text-white"
        >
          Projects
        </motion.h2>

        <div className="space-y-16">
          {currentProjects.map((project, index) => (
            <div
              key={index}
              className="flex flex-wrap items-center lg:space-x-8 lg:justify-center"
            >
              {/* Project Image */}
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8 }}
                className="w-full sm:w-2/3 lg:w-1/3 flex justify-center"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full max-w-sm rounded-lg shadow-lg"
                />
              </motion.div>

              {/* Project Details */}
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.8 }}
                className="mt-8 w-full max-w-2xl lg:mt-0 lg:w-2/3"
              >
                <h6 className="mb-4 text-2xl font-semibold text-purple-500">
                  {project.title}
                </h6>
                <p className="mb-6 text-neutral-300">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded bg-purple-500 px-3 py-1 text-sm font-medium text-neutral-950"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub Links */}
                <div className="flex flex-col gap-2">
                  {project.gitHubLink.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-purple-500 hover:text-purple-600 transition-colors"
                    >
                      <FaGithub className="text-2xl" />
                      <span className="text-base font-medium">Code here</span>
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {PROJECTS.length > ITEMS_PER_PAGE && (
          <div className="mt-12 flex justify-center items-center space-x-6">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className={`rounded px-4 py-2 text-sm font-medium ${
                currentPage === 1
                  ? "bg-neutral-700 text-neutral-400 cursor-not-allowed"
                  : "bg-purple-500 text-neutral-50 hover:bg-purple-600"
              }`}
            >
              Previous
            </button>
            <span className="text-neutral-400">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className={`rounded px-4 py-2 text-sm font-medium ${
                currentPage === totalPages
                  ? "bg-neutral-700 text-neutral-400 cursor-not-allowed"
                  : "bg-purple-500 text-neutral-50 hover:bg-purple-600"
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Project;
