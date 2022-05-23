import Item from './item';
import Project from './project';
import Work from './work';
import Certificate from './certificate';

interface Resume {
  skill: Record<SkillName, string[] | Item[] | Map<string, string[]>>,
  experience: Record<ExperienceName, Project[] | Work[]>
  tool: Item[],
  certificate: Certificate[],
}

type SkillName = "language" | "backend" | "frontend" | "etc"

type ExperienceName = "project" | "work";

export default Resume;
