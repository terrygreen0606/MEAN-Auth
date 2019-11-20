import React, { Component } from 'react'

export class Title extends Component {
    render() {
        return (
            <section className="page_title ds s-py-10 s-py-xl-25 breadcrumb-image s-overlay">
				<div className="container">
					<div className="row">
						<div className="divider-50"></div>
                        
						<div className="col-md-12 text-center">
							<h1 className="fw-400">Blog Full Width</h1>
							<ol className="breadcrumb">
								<li className="breadcrumb-item">
									<a href="./">Home</a>
								</li>
								<li className="breadcrumb-item">
									<a href="#">Pages</a>
								</li>
								<li className="breadcrumb-item active">
									Blog Full Width
								</li>
							</ol>
						</div>

						<div className="divider-50"></div>

					</div>
				</div>
			</section>
        )
    }
}

export default Title
