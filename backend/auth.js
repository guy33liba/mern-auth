import express from "express"
import User from "./models.js"
import bcrypt from "bcryptjs"
const router = express.Router()

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body
    const hashedPassword = bcrypt.hash(password, 10)
    const user = new User({ name, email, password: hashedPassword })
    await user.save()
    console.log()
    res.status(200).send({ message: "Success register" })
  } catch (error) {
    res.status(500).send({ message: "Error registering" })
  }
})
