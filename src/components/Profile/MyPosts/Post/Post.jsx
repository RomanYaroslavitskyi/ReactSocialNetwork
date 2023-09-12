import React from "react";
import s from "./Post.module.css";
const Post = (props) => {
  
  return ( 
      
      <div className={s.item}> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaDuclD6P6E8YZ3FOdgEA7Je8o9h8Dc_KIgA&usqp=CAU" />{props.message}
      <div><span>like{ props.like}</span></div></div>
     
      
    );
}
export default Post;