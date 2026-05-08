import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Resume } from '../../resume.model';
import { ResumeService } from '../../resume.service';
import { AuthService } from '../../auth.service';
import { HeaderComponent } from '../../components/header/header.component';
import { LeftSidebarComponent } from '../../components/left-sidebar/left-sidebar.component';
import { RightContentComponent } from '../../components/right-content/right-content.component';

@Component({
    selector: 'app-cv',
    standalone: true,
    imports: [CommonModule, HeaderComponent, LeftSidebarComponent, RightContentComponent],
    templateUrl: './cv.component.html',
    styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
    resume: Resume | null = null;
    isLoading = false;
    errorMessage = '';

    constructor(private resumeService: ResumeService, private auth: AuthService, private router: Router) {}

    ngOnInit(): void {
        this.loadResume();
    }

    loadResume(): void {
        this.isLoading = true;
        this.resumeService.getResume().subscribe({
            next: (data) => { this.resume = data; this.isLoading = false; },
            error: (err) => { this.errorMessage = err.message; this.isLoading = false; }
        });
    }

    logout(): void {
        this.auth.logout().subscribe({
            next: () => this.router.navigate(['/login'])
        });
    }
}