import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import deviceRoutes from './routes/deviceRoutes';
import issuanceRoutes from './routes/issuanceRoutes';

// Create an Express application
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection setup
mongoose.connect('mongodb://localhost:27017/deviceManagement')
const db = mongoose.connection;

// Event handlers for MongoDB connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// Routes setup
app.use('/api/issuances', issuanceRoutes);
app.use('/api/devices', deviceRoutes);

// Default route for API status
app.use('/api', (_req, res) => {
  res.json({
    message: 'API is working',
    mongoDbConnection: db.readyState === 1 ? 'connected' : 'disconnected',
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
