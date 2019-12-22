export function getData() {
    return {
        type: 'RECEIVE_DATA',
        payload: payload
    }
}
export function deleteItem(id) {
    return {
        type: 'DELETE_ITEM',
        payload: id
    }
}
