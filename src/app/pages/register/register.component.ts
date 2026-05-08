import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../auth.service';

function passwordsMatch(control: AbstractControl) {
    const pass = control.get('password')?.value;
    const confirm = control.get('confirmPassword')?.value;
    return pass === confirm ? null : { mismatch: true };
}

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RouterLink],
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    form: FormGroup;
    error = '';

    constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
        this.form = this.fb.group({
            username: ['', [Validators.required, Validators.minLength(3)]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required]
        }, { validators: passwordsMatch });
    }

    get username() { return this.form.get('username')!; }
    get password() { return this.form.get('password')!; }
    get confirmPassword() { return this.form.get('confirmPassword')!; }

    submit(): void {
        if (this.form.invalid) { this.form.markAllAsTouched(); return; }
        this.error = '';
        this.auth.register(this.username.value, this.password.value).subscribe({
            next: () => this.router.navigate(['/login']),
            error: (err) => this.error = err.error?.error || 'Помилка реєстрації'
        });
    }
}