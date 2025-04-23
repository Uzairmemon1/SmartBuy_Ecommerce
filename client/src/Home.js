import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/records'; 

const App = () => {
  const [formData, setFormData] = useState({
    productName: '',
    price: '',
    customerName: '',
    email: '',
    phone: '',
    category: '',
    _id: null,
  });

  const [records, setRecords] = useState([]);
  const isEdit = formData._id !== null;

  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = () => {
    axios.get(API_URL)
      .then((res) => setRecords(res.data))
      .catch((err) => console.error('Failed to fetch records:', err));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddOrUpdate = () => {
    const { _id, ...payload } = formData;

    if (!payload.productName || !payload.price || !payload.customerName || !payload.email || !payload.phone || !payload.category) {
      alert("Please fill out all fields.");
      return;
    }

    if (isEdit) {
      axios.put(`${API_URL}/${_id}`, payload)
        .then((res) => {
          setRecords(records.map((r) => r._id === _id ? res.data : r));
          resetForm();
        })
        .catch((err) => console.error('Update failed:', err));
    } else {
      axios.post(API_URL, payload)
        .then((res) => {
          setRecords([...records, res.data]);
          resetForm();
        })
        .catch((err) => console.error('Create failed:', err));
    }
  };

  const handleEdit = (record) => {
    setFormData(record);
  };

  const handleDelete = (id) => {
    axios.delete(`${API_URL}/${id}`)
      .then(() => {
        setRecords(records.filter((rec) => rec._id !== id));
      })
      .catch((err) => console.error('Delete failed:', err));
  };

  const resetForm = () => {
    setFormData({
      productName: '',
      price: '',
      customerName: '',
      email: '',
      phone: '',
      category: '',
      _id: null,
    });
  };

  return (
    <>
      <div className="heading-container">
        <h1 className="fade-in-heading">Welcome to SmartBuy</h1>
      </div>

      <div className="content-wrapper">
        <div className="form-container">
          <h3>Enter Product Details</h3>

          <label>Product Name</label>
          <input type="text" name="productName" value={formData.productName} onChange={handleChange} />

          <label>Price</label>
          <input type="number" name="price" value={formData.price} onChange={handleChange} />

          <label>Customer Name</label>
          <input type="text" name="customerName" value={formData.customerName} onChange={handleChange} />

          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />

          <label>Phone Number</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />

          <label>Category</label>
          <input type="text" name="category" value={formData.category} onChange={handleChange} />

          <div className="button-group">
            <button onClick={handleAddOrUpdate}>{isEdit ? 'Update' : 'Add'}</button>
            {isEdit && <button onClick={resetForm}>Cancel</button>}
          </div>
        </div>

        <div className="record-list">
          <h2>📋 Records</h2>
          {records.length > 0 ? (
            records.map((rec) => (
              <div key={rec._id} className="record-card">
                <p><strong>Product:</strong> {rec.productName}</p>
                <p><strong>Price:</strong> {rec.price} Rs/=</p>
                <p><strong>Customer Name:</strong> {rec.customerName}</p>
                <p><strong>Email:</strong> {rec.email}</p>
                <p><strong>Phone:</strong> {rec.phone}</p>
                <p><strong>Category:</strong> {rec.category}</p>
                <div className="record-buttons">
                  <button className="edit-btn" onClick={() => handleEdit(rec)}>✏️ Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(rec._id)}>🗑️ Delete</button>
                </div>
              </div>
            ))
          ) : (
            <p>🤯 Nothing to see here!</p>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
