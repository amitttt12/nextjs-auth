import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("mongo db connected successfully!!!");
    });
    connection.on("error", (err) => {
      console.log(
        "Mongo DB connection error.Please makwe usre mongo db is running",
        err
      );
      process.exit();
    });
  } catch (error) {
    console.log("Something went wrong!");
    console.log(error);
  }
}
