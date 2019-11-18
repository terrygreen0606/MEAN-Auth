import { combineReducers } from 'redux'

import authReducer from './auth/authReducer'
import errorReducer from './error/errorReducer'
import Posts from './posts/postsReducer'
import Comments from './comments/commentsReducer'

export default combineReducers({
    auth: authReducer,
    error: errorReducer,
    posts: Posts,
    comments: Comments
})