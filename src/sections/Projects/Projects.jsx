import React from "react";
import styles from "./ProjectStyles.module.css";
import king from "../../assets/king.png";
import pinterest from "../../assets/pinterest.png";
import retroDesign from "../../assets/retroDesign.png"
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={king}
          link={"https://github.com/AlphaKrith/MERN_STACK_EVENT_PLANNING"}
          h3="King's"
          p="Event Planning Website"
        />

        <ProjectCard
          src={pinterest}
          link={"https://github.com/AlphaKrith/Pinterest-Clone-Model"}
          h3="Pinterest"
          p="Pinterest Clone Model"
        />

        <ProjectCard
          src={retroDesign}
          link={"https://github.com/AlphaKrith/Retro-Design-Website"}
          h3="Retro Design"
          p="Frontend Model"
        />
      </div>
    </section>
  );
}

export default Projects;
