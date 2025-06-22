import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import productRoutes from './routes/product.routes.js';
import { sql } from './lib/db.js';


dotenv.config();
const PORT = process.env.PORT || 7001;

const app = express();
app.use(express.json());
app.use(cors());

app.use(helmet()); // security middleware that helps to secure Express apps by setting various HTTP headers
app.use(morgan("dev")); // logging middleware that logs HTTP requests in a concise format


app.use('/api/products' , productRoutes);

async function initDB() {
    try {
        await sql`
        CREATE TABLE IF NOT EXISTS products(
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL,
            price DECIMAL(10,2) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
        `;
        console.log("Database is up and Running");
    } catch (error) {
        console.log("Error in init", error)
    }
}

// initDB().then(()=>{
//     app.listen(PORT,()=> console.log(`Server is running on port ${PORT}`));
// })

await initDB();

app.listen(PORT,()=> console.log(`Server is running on port ${PORT}`));

