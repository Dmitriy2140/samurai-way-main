import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

// type DialogItemType = {
//     id: number
//     name: string
// }

const DialogItem = (props:any) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>

    )
}

// type MessageType = {
//     message: string
// }

const Message = (props:any) => {
    return (
        <div
            className={s.message}>{props.message}
        </div>
    )
}

const Dialogs = (props:any) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dima" id="1"/>
                <DialogItem name="Slavnk" id="2"/>
                <DialogItem name="Vasya" id="3"/>
                <DialogItem name="Roma" id="4"/>
                <DialogItem name="Kat" id="5"/>
                <DialogItem name="Archi" id="6"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How is your it-kamasutra?"/>
                <Message message="Yo"/>
                </div>
                </div>
                )
                }

                export default Dialogs;