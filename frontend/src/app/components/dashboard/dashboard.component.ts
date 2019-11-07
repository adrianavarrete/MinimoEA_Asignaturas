import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectService } from '../../services/subject.service';
import { Subject } from '../../models/subject';
import { Student } from '../../models/student';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { StudentService } from '../../services/student.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [SubjectService, StudentService]
})
export class DashboardComponent implements OnInit {

  subjectForm: FormGroup;
  formBuilder: any;
  phones = new Map();
  singleSubject = new Subject();

  // subjects: Subject[];

  constructor(public subjectService: SubjectService, public studentService: StudentService, private router: Router) {

  }

  ngOnInit() {
    this.getSubjects();
    this.getStudents();
  }

  getSubjects() {
    this.subjectService.getSubjects()
      .subscribe(res => {
        console.log(res);
        this.subjectService.subjects = res as Subject[];
      });
  }

  getStudents() {
    this.studentService.getStudents()
      .subscribe(res => {
        console.log(res);
        this.studentService.students = res as Student[];
      });
  }

  addSubject(form: NgForm) {
    console.log(form.value);
    this.subjectService.postSubject(form.value)
      .subscribe(res => {
        console.log(res);
        this.resetForm(form);
        this.getSubjects();

      });

  }
  addStudent(form: NgForm) {
    console.log(form.value);
    console.log(form.value.key);

   // this.phones.set(form.value.key, form.value.value);

    const newStudent = {
      _id: '',
      name: form.value.name,
      address: form.value.address,
      phones: this.phones.set(form.value.key, form.value.value)
    };

    console.log(newStudent);

    this.studentService.postStudent(newStudent)
      .subscribe(res => {
        console.log(res);
        this.getStudents();
        this.resetForm(form);

      });

  }

  deleteSubject(_id: string) {
    console.log(_id);
    if (confirm('Are you sure?')) {
      this.subjectService.deleteSubject(_id)
        .subscribe(res => {
          this.getSubjects();
        });
    }
  }

  deleteStudent(_id: string) {
    console.log(_id);
    if (confirm('Are you sure?')) {
      this.studentService.deleteStudent(_id)
        .subscribe(res => {
          this.getStudents();
        });
    }
  }

  subjectDetail(_id: string) {

    this.subjectService.getSubjectDetail(_id)
      .subscribe( res => {
          console.log(res);
          this.singleSubject = res as Subject;
          this.router.navigate(['/subject', this.singleSubject._id]);
        },
        err => {
          console.log(err);
        });
  }



  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
  }

}
