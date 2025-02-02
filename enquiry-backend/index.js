import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors';
import bodyParser from 'body-parser';
import Enquiry_routes from './routes/enquiries.js'

dotenv.config()

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/enquiries',Enquiry_routes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
