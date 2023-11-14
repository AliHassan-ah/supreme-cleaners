import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(
      `Conntected to the Mongodb Database ${conn.connection.host}`.bgMagenta
        .white
    );
  } catch (err) {
    console.log(`Error in Mongodb DATABASE IS NOT CONNECTED ${err}`);
  }
};
export default connectDB;
