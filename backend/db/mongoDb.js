import mongoose from "mongoose";

const mongoDbConnection = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `MongoDb Successfully Connected with Host: ${connection.connection.host} ⭐`
    );
  } catch (error) {
    console.error(`Error in connecting to MongoDb: ${error.message} `);
    process.exit(1);
  }
};

export default mongoDbConnection;