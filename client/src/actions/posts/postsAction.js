import { FETCH_POSTS, NEW_POST } from '../types'

// POSTS

export const fetchPosts = () => dispatch => {
    const reducedPosts = []
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then( res => res.json())
        // .then( posts => dispatch({
        //     type: FETCH_POSTS,
        //     payload: posts
        // }))
        .then( posts => {
            posts.forEach(post => {
                if ( reducedPosts.length < 3 ) {
                    reducedPosts.push(post)
                }
            })
            dispatch ({
                type: FETCH_POSTS,
                payload: reducedPosts
            })
        })
}

export const newPost = (postData) => dispatch => {

    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then( res => res.json())
    .then( post => dispatch({
        type: NEW_POST,
        payload: post
    }))
}