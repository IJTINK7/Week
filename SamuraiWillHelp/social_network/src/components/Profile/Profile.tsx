import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../redux/state';

type ProfileProps = {
    profilePage:ProfilePageType
    addPost: (postMessage: string)=> void
}

const Profile = (props:ProfileProps) => {

    return <div>
        <ProfileInfo/>
        <MyPosts profilePage={props.profilePage} addPost={props.addPost} />
    </div>

};

export default Profile;