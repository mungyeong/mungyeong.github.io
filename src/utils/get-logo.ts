const getLogo = (name: string, color: string) => {
  return `https://img.shields.io/badge/${name}-${color}?style=flat-square&logo=${name}&logoColor=white`;
};

export default getLogo;
