import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css"


const DialogItem = (props) => { 
      let activeStyle = {
  color: "gold"
  };
  let activeClassName = "underline";
    let path = "dialog/*" + props.id;
    let aClass =  ({ isActive }) => isActive ? activeStyle : undefined ;
    
return <div className={s.dialog}>
        <NavLink to={path} style= {aClass} >{ props.name}</NavLink>
                    </div>
};

       
export default DialogItem;