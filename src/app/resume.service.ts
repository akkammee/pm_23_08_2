import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Resume} from "./resume.model";

@Injectable({
    providedIn: 'root'
})
export class ResumeService {
    private readonly apiUrl = 'http://localhost:3000/api/resume';

    constructor(private http: HttpClient) {}

    getResume(): Observable<Resume> {
        return this.http.get<Resume>(this.apiUrl).pipe(
            tap(() => console.log('Дані резюме отримано')),
            catchError(this.handleError)
        );
    }

    updateResume(data: Partial<Resume>): Observable<{ message: string; data: Resume }> {
        return this.http.post<{ message: string; data: Resume }>(this.apiUrl, data).pipe(
            tap(() => console.log('Дані резюме оновлено')),
            catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse): Observable<never> {
        let errorMessage = 'Невідома помилка';

        if (error.status === 0) {
            // Мережева помилка або сервер не відповідає
            errorMessage = 'Сервер недоступний. Перевірте підключення.';
        } else if (error.status === 400) {
            errorMessage = 'Невірний формат даних.';
        } else if (error.status === 500) {
            errorMessage = 'Помилка на сервері. Спробуйте пізніше.';
        } else {
            errorMessage = `Помилка ${error.status}: ${error.message}`;
        }

        console.error('ResumeService error:', errorMessage);
        return throwError(() => new Error(errorMessage));
    }
}