//Заглушка

let INITIAL_PARAM = {
        friends: [
            {id: 1, name: 'Andrew'},
            {id: 2, name: 'Alexey'},
            {id: 3, name: 'Pauleg'}
        ]
};

const sidebarReducer = (state = INITIAL_PARAM, action) => {
    return state;
};

export default sidebarReducer;
