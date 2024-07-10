import express from "express"
import mongoose, { mongo } from "mongoose"

const app = express()
app.use(express.json())

const mongoURI =
  "mongodb+srv://guy33liba:g33g33g33@shipping.bnmim8g.mongodb.net/?retryWrites=true&w=majority&appName=shipping"

mongoose.connect(mongoURI).then(() => {
  console.log(`Connected to mongo `)
  app.listen(4000, console.log("listening on 4000"))
})
