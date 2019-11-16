import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchPosts } from '../../../actions/posts/postsAction'

import Comments from '../../comments/readComments/comments'



export class Posts extends Component {

    componentDidMount() {
        this.props.fetchPosts()   
    }

    render() {
        const posts = this.props.posts.map( post => (
            <div key={post.id}>
                <h2>Posts</h2>
                <h4>Title : {post.title}</h4>
                <p>Content : {post.body}</p>
                <Comments postId={post.id}/>
                <hr />
            </div>
        ))

        return (
            <div>
                {posts}
            </div>
        )
    }
}

const mapStateToProps = state => ({

    posts: state.posts.postItems,
})

Posts.propTypes = {

    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
}

export default connect( mapStateToProps, {fetchPosts} )(Posts)
