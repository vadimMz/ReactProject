import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Nav from "./Nav";
import Profile from "./Profile";

function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <Profile/>
        </div>
    );
}

export default App;
