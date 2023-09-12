import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = () => {
    let dialogs =
        [
            { id: 1, name: "Dima" },
            { id: 2, name: "Nina" },
            { id: 3, name: "Andrew" },
            { id: 4, name:"Shasha"},
            { id: 5, name: "Artem" },
            { id: 6, name: "Kostya" },
            { id: 7, name:"Roman"},
        ]
    
        
    
    let messages =
        [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Wahat`s up?" },
        { id: 4, message: "What did you do?" },
        {id:5, message:"It`s you?"},
        
        ]
    let dialogsElements = dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = messages.map((m) => <Message id={m.id} message={m.message} />);
         return (
            < div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                
                <div className={s.messages}>
                     {messagesElements}
                </div>
            </div>
        );
    }
export default Dialogs;