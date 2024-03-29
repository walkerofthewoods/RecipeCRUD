import axios from "axios";

// const url = "http://localhost:5000/posts";
const url = "https://recipe-social-app.herokuapp.com/posts";
// to-do change for deploy

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
