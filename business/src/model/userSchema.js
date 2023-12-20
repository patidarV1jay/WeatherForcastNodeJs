import mongoose from "mongoose";
import validator from "validator";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Enter valid email");
      }
    },
  },
  phone: {
    type: Number,
    required: 10,
    min: 10,
    unique: true,
  },
  message: {
    type: String,
    required: true,
    minlength: 3,
  },
  // date:{
  //     type: Date,
  //     default :() => new Date()
  // }
});

const User = mongoose.model("User", userSchema);

export default User;
