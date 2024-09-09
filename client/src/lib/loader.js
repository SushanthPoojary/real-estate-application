import { defer } from "react-router-dom";
import apiRequest from "./apiRequest";

export const SinglePropertyLoader = async ({request, params}) => {
    const res = await apiRequest.get("/posts/" +  params.id);  
    return res.data;
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
    return defer({
        postResponse: postPromise,
    })
}