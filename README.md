# 🛒 SmartBuy – E-commerce Admin Panel

SmartBuy is a mini e-commerce admin panel built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to perform CRUD operations on product, customer, and category data with real-time updates. This project focuses on backend administration rather than a customer-facing store.

## 🚀 Features

- Add, edit, and delete product and customer records
- Real-time data display using React
- MongoDB integration for persistent storage
- Responsive UI with Flexbox layout
- Clean card-based record display
- Functional Edit and Delete buttons for every entry

## 🧰 Tech Stack

- **Frontend:** React.js, CSS3 (Flexbox)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, MongoDB Atlas
- **API Testing:** Postman
- **Version Control:** Git, GitHub


## 🛠 Challenges Faced

### 1. Data Showing on Frontend But Not Saved in MongoDB
- **Problem:** When adding new records, data appeared on the UI but wasn’t stored in the database.
- **Solution:** 
  - Corrected API request format (used POST method with proper headers)
  - Parsed JSON properly in backend using `req.on('data')` and `req.on('end')`
  - Ensured MongoDB connection was established before inserting

### 2. UI/UX Layout Issues
- **Problem:** The UI was initially cluttered and confusing to navigate.
- **Solution:**
  - Used Flexbox to separate the form and display sections
  - Applied gradient backgrounds for a visually appealing interface
  - Styled buttons with distinct colors and added icons for better interaction

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

## 🙋‍♂️ Author

**Uzair Memon**  
📧 Email: ahmeduzair53@gmail.com  
🌐 Portfolio: [linktr.ee/uzairmemonn](https://linktr.ee/uzairmemonn)
