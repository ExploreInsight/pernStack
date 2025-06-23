# 🌈 Full Stack PERN Stack WEB-APP!

<h1 align="center">🛍️ Server </h1>
<p align="center">
  A fast, modern backend API for product management built with <strong>Node.js, Express, PostgreSQL</strong> and <a href="https://neon.tech">NeonDB</a>. <br />
</p>

---

## ⚙️ Tech Stack For Server 

- 🚀 **Node.js** & **Express.js** – For building scalable APIs
- 🛡️ **Helmet.js** – Adds security headers
- 🧾 **Morgan** – HTTP request logger
- 🔐 **dotenv** – Manage environment variables
- 🌐 **CORS** – Enables cross-origin requests
- 🗃️ **PostgreSQL** (via NeonDB) – For persistent data storage

---

## 📦 Features For Server

- 📄 Create, Read, Update, Delete products
- 📤 Upload and store product info with image URL
- ⏱️ Sort products by latest creation time
- 🧱 Table auto-creation on startup
- 🧪 Clean error handling and HTTP status codes

---

## 🔌 API Endpoints

Base URL: `/api/products`

| Method | Endpoint       | Description              |
|--------|----------------|--------------------------|
| GET    | `/`            | Fetch all products       |
| GET    | `/:id`         | Fetch a single product   |
| POST   | `/`            | Create a new product     |
| PUT    | `/:id`         | Update an existing item  |
| DELETE | `/:id`         | Delete a product         |

📘 **Example JSON body (for POST/PUT)**:
```json
{
  "name": "iPhone 15",
  "price": 999.99,
  "image": "https://example.com/image.png"
}
```
---

## 🛠️ Setup Environment Variables

PGHOST=your-neon-host
PGDATABASE=your-db-name
PGUSER=your-db-user
PGPASSWORD=your-password
PORT=7001


