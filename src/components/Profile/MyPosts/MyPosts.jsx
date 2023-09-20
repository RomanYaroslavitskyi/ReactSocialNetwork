import React from "react";
import s from "./MyPosts.module.css";
import Post from './Post/Post';
import { addPost } from "../../redux/state";
const MyPosts = (props) => {
  // console.dir(props)
  let postsElements = props.posts.map((p,i) => <Post message={p.message} likeCounts={p.likeCount}  key={`post-${i}`}/>);
  let newPostElement = React.createRef();
  
  let addPost = () => {
    props.dispatch({ type:'ADD-POST'});
    
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text };
    props.dispatch(action);
  };

  
  return (<div className={s.content}>
      <div>
        My posts
        <div>
        <textarea name="" onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText} />
        <button onClick={addPost} >Add post</button>
          <button>Remove</button>
        </div>
      {postsElements}
      </div>
      </div>); 
};
export default MyPosts;