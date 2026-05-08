import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-box.component.html',
  styleUrls: ['./contact-box.component.scss']
})
export class ContactBoxComponent {
  @Input() phones: string[] = [];
  @Input() website = '';
  @Input() email = '';
  @Input() address = '';
  @Input() city = '';

  @Output() contactClicked = new EventEmitter<string>();

  onItemClick(type: string): void {
    this.contactClicked.emit(type);
  }
}
