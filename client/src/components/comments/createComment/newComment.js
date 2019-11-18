import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Alert } from 'reactstrap'

import { newComment } from '../../../actions/comments/commentsAction'
import { clearErrors } from '../../../actions/error/errorAction'

export class NewComment extends Component {

    state = {
        title: '',
        email: '',
        content: '',
        modal: false,
        msg: null
    }

    componentDidUpdate(prevProps) {

        const { error } = this.props

        if (error !== prevProps.error) {
            //Check for adding post error
            if (error.id === "ADDCOMMENT_FAIL") {
                this.setState({ msg: error.msg.msg })
            } else {
                this.setState({ msg: null })
            }
        }

        // If successfully added, close modal
        if (this.state.modal) {
            if (prevProps.comments.length !== this.props.comments.length) {
                this.toggle()
            }
        }
    }

    toggle = () => {

        this.props.clearErrors()

        this.setState({
            title: '',
            email: '',
            content: '',
            modal: !this.state.modal
        })
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
    }

    render() {
        return (
            <div>
                <Button color="info" size="sm" className="mb-3" onClick={this.toggle}>+ Comment to this post</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Create Your Comment
                    </ModalHeader>
                    { this.state.msg ? <Alert color='danger'>{ this.state.msg }</Alert> : null }
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label>Title</Label>
                                <Input type="text" name="title" value={this.state.title} onChange={this.onChange} /><br />
                                <Label>Email</Label><br />
                                <Input type="text" name="email" value={this.state.email} onChange={this.onChange} /><br />
                                <Label>Content</Label><br />
                                <Input type="textarea" name="content" value={this.state.content} onChange={this.onChange} /><br />
                                <Button color="info" size="sm" className="mt-3" block>Add Your Comment</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    error: state.error,
    comments: state.comments.comments
})

NewComment.propTypes = {
    newComment: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
    comments: PropTypes.array.isRequired
}

export default connect(mapStateToProps, {newComment, clearErrors})(NewComment)
