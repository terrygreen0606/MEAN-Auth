import { FETCH_COMMENTS, NEW_COMMENT, DELETE_COMMENT, COMMENTS_LOADING } from '../../actions/types'

const initialState = {
    comments: [],
    loading: false
}

export default function ( state = initialState, action) {

    switch (action.type) {
        
        case FETCH_COMMENTS:
            return {
                ...state,
                comments: action.payload,
                loading: false
            }

        case NEW_COMMENT:
            return {
                ...state,
                comments: [action.payload, ...state.comments],
            }

        case COMMENTS_LOADING:
            return {
                ...state,
                loading: true
            }

        case DELETE_COMMENT:
            return {
                ...state,
                comments: state.comments.filter( comment => comment._id !== action.payload)
            }

        default:
            return state
    }
}