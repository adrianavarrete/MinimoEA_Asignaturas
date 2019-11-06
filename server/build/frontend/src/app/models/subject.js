"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Subject {
    constructor(_id = '', name = '', students = []) {
        this._id = _id;
        this.name = name;
        this.students = students;
    }
}
exports.Subject = Subject;
