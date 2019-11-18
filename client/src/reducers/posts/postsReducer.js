import { FETCH_POSTS, NEW_POST, DELETE_POST, POSTS_LOADING } from '../../actions/types'

const initialState = {
    postItems: [],
    loading: false,
}

export default function ( state = initialState, action) {
    switch(action.type) {

        case FETCH_POSTS:
            return {
                ...state,
                postItems: action.payload,
                loading: false
            }

        case NEW_POST:
            return {
                ...state,
                postItems: [action.payload, ...state.postItems]                 // Put the new post in front of the postItems array
            }

        case POSTS_LOADING:
            return {
                ...state,
                loading: true
            }

        case DELETE_POST:
            return {
                ...state,
                postItems: state.postItems.filter( postItem => postItem._id !== action.payload )
            }

        default:
            return state
    }
}