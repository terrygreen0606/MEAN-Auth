import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import './comments.css'

import { fetchComments, deleteComment } from '../../../actions/comments/commentsAction'

import NewComment from '../../comments/createComment/newComment'

export class Comments extends Component {

    componentDidMount() {
        this.props.fetchComments()
    }

    deleteOnClick = (id) => {
        this.props.deleteComment(id)
    }

    render() {

        const comments = this.props.comments.map(comment => {
            if (this.props.postId === comment.postId) {
                return (
                    <CSSTransition key={comment._id} timeout={500} classNames="fade">
                        <ListGroupItem>
                            <h4>Title : {comment.name}</h4>
                            <h5>Email : {comment.email}</h5>
                            <p>Content : {comment.body}</p>
                            <Button color="warning" size="sm" onClick={this.deleteOnClick.bind(this, comment._id)}>&times; Delete</Button>
                        </ListGroupItem>
                    </CSSTransition>
                )
            } else {
                return null
            }
        })

        return (
            <Container className="comment-pos">
                <h4 className="mt-3">Comments</h4>
                <NewComment postId={this.props.postId}/>
                <ListGroup>
                    <TransitionGroup>
                        {comments}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

Comments.propTypes = {
    fetchComments: PropTypes.func.isRequired,
    comments: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    comments: state.comments.comments,
})

export default connect(mapStateToProps, {fetchComments, deleteComment})(Comments)
