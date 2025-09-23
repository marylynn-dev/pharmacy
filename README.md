# Pharmacy Inventory Management System

A **web application** designed to help pharmacies manage medicines, track stock levels, monitor expiry dates, and generate reports. The system supports **role-based access control (RBAC)** for admins and staff, ensuring efficient and accurate inventory management.

This project uses:

* **Frontend:** Vue.js + Vuetify
* **Backend:** Node.js + Express
* **Database:** (add the DB you’re using, e.g., MongoDB / MySQL / PostgreSQL)

---

## 🚀 Features

* **Medicine Management** – Add, update, and delete medicine records.
* **Stock Tracking** – Monitor stock levels and get alerts for low inventory.
* **Expiry Monitoring** – Track medicine expiry dates to avoid dispensing expired drugs.
* **Reports & Analytics** – Generate sales, inventory, and expiry reports.
* **Role-Based Access** –

  * **Admin:** Full control (manage medicines, users, reports).
  * **Staff:** Limited access (update stock, view medicines, sales).
* **Search & Filtering** – Quickly search medicines by name, category, or batch.
* **Responsive Design** – Works across desktop and mobile devices.

---

## 🛠️ Tech Stack

**Frontend:**

* Vue.js (composition API)
* Vuetify (Material Design components)

**Backend:**

* Node.js
* Express.js
* Authentication (JWT or session-based)

**Database:**

* (Specify: MySQL / MongoDB / PostgreSQL)

---

## 📂 Project Structure

```bash
pharmacy-inventory-system/
├── backend/          # Node.js + Express API
│   ├── controllers/  
│   ├── models/  
│   ├── routes/  
│   └── server.js  
│
├── frontend/         # Vue.js + Vuetify
│   ├── src/  
│   │   ├── assets/  
│   │   ├── components/  
│   │   ├── views/  
│   │   └── router/  
│   └── package.json  
│
└── README.md  
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/pharmacy-inventory-system.git
cd pharmacy-inventory-system
```

### 2. Backend Setup

```bash
cd backend
npm install
```

* Create a `.env` file inside `backend/` with the following (example):

```
PORT=5000
DB_URI=mongodb://localhost:27017/pharmacy
JWT_SECRET=your_jwt_secret
```

* Start the backend server:

```bash
npm start
```

### 3. Frontend Setup

```bash
cd frontend
npm install
```

* Start the Vue development server:

```bash
npm run serve
```

The frontend runs on [http://localhost:8080](http://localhost:8080) and connects to the backend API.

---

## 👥 User Roles

* **Admin**:

  * Manage medicines
  * Manage users
  * Generate reports
* **Staff**:

  * View medicines
  * Update stock
  * Record sales

---

## 📊 Future Improvements

* Barcode scanning support for medicines.
* Email/SMS alerts for low stock & near-expiry drugs.
* Multi-branch support for pharmacy chains.
* Cloud deployment (Docker, Railway, Heroku, AWS).

---

## 📜 License

This project is licensed under the **MIT License** – free to use and modify.

---
