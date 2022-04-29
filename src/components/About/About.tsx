import React, { useEffect, useRef } from "react";

import type {Nullable, Resume, Item} from "@/types";

import {SVG}  from "@/constants"


import * as styles from "./About.module.scss";
import {Skill} from '@/components/About/Skill';

interface Props {
  title: string;
  resume: Resume;
  children: React.ReactNode;
}

const About: ({title, resume, children}: Props) => JSX.Element = ({title, resume, children}: Props) => {
  const pageRef = useRef<Nullable<HTMLDivElement>>(null);
  const skill = resume?.skill;

  useEffect(() => {
    if (pageRef.current) {
      pageRef.current.scrollIntoView();
    }
  }, []);

  return (
    <div ref={pageRef} className={styles.about}>
      <div className={styles.resume}>
        {title && <h1 className={styles.title}>{title}</h1>}
        <div className={styles.body}>
          {skill && <Skill skill={skill} />}
        </div>
      </div>
    </div>
  );
};

export default About;
