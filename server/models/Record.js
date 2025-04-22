import mongoose from 'mongoose';

const RecordSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  customerName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  category: { type: String, required: true }
});

const Record = mongoose.model('Record', RecordSchema);
export default Record;
