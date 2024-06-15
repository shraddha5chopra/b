import mongoose from "mongoose";
import validator from "validator";

const profileSchema = new mongoose.Schema({

    img:{
        type: String,
        required: true,
    },

    firstName:{
        type: String,
        required: true,
        minLength: [3, "First Name must contain at least 3 characters"],
    },

    lastName:{
        type: String,
        required: true,
        minLength: [3, "Last Name must contain at least 3 characters"],
    },

    email:{
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a valid E-Mail"],
    },

    address:{
        type: String,
        required: true,
        minLength: [5, "Address must contain at least 5 characters"],
    },

})

export const Profile = mongoose.model("profile", profileSchema)