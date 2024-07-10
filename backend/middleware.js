import jwt from "jsonwebtoken"

const secretKey = "your-secret-key"
const requireAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[i]
    const decodedToken = jwt.verify(token, secretKey)
    req.userData = { userId: decodedToken.userId, email: decodedToken.email }
    next()
  } catch (error) {
    return res.status(401).json({ error: "Authentication failed try again" })
  }
}
export default requireAuth
