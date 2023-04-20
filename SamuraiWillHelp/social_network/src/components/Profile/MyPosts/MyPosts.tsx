import React, {ChangeEvent, useRef, useState} from 'react';
import s from './MyPosts.module.css';
import state, {PostType, ProfilePageType} from '../../redux/state';
import Post from './Post/Post';
import message from '../../Dialogs/Message/Message';

type PropsType = {
    profilePage: ProfilePageType
    addPost: (postMessage: string)=> void
}

const MyPosts = (props: PropsType) => {
    let newTextElement = useRef<HTMLTextAreaElement>(null);

    const mappedPosts = props.profilePage.posts.map(p => {
        return (
            <Post key={p.id} message={p.message} likesCount={p.likesCount}/>
        )
    })


    const addPostHandler = () => {
        if(newTextElement.current){
            props.addPost(newTextElement.current.value)
        }
    }



    return <div className={s.postsBlock}>
        <h3>My Posts</h3>
        <div>
            <div>
                <textarea ref={newTextElement}></textarea>
            </div>
            <div>
                <button onClick={addPostHandler}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {mappedPosts}
        </div>
    </div>

};

export default MyPosts;