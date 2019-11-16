import { combineReducers } from 'redux'

import Posts from './posts/postsReducer'
import Comments from './comments/commentsReducer'

export default combineReducers({
    posts: Posts,
    comments: Comments
})