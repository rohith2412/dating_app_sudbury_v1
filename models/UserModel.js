
const { Schema, model, models } = require("mongoose");

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists']
    },
    name: {
        type: String
    },

    image: {
        type: String
    },
    PhoneNumber: {
        type: Number
    },
    Status: {
        type: String
    },
    Address: {
        type: String
    },
    College: {
        type: String
    },
    Education: {
        type: String
    },
    gender: {
        type: String,
        min: 18
    },
    Age: {
        type: Number
    },
    InstagramURL: {
        type: String,
        match: /^https?:\/\/(www\.)?instagram\.com\/[A-Za-z0-9._%-]+\/?$/

    },
    checked: {
        type: Boolean
    }
})

const User = models.User || model("User", UserSchema);
export default User;