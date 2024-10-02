import { useContext, useEffect, useState } from "react";
import "./chat.scss";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import { format } from "timeago.js";
import { SocketContext } from "../../context/SocketContext";

function Chat( {chats} ) {

    const [chatPop, setChatPop] = useState(null);
    const { currentUser } = useContext(AuthContext);
    const { socket } = useContext(SocketContext);

    const handleOpenChat = async (id, receiver) => {
        // console.log(id);
        try {
            const res = await apiRequest("/chats/" + id);
            setChatPop({ ...res.data, receiver });
        } catch(err) {
            console.log(err);
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const text = formData.get("text");
        console.log(text);

        if (!text) return;

        try {
            const res = await apiRequest.post("/messages/" + chatPop.id, { text });
            setChatPop((prev) => ({ ...prev, messages: [...prev.messages, res.data] }));
            e.target.reset();
            socket.emit("sendMessage", {
                receiverId: chatPop.receiver.id,
                data: res.data,
            });
        } catch (err) {
            console.log(err);
        }
    }

    // console.log(chats);

    useEffect(() => {

        const read = async () => {
            try {
                await apiRequest.put("/chats/read/" + chatPop.id);
            } catch (err) {
                console.log(err);
            }
        }

        if (chatPop && socket) {
            socket.on("getMessage", (data) => {
                if (chatPop.id === data.chatId) {
                    setChatPop((prev) => ({ ...prev, message: [...prev.messages, data] }));
                    read();
                }
            });
        }

        return () => {
            socket.off("getMessage");
        };
    });

    return (
        <div className="chat">
            <div className="messages">
                <h3>Messages</h3>
                {chats.map((item) => (
                    <div className="message" key={item.id} style={{ backgroundColor: item.seenBy.includes(currentUser.id || chat?.id === item.id) ? "white" : "#fecd514eS" }} onClick={() => handleOpenChat(item.id, item.receiver)}>
                        <img src={item.receiver.avatar || "/avatar.png"} alt="" />
                        <span>{item.receiver.username}</span>
                        <p>
                            {item.lastMessage}
                        </p>
                    </div>
                ))}
            </div>
            {chatPop &&
                <div className="chat-box">
                    <div className="top">
                        <div className="user">
                            <img src={chatPop.receiver.avatar || "/avatar.png"} alt="" />
                            { chatPop.receiver.username }
                        </div>
                        <span className="close" onClick={() => setChatPop(null)}>X</span>
                    </div>
                    <div className="center">
                        {chatPop.messages.map((message) => (
                            <div className={message.userId === currentUser.id ? "chat-message own" : "chat-message"} key={message.id}>
                                <p>{message.text}</p>
                                <span>{ format(message.createdAt) }</span>
                            </div>
                        ))}
                    </div>
                    <form onSubmit={handleSubmit} className="bottom">
                        <textarea name="text" id=""></textarea>
                        <button>Send</button>
                    </form>
                </div>
            }
        </div>
    )
}

export default Chat;