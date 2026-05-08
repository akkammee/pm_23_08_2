import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface JobItem {
  title:       string;
  years:       string;
  company:     string;
  description: string;
}

@Component({
  selector: 'app-job-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-experience.component.html',
  styleUrls: ['./job-experience.component.scss']
})
export class JobExperienceComponent {
  @Input() items: JobItem[] = [];

  @Output() jobSelected = new EventEmitter<string>();

  onSelect(title: string): void {
    this.jobSelected.emit(title);
  }
}
