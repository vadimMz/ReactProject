import React from 'react';

import SidebarFriends from "./SidebarFriends";
import StoreContext from "../../../redux/store-context";

function SidebarFriendsContainer(props) {


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
}

export default SidebarFriendsContainer;
