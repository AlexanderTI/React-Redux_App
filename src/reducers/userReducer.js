const userReducer = (state = {
    userInfo: {},
    isAuthorized: false,
}, action) => {
    {
        switch (action.type) {
            case 'ADD_USER':
                state = {
                    ...state,
                    userInfo: action.payload,
                    isAuthorized: true
                };
                break;
            case 'LOGOUT':
                state = {
                    ...state,
                    login: action.payload,
                    isAuthorized: false
                };
                break;
        }
        return state
    }
};
export default userReducer
