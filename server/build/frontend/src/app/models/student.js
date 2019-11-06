"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor(_id = '', name = '', address = '', phones = []) {
        this._id = _id;
        this.name = name;
        this.address = address;
        this.phones = phones;
    }
}
exports.Student = Student;
