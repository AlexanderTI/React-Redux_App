const tableDataReducer = (state = {
    data: [],
}, action) => {{
    switch (action.type) {
        case 'RECEIVE_DATA':
            console.log(action.type)
            state = {
                ...state,
                data: action.payload
                // data: [...action.payload],
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