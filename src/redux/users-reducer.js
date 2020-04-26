const CHANGE_FOLLOW_STATUS = 'CHANGE-FOLLOW-STATUS';


let INITIAL_PARAM = {
    users:
        {
            id: 1,
            followed: 'TRUE',
            status: "Hey this is my status",
            nick: "Ivanov I.",
            ava: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
            adress: {country: "Russia", city: "Moscow"}
        },
        /*{
            id: 2,
            followed: 'FALSE',
            status: "Hey this is my status too",
            nick: "Petrov P.",
            ava: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
            adress: {country: "Russia", city: "Saratov"}
        },*/
}

const usersReducer = (state = INITIAL_PARAM, action) => {

    switch (action.type) {

        case CHANGE_FOLLOW_STATUS: {
            return {
                ...state,
                id: action.id,
                followed: action.followed
            };
        }
        default:
            return state;
    }
};

export const ChangeFollowStatusAC = (id,followStatus) => {
    return {
        type: CHANGE_FOLLOW_STATUS,
        id: id,
        followed: followStatus
    }
};


export default usersReducer;