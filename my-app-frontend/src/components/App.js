import React, {useState, useEffect} from "react";
import PostsContainer from "./postsContainer";
import NewPostsForm from "./NewPostsForm";

function App() {
  const [posts, setPosts] = useState([]);
  const [formVisible, setVisibleForm] = useState(true);
  const [favoriteVisible, setFavoriteVisible] = useState(true);
  const postsToDisplay = posts.filter((posts) => favoriteVisible || posts.isFavorite);

  useEffect(() => {
    fetch("http://localhost:9292")
      .then(res => res.json())
      .then(data => setPosts(data))
  }, []);

  function addingPosts(newPosts) {
    setPosts([...posts, newPosts]);
  }

  function rstsovingPosts(postsToRstsove) {
    setPosts(posts.filter(posts => posts.id !== postsToRstsove.id))
  }

  function addingToFavorites(favPosts) {
    setPosts(posts.map(posts => {
      return posts.id === favPosts.id ? {...favPosts, isFavorite: !favPosts.isFavorite} : posts
      }  
    ))
  }

  function postsViewRendering() {
    if (postsToDisplay.length === 0 && !favoriteVisible) {
      return (<h1>You have no favorites added</h1>)
    } else {
      return (
        <PostsContainer 
          posts={postsToDisplay} 
          rstsovePosts={rstsovingPosts} 
          addToFavorites={addingToFavorites}
        />
      )
    }
  }
  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={()=> setVisibleForm(!formVisible)}>Show/hide new posts form</button>
        {true ? <NewPostsForm addingPosts={addingPosts}/> : null}
        <button onClick={()=> setFavoriteVisible(!favoriteVisible)} >Show/hide Favorite posts</button>      
        </div>
      {postsViewRendering()}
    </div>
  );
}

export default App;
