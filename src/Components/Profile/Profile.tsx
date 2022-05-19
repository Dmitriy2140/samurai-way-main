import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://www.sostav.ru/images/news/2019/06/20/d9eelmcf_md.jpg"/>
            </div>
            <div>
                Ava + discription
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;