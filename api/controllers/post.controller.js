import prisma from "../lib/prisma.js";

export const getAllPosts = async (req, res) => {
    console.log(req.query);
    const query = req.query;
    try {
        const postsRes = await prisma.post.findMany({
            where: {
                city: query.city || undefined,
                type: query.type || undefined,
                property: query.property || undefined,
                bedroom: parseInt(query.bedroom) || undefined,
                price: {
                    gte: parseInt(query.minPrice) || 0,
                    lte: parseInt(query.maxPrice) || 1000000000
                }
            }
        });
        res.status(200).json(postsRes);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to get posts" });
    }
}

export const getPost = async (req, res) => {
    const id = req.params.id;
    try {
        const post = await prisma.post.findUnique({
            where: { id },
            include: {
                singlePost: true,
                user: {
                    select: {
                        username: true,
                        avatar: true
                    }
                }
            }
        })
        res.status(200).json(post);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to get post" });
    }
}

export const addPost = async (req, res) => {
    try {
        const body = req.body;
        const tokenUserId = req.userId;

        // console.log(body);

        const createPost = await prisma.post.create({
            data: {
                ...body.postData,
                userId: tokenUserId,
                singlePost: {
                    create: body.singlePost,
                },
            },
        });

        // console.log(createPost);

        res.status(200).json(createPost);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to create post" });
    }
}

export const updatePost = async (req, res) => {
    try {

        res.status(200).json();
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to update post" });
    }
}

export const deletePost = async (req, res) => {
    try {
        const id = req.params.id;
        const tokenUserId = req.userId;

        // console.log(tokenUserId, id);

        const postId = await prisma.post.findUnique({
            where: { id }
        });

        // console.log(postId);

        if (postId.userId !== tokenUserId) {
            res.status(403).json({ message: "Not Authorized" });
        }

        await prisma.post.delete({
            where: { id }
        })
        res.status(200).json({ message: "Post Deleted" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to delete post" });
    }
}