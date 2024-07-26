import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    // console.log("Register Route");

    // console.log(req.body);

    const { username, email, password } = req.body;

    try {
        const hashedPass = await bcrypt.hash(password, 10);
        console.log(hashedPass);

        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPass,
            }
        })

        console.log(newUser);

        res.status(201).json({ message: "User created successfully" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to create user" });
    }
};

export const login = async (req, res) => {
    console.log("login Route");

    const { username, password } = req.body;

    try {
        const user = await prisma.user.findUnique({
            where: { username }
        });

        if (!user) return res.status(401).json({ message: "Invalid Credentials" });

        const isPassValid = await bcrypt.compare(password, user.password);

        if (!isPassValid) return res.status(401).json({ message: "Invalid Credentials" });

        // res.setHeader("Set-Cookie", "test=" + "myValue").json("Success");

        const age = 1000 * 60 * 60 * 24 * 7;

        const token = jwt.sign({
            id: user.id,
            isAdmin: true
        }, process.env.JWT_SECRET_KEY, {
            expiresIn: age
        });

        const {password: userPass, ...userInfo} = user;

        console.log(userInfo);

        res.cookie("token", token, {
            httpOnly: true,
            // secure: true
            maxAge: age
        }).status(200).json(userInfo);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to login" });
    }
};

export const logout = (req, res) => {
    console.log("logout Route");

    res.clearCookie("token").status(200).json({ message: "Logout Succesful" })
}