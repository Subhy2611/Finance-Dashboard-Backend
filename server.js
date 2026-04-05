require('dotenv').config();

const app = require('./src/app');
const connectDB = require('./src/config/db');

// Step 1: Database connect
connectDB();

// Step 2: Server start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});