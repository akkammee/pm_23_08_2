import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  @Input() paragraphs: string[] = [];

  @Output() sectionToggled = new EventEmitter<boolean>();

  isOpen = signal(true);

  toggle(): void {
    this.isOpen.update(v => !v);
    this.sectionToggled.emit(this.isOpen());
  }
}
