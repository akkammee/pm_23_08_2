import { Component } from '@angular/core';
import { EducationComponent, EducationItem } from './education/education.component';
import { ReferencesComponent, ReferenceItem } from './references/references.component';
import { JobExperienceComponent, JobItem } from './job-experience/job-experience.component';

@Component({
  selector: 'app-right-content',
  standalone: true,
  imports: [EducationComponent, ReferencesComponent, JobExperienceComponent],
  templateUrl: './right-content.component.html',
  styleUrls: ['./right-content.component.scss']
})
export class RightContentComponent {

  educationItems: EducationItem[] = [
    { school: 'STANFORD UNIVERSITY',  degree: 'MASTER DEGREE GRADUATE',   years: '2011 - 2013' },
    { school: 'UNIVERSITY OF CHICAGO', degree: 'BACHELOR DEGREE GRADUATE', years: '2007 - 2010' }
  ];

  references: ReferenceItem[] = [
    {
      name:    'DARWIN .B MAGANA',
      address: '1964 Harley Brook Johnstown, PA 15904',
      tel:     '+1-970-533-3393',
      email:   'www.yourwebsite.com'
    },
    {
      name:    'ROBERT J. BELVIN',
      address: '1283 Little Acres Lane Champaign, IL 61820',
      tel:     '+1-970-533-3393',
      email:   'www.yourwebsite.com'
    }
  ];

  jobItems: JobItem[] = [
    {
      title:       'WEB DESIGNER',
      years:       '2020 – Present',
      company:     'Creative Agency / Chicago',
      description: `Lorem Ipsum has been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type.`
    },
    {
      title:       'GRAPHIC DESIGNER',
      years:       '2015 – 2020',
      company:     'Creative Market / Chicago',
      description: `Lorem Ipsum has been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type.`
    },
    {
      title:       'MARKETING MANAGER',
      years:       '2013 – 2015',
      company:     'Manufacturing Agency / NJ',
      description: `Lorem Ipsum has been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type.`
    }
  ];

  onReferenceClicked(name: string): void {
    console.log('Reference clicked:', name);
  }

  onJobSelected(title: string): void {
    console.log('Job selected:', title);
  }
}
