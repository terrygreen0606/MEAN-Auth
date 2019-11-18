import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { fetchPosts, deletePost } from '../../../actions/posts/postsAction'

import Comments from '../../comments/readComments/comments'


export class Posts extends Component {

    componentDidMount() {
        this.props.fetchPosts()   
    }

    onDeleteClick = (id) => {
        this.props.deletePost(id)
    }

    render() {
        const posts = this.props.posts.map( post => (
            <CSSTransition key={post._id} timeout={500} classNames="fade">
                <ListGroupItem>
                    <h3>Posts</h3>
                    <h5>Title : {post.title}</h5>
                    <p>Content : {post.body}</p>
                    { this.props.isAuthenticated
                    ? <Button color="danger" size="sm" onClick={this.onDeleteClick.bind(this, post._id)}>&times; Delete this Post</Button>
                    : null }
                    <hr />
                    <Comments postId={post._id} />
                </ListGroupItem>
            </CSSTransition>            
        ))

        return (
            <ListGroup>
                <TransitionGroup>
                    {posts}
                </TransitionGroup>
            </ListGroup>
        )
    }
}

const mapStateToProps = state => ({

    posts: state.posts.postItems,
    isAuthenticated: state.auth.isAuthenticated
})

Posts.propTypes = {

    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    isAuthenticated: PropTypes.bool
}

export default connect( mapStateToProps, {fetchPosts, deletePost} )(Posts)
