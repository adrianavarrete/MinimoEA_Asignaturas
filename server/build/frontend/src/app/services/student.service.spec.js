"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const student_service_1 = require("./student.service");
describe('StudentService', () => {
    beforeEach(() => testing_1.TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = testing_1.TestBed.get(student_service_1.StudentService);
        expect(service).toBeTruthy();
    });
});
