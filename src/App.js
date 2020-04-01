import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/Dialogs/DIalogs";
import {Route} from "react-router-dom";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = (props) => {

    return (

            <div className='app-wrapper'>
                <Header/>
                <Nav name = {props.state.sidebar.friends}
                />
                <div className='app-wrapper-content'>

                    <Route path='/Profile'
                           render={() => <Profile
                               posts = {props.state.profilePage.posts}
                               newPostText = {props.state.profilePage.newPostText}
                               dispatch = {props.dispatch}
/*                               addPost = {props.addPost}
                               updatePost = {props.updatePost}*/
                           />}/>

                    <Route path='/Dialogs'
                           render={() => <Dialogs
                               dialogs = {props.state.dialogsPage.dialogs}
                               messages = {props.state.dialogsPage.messages}
                               newMessageText = {props.state.dialogsPage.newMessageText}
                               dispatch = {props.dispatch}
/*                               addMessage = {props.addMessage}
                               updateMessage = {props.updateMessage}*/
                           />}/>

                    {/*<Route path='/Messages' render={() => <Messages/>}/>*/}
                    <Route path='/News' render={() => <News/>}/>
                    <Route path='/Music' render={() => <Music/>}/>
                    <Route path='/Settings' render={() => <Settings/>}/>
                    {/*<Route path='/Friends' render={() => <Sidebar/>}/>*/}
                </div>
            </div>
    );
}

export default App;
/*

import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/Dialogs/DIalogs";
import {Route} from "react-router-dom";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {addPost} from "./redux/state";
//import Sidebar from "./components/Nav/Sidebar/Sidebar";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Nav name = {props.state.sidebar.friends}/>
            <div className='app-wrapper-content'>

                <Route path='/Profile'
                       render={() => <Profile
                           posts = {props.state.profilePage.posts}
                           addPost = {props.addPost}/>}/>

                <Route path='/Dialogs'
                       render={() => <Dialogs
                           dialogs = {props.state.dialogsPage.dialogs}
                           messages = {props.state.dialogsPage.messages}/>}/>

                <Route path='/Messages' render={() => <Messages/>}/>
                <Route path='/News' render={() => <News/>}/>
                <Route path='/Music' render={() => <Music/>}/>
                <Route path='/Settings' render={() => <Settings/>}/>
                {/!*<Route path='/Friends' render={() => <Sidebar/>}/>*!/}
            </div>
        </div>
    );
}

export default App;

*/
