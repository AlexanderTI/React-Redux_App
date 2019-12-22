export function getData() {
    return {
        type: 'RECEIVE_DATA',
        payload: payload
        // payload: fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
        // .then(data =>{return data.json()})
        // .then(res => res)
    }
}
export function deleteItem(id) {
    return {
        type: 'DELETE_ITEM',
        payload: id
    }
}
