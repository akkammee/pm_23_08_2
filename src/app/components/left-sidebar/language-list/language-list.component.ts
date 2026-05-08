import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-language-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.scss']
})
export class LanguageListComponent {
  @Input() languages: string[] = [];

  @Output() languageSelected = new EventEmitter<string>();

  onSelect(lang: string): void {
    this.languageSelected.emit(lang);
  }
}
