import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {AddPost, AddMessage, UpdateMessage, UpdatePost} from "./redux/state";


export let rerenderEntireTree = (state) => {

ReactDOM.render(
    <BrowserRouter>
        <App state={state}
             addPost={AddPost}
             updatePost = {UpdatePost}
             addMessage = {AddMessage}
             updateMessage = {UpdateMessage}
        />
    </BrowserRouter>, document.getElementById('root'));
}
