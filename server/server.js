import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import recordRoutes from './routes/recordRoutes.js'; 

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/records', recordRoutes); 

mongoose.connect('mongodb+srv://ecommerce_db:11223344@cluster0.ckq30zy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB Connected');
  app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port ${process.env.PORT || 5000}`);
  });
}).catch((err) => console.error('MongoDB connection error:', err));
