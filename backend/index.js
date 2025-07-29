const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv = require('dotenv');
dotenv.config();
const cors=require('cors')
const multer=require('multer')
const path=require("path")
const cookieParser=require('cookie-parser')
const authRoute=require('./routes/auth')
const userRoute=require('./routes/users')
const postRoute=require('./routes/posts')
const commentRoute=require('./routes/comments')

//database
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("database is connected successfully!")

    }
    catch(err){
        console.log(err)
    }
}

app.use(cors({
  origin: "https://blog-market-dti2.vercel.app/",
  credentials: true
}));

//middlewares
app.use(express.json())
app.use("/images",express.static(path.join(__dirname,"/images")))

// const allowedOrigins = [
//     'https://blog-market-dti2.vercel.app',
//     'http://localhost:5173'
//   ];
  
//   app.use(cors({
//     origin: function (origin, callback) {
//       // Allow requests with no origin (like mobile apps, curl, etc.)
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error('Not allowed by CORS: ' + origin));
//       }
//     },
//     credentials: true
//   }));
  
app.use(cookieParser())
app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/posts",postRoute)
app.use("/api/comments",commentRoute)

//image upload
const storage=multer.diskStorage({
    destination:(req,file,fn)=>{
        fn(null,"images")
    },
    filename:(req,file,fn)=>{
        fn(null,req.body.img)
        // fn(null,"image1.jpg")
    }
})

const upload=multer({storage:storage})
app.post("/api/upload",upload.single("file"),(req,res)=>{
    // console.log(req.body)
    res.status(200).json("Image has been uploaded successfully!")
})

app.get('/', (req, res) => res.send("API is running"))


app.listen(process.env.PORT, () => {
  connectDB()
  console.log("app is running on port " + process.env.PORT)
});
