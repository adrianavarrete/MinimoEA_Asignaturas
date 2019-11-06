"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const subject_service_1 = require("../../services/subject.service");
const student_service_1 = require("../../services/student.service");
let DashboardComponent = class DashboardComponent {
    // subjects: Subject[];
    constructor(subjectService) {
        this.subjectService = subjectService;
    }
    ngOnInit() {
        this.getSubjects();
    }
    getSubjects() {
        this.subjectService.getSubjects()
            .subscribe(res => {
            console.log(res);
            this.subjectService.subjects = res;
        });
    }
};
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'app-dashboard',
        templateUrl: './dashboard.component.html',
        styleUrls: ['./dashboard.component.css'],
        providers: [subject_service_1.SubjectService, student_service_1.StudentService]
    })
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
