import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let arrayOfPosts = [
    {message: "Привет!"},
    {message: "Че не отвечаешь?!"},
    {message: "Купи паскод!"}

];


let arrOfDialogs = [
    {id: 1, name: 'Vadim'},
    {id: 2, name: 'Kate'},
    {id: 3, name: 'Putin'},
    {id: 4, name: 'Vasily'},
    {id: 5, name: 'Oleg'}

];

let arrOfMessages = [
    {id: 1, message: 'Hey'},
    {id: 2, message: 'how are you?'},
    {id: 3, message: 'OK'},
    {id: 4, message: 'Go'},
];


ReactDOM.render(<App
    arrayOfPosts={arrayOfPosts}
    arrOfDialogs={arrOfDialogs}
    arrOfMessages={arrOfMessages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
