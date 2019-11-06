import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  readonly URL_API = 'http://localhost:3000/students';
  students: Student[];

  constructor(private http: HttpClient) { }

  getStudents() {
    return this.http.get(this.URL_API);
  }

  postStudent(student: Student){
    return this.http.post(this.URL_API, student)
  }


}
