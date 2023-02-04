import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();

// Login and register routes
app.get('/', (req, res, next) => {
  res.json({ success: true, message: 'Welcome to Landing page' });
});
// Dashboard user routes

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
