import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from '../models/subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  readonly URL_API = 'http://localhost:3000/subjects';
  selectedSubject: Subject;
  subjects: Subject[];

  constructor(private http: HttpClient) { }

  getSubjects() {
    return this.http.get(this.URL_API);
  }

  postSubject(subject: Subject){
    return this.http.post(this.URL_API, subject);
  }


}
