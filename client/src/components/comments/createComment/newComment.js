import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap'

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
    state = {
        title: '',
        email: '',
        content: '',
        modal: false
    }

    toggle = () => {
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

        this.toggle()
    }

    render() {
        return (
            <div>
                <Button color="info" size="sm" className="mb-3" onClick={this.toggle}>+ Comment to this post</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Create Your Post
                    </ModalHeader>
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

NewComment.propTypes = {
    newComment: PropTypes.func.isRequired
}

export default connect(null, {newComment})(NewComment)
