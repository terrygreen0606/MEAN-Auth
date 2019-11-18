import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, NavLink, Alert } from 'reactstrap'

import { register } from '../../actions/auth/authAction'
import { clearErrors } from '../../actions/error/errorAction'


export class RegisterModal extends Component {

    state = {
        modal: false,
        username: '',
        email: '',
        password: '',
        msg: null
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props

        if (error !== prevProps.error) {
            //Check for register error
            if (error.id === "REGISTER_FAIL") {
                this.setState({ msg: error.msg.msg })
            } else {
                this.setState({ msg: null })
            }
        }

        // If authenticated, close modal
        if (this.state.modal) {
            if (isAuthenticated) {
                this.toggle()
            }
        }
    }

    toggle = () => {

        // Clear errors
        this.props.clearErrors()

        this.setState({
            username: '',
            email: '',
            password: '',
            modal: !this.state.modal
        })
    }

    onSubmit = (e) => {

        e.preventDefault()

        const { username, email, password } = this.state

        // Create user object
        const newUser = {
            username,
            email,
            password
        }

        // Attempt to register
        this.props.register(newUser)
    }

    onChange = (e) => {

        this.setState({
            [e.target.name] : e.target.value
        })

    }

    render() {

        return (
            <div>
                <NavLink onClick={this.toggle} href="#">Register</NavLink>

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Register
                    </ModalHeader>

                    { this.state.msg ? <Alert color='danger'>{ this.state.msg }</Alert> : null }
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label>Username</Label>
                                <Input type="text" name="username" value={this.state.username} onChange={this.onChange} placeholder="Username" /><br />
                                <Label>Email</Label>
                                <Input type="text" name="email" value={this.state.email} onChange={this.onChange} placeholder="Email" /><br />
                                <Label>Password</Label>
                                <Input type="text" name="password" value={this.state.password} onChange={this.onChange} placeholder="Password" /><br />
                                <Button color="success" className="mt-2" block>Register</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
})

export default connect(mapStateToProps, {register, clearErrors})(RegisterModal)
