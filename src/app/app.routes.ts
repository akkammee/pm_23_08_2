import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'register',
        loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent)
    },
    {
        path: 'cv',
        loadComponent: () => import('./pages/cv/cv.component').then(m => m.CvComponent),
        canActivate: [authGuard]
    },
    { path: '', redirectTo: 'cv', pathMatch: 'full' },
    { path: '**', redirectTo: 'cv' }
];