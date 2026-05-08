import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RouterLink],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    form: FormGroup;
    error = '';

    constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
        this.form = this.fb.group({
            username: ['', [Validators.required, Validators.minLength(3)]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    get username() { return this.form.get('username')!; }
    get password() { return this.form.get('password')!; }

    submit(): void {
        if (this.form.invalid) { this.form.markAllAsTouched(); return; }
        this.error = '';
        this.auth.login(this.username.value, this.password.value).subscribe({
            next: () => this.router.navigate(['/cv']),
            error: (err) => this.error = err.error?.error || 'Помилка входу'
        });
    }
}