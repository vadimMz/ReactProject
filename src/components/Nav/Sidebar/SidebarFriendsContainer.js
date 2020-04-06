import React from 'react';

import SidebarFriends from "./SidebarFriends";
import {connect} from "react-redux";
import mapStateToProps from "react-redux/es/connect/mapStateToProps";
//import StoreContext from "../../../redux/store-context";

/*function SidebarFriendsContainer(props) {


    return (
        <StoreContext.Consumer>
            {
                (value) => {
                    let state = value.getState();
                    return (
                        <SidebarFriends state={state}/>
                    )
                }
            }
        </StoreContext.Consumer>

    );
}*/
let mapStateToPropsSidebarFriends = (state) => {
    return {
        state : state
    }
}
const SidebarFriendsContainer = connect(mapStateToPropsSidebarFriends,null)(SidebarFriends);

export default SidebarFriendsContainer;
