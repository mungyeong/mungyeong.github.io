import React from "react";

import { Link } from "gatsby";

import { Image } from "@/components/Image";

import * as styles from "./Experience.module.scss";

type Props = {
  author: {
    name: string;
    bio: string;
    photo: string;
  };
};

const Experience = ({ author}: Props) => (
  <div className={styles.author}>
    <Link to="/">
      <Image alt={author.name} path={author.photo} className={styles.photo} />
    </Link>
  </div>
);

export default Experience;
