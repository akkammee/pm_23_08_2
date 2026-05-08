import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResumeService} from "../../../resume.service";
import { ResumeHeader } from '../../../resume.model';

@Component({
  selector: 'app-profile-info',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent {
  @Input() firstName = '';
  @Input() lastName = '';
  @Input() position = '';
  @Input() photoUrl = '';

  isEditing = false;
  editFirstName = '';
  editLastName = '';

  constructor(private resumeService: ResumeService) {}

  startEdit(): void {
    this.editFirstName = this.firstName;
    this.editLastName = this.lastName;
    this.isEditing = true;
  }

  cancelEdit(): void {
    this.isEditing = false;
  }

  saveChanges(): void {
    this.resumeService.updateResume({
      header: { firstName: this.editFirstName, lastName: this.editLastName } as ResumeHeader
    }).subscribe({
      next: () => {
        this.firstName = this.editFirstName;
        this.lastName = this.editLastName;
        this.isEditing = false;
      },
      error: (err) => console.error('Помилка:', err.message)
    });
  }
}