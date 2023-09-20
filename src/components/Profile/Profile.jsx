import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { addPost, updateNewPostText } from "../redux/state";
const Profile = (props) => {
  //  console.dir(props)
  return (<div>
    <ProfileInfo />
    <MyPosts posts={props.profilePage.posts}
      newPostText = {props.profilePage.newPostText}
      dispatch={props.dispatch}
      />  
    
 </div>
   )
}
export default Profile;
