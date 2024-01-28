export interface SkillInterface {
  name: string;
  value: number;
}

export const SkillData:SkillInterface[] = [
  {
    name: 'JavaScript',
    value: 9
  },
  {
    name: 'PHP',
    value: 8
  },
  {
    name: 'Node',
    value: 7
  },
  {
    name: 'HapiJS',
    value: 8
  },
  {
    name: 'Express',
    value: 6
  },
  {
    name: 'MongoDB',
    value: 8
  },
  {
    name: 'TypeScript',
    value: 5
  },
  {
    name: 'SASS',
    value: 8
  },
  {
    name: 'CSS',
    value: 7
  },
];

export interface SoftSkillInterface {
  name: string
}
export const SoftSkillData:SoftSkillInterface[] = [
  {
    name: 'Time Management'
  },
  {
    name: 'Client Facing'
  },
  {
    name: 'Time Management'
  },
  {
    name: 'Version Control'
  }
]