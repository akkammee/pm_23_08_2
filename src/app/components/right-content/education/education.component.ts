import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface EducationItem {
  school: string;
  degree: string;
  years:  string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  @Input() items: EducationItem[] = [];
}
