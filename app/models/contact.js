import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
    name:{
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minlength: [2,"Name must be larger than 2 characters"],
        maxlength: [50, "Name must be lesser than 50 characters"]
    },
    email:{
        type: String,
        required: [true,"Email is required"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        },
    enquiry:{
        type: String,
        required: [true,"Message is required"],
    },
    date:{
        type: Date,
        default: Date.now,
    },

});
const Contact = mongoose.models.Contact || mongoose.model('Contact',contactSchema);
export default Contact;