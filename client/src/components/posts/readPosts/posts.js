import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
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
            <CSSTransition key={post.id} timeout={500} classNames="fade">
                <ListGroupItem>
                    <h3>Posts</h3>
                    <h5>Title : {post.title}</h5>
                    <p>Content : {post.body}</p>
                    <Button color="danger" size="sm" onClick={this.onDeleteClick.bind(this, post.id)}>&times; Delete this Post</Button>
                    <hr />
                    <Comments postId={post.id}/>
                </ListGroupItem>
            </CSSTransition>            
        ))
        
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup>
                        {posts}
                    </TransitionGroup>
                </ListGroup>
            </Container>
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

export default connect( mapStateToProps, {fetchPosts, deletePost} )(Posts)
