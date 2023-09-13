import React from "react";
import {Routes,  Route} from "react-router-dom";
import  s from "./App.module.css";
import Header from "./components/Header/Header.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Options from "./components/Options/Options"

const App = (props) => {
  return (
    <div className={s.wrapper_container }>
      <Header className={s.header} />
      
        <Nav className={s.nav}/> 
      <div className={s.content}>
        <Routes>  
          <Route path="profile"
            element={<Profile state={props.state.profilePage} />} />
          <Route path="dialogs"
            element={<Dialogs state={props.state.dialogsPage} />} />
        <Route path="music" element={<Music />} />
        <Route path="news" element={<News />} />
        <Route  path="options" element={<Options /> } />
          </Routes>
      </div>
      </div>
    
  );
};

export default App;
