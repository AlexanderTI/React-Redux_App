export function addUser(login) {
    return {
        type: 'ADD_USER',
        payload: login
    }
}
export function logOut() {
    return {
        type: 'ADD_USER',
        payload: ""
    }
}
