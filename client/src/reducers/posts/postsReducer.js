import { FETCH_POSTS, NEW_POST } from '../../actions/types'

const initialState = {
    postItems: []
}

export default function ( state = initialState, action) {
    switch(action.type) {

        case FETCH_POSTS:
            return {
                ...state,
                postItems: action.payload
            }

        case NEW_POST:
            return {
                ...state,
                postItems: [action.payload, ...state.postItems]                 // Put the new post in front of the postItems array
            }

        default:
            return state
    }
}