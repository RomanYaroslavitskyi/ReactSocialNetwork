import React from "react";
import {  NavLink } from "react-router-dom";
import s from "./Nav.module.css";


const Nav = () => {
     let activeStyle = {
  color: "gold"
  };
  let activeClassName = "underline";
  return (<div className={s.nav}><nav>
        <ul>
          <li className={s.item}>
        <NavLink to="profile"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Profile</NavLink>
          </li>
         <li className={s.item}>
        <NavLink to="message"
          style={({ isActive }) =>
            isActive ? activeStyle : undefined}>Messages</NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="music"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Music</NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="news"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>News</NavLink>
          </li>
          <li className={s.item}>
            <NavLink  to="options"
          style={({ isActive }) =>
            isActive ? activeStyle : undefined}>Options</NavLink>
    </li>
        </ul> 
      </nav></div>);
}
export default Nav;