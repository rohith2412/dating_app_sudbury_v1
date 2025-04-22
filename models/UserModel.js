
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