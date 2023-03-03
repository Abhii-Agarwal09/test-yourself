import 'dotenv/config';
import express, { json, urlencoded } from 'express';
import cors from 'cors';
import { loginUser, registerUser } from './controllers/authController.js';
import connectDB from './config/db.js';

const app = express();

connectDB();

const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: [
    'Access-Control-Allow-Origin',
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'Authorization',
    'Set-Cookie',
  ],
  exposedHeaders: ['Set-Cookie'],
  credentials: true,
};
// Middlewares
app.options('*', cors(corsOptions));
app.use(cors(corsOptions));
app.use(json());
app.use(urlencoded({ extended: true }));

// Login and register routes
app.get('/', (req, res, next) => {
  res.json({ success: true, message: 'Welcome to Landing page' });
});

app.get('/login', (req, res) => {
  res.json({ success: true, message: 'Login page' });
});

app.post('/login', loginUser);

app.get('/register', (req, res) => {
  res.json({ success: true, message: 'Register page' });
});

app.post('/register', registerUser);

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
