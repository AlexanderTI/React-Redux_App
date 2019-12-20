const userReducer = (state = {
    user: 1
}, action) => {{
    switch (action.type) {
        case 'ADD_USER':
            state = {
                ...state,
                user: action.payload
            };
            break;
        case 'LOGOUT':
            state = {
                ...state,
                user: action.payload
            };
            break;
    }
    return state
}};
export default userReducer
