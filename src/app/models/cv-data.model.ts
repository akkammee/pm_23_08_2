export interface Skill {
  name: string;
  value: number;
}

export interface Hobby {
  name: string;
  value: number;
}

export interface AboutMe {
  title: string;
  text: string;
}

export interface CvData {
  firstName: string;
  lastName: string;
  skills: Skill[];
  languages: string[];
  hobbies: Hobby[];
  aboutMe: AboutMe;
}
