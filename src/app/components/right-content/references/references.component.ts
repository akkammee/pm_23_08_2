import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ReferenceItem {
  name:    string;
  address: string;
  tel:     string;
  email:   string;
}

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent {
  @Input() items: ReferenceItem[] = [];

  @Output() referenceClicked = new EventEmitter<string>();

  onClick(name: string): void {
    this.referenceClicked.emit(name);
  }
}
