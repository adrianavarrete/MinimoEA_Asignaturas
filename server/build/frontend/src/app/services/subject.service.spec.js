"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const subject_service_1 = require("./subject.service");
describe('SubjectService', () => {
    beforeEach(() => testing_1.TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = testing_1.TestBed.get(subject_service_1.SubjectService);
        expect(service).toBeTruthy();
    });
});
