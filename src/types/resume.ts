import Item from './item';
import Project from './project';
import Work from './work';

interface Resume {
  skill: Map<string, Array<Item>|Map<string, Item>>,
  experience: Map<string, Array<Project> | Array<Work>>
  tool: Array<Item>,
}

export default Resume;
