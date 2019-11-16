import axios from 'axios'
import { FETCH_POSTS, NEW_POST, DELETE_POST, POSTS_LOADING } from '../types'


export const fetchPosts = () => dispatch => {

    dispatch(setPostsLoading())

    axios
        .get('/api/posts')
        .then( res => dispatch({
            type: FETCH_POSTS,
            payload: res.data
        }) )
}

export const newPost = (postData) => dispatch => {

    axios
        .post('/api/posts', postData)
        .then( res => dispatch({
            type: NEW_POST,
            payload: res.data
        }))
}

export const deletePost = id => dispatch => {
    
    axios
        .delete(`/api/posts/${id}`)
        .then( res =>dispatch({
            type: DELETE_POST,
            payload: id
        }))
}

export const setPostsLoading = () => {
    return {
        type: POSTS_LOADING
    }
}