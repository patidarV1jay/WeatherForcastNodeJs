import mongoose from "mongoose";

const main = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/business");
    console.log("db connected");
  } catch (error) {
    console.log("Error occurred while connecting the db.....");
  }
};

main();
