import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chime } from '../models/chime.model';

const baseUrl = 'http://localhost:8080/api/chimes';

@Injectable({
  providedIn: 'root'
})
export class ChimeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Chime[]> {
    return this.http.get<Chime[]>(baseUrl);
  }

  get(id: any): Observable<Chime> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

}