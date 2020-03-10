import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/Dialogs/DIalogs";
import {BrowserRouter, Route} from "react-router-dom";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/Profile'> <Profile/></Route>
                    <Route path='/Dialogs'> <Dialogs/></Route>
                    <Route path='/Messages'> <Messages/></Route>
                    <Route path='/News'> <News/></Route>
                    <Route path='/Music'> <Music/></Route>
                    <Route path='/Settings'> <Settings/></Route>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
