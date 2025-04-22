import express from 'express';
import Record from '../models/Record.js';

const router = express.Router();

// GET all records
router.get('/', async (req, res) => {
  try {
    const records = await Record.find();
    res.status(200).json(records);
  } catch (error) {
    console.error('Error fetching records:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// POST new record
router.post('/', async (req, res) => {
  try {
    const newRecord = new Record(req.body);
    const saved = await newRecord.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error('Error adding record:', error);
    res.status(400).json({ message: 'Invalid data' });
  }
});

// PUT (update) a record
router.put('/:id', async (req, res) => {
  try {
    const updated = await Record.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Record not found' });
    res.status(200).json(updated);
  } catch (error) {
    console.error('Error updating record:', error);
    res.status(400).json({ message: 'Update failed' });
  }
});

// DELETE a record
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Record.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Record not found' });
    res.status(200).json({ message: 'Deleted successfully' });
  } catch (error) {
    console.error('Error deleting record:', error);
    res.status(400).json({ message: 'Delete failed' });
  }
});

export default router;
