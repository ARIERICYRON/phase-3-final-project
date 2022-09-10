import React from "react";
import Posts from "./posts";

function PostsContainer({posts, removePosts, addToFavorites}) {
  return (
    <div className="posts-container">
      {posts.map(posts => {
        return (
          <Posts
            key={posts.id} 
            posts={posts} 
            removePosts={removePosts} 
            addToFavorites={addToFavorites} 
          />
        )
        })}
    </div>
  );
}
export default PostsContainer;
