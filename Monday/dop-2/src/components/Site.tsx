import React from 'react';
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import styles from './Site.module.css'
import {PageOne} from "./pages/PageOne";
import {PageTwo} from "./pages/PageTwo";
import {PageThree} from "./pages/PageThree";
import {Error404} from "./pages/Error404";
import {Page} from "./pages/Page";


export const Site = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div><NavLink className={({isActive})=>isActive ? styles.active : styles.nav} to={"/page/0"}>Page1</NavLink></div>
                    <div><NavLink className={({isActive})=>isActive ? styles.active : styles.nav} to={"/page/1"}>Page2</NavLink></div>
                    <div><NavLink className={({isActive})=>isActive ? styles.active : styles.nav} to={"/page/2"}>Page3</NavLink></div>
                    <p><a href="/page3">Native JS Link</a></p>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={"/"} element={<Navigate to={"/page/0"} />}/>
                        <Route path={"/page1"} element={<Page/>}/>
                        <Route path={"/page2"} element={<Page/>}/>
                        <Route path={"/page3"} element={<Page/>}/>
                        <Route path={"*"} element={<Error404/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
};

