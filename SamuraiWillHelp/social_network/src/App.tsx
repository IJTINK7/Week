import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Route, Routes} from 'react-router-dom';
import {RootType} from './components/redux/state';


type AppProps = {
    state: RootType,
    addPost:any
}


function App(props:AppProps) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path={'/profile'} element={<Profile profilePage={props.state.profilePage}/>}/>
                    <Route path={'/dialogs'} element={<Dialogs/>}/>
                </Routes>
            </div>
        </div>
    );
}


export default App;
