import axios from 'axios'
import { FETCH_COMMENTS, NEW_COMMENT, DELETE_COMMENT, COMMENTS_LOADING } from '../types'
import { returnErrors } from '../error/errorAction'


export const fetchComments = () => dispatch => {

    dispatch(setCommentsLoading())

    axios
        .get('/api/comments')
        .then( res => dispatch({
            type: FETCH_COMMENTS,
            payload: res.data
        }))
}

export const newComment = (newComment) => dispatch => {
    
    axios
        .post('/api/comments', newComment)
        .then( res => dispatch({
            type: NEW_COMMENT,
            payload: res.data
        }))
        .catch( err => dispatch(returnErrors( err.response.data, err.response.status, 'ADDCOMMENT_FAIL' )))
}

export const deleteComment = (id) => dispatch => {
    
    axios
        .delete(`/api/comments/${id}`)
        .then( res => dispatch({
            type: DELETE_COMMENT,
            payload: id
        }))
        .catch( err => dispatch(returnErrors( err.response.data, err.response.status, 'DELETECOMMENT_FAIL' )))
}

export const setCommentsLoading = () => {
    return {
        type: COMMENTS_LOADING,
    }
}