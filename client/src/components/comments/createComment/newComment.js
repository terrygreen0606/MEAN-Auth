import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { newComment } from '../../../actions/comments/commentsAction'

export class NewComment extends Component {

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         title: '',
    //         email: '',
    //         content: '',
    //     }
    // }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()

        const newComment = {
            name: this.state.title,
            email: this.state.email,
            body: this.state.content,
            postId: this.props.postId,
        }

        this.props.newComment(newComment)

        this.setState({
            title: '',
            email: '',
            content: '',
        })
    }

    render() {
        return (
            <Container>
                {/* <form onSubmit={this.onSubmit}>
                    <label>Title</label><br />
                    <input type="text" name="title" value={this.state.title} onChange={this.onChange} /><br />
                    <label>Email</label><br />
                    <input type="text" name="email" value={this.state.email} onChange={this.onChange} /><br />
                    <label>Content</label><br />
                    <textarea type="text" name="content" value={this.state.content} onChange={this.onChange} /><br />
                    <button type="submit">Submit</button>
                </form> */}
                <Button color="info" size="sm" className="mb-3">+ Comment to this post</Button>
            </Container>
        )
    }
}

NewComment.propTypes = {
    newComment: PropTypes.func.isRequired
}

export default connect(null, {newComment})(NewComment)
