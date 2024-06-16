"use client";

import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectsCard";
import ProjectTag from "./ProjectsTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Catering shop",
    description: "A catering store with a separate site for admin and the store itself, the site admin manages all orders including adding items, updating products and more. On the store's website, you can add products to the cart and buy with a functioning checkout system",
    image: "/pnini.png",
    tag: ["All", "Web", "Active"],
    gitUrl: "https://github.com/YeudaStern/pnini_admin",
    previewUrl: "https://pnini-store.vercel.app/",
  },
  {
    id: 1,
    title: "Trello app",
    description: "Trello is a collaboration tool that utilizes boards, lists, and cards to help individuals and teams organize and prioritize their projects and tasks visually",
    image: "/trello.png",
    tag: ["All", "Web", "Active"],
    gitUrl: "https://github.com/YeudaStern/trello-app",
    previewUrl: "https://trello-app-sage.vercel.app/",
  },
  {
    id: 2,
    title: "Home Board",
    description: "My construction project management system is a robust and user-friendly platform tailored to meet the unique needs of constructors.",
    image: "/dashb.png",
    tag: ["All", "Web", "Active"],
    gitUrl: "https://github.com/YeudaStern/clinetSite",
    previewUrl: "https://home-board-site.netlify.app/",
  },
  {
    id: 3,
    title: "Massenger",
    description: "My real-time messenger application is a cutting-edge communication platform that facilitates instant and seamless interaction between users across various devices.",
    image: "/message.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/YeudaStern/messenger-real-time",
    previewUrl: "https://messenger-real-time-two.vercel.app/",
  },
  {
    id: 4,
    title: "AI companion",
    description: "This is a project where you can create avatars and chat with them and ask questions on any topic you choose",
    image: "/copanion.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/YeudaStern/ai-companion",
    previewUrl: "https://ai-companion-inky.vercel.app/",
  },
  {
    id: 5,
    title: "Evenly",
    description: "This project is dedicated to developing a sophisticated event management system that ensures even distribution and optimal scheduling of events",
    image: "/evenly.png",
    tag: ["All", "Web", "Active"],
    gitUrl: "https://github.com/YeudaStern/evently_latform",
    previewUrl: "https://evently-latform.vercel.app/",
  },
  {
    id: 6,
    title: "Ai generator",
    description: "In this Project you can generate an images, music, code, and make a conservation with ChatGPT and more AI models",
    image: "ai.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/YeudaStern/ai-genius",
    previewUrl: "https://ai-genius-teal.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
 
  return (
    <section id="projects">
      <h2 className="text-center md:w-[500px] mx-auto text-4xl font-bold text-white mt-4 mb-8 md:mb-12  border-t py-2 rounded-2xl border-purple-500">
        Some of my Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Active"
          isSelected={tag === "Active"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.image}  
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;