import React from "react";
import s from "./MyPosts.module.css";
import Post from './Post/Post';
import { addPost } from "../../redux/state";
const MyPosts = (props) => {
  let postsElements = props.posts.map(p => <Post message={p.message} likeCounts={p.likeCount} />);
   
  let newPostElement = React.createRef();
  let addPost = () => {
    
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  }
  return (<div className={s.content}>
      <div>
        My posts
        <div>
          <textarea name="" id="" cols="30" rows="10" ref={newPostElement} ></textarea>
        <button onClick={addPost} >Add post</button>
          <button>Remove</button>
        </div>
        {postsElements}
      </div>
      </div>); 
}
export default MyPosts;