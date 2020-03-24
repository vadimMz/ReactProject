import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import store from './redux/state'



export let rerenderEntireTree = (state) => {

    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={store.AddPost.bind(store)}
                 updatePost = {store.UpdatePost.bind(store)}
                 addMessage = {store.AddMessage.bind(store)}
                 updateMessage = {store.UpdateMessage.bind(store)}
            />
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);


/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import state, {AddPost, AddMessage, UpdateMessage, UpdatePost, subscribe} from "./redux/state";


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

rerenderEntireTree(state);

subscribe(rerenderEntireTree);*/
