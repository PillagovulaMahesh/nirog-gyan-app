// backend/app.js
const express = require('express');
const cors = require('cors');
const app = express();
const doctorRoutes = require('./routes/doctors');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/doctors', doctorRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('NirogGyan Backend is running...');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
