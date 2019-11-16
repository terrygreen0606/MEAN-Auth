import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { fetchPosts } from '../../../actions/posts/postsAction'

import Comments from '../../comments/readComments/comments'



export class Posts extends Component {

    componentDidMount() {
        this.props.fetchPosts()   
    }

    render() {
        const posts = this.props.posts.map( post => (
            <Fragment key={post.id}>
                <h2>Posts</h2>
                <CSSTransition timeout={500} classNames="fade">
                    <ListGroupItem className="btn-pos-inlist">
                        <h5>Title : {post.title}</h5>
                        <p>Content : {post.body}</p>
                        <Button color="danger" size="sm" className="remove-btn">&times; Delete this Post</Button>
                    </ListGroupItem>
                </CSSTransition>
                <Comments postId={post.id}/>
                <hr />
            </Fragment>
            
        ))

        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className="posts-list">
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

export default connect( mapStateToProps, {fetchPosts} )(Posts)
