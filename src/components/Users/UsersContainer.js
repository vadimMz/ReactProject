import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {ChangeFollowStatusAC} from "../../redux/users-reducer";


let mapDispatchToProps = (dispatch) => {
    return {
        ChangeFollowStatus: (id, followStatus) => {
            let action = ChangeFollowStatusAC(id, followStatus);
            dispatch(action);

            /*
            DoFollow: (id) => {
                let action = DoFollowActionCreator(id);
                dispatch(action);
            },
            DoUnfollow: (id) => {
                let action = DoUnfollowActionCreator(id);
                dispatch(action)
            }
            */
        }
    }
}

    let mapStateToProps = (state) => {
        return {
            users: state.usersPage.users
        }
    }

    const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

    export default UsersContainer;
