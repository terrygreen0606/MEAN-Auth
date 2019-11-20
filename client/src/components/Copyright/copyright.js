import React, { Component } from 'react'

export class Copyright extends Component {
    render() {
        return (
            <section className="page_copyright ds s-py-25 s-py-lg-5 s-parallax s-overlay footer-overlay">
				<div className="container">
					<div className="row align-items-center">
						<div className="divider-20 d-none d-lg-block"></div>
						<div className="col-md-12 text-center">
							<p>&copy; Copyright
								<span className="copyright_year">2018</span> All Rights Reserved</p>
						</div>
						<div className="divider-20 d-none d-lg-block"></div>
					</div>
				</div>
			</section>
        )
    }
}

export default Copyright
