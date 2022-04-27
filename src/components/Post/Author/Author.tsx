import React from "react";

import { useSiteMetadata } from "@/hooks";

import * as styles from "./Author.module.scss";
import {Link} from 'gatsby';
import {Image} from '@/components/Image';

const Author = () => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles.author}>
      <Link to="/">
        <Image alt={author.name} path={author.photo} className={styles.photo} />
      </Link>
      <p className={styles.bio}>
        {author.name}
        <br />
        {author.bio}
      </p>
    </div>
  );
};

export default Author;
