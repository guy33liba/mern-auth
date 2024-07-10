import express from "express"
import User from "./models.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
const router = express.Router()

const secretKey = "your-secret-key"

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (!user) {
      return res.status(401).json({ error: "Authentication failed try Again" })
    }

    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
      return res.status(401).json({ error: "Authentication failed try Again" })
    }

    // Create a JWT token
    const token = jwt.sign({ userId: user._id, email: user.email }, secretKey, {
      expiresIn: "1h",
    })

    res.status(200).json({ token, userId: user._id })
  } catch (error) {
    res.status(500).json({ error: "Authentication failed try Again" })
  }
})

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body
    const hashedPassword = bcrypt.hash(password, 10)
    const user = new User({ name, email, password: hashedPassword })
    await user.save()
    res.status(200).send({ message: "Success register" })
  } catch (error) {
    res.status(500).send(error)
  }
})
export default router
