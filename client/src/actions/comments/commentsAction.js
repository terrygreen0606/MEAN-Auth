import { FETCH_COMMENTS, NEW_COMMENT } from '../types'

export const fetchComments = () => dispatch => {
    
    const reducedComments = []
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then( res => res.json())
        // .then( comments => dispatch({
        //     type: FETCH_COMMENTS,
        //     payload: comments
        // }))
        .then( comments => {
            comments.forEach(comment => {               
                if ( comment.postId <= 3 ) {
                    reducedComments.push(comment)
                }
            })
            dispatch ({
                type: FETCH_COMMENTS,
                payload: reducedComments
            })
        })
}

export const newComment = (newComment) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/comments', {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(newComment)
    })
    .then( res => res.json())
    .then( comment => dispatch({
        type: NEW_COMMENT,
        payload: comment
    }))
}