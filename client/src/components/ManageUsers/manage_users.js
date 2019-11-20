import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import axios from 'axios'

import { login } from '../../actions/auth/authAction'
import { register } from '../../actions/auth/authAction'
import { clearErrors } from '../../actions/error/errorAction'

class Login extends Component {

	state = {
		email: '',
		password: '',
		msg: null
	}

	static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
	}
	
	onChange = (e) => {

        this.setState({
            [e.target.name] : e.target.value
        })

	}
	
	onSubmit = (e) => {

        e.preventDefault()

        const { email, password } = this.state

        const user = {
            email, password
        }

        // Attempt to login
        this.props.login(user)
    }

	componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props

        if (error !== prevProps.error) {
            //Check for register error
            if (error.id === "LOGIN_FAIL") {
                this.setState({ msg: error.msg.msg })
            } else {
                this.setState({ msg: null })
            }
        }

        // If authenticated, redirect
        if (isAuthenticated) {
			this.props.clearErrors()
			this.props.history.push("/")
		}
    }

    render() {
        return (
            <section className="ls s-pt-75 s-pb-60 s-py-lg-100 shop-account-login">
				<div className="container">
					<div className="row">

						<div className="d-none d-lg-block divider-60"></div>

						<main className="col-lg-12">
							<article>
								<div className="entry-content">
									<div className="woocommerce">
										{this.state.msg
										? <div className="alert alert-danger text-center" role="alert">{this.state.msg}</div> : null}
										<form className="woocomerce-form woocommerce-form-login login text-center" onSubmit={this.onSubmit}>
											<p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
												<input type="email" className="woocommerce-Input woocommerce-Input--text input-text text-center" name="email" id="email" value={this.state.email} onChange={this.onChange} placeholder="Email address" required />
											</p>
											<p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
												<input className="woocommerce-Input woocommerce-Input--text input-text text-center" type="password" name="password" id="password" value={this.state.password} onChange={this.onChange} placeholder="Password" required />
											</p>

											<p className="form-row">
												<input type="submit" className="woocommerce-Button button" name="login" value="Login" />
											</p>
											<p className="woocommerce-LostPassword lost_password">
												<Link to='/forgot'>Lost your password?</Link>
											</p>
										</form>
									</div>
								</div>
							</article>
						</main>
					</div>
				</div>
			</section>
        )
    }
}

class Signup extends Component {

	state = {
		first_name: '',
		last_name: '',
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

	onChange = (e) => {

        this.setState({
            [e.target.name] : e.target.value
        })

	}
	
	onSubmit = (e) => {

        e.preventDefault()

        const { first_name, last_name, username, email, password } = this.state

        // Create user object
        const newUser = {
			first_name,
			last_name,
            username,
            email,
            password
        }

        // Attempt to register
        this.props.register(newUser)
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
		
		if (isAuthenticated) {
			this.props.clearErrors()
			this.props.history.push("/")
		}
    }

    render() {
        return (
            <section className="ls s-pt-75 s-pb-60 s-py-lg-100 shop-account-login">
				<div className="container">
					<div className="row">
						<div className="d-none d-lg-block divider-60"></div>
						<main className="col-lg-12">
							<article>
								<div className="entry-content">
									<div className="woocommerce">
										{this.state.msg
										? <div className="alert alert-danger text-center" role="alert">{this.state.msg}</div> : null}
										<form className="woocomerce-form woocommerce-form-login login text-center" onSubmit={this.onSubmit}>
											<p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
												<input type="text" className="woocommerce-Input woocommerce-Input--text input-text text-center" name="first_name" id="first_name" value={this.state.first_name} onChange={this.onChange} placeholder="First Name" required />
											</p>
											<p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
												<input type="text" className="woocommerce-Input woocommerce-Input--text input-text text-center" name="last_name" id="last_name" value={this.state.last_name} onChange={this.onChange} placeholder="Last Name" required />
											</p>
											<p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
												<input type="text" className="woocommerce-Input woocommerce-Input--text input-text text-center" name="username" id="username" value={this.state.username} onChange={this.onChange} placeholder="Username" required />
											</p>
											<p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
												<input type="email" className="woocommerce-Input woocommerce-Input--text input-text text-center" name="email" id="email" value={this.state.email} onChange={this.onChange} placeholder="Email" required />
											</p>
											<p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
												<input className="woocommerce-Input woocommerce-Input--text input-text text-center" type="password" name="password" id="password" value={this.state.password} onChange={this.onChange} placeholder="Password" required />
											</p>

											<p className="form-row">
												<input type="submit" className="woocommerce-Button button" name="login" value="Sign Up" />
											</p>

										</form>
									</div>
								</div>
							</article>
						</main>
					</div>
				</div>
			</section>
        )
    }
}

class ForgotPassword extends Component {

