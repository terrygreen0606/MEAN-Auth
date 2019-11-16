import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { newComment } from '../../../actions/comments/commentsAction'

export class NewComment extends Component {

    constructor(props) {
        super(props)

        this.state = {
            title: '',
            email: '',
            content: '',
        }
    }

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
            <div>
                <h3>Add your comment</h3>
                <form onSubmit={this.onSubmit}>
                    <label>Title</label><br />
                    <input type="text" name="title" value={this.state.title} onChange={this.onChange} /><br />
                    <label>Email</label><br />
                    <input type="text" name="email" value={this.state.email} onChange={this.onChange} /><br />
                    <label>Content</label><br />
                    <textarea type="text" name="content" value={this.state.content} onChange={this.onChange} /><br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

NewComment.propTypes = {
    newComment: PropTypes.func.isRequired
}

export default connect(null, {newComment})(NewComment)
