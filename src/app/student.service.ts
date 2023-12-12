import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseURL = 'http://localhost:8080/api/students';

  constructor(private http: HttpClient) { }

  addStudent(student: any): Observable<any> {
    return this.http.post(this.baseURL, student);
  }

  getStudents(): Observable<any[]> {
    return this.http.get<any[]>(this.baseURL);
  }

  createStudent(student: any): Observable<any> {
    return this.http.post<any>(this.baseURL, student);
  }

  getStudentById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/${id}`);
  }
}
