import { useState } from "react";
import "./chat.scss";

function Chat() {

    const [chatPop, setChatPop] = useState(true);

    return (
        <div className="chat">
            <div className="messages">
                <h3>Messages</h3>
                <div className="message">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>Sushanth</span>
                    <p>
                        Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>Sushanth</span>
                    <p>
                        Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>Sushanth</span>
                    <p>
                        Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>Sushanth</span>
                    <p>
                        Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>Sushanth</span>
                    <p>
                        Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>Sushanth</span>
                    <p>
                        Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>Sushanth</span>
                    <p>
                        Lorem ipsum dolor sit amet...
                    </p>
                </div>
            </div>
            {chatPop &&
                <div className="chat-box">
                    <div className="top">
                        <div className="user">
                            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                            Sushanth
                        </div>
                        <span className="close" onClick={() => setChatPop(null)}>X</span>
                    </div>
                    <div className="center">
                        <div className="chat-message own">
                            <p>Lorem ipsum dolor sit amet</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chat-message">
                            <p>Lorem ipsum dolor sit amet</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chat-message own">
                            <p>Lorem ipsum dolor sit amet</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chat-message">
                            <p>Lorem ipsum dolor sit amet</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chat-message own">
                            <p>Lorem ipsum dolor sit amet</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chat-message">
                            <p>Lorem ipsum dolor sit amet</p>
                            <span>1 hour ago</span>
                        </div>
                    </div>
                    <div className="bottom">
                        <textarea name="" id=""></textarea>
                        <button>Send</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default Chat;