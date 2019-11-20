import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth/authAction'


export class Header extends Component {

	static propTypes = {
		isAuthenticated: PropTypes.bool,
		userLoading: PropTypes.bool,
		logout: PropTypes.func.isRequired
	}

    render() {

		const { isAuthenticated, userLoading } = this.props

        return (
            <header className="page_header ls justify-nav-center">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-xl-2 col-lg-3 col-11">
							<a href="./" className="logo">
								<img src="/images/logo.png" alt="" />
								<span className="logo-text color-darkgrey">Blogs
									<strong className="color-main logo-dot">.</strong>
								</span>
							</a>
						</div>
						<div className="col-xl-8 col-lg-5 col-1 text-sm-center">
							<nav className="top-nav">
								<ul className="nav sf-menu">
									<li className="active">
										<Link to='/'>Home</Link>
									</li>
									<li>
										{isAuthenticated
										?<Link to='/blogs'>Blogs</Link>
										:<Link to='/login'>Blogs</Link>}
									</li>
									{isAuthenticated 
									?<li><Link to='/' onClick={this.props.logout}>Log Out</Link></li>
									:<li>
										<Link to='/login'>Log In</Link>
									</li>}
                                    
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
