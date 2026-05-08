import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

export const authGuard: CanActivateFn = () => {
    const auth = inject(AuthService);
    const router = inject(Router);

    if (!auth.getToken()) {
        router.navigate(['/login']);
        return of(false);
    }

    return auth.verify().pipe(
        map(res => {
            if (res.valid) return true;
            router.navigate(['/login']);
            return false;
        }),
        catchError(() => {
            router.navigate(['/login']);
            return of(false);
        })
    );
};