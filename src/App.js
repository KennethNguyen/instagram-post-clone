import React, { useEffect } from "react";
import PostsContainer from "./features/post/PostsContainer";
import "./App.css";

function App() {
  useEffect(() => {
    // retrieve the current user(name) from local storage
    const currentUser = localStorage.getItem("user");

    // if the current user does not exist, then we populate the local storage with a user
    if (!currentUser) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: "waterguy242",
          profilePicture: "/static/images/avatar/5.jpg",
        })
      );
    }
  }, []);

  return (
    <div className="App">
      <PostsContainer />
    </div>
  );
}

export default App;
