const express = require('express');
const app = express();
const recordRoutes = require('./routes/record.routes');
const authRoutes = require('./routes/auth.routes');
const authMiddleware = require('./middlewares/auth.middleware');
const roleMiddleware = require('./middlewares/role.middleware');
const userRoutes = require('./routes/user.routes');


// Middleware
app.use(express.json());
app.use('/api/users', userRoutes);

app.use('/api/records', recordRoutes);

// Routes
app.use('/api/auth', authRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Protected route (any logged-in user)
app.get('/api/protected', authMiddleware, (req, res) => {
  res.json({
    message: "Protected route accessed",
    user: req.user
  });
});

// Admin-only route
app.get(
  '/api/admin',
  authMiddleware,
  roleMiddleware('admin'),
  (req, res) => {
    res.json({
      message: "Welcome Admin"
    });
  }
);

module.exports = app;