	state = {
		email: '',
		showResult: '',
		messageFromServer: ''
	}

	onChange = (e) => {
		this.setState({
            [e.target.name] : e.target.value
        })
	}

	sendEmail = (e) => {
		e.preventDefault()

		axios.post('/users/forgotpassword', {
			email: this.state.email
		})
			.then( res => {
				this.setState({messageFromServer: res.data.message})

				if ( res.data.status !== 200 ) {
					this.setState({
						showResult: (<div className="alert alert-danger text-center" role="alert">
										{this.state.messageFromServer}
									</div>)
					})
				} else {
					this.setState({
						showResult: (<div className="alert alert-success text-center" role="alert">
										{this.state.messageFromServer}
									</div>)
					})
				}
			})
			.catch( err => {
				console.log(err.data)
			})
	}
	render() {
		return (
			<section className="ls s-pt-75 s-pb-60 s-py-lg-100 shop-account-password-reset">
				<div className="container">
					<div className="row">
						<div className="d-none d-lg-block divider-50"></div>
						<main className="col-lg-12">
							{ this.state.showResult ? this.state.showResult : null}
							<form onSubmit={this.sendEmail} className="woocommerce-ResetPassword lost_reset_password text-center">
								<p>Lost your password? Please enter your email address. You will receive a link to create a new password via email.</p>
								<p className="woocommerce-form-row woocommerce-form-row--first form-row form-row-first">
									<input className="woocommerce-Input woocommerce-Input--text input-text text-center" type="email" name="email" id="email" onChange={this.onChange} value={this.state.email} placeholder="Email" required />
								</p>
								<div className="clear"></div>
								<p className="woocommerce-form-row form-row">
									<input type="submit" className="woocommerce-Button button" value="Send link Email" />
								</p>
							</form>
						</main>
						<div className="d-none d-lg-block divider-40"></div>
					</div>
				</div>
			</section>
		)
	}
}

class ResetPassword extends Component {

	state = {
		email: '',
		password: '',
		updated: false,
		error: false,
		isLoading: true,
		message: ''
	}

	async componentDidMount() {
		console.log(this.props.match.params.token)

		await axios
			.get('/users/reset', {
				params: {
					token: this.props.match.params.token
				}
			})
			.then( res => {

				if ( res.status === 200) {
					this.setState({
						email: res.data.email,
						updated: false,
						isLoading: false,
						error: false
					})
				} else {
					this.setState({
						updated: false,
						isLoading: false,
						error: true
					})
				}
			})
			.catch( err => {
				console.log(err.data, '++++++++++++++++')
			})
	}

	onChange = (e) => {
		this.setState({
            [e.target.name] : e.target.value
        })
	}

	updatePassword = (e) => {
		e.preventDefault()

		axios
			.put('/users/updatepassword', {
				email: this.state.email,
				password: this.state.password
			})
			.then( res => {

				if ( res.status === 200 ) {
					this.setState({
						updated: true,
						error: false,
						message: res.data
					})
				} else {
					this.setState({
						updated: false,
						error: true,
						message: res.data
					})
				}
			})
			.catch( err => {
				console.log(err.data)
			})
	}
	render() {
		const {error, isLoading, updated} = this.state
		let showUpdated = ''
		if (error) {
			showUpdated = (
				<h3>Problem occurred while resetting your password. Please send another reset link.</h3>
			)
		} else if (isLoading) {
			showUpdated = (
				<h3>Loading User Data...</h3>
			)
		} else {
			showUpdated = (
				<Fragment>
					{updated ?<p>Your password has been successfully reset</p> : null}
					<form onSubmit={this.updatePassword} className="woocommerce-ResetPassword lost_reset_password text-center">
						<p>Update your password.</p>
						<p className="woocommerce-form-row woocommerce-form-row--first form-row form-row-first">
							<input className="woocommerce-Input woocommerce-Input--text input-text text-center" type="password" name="password" id="password" onChange={this.onChange} value={this.state.password} placeholder="Password" required />
						</p>
						<div className="clear"></div>
						<p className="woocommerce-form-row form-row">
							<input type="submit" className="woocommerce-Button button" value="Reset password" />
						</p>
					</form>
				</Fragment>
			)
		}
		return (
			<section className="ls s-pt-75 s-pb-60 s-py-lg-100 shop-account-password-reset">
				<div className="container">
					<div className="row">
						<div className="d-none d-lg-block divider-50"></div>
						<main className="col-lg-12">
							{showUpdated}
						</main>
						<div className="d-none d-lg-block divider-40"></div>
					</div>
				</div>
			</section>
		)
	}
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
})

export default { 
	Signup : connect( mapStateToProps, {register, clearErrors} )(Signup),
	Login: connect( mapStateToProps, {login, clearErrors} )(Login),
	ForgotPassword,
	ResetPassword
}
