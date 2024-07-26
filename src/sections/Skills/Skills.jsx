import React from "react";
import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../assets/checkmark-dark.svg"
import SkillList from "../../common/SkillList";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.SkillList}>
       <SkillList src={checkMarkIcon} skill="HTML5"/>
       <SkillList src={checkMarkIcon} skill="CSS3"/>
       <SkillList src={checkMarkIcon} skill="JavaScript"/>
       <SkillList src={checkMarkIcon} skill="Tailwind CSS"/>
       <SkillList src={checkMarkIcon} skill="React Js"/>
      </div>

      <div className={styles.SkillList}>
       <SkillList src={checkMarkIcon} skill="Node.js"/>
       <SkillList src={checkMarkIcon} skill="Express.js"/>
       <SkillList src={checkMarkIcon} skill="Mongo Db"/>
       <SkillList src={checkMarkIcon} skill="Mongoose"/>
       <SkillList src={checkMarkIcon} skill="Git/Github"/>
      </div>
    </section>
  );
}

export default Skills;
