import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectService } from '../../services/subject.service';
import { Subject } from '../../models/subject';
import { Student } from '../../models/student';
import { Phone } from '../../models/phone';
import { StudentService } from '../../services/student.service';
import { FormBuilder, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-estudiantes',
  templateUrl: './update-estudiantes.component.html',
  styleUrls: ['./update-estudiantes.component.css'],
})

export class UpdateEstudiantesComponent implements OnInit {

  id: string;
  private sub: any;
  student: Student;
  subject: Subject;
  phones: Phone[] = [];


  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, public subjectService: SubjectService, public studentService: StudentService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getStudent(this.id);
    });

  }

  getStudent(_id: string) {
    this.studentService.getStudent(_id)
      .subscribe(res => {
        console.log(res);
        this.student = res as Student;
        console.log(this.student);
      },
        err => {
          console.log(err);
        });
  }

  editStudent(form: NgForm) {

    this.phones.push({
      key: form.value.key,
      value: form.value.value
    });

    this.student = {
      _id: form.value._id,
      name: form.value.name,
      address: form.value.address,
      phones: this.phones
    };


    this.studentService.putStudent(this.student)
      .subscribe(res => {
        console.log(res);
        this.student = res as Student;
        console.log(this.student);
      },
        err => {
          console.log(err);
        });
  }

}
