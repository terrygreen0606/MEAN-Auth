import axios from 'axios'
import { returnErrors } from '../error/errorAction'
import { USER_LOADING, USER_LOADED, AUTH_ERROR, REGISTER_SUCCESS, REGISTER_FAIL, LOGOUT_SUCCESS, LOGIN_SUCCESS, LOGIN_FAIL } from '../types'

// Check token and load user
export const loadUser = () => (dispatch, getState) => {
    // User Loading
    dispatch({ type: USER_LOADING })

    axios.get( '/api/auth/user', tokenConfig(getState) )
        .then( res => dispatch({
            type: USER_LOADED,
            payload: res.data
        }))
        .catch( err => {
            dispatch(returnErrors( err.response.data, err.response.status ))
            dispatch({
                type: AUTH_ERROR
            })
        })
}

// Register user
export const register = ({ username, email, password }) => dispatch => {
    
    // Headers
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    // Request Body
    const body = JSON.stringify({ username, email, password })

    axios.post('/api/users', body, config)
        .then( res => dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        }))
        .catch( err => {
            dispatch(returnErrors( err.response.data, err.response.status, "REGISTER_FAIL" ))
            dispatch({
                type: REGISTER_FAIL
            })
        })
}

// Login user
export const login = ({ email, password }) => dispatch => {
    
    // Headers
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    // Request Body
    const body = JSON.stringify({ email, password })

    axios.post('/api/auth', body, config)
        .then( res => dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        }))
        .catch( err => {
            dispatch(returnErrors( err.response.data, err.response.status, "LOGIN_FAIL" ))
            dispatch({
                type: LOGIN_FAIL
            })
        })
}

// Logout user
export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}

// Setup config/headers and token
export const tokenConfig = getState => {

    // Get token from localstorage
    const token = getState().auth.token

    // Headers
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    // If token, add to headers
    if (token) {
        config.headers['x-auth-token'] = token
    }

    return config
}