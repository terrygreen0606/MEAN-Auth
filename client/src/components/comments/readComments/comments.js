import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import './comments.css'

import { fetchComments, deleteComment } from '../../../actions/comments/commentsAction'
import NewComment from '../../comments/createComment/newComment'
import Pagination from '../../../components/pagination'

export class Comments extends Component {

    state = {
        currentPage: 1,
        commentsPerPage: 2
    }

    componentDidMount() {
        this.props.fetchComments()
    }

    deleteOnClick = (id) => {
        this.props.deleteComment(id)
    }

    paginate = (pageNumber) => {
        this.setState({
            currentPage: pageNumber
        })
    }

    countCommentsPerPost = (postId, ) => {

    }

    render() {

        // Get Current Posts
        const { currentPage, commentsPerPage } = this.state
        const indexOfLastComment = currentPage * commentsPerPage
        const indexOfFirstComment = indexOfLastComment - commentsPerPage

        const commentsPerPost = []
        this.props.comments.map(comment => {
            if (this.props.postId === comment.postId) {
                return commentsPerPost.push(comment)
            } else {
                return null
            }
        })
        const currentComments = commentsPerPost.slice( indexOfFirstComment, indexOfLastComment )

        const showComments = currentComments.map(comment => (
            <CSSTransition key={comment._id} timeout={500} classNames="fade">
                <ListGroupItem>
                    <h4>Title : {comment.name}</h4>
                    <h5>Email : {comment.email}</h5>
                    <p>Content : {comment.body}</p>
                    { this.props.isAuthenticated 
                    ? <Button color="warning" size="sm" onClick={this.deleteOnClick.bind(this, comment._id)}>&times; Delete</Button>
                    : null }
                </ListGroupItem>
            </CSSTransition>
        ))

        return (
            <Container className="comment-pos">

                { this.props.commentsLoading

                ? <h4>Loading comments...</h4>
                : <Fragment>
                    <ListGroup>
                        <TransitionGroup>
                            <CSSTransition timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <h4 className="mt-3">Comments</h4>
                                    { this.props.isAuthenticated 
                                    ? <NewComment postId={this.props.postId}/> 
                                    : null }
                                </ListGroupItem>
                            </CSSTransition>
                        </TransitionGroup>
                    </ListGroup>
                    
                    <ListGroup>
                        <TransitionGroup>
                            {showComments}
                        </TransitionGroup>
                        <Pagination itemsPerPage={commentsPerPage} totalItems={commentsPerPost.length} paginate={this.paginate}/>
                    </ListGroup>
                  </Fragment> }
                
            </Container>
        )
    }
}

Comments.propTypes = {
    fetchComments: PropTypes.func.isRequired,
    comments: PropTypes.array.isRequired,
    isAuthenticated: PropTypes.bool,
    commentsLoading: PropTypes.bool
}

const mapStateToProps = state => ({
    comments: state.comments.comments,
    isAuthenticated: state.auth.isAuthenticated,
    commentsLoading: state.comments.loading
})

export default connect(mapStateToProps, {fetchComments, deleteComment})(Comments)
