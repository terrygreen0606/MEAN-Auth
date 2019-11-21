import { FETCH_BLOGS, NEW_BLOG, DELETE_BLOG, BLOGS_LOADING } from '../../actions/types'

const initialState = {
    blogItems: [],
    loading: false,
}

export default function ( state = initialState, action) {
    switch(action.type) {

        case FETCH_BLOGS:
            return {
                ...state,
                blogItems: action.payload,
                loading: false
            }

        case NEW_BLOG:
            return {
                ...state,
                blogItems: [action.payload, ...state.blogItems]                 // Put the new BLOG in front of the BLOGItems array
            }

        case BLOGS_LOADING:
            return {
                ...state,
                loading: true
            }

        case DELETE_BLOG:
            return {
                ...state,
                BLOGItems: state.blogItems.filter( blogItem => blogItem._id !== action.payload )
            }

        default:
            return state
    }
}