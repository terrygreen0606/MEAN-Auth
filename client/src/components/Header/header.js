import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth/authAction'


export class Header extends Component {

	state = {
		activeTitle: -1,
		titles: [
			{ pageTitle: 'Home', url: '/' },
			{ pageTitle: 'Blogs', url: '/blogs'},
			{ pageTitle: 'Log In', url: '/login'}
		]
	}

	static propTypes = {
		isAuthenticated: PropTypes.bool,
		userLoading: PropTypes.bool,
		logout: PropTypes.func.isRequired
	}

	listColor(index) {
		this.setState({activeTitle: index})
	}

    render() {

		const { isAuthenticated, userLoading } = this.props

        return (
            <header className="page_header ls justify-nav-center">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-xl-2 col-lg-3 col-11">
							<Link to="/" className="logo" onClick={this.listColor.bind(this, 0)}>
								<img src="/images/logo.png" alt="" />
								<span className="logo-text color-darkgrey">Blogs
									<strong className="color-main logo-dot">.</strong>
								</span>
							</Link>
						</div>
						<div className="col-xl-8 col-lg-5 col-1 text-sm-center">
							<nav className="top-nav">
								<ul className="nav sf-menu">
									{ this.state.titles.map( (title, index) =>
										<li key={index} className={this.state.activeTitle === index ? 'active' : ''} onClick={this.listColor.bind(this, index)}>
											{title.pageTitle === 'Log In'
											? isAuthenticated
												? <Link to='/' onClick={this.props.logout}>Log Out</Link>
												: <Link to={title.url}>{title.pageTitle}</Link>
											:<Link to={title.url}>{title.pageTitle}</Link>}
										</li>
									)}
								</ul>
							</nav>
						</div>
						{ isAuthenticated
						?null
						:<div className="col-xl-2 col-lg-3 text-left text-xl-right d-none d-lg-block">
							<span>
								<Link to="/signup" className="btn btn-maincolor2">Sign Up</Link>
							</span>
						</div>}
					</div>
				</div>

				<span className="toggle_menu">
					<span></span>
				</span>
			</header>
        )
    }
}

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	userLoading: state.auth.isLoading
})

export default connect(mapStateToProps, {logout})(Header)
