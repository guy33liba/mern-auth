import express from "express"
import User from "./models.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
const router = express.Router()

const secretKey = "your-secret-key"

router.post("/login", async (req, res) => {
  try {
    const { email: userEmail, password: userPassword } = req.body
    const { name, email, password, _id } = await User.findOne({ email: userEmail })
    console.log(name, email, password, _id)
    if (!email) {
      return res.status(401).json({ error: "Authentication failed try Again" })
    }
    const passwordMatch = await bcrypt.compare(userPassword, password)
    if (!passwordMatch) {
      return res.status(401).json({ error: "Authentication failed try Again 2" })
    }

    // Create a JWT token
    const token = jwt.sign({ userId: _id, email: email }, secretKey, {
      expiresIn: "1h",
    })

    res.status(200).json({ token, userId: _id, email, name: name })
  } catch (error) {
    res.status(500).json({ error: "Authentication failed try Again" })
  }
})

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = new User({ name, email, password: hashedPassword })
    await user.save()
    res.status(200).send({ message: "Success register" })
  } catch (error) {
    res.status(500).send(error)
  }
})
export default router
