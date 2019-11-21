import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Empty extends Component {
    render() {
        return (
            <section className="ls s-py-130 error-404 not-found page_404 s-overlay">
				<div className="container">
					<div className="row">

						<div className="d-none d-lg-block divider-55"></div>

						<div className="col-sm-12 text-center">

							<header className="page-header">
								<h3>404</h3>
								<h4>
									Oops, page not found!
								</h4>
							</header>

							<div className="page-content">
								<div id="search-404" className="widget widget_search">
									<p>You can search what interested:</p>
								</div>
								<p>or</p>
								<div>
									<Link to="/" className="btn btn-maincolor2">back to Home</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="d-none d-lg-block divider-75"></div>
				</div>
			</section>
        )
    }
}

export default Empty
