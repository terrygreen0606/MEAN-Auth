import { combineReducers } from 'redux'

import authReducer from './auth/authReducer'
import errorReducer from './error/errorReducer'
import Blogs from './blogs/blogReducer'
import Comments from './comments/commentsReducer'

export default combineReducers({
    auth: authReducer,
    error: errorReducer,
    blogs: Blogs,
    comments: Comments
})