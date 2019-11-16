import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap'

import { newPost } from '../../../actions/posts/postsAction'

export class NewPost extends Component {

    state = {
        modal: false,
        title: '',
        body: ''
    }

    toggle = () => {
        this.setState({
            title: '',
            body: '',
            modal: !this.state.modal
        })
    }

    onSubmit = (e) => {

        e.preventDefault()

        const newPost = {
            title: this.state.title,
            body: this.state.body
        }

        this.props.newPost(newPost)

        this.toggle()
    }

    onChange = (e) => {

        this.setState({
            [e.target.name] : e.target.value
        })

    }

    render() {

        return (
            <div>
                <Button color="success" size="sm" className="mb-3" onClick={this.toggle}>+ Add your Post</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Create Your Post
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label>Title</Label>
                                <Input type="text" name="title" value={this.state.title} onChange={this.onChange} placeholder="Post title goes here" /><br />
                                <Label>Content</Label>
                                <Input type="textarea" name="body" value={this.state.body} onChange={this.onChange} placeholder="Post content goes here" /><br />
                                <Button color="success" className="mt-2" block>Create</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

NewPost.propTypes = {
    newPost: PropTypes.func.isRequired
}

export default connect(null, {newPost})(NewPost)
