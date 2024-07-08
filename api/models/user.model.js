import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      deafult:
        "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg",
    },
  },
  //   timestamps will be used for creation/updation time
  { timestamps: true }
);

// we are exporting this file as User
// .model("User") => take note of this
// if more that one user then mongoDb automatically converts it to Users

const User = mongoose.model("User", userSchema);

export default User;
