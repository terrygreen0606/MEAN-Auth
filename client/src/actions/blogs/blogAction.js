import axios from 'axios'
import { FETCH_BLOGS, NEW_BLOG, DELETE_BLOG, BLOGS_LOADING } from '../types'
import { tokenConfig } from '../auth/authAction'
import { returnErrors } from '../error/errorAction'


export const fetchBlogs = () => dispatch => {

    dispatch(setBlogsLoading())

    axios
        .get('/api/blogs')
        .then( res => dispatch({
            type: FETCH_BLOGS,
            payload: res.data
        }))
        .catch( err => dispatch(returnErrors( err.response.data, err.response.status )))
}

export const newBlog = (blogData) => (dispatch, getState) => {

    axios
        .post('/api/blogs', blogData, tokenConfig(getState))
        .then( res => dispatch({
            type: NEW_BLOG,
            payload: res.data
        }))
        .catch( err => dispatch(returnErrors( err.response.data, err.response.status, 'ADDBLOG_FAIL' )))
}

export const deleteBlog = id => (dispatch, getState) => {
    
    axios
        .delete(`/api/blogs/${id}`, tokenConfig(getState))
        .then( res =>dispatch({
            type: DELETE_BLOG,
            payload: id
        }))
        .catch( err => dispatch(returnErrors( err.response.data, err.response.status, 'DELETEBLOG_FAIL' )))
}

export const setBlogsLoading = () => {
    return {
        type: BLOGS_LOADING
    }
}