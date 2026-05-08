import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Resume} from "./resume.model";
import { ResumeService} from "./resume.service";
import { HeaderComponent } from './components/header/header.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { RightContentComponent } from './components/right-content/right-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    LeftSidebarComponent,
    RightContentComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  resume: Resume | null = null;
  isLoading = false;
  errorMessage = '';
  successMessage = '';
  newPosition = '';

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.loadResume();
  }

  loadResume(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.resumeService.getResume().subscribe({
      next: (data) => {
        this.resume = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = err.message;
        this.isLoading = false;
      }
    });
  }

  updatePosition(): void {
    if (!this.newPosition.trim()) {
      this.errorMessage = 'Введіть нову посаду';
      return;
    }

    this.errorMessage = '';
    this.successMessage = '';

    const updatedHeader = {
      header: {
        ...this.resume!.header,
        position: this.newPosition
      }
    };

    this.resumeService.updateResume(updatedHeader).subscribe({
      next: (res) => {
        this.resume = res.data;
        this.successMessage = res.message;
        this.newPosition = '';

        setTimeout(() => this.successMessage = '', 3000);
      },
      error: (err) => {
        this.errorMessage = err.message;
      }
    });
  }
}