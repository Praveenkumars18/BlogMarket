const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const multer = require('multer');
const path = require("path");
const cookieParser = require('cookie-parser');

// Routes
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const commentRoute = require('./routes/comments');

// Connect DB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("✅ Database is connected successfully!");
    } catch (err) {
        console.error("❌ MongoDB connection error:", err);
    }
};

// CORS Setup
const allowedOrigins = [
  'http://localhost:5173',
  'https://blog-market-dti2.vercel.app',
  'https://blog-market-dti2-git-main-praveenkumars-projects-97a2c056.vercel.app',
  'https://blog-market-dti2-ak8qrd9b8-praveenkumars-projects-97a2c056.vercel.app'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS: " + origin));
    }
  },
  credentials: true
}));


// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use("/images", express.static(path.join(__dirname, "/images")));

// API Routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/comments", commentRoute);

// Upload Image
const storage = multer.diskStorage({
    destination: (req, file, fn) => {
        fn(null, "images");
    },
    filename: (req, file, fn) => {
        fn(null, req.body.img); 
    }
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("✅ Image has been uploaded successfully!");
});

// Test Route
app.get('/', (req, res) => res.send("✅ Backend API is running"));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    connectDB();
    console.log(`🚀 App is running on port http://localhost:${PORT}`);
});
