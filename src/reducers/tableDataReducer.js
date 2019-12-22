const tableDataReducer = (state = {
    data: [],
}, action) => {{
    switch (action.type) {
        case 'RECEIVE_DATA':
            state = {
                ...state,
                data: action.payload
            };
            break;
        case 'DELETE_ITEM':
            state = {
                ...state,
                login: action.payload,
            };
            break;
    }
    return state
}};
export default tableDataReducer