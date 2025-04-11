const { Schema, model, models } = require("mongoose");

const UserSchema = new Schema({
    name: String
})

const User = models.User || model("User", UserSchema);
export default User;