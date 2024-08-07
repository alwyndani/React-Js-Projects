import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://alwyndani:12345@clustertodo.gphz7kq.mongodb.net/alwyn?retryWrites=true&w=majority&appName=ClusterTodo"
    );
    console.log(`MongoDb connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export default connectDb;
