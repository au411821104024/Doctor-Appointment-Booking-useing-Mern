import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
const dbURI = process.env.MONGO_URI;
  if (!dbURI) {
    throw new Error('MONGO_URI is not defined in .env');
  }

  console.log('Mongo URI:', dbURI);  // For debugging
  const connectToDB = async () => { try 
    {
  mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    } catch(err) {
      throw new Error(`Could not connect to MongoDB: ${err}`);
    };
  }
  export default connectToDB;

