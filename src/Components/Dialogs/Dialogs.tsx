import React from 'react';
import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Dima
                </div>
                <div className={s.dialog}>
                    Slavnk
                </div>
                <div className={s.dialog}>
                    Vasya
                </div>
                <div className={s.dialog}>
                    Roma
                </div>
                <div className={s.dialog}>
                    Kat
                </div>
                <div className={s.dialog}>
                    Archi
                </div>
            </div>
            <div className={s.messages}>
<div className={s.message}>Hi</div>
<div className={s.message}>How is your it-kamasutra?</div>
<div className={s.message}>Yo</div>
            </div>
        </div>

    )
}

export default Dialogs;