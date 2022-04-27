import React from "react";

import { ICONS } from "@/constants";

import * as styles from "./Logo.module.scss";

interface Props {
  name: keyof typeof ICONS;
  icon: {
    viewBox?: string;
    path?: string;
  };
}

const Logo: React.FC<Props> = ({ name, icon }: Props) => (
  <svg className={styles.icon} viewBox={icon.viewBox}>
    <title>{name}</title>
    <path d={icon.path} />
  </svg>
);

export default Logo;
