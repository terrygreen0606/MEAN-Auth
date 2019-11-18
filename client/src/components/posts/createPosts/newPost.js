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
                { this.props.isAuthenticated 
                    ? <Button color="success" size="sm" className="mb-3" onClick={this.toggle}>+ Add your Post</Button> 
                    : <h4 className="mb-3 ml-4">Please Login to manage posts and comments.</h4> }
                
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

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

NewPost.propTypes = {
    newPost: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

export default connect(mapStateToProps, {newPost})(NewPost)
