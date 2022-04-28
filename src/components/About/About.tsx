import React, { useEffect, useRef } from "react";

import type {Nullable, Resume, Item} from "@/types";

import {SVG}  from "@/constants"


import * as styles from "./About.module.scss";

interface Props {
  title: string;
  resume: Resume;
  children: React.ReactNode;
}

const About: ({title, resume, children}: Props) => JSX.Element =({title, resume, children}: Props) => {
  const pageRef = useRef<Nullable<HTMLDivElement>>(null);
  const { language ,backend, frontend, etc} = resume?.skill;
  const { project, work} = resume?.experience;

  useEffect(() => {
    if (pageRef.current) {
      pageRef.current.scrollIntoView();
    }
  }, []);

  console.log(backend);
  return (
    <div ref={pageRef} className={styles.about}>
      <div className={styles.resume}>
        {title && <h1 className={styles.title}>{title}</h1>}
        <div className={styles.body}>
          <div>
            <h3>{"Skill"}</h3>
            <div>
              {backend && <h4>{"BackEnd"}</h4>}
              {backend &&  backend.map((item) =>
                      SVG[item.name]())
              }
            </div>
            <div>
              {frontend && <h4>{"FrontEnd"}</h4>}
              {frontend &&  frontend.map((item) =>
                              SVG[item.name]())
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
