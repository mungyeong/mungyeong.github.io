import React from "react";

import * as styles from "./Skill.module.scss";
import {SVG} from '@/constants';
import Item from '../../../types/item';

interface Props {
  skill: object;
}

interface Data {
  language: Item[];
  backend: String[];
  frontend: String[];
  etc: Map<string, String[]>;
}

const Skill = ({skill}: Props ) => {

  const {language, backend, frontend, etc}: Data = skill

  return (<>
  <h3>{"Skill"}</h3>
    <div className={styles.skill}>
      <div>
        {language && language.map((item) =>
                SVG[item.name]())
        }
      </div>
      <div>
        {backend && backend.map((item) =>
                SVG[item]())
        }
      </div>
      <div>
        {frontend && frontend.map((item) =>
                SVG[item]())
        }
      </div>
    </div>
  </>
  );
};

export default Skill;
