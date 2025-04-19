
const { Schema, model, models } = require("mongoose");

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists'],
        required: [true, 'Email  is required']
    },
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    image: {
        type: String
    },
    PhoneNumber: {
        type: Number
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
        type: String
    },
    Age: {
        type: Number
    }

})

const User = models.User || model("User", UserSchema);
export default User;