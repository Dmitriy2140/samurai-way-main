import React from "react";
import s from './ProfileInfo.module.css';
import MyPosts from "../MyPosts/MyPosts";

const ProfileInfo = () => {
    return (
        <div>
        <div>
        <img src="https://www.sostav.ru/images/news/2019/06/20/d9eelmcf_md.jpg"/>
        </div>
    <div className={s.descriptionBlock}>
        Ava + discription
    </div>
            </div>
    )
}

export default ProfileInfo;