import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { AuthContext } from "./AuthContext";

export const SocketContext = createContext();

export const SocketContextProvider = ({children}) => {
    const { currentUser } = useContext(AuthContext);
    // console.log(children);
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        setSocket(io("http://localhost:4000"))
    }, []);
    // console.log(currentUser);

    useEffect(() => {
        currentUser && socket?.emit("newUser", currentUser.id);
        // console.log(currentUser);
    }, [currentUser, socket]);

    return (
        <SocketContext.Provider value={{ socket }}>
            {children}
        </SocketContext.Provider>
    )
}