import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import './comments.css'

import { fetchComments } from '../../../actions/comments/commentsAction'

import NewComment from '../../comments/createComment/newComment'

export class Comments extends Component {

    componentDidMount() {
        this.props.fetchComments()
    }

    commentsAfterPost(postId, name, email, body) {
        
        if (this.props.postId === postId) {
            return (
                <CSSTransition>
                    <ListGroupItem className="btn-pos-inlist">
                        <h4>Title : {name}</h4>
                        <h5>Email : {email}</h5>
                        <p>Content : {body}</p>
                        <Button color="danger" size="sm" className="remove-btn">&times; Delete</Button>
                    </ListGroupItem>
                </CSSTransition>
            )
        }
    }

    render() {
        const comments = this.props.comments.map( comment => (
            <Fragment key={comment.id}>
                {this.commentsAfterPost(comment.postId, comment.name, comment.email, comment.body)}
            </Fragment>
        ))

        return (
            <Container className="position">
                <ListGroup>
                    <TransitionGroup>
                        <h4 className="mt-3">Comments</h4>
                        <NewComment postId={this.props.postId}/>
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

export default connect(mapStateToProps, {fetchComments})(Comments)
