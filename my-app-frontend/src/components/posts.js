import React,{useState} from "react";

function Posts({posts, removePosts, addToFavorites}) {
  const {title, content, author} = posts;
  const [isRead, IsReadSet] = useState(false)

  function deletingClick(e) {
    e.preventDefault();
    fetch(`${"http://localhost:9292"}/${posts.id}`, {
      method: "DELETE",
    });
    removePosts(posts);
  }

  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <p><strong>- By {author}</strong></p>
      <button onClick={() => IsReadSet(!isRead)} >Mark as {isRead ? "unread" : "read" }</button>
      <button onClick={deletingClick} >Delete</button>
      <button onClick={() => addToFavorites(posts)}>{posts.isFavorite ? "Unfavorite" : "♥ Favorite" }</button>
    </div>
  );
}

export default Posts;
