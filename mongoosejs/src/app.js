import mongoose from "mongoose";
import validator from "validator";

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/expressdb");
    console.log("success");
  } catch (error) {
    console.log(error, "This is the error");
  }
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
main();

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  key: {
    type: Number,
    // validate(value){
    //       if(value<0){
    //         throw new Error('Key cannot be a negative integer')
    //       }
    // }
    validate: {
      validator: function (value) {
        return value > 0;
      },
      message: "Key cannot contain the negative integer.......",
    },
  },
  author: String,
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("The email you entered is not valid.....");
      }
    },
  },
  type: {
    type: String,
    required: [true, "Type is a required field, please fill that...."],
    lowercase: true,
  },
});

const Profile = new mongoose.model("Profile", profileSchema);
console.log(Profile);
// const firstProfile = new Profile({
//   name: 'John',
//   key:1452
// })
const secondProfile = new Profile({
  name: "Doe",
  key: 2,
});
const thirdProfile = new Profile({
  name: "Henry",
  key: 3,
});
const fourthProfile = new Profile({
  name: "Kane",
  key: 5,
});
const fifthProfile = new Profile({
  name: "Mbape",
  key: 7,
});

const sixthProfile = new Profile({
  name: "React",
  type: "frontend",
  author: "free",
});
const seventhProfile = new Profile({
  name: "Node",
  type: "frontend",
  author: "paid",
});
const eightProfile = new Profile({
  name: "Java",
  type: "backend",
  author: "free",
});
const ninthProfile = new Profile({
  name: "mongo",
  type: "db",
  author: "depends",
});
const tenthProfile = new Profile({
  name: "html",
  type: "frontend",
  author: "free",
});
const eleventhProfile = new Profile({
  type: "Designing",
  author: "free",
  name: "CSS",
});
const twelvethProfile = new Profile({
  name: "Spring",
  author: "paid",
  type: "Java Framework",
});
const thirteenProfile = new Profile({
  name: "React Native",
  author: "free",
  type: "Mobile Development",
});
// Profile.insertMany([sixthProfile,seventhProfile,eightProfile,ninthProfile,tenthProfile])
// eleventhProfile.save()
// twelvethProfile.save()
// firstProfile.save()
// const createDocument = async() =>{
//   const result = await thirteenProfile.save()
//   console.log(result)
// }
// createDocument()
const getDocument = async () => {
  // const result = await Profile.find({$nor:[{type:'frontend'},{author:'paid'}]})
  // const result = await Profile.find({type:{$not:{$in:['frontend']}}})
  // const result = await Profile.find({type:{$not:/^d.*/}})
  // const result = await Profile.find({type:{$not:{ $regex: "^d.*" }}}).count()
  const result = await Profile.find({
    $or: [{ type: "frontend" }, { author: "free" }],
  }).sort({ name: -1 });
  console.log(result);
};
// getDocument()

const updateDocument = async (_id,name) => {
  // const result = await Profile.updateOne({_id},{$set:{name:'Html'}})
  // console.log(result)
  const result = await Profile.findByIdAndUpdate(
    _id,
    { name },
    { useFindAndModify: false, new: true }
  );
  console.log(result);
};
updateDocument("650c35f51267acf849ffaafc","garrix");
// updateDocument("650c364a48ea87197e96eb3d")

const deleteDocument = async (_id) => {
  //  const result = await Profile.deleteOne({_id})
  const result = await Profile.findByIdAndDelete({ _id });
  console.log(result);
};
// deleteDocument("650c35f51267acf849ffaaf8")
const fourteenProfile = new Profile({
  name: "php",
  author: "free",
  type: "backend",
  key: 8,
  email: "new@gmail.com",
});

fourteenProfile.save();
