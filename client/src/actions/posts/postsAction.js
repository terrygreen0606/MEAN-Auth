import axios from 'axios'
import { FETCH_POSTS, NEW_POST, DELETE_POST, POSTS_LOADING } from '../types'
import { tokenConfig } from '../auth/authAction'
import { returnErrors } from '../error/errorAction'


export const fetchPosts = () => dispatch => {

    dispatch(setPostsLoading())

    axios
        .get('/api/posts')
        .then( res => dispatch({
            type: FETCH_POSTS,
            payload: res.data
        }))
        .catch( err => dispatch(returnErrors( err.response.data, err.response.status )))
}

export const newPost = (postData) => (dispatch, getState) => {

    axios
        .post('/api/posts', postData, tokenConfig(getState))
        .then( res => dispatch({
            type: NEW_POST,
            payload: res.data
        }))
        .catch( err => dispatch(returnErrors( err.response.data, err.response.status, 'ADDPOST_FAIL' )))
}

export const deletePost = id => (dispatch, getState) => {
    
    axios
        .delete(`/api/posts/${id}`, tokenConfig(getState))
        .then( res =>dispatch({
            type: DELETE_POST,
            payload: id
        }))
        .catch( err => dispatch(returnErrors( err.response.data, err.response.status, 'DELETEPOST_FAIL' )))
}

export const setPostsLoading = () => {
    return {
        type: POSTS_LOADING
    }
}