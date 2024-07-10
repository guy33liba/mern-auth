import jwt from "jsonwebtoken"

const secretKey = "your-secret-key"

const requireAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]
    const decodedToken = jwt.verify(token, secretKey)
    req.userData = { userId: decodedToken.userId, email: decodedToken.email }
    next()
  } catch (error) {
    return res.status(401).json({ error: "Authentication failed. Please try again." })
  }
}

export default requireAuth
