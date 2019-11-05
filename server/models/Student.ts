import { Schema, model } from "mongoose";

const StudentSchema = new Schema({
    name: {type: String, required: true},
    address: {type: String, required: true},
    phones: {
        type: Map,
        of: String
    }
});

export default model('Student', StudentSchema);