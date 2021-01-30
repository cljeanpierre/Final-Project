import axios from "axios";

export default {
  // Gets all posts
  // getPosts: function() {
  //   return axios.get("/api/posts");
  // },
  // Gets the post with the given id
  // getPost: function(id) {
  //   return axios.get("/api/posts/" + id);
  // },
  // // Deletes the post with the given id
  // deletePost: function(id) {
  //   return axios.delete("/api/posts/" + id);
  // },
  // // Saves a post to the database
  
  setScore: function(userData) {
    return axios.post("/api/auth/scores", userData);
  },

  getScores: function(userData) {
    return axios.get("/api/auth/scores");
  },

  loginAuth: function(userData) {
    return axios.post("/api/auth/login", userData);
  },
  signUpAuth: function(userData) {
    return axios.post("/api/auth/signup", userData);
  }
};
