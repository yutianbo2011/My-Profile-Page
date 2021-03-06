import React from "react";
import styles from "./Resume.module.css";
import { Skill } from "./Skill";
import { Experience } from "./Experience";
import { skills as skillData } from "../../../assets/data/skills";
import { experience as experienceData } from "../../../assets/data/experience";

export const Resume = () => {
  return (
    <section className={styles.resume}>
      <h1>Resume</h1>
      <section className={styles.container}>
        <section className={styles.experience}>
          <article className={styles.item}>
              <h2>Education</h2>
              <section>
                {experienceData["education"].map(data => (
                  <Experience
                    job={data.job}
                    company={data.company}
                    time={data.time}
                    description={data.description}
                    key={data.job+ data.company+ data.time}
                  />
                ))}
              </section>
          </article>
          <article className={styles.item}>
            <h2>Work Experience​​</h2>
            <section>
              {experienceData["work"].map(data => (
                <Experience
                  job={data.job}
                  company={data.company}
                  time={data.time}
                  description={data.description}
                  key={data.job+ data.company+ data.time}
                />
              ))}
            </section>
          </article>
          
        </section>
        <section className={styles.skill}>
          <Skill skillData= {skillData}></Skill>
          
        </section>
      </section>
    </section>
  );
};
