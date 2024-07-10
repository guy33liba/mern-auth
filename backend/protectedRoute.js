import express from "express"
const router = express.Router()
import middleware from "middleware.js"
router.get("/profile", middleware, (req, res) => {
  res.json({ message: "You are Authenticated" })
})
