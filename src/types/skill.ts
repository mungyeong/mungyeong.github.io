import Item from './item';

interface Skill {
  backend: Array<Item>,
  language: Array<Item>,
  frontend: Array<Item>,
  etc: Map<string, Item>,
}

export default Skill;
