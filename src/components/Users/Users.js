import React from 'react';
import styles from './Users.module.css';

const Users = (props) => {

    let followBtn = React.createRef();
    let FollowStatus = () => props.users.followed === 'TRUE' ? 'UNFOLLOW' : 'FOLLOW';


    let onClickFollowBtn = () => {
        if (props.users.followed === 'TRUE') {
            props.ChangeFollowStatus(props.users.id,'FALSE');

        } else {
            props.ChangeFollowStatus(props.users.id,'TRUE');
        }
        followBtn.current.innerHTML = FollowStatus();
    }

    return (
        <div className={styles.Users}>
            <div className={styles.avafio}>
                <div className={styles.ava}>
                    <img
                        src={props.users.ava}></img>
                </div>
                <div className={styles.fio}>
                    <span>{props.users.nick}</span>
                </div>
            </div>
            <div className={styles.statusfollowed}>
                <div className={styles.status}>
                    <span>{props.users.status}</span>
                </div>

                <div className={styles.followBtn}>
                    <button ref={followBtn} onClick={onClickFollowBtn}>{FollowStatus}</button>
                </div>
            </div>
        </div>
    );
}

export default Users;
