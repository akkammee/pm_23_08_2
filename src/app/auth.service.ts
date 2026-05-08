import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private readonly api = 'http://localhost:3000/api';

    constructor(private http: HttpClient) {}

    register(username: string, password: string): Observable<any> {
        return this.http.post(`${this.api}/register`, { username, password });
    }

    login(username: string, password: string): Observable<{ token: string }> {
        return this.http.post<{ token: string }>(`${this.api}/login`, { username, password }).pipe(
            tap(res => localStorage.setItem('token', res.token))
        );
    }

    logout(): Observable<any> {
        return this.http.post(`${this.api}/logout`, {}, { headers: this.getAuthHeaders() }).pipe(
            tap(() => localStorage.removeItem('token'))
        );
    }

    verify(): Observable<{ valid: boolean }> {
        return this.http.get<{ valid: boolean }>(`${this.api}/verify`, {
            headers: this.getAuthHeaders()
        });
    }

    getToken(): string | null {
        return localStorage.getItem('token');
    }

    getAuthHeaders(): HttpHeaders {
        return new HttpHeaders({ Authorization: `Bearer ${this.getToken()}` });
    }
}