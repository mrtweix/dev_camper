import fs from "fs";
import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";

import bootcamps from "./_data/bootcamps.js";

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Load models
import Bootcamp from "./models/Bootcamp.model.js";
// const Course = require("./models/Course");
// const User = require("./models/User");
// const Review = require("./models/Review");

// Connect to DB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// Import into DB
const importData = async () => {
  try {
    await Bootcamp.create(bootcamps);
    // await Course.create(courses);
    // await User.create(users);
    // await Review.create(reviews);
    console.log("Data Imported...".green.inverse);
    process.exit();
  } catch (err) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

// Delete data
const deleteData = async () => {
  try {
    await Bootcamp.deleteMany();
    // await Course.deleteMany();
    // await User.deleteMany();
    // await Review.deleteMany();
    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (err) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  deleteData();
} else {
  importData();
}
