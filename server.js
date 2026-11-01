const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const submissionRoutes = require('./src/routes/submissionRoutes');
const authRoutes = require('./src/routes/authRoutes'); // Imported at the top
const { errorHandler } = require('./src/middleware/errorMiddleware');

// Load environment variables from .env
dotenv.config();

// Connect to MongoDB instance
connectDB();

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Mount routers
app.use('/api/submissions', submissionRoutes);
app.use('/api/auth', authRoutes); // Mounted before app.listen

// Error Handling Middleware (MUST be registered last, after routes)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});