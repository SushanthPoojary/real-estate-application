import { defer, redirect } from "react-router-dom";
import apiRequest from "./apiRequest";

export const SinglePropertyLoader = async ({request, params}) => {
    console.log(params.id);
    try {
        const res = await apiRequest.get("/posts/" + params.id);
        // console.log(res);
        return res.data;
    } catch (err) {
        // console.log(err.response.data.message);
        if (err.response.data.message === "Token is not valid") {
            return redirect("/login");
        }
    }
}

export const PropertyListsLoader = async ({request,params}) => {
    // console.log(request.url.split("?")[1]);
    const query = request.url.split("?")[1];
    const postPromise = apiRequest.get("/posts?" +  query);
    return defer({
        postResponse: postPromise,
    })
}

export const ProfileListsLoader = async ({}) => {
    const postPromise = apiRequest.get("/users/profilePosts");
    const chatPromise = apiRequest("/chats");
    return defer({
        postResponse: postPromise,
        chatResponse: chatPromise,
    })
}