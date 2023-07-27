const express = require('express');
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(express.json());
app.use(fileUpload());
app.use(cookieParser());

const allowedOrigins = ['http://localhost:3000', 'https://mk-online-shop.onrender.com']; 

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      // Allow requests with no origin or from allowed origins
      callback(null, true);
    } else {
      // Block requests from other origins
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

const apiRoutes = require('./routes/apiRoutes');

app.get('/', async (req, res, next) => {
  res.json({ message: 'API running...' });
});

// Mongodb connection
const connectDB = require('./config/db');
connectDB();

app.use('/api', apiRoutes);

app.use((error, req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    console.error(error);
  }
  next(error);
});

app.use((error, req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    res.status(500).json({
      message: error.message,
      stack: error.stack,
    });
  } else {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
