import { FETCH_COMMENTS, NEW_COMMENT, DELETE_COMMENT } from '../../actions/types'

const initialState = {
    comments: []
}

export default function ( state = initialState, action) {

    switch (action.type) {
        
        case FETCH_COMMENTS:
            return {
                ...state,
                comments: action.payload
            }

        case NEW_COMMENT:
            return {
                ...state,
                comments: [action.payload, ...state.comments]
            }

        case DELETE_COMMENT:
            return {
                ...state,
                comments: state.comments.filter( comment => comment.id !== action.payload)
            }

        default:
            return state
    }
}