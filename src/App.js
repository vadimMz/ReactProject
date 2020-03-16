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
import Sidebar from "./components/Nav/Sidebar/Sidebar";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/Profile' render={() => <Profile posts = {props.state.profilePage.posts}/>}/>
                    <Route path='/Dialogs' render={() => <Dialogs dialogs = {props.state.dialogsPage.dialogs}
                                                                  messages = {props.state.dialogsPage.messages}/>}/>
                    <Route path='/Messages' render={() => <Messages/>}/>
                    <Route path='/News' render={() => <News/>}/>
                    <Route path='/Music' render={() => <Music/>}/>
                    <Route path='/Settings' render={() => <Settings/>}/>
                    {/*<Route path='/Friends' render={() => <Sidebar/>}/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
