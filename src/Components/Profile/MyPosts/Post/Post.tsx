import React from 'react';
import s from './Post.module.css';

type PostType = {
    message: string
    likesCount: string
}

const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            <img
                src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;