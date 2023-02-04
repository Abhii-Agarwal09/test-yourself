import 'dotenv/config';
import express, { json, urlencoded } from 'express';
import cors from 'cors';

const app = express();

// Middlewares
app.use(json());
app.use(urlencoded({ extended: trur }));

// Login and register routes
app.get('/', (req, res, next) => {
  res.json({ success: true, message: 'Welcome to Landing page' });
});

app.get('/login', (req, res) => {
  res.json({ success: true, message: 'Login page' });
});

app.post('/login', async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
});

app.get('/register', (req, res) => {
  res.json({ success: true, message: 'Register page' });
});

app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
});

// Dashboard user routes
app.get('/user/dashboard', (req, res) => {
  // Fetch user and add in response
  res.json({ success: true, message: 'User Dashboard', data: null });
});

app.get('/user/quiz', (req, res) => {
  res.json({ success: true, message: 'Quiz page' });
});

app.post('/user/quiz/result', (req, res) => {
  // Post quiz result
  res.json({ success: true, message: 'Quiz result posted' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
