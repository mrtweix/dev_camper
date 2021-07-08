import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose?.connections[0]?.readyState) {
    return true;
  }
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log(
      `Connected to MongoDB ${conn.connection.host}`.yellow.underline
    );
  } catch (error) {
    console.log(`Error connecting to MongoDB ${error}`.red.underline.bold);
  }
};

export default connectDB;
