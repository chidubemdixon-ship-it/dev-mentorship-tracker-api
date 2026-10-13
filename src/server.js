const express = require('express');
const dotenv = require('dotenv');
const submissionRoutes = require('./routes/submissionRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Mount the router
app.use('/api/submissions', submissionRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'DevMentorship API is running successfully!' });
});

app.listen(PORT, () => {
  console.log(`DevMentorship API running on port ${PORT}`);
});