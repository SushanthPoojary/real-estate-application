import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.token;

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if(err) return res.status(403).json({ message: "Token is not valid" });
        req.userId = decoded.id;
        next();
    });
}