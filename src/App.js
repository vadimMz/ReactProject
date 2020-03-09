import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/Dialogs/DIalogs";

function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <div className='app-wrapper-content'>

                <Dialogs/>
            </div>

            {/*<Profile/>*/}
        </div>
    );
}

export default App;
