import React from "react";
import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import Resume_latest from "../../assets/Resume_latest.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Profile Picture" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color Mode Icon"
          onClick={toggleTheme}
        />
      </div>

      <div className={styles.info}>
        <h1>
          Kritarth
          <br />
          Soni
        </h1>
        <h2>Full-Stack Developer</h2>
        <span>
          <a href="https://github.com/AlphaKrith" target="_black">
            <img src={githubIcon} alt="Github Icon" />
          </a>

          <a
            href="https://www.linkedin.com/in/kritarth-soni-9a2656236"
            target="_black"
          >
            <img src={linkedinIcon} alt="Linkedin Icon" />
          </a>

          <a href="https://x.com/kritarth_soni" target="_black">
            <img src={twitterIcon} alt="Twitter Icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing full stack web applications for
          commercial businesses.
        </p>
        <a href={Resume_latest} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
