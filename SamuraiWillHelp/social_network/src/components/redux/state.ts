import {rerenderEntireTree} from '../../render';

export type RootType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type ProfilePageType = {
    posts: PostType[]
    updateText: string
}

export type MessagesPageType = {
    dialogsData: DialogType[]
    messagesData: MessageType[]
}


let state: RootType = {
    profilePage: {
        posts:
            [
                {id: 1, message: 'my first post', likesCount: 12},
                {id: 2, message: 'how are you ?', likesCount: 11},
                {id: 3, message: 'put likes', likesCount: 17},
                {id: 4, message: 'put liqweqwekes', likesCount: 17},
                {id: 5, message: 'put likqweqwees', likesCount: 17},
                {id: 6, message: 'put qweeqweqw', likesCount: 17}
            ],
        updateText: '',
    },
    messagesPage: {
        dialogsData: [
            {id: 1, name: 'Yulia'},
            {id: 2, name: 'semen'},
            {id: 3, name: 'Tereza'},
            {id: 4, name: 'Lola'},
            {id: 5, name: 'Evgenia'},
            {id: 6, name: 'Sonja'}
        ],
        messagesData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-Kamasutra?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
        ]
    }
}

export let addPost = (postMessage: any) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    
    state.profilePage.posts.unshift(newPost)
    rerenderEntireTree(state);
}


export default state;