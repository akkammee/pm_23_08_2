import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SkillItem {
  name: string;
  value: number;
}

@Component({
  selector: 'app-skill-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent {
  @Input() title = '';
  @Input() icon = 'fa-gear';
  @Input() items: SkillItem[] = [];

  @Output() itemHovered = new EventEmitter<string>();

  onHover(name: string): void {
    this.itemHovered.emit(name);
  }
}
