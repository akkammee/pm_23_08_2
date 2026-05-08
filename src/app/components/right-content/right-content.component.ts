import { Component, Input } from '@angular/core';
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
  @Input() educationItems: EducationItem[] = [];
  @Input() references: ReferenceItem[] = [];
  @Input() jobItems: JobItem[] = [];
}