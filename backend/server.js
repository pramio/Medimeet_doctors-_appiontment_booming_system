import express from "express"
import cors from 'cors'
import 'dotenv/config' // This line loads environment variables
import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import userRouter from "./routes/userRoute.js"
import doctorRouter from "./routes/doctorRoute.js"
import adminRouter from "./routes/adminRoute.js"

// app config
const app = express()
const port = process.env.PORT || 4000

// Connect to MongoDB and Cloudinary
connectDB()
connectCloudinary()

// middlewares
app.use(express.json()) // Parses incoming JSON requests
app.use(cors())        // Enables Cross-Origin Resource Sharing

// Serve static files from the 'frontend' directory
// This allows you to access files like index.html, CSS, JS, etc. directly
app.use(express.static('frontend'))

// api endpoints
app.use("/api/user", userRouter)     // User related API routes
app.use("/api/admin", adminRouter)   // Admin related API routes
app.use("/api/doctor", doctorRouter) // Doctor related API routes

// Root API endpoint for testing (this will now only be hit if a static file isn't found at '/')
app.get("/", (req, res) => {
  res.send("API Working")
})

// Start the server
app.listen(port, () => console.log(`Server started on PORT:${port}`))
