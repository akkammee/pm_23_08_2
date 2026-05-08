import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CvData } from '../models/cv-data.model';

@Injectable({
  providedIn: 'root'
})
export class CvDataService {
  private http = inject(HttpClient);

  getCvData(): Observable<CvData> {
    return this.http.get<CvData>('assets/data.json');
  }
}
