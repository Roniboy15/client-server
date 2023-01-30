const API_URL = "http://localhost:3010/"
export const TOKEN_KEY = "token"
    //? AUTH ROUTERS
export const SIGN_UP_URL = API_URL + 'users'
export const LOGIN_URL = API_URL + 'users/login'
export const USER_INFO = API_URL + 'users/userInfo'
export const CHECK_TOKEN = API_URL + 'users/authUser'


// ? TODOS ROUTERS
export const GET_TODOS_URL = API_URL + 'todos'
export const ADD_TODO_URL = API_URL + 'todos'
export const EDIT_TODO_URL = API_URL + 'todos/'