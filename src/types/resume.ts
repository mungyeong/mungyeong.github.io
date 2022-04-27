import Skill from './skill';
import Experience from './experience';
import Item from './item';

interface DataJson {
  skill: Skill,
  experience: Experience,
  tool: Array<Item>,
}

export default DataJson;
