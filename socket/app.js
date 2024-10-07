import { Server } from "socket.io";

const io = new Server({
    cors: {
        origin: "http://localhost:5173",
    },
});

let onlineUser = [];

const addUser = (userId, socketId) => {
    const userExits = onlineUser.find((user) => user.userId === userId);
    if (!userExits) {
        onlineUser.push({ userId, socketId });
    }
    // console.log(onlineUser);
}

const removeUser = (socketId) => {
    onlineUser = onlineUser.filter((user) => user.socketId !== socketId);
}

const getUser = (userId) => {
    return onlineUser.find((user) => user.userId === userId);
}

io.on("connection", (socket) => {
    socket.on("newUser", (userId) => {
        // console.log(userId);
        addUser(userId, socket.id);
    });
    // console.log(socket.id);

    socket.on("sendMessage", ( { receiverId, data } ) => {
        // console.log(receiverId);
        const receiver = getUser(receiverId);
        // console.log(receiver);
        // console.log(receiver.socketId);
        // console.log(data);
        io.to(receiver.socketId).emit("getMessage", data);
    });

    socket.on("disconnect", () => {
        // console.log("Socket Disconnected");
        // console.log(onlineUser);
        // console.log(socket.id);
        removeUser(socket.id);
    });
});

io.listen("4000");