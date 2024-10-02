import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt";

export const getAllUsers = async (req, res) => {
    try {
        const usersRes = await prisma.user.findMany();
        res.status(200).json(usersRes);
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: "Failed to get users" })
    }
}

export const getSpecificUser = async (req, res) => {

    const id = req.params.id;

    try {
        const userRes = await prisma.user.findUnique({
            where: { id },
        });
        res.status(200).json(userRes);
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: "Failed to get users" })
    }
}

export const updateUser = async (req, res) => {
    const id = req.params.id;
    const cookieId = req.userId;
    const { password, avatar, ...others } = req.body;
    // console.log(req.body);

    let hashedPass = null;

    if (id !== cookieId) return res.status(401).json({ message: "Not Authorized" });

    try {

        if (password) {
            hashedPass = await bcrypt.hash(password, 10);
        }

        const userUpdateRes = await prisma.user.update({
            where: { id },
            data: {
                ...others,
                ...(hashedPass && { password: hashedPass }),
                ...(avatar && { avatar })
            },
        });

        const  {password: resPassword, ...resOthers} = userUpdateRes;
        res.status(200).json(resOthers);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to update User" });
    }
}

export const deleteUser = async (req, res) => {
    const id = req.params.id;
    const cookieId = req.userId;

    if (id !== cookieId) return res.status(401).json({ message: "Not Authorized" });

    try {
        const userUpdateRes = await prisma.user.delete({
            where: { id },
        });

        res.status(200).json({ message: "User Deleted" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to delete User" });
    }
}

export const savePost = async (req, res) => {
    const postId = req.body.postId;
    const tokenUserId = req.userId;    
    
    const savedPost = await prisma.savedPost.findUnique({
        where: {
            userId_postId: {
                userId: tokenUserId,
                postId,
            },
        }
    });

    if (savedPost) {
        await prisma.savedPost.delete({
            where: {
                id: savedPost.id,
            },
        });
        res.status(200).json({ message: "Post removed from saved list" });
    } else {
        await prisma.savedPost.create({
            data: {
                userId: tokenUserId,
                postId,
            },
        });
        res.status(200).json({ message: "Post Saved" })
    }

    try {

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to save post" });
    }
}

export const profilePosts = async (req, res) => {

    const tokenUserId = req.userId;
    // console.log(tokenUserId);

    try {
        const userPosts = await prisma.post.findMany({
            where: { userId: tokenUserId },
        });

        const saved = await prisma.savedPost.findMany({
            where: { userId: tokenUserId },
            include: {
                post: true,
            }
        });

        const savedPosts = saved.map((item) => item.post);
        
        // console.log(savedPosts);
        
        res.status(200).json({userPosts, savedPosts});
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: "Failed to get users" })
    }
}