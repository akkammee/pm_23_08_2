export interface ResumeHeader {
    firstName: string;
    lastName:  string;
    position:  string;
    photoUrl:  string;
    phones:    string[];
    website:   string;
    email:     string;
    address:   string;
    city:      string;
}

export interface SkillItem {
    name:  string;
    value: number;
}

export interface ResumeSidebar {
    aboutText: string[];
    skills:    SkillItem[];
    languages: string[];
    hobbies:   SkillItem[];
}

export interface EducationItem {
    school: string;
    degree: string;
    years:  string;
}

export interface ReferenceItem {
    name:    string;
    address: string;
    tel:     string;
    email:   string;
}

export interface JobItem {
    title:       string;
    years:       string;
    company:     string;
    description: string;
}

export interface ResumeContent {
    education:     EducationItem[];
    references:    ReferenceItem[];
    jobExperience: JobItem[];
}

export interface Resume {
    header:  ResumeHeader;
    sidebar: ResumeSidebar;
    content: ResumeContent;
}