import express from "express"
import mongoose, { mongo } from "mongoose"
import router from "./auth.js"
import cors from "cors"
const app = express()
app.use(express.json())
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
)
const mongoURI =
  "mongodb+srv://guy33liba:g33g33g33@shipping.bnmim8g.mongodb.net/?retryWrites=true&w=majority&appName=shipping"
app.use("/auth", router)
mongoose.connect(mongoURI).then(() => {
  console.log(`Connected to mongo `)
  app.listen(4000, console.log("listening on 4000"))
})
