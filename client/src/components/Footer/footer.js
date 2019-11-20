import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <footer className="page_footer ds s-pt-90 s-pb-15 s-pt-lg-130 s-pb-lg-75 c-gutter-60 s-parallax">
                <div className="container">
					<div className="row">

						<div className="col-md-12 col-lg-4 animate text-center text-lg-left" data-animation="fadeInUp">
							<div className="widget widget_icons_list footer-list">
								<div className="text-center">
									<a href="./" className="logo logo-footer">
										<img src="/images/logo.png" alt="" />
										<span className="logo-text color-darkgrey">Muka
											<strong className="color-main">.</strong>
										</span>
									</a>
								</div>
								<p className="after-logo">Our Cooking School features a long and proud history of more than 100 years. Founded at the end of the XIXth century.</p>
								<p className="icon-inline">
									<span className="icon-styled color-main2">
										<i className="fa fa-map-marker"></i>
									</span>
									<span>828 Curtis Ferry, New York, USA</span>
								</p>
								<p className="icon-inline">
									<span className="icon-styled color-main2">
										<i className="fa fa-phone"></i>
									</span>
									<span>+8 (800) 238 3597 (admin)</span>
								</p>
								<p className="icon-inline">
									<span className="icon-styled color-main2">
										<i className="fa fa-envelope"></i>
									</span>
									<span>
										<a className="border-bottom" href="#">muka_office@example.com</a>
									</span>
								</p>
								<p className="icon-inline">
									<span className="icon-styled color-main2">
										<i className="fa fa-internet-explorer"></i>
									</span>
									<span>
										<a href="#">www.muka_cooking.com</a>
									</span>
								</p>

							</div>
						</div>

						<div className="col-md-6 col-lg-4 animate" data-animation="fadeInUp">
							<div className="widget widget_recent_posts">
								<h3 className="widget-title">Recent Posts</h3>
								<ul className="list-unstyled">
									<li className="media">
										<a className="media-image" href="blog-single-right.html">
											<img src="/images/events/01.jpg" alt="" />
										</a>
										<div className="media-body">
											<p>
												<a href="blog-single-right.html">Pro Cooking Tips Braising Meats For Tenderness</a>
											</p>
											<h6 className="item-meta">
												<i className="fa fa-calendar color-main"></i>
												20 jan, 18
											</h6>
										</div>
									</li>

									<li className="media">
										<a className="media-image" href="blog-single-right.html">
											<img src="/images/events/02.jpg" alt="" />
										</a>
										<div className="media-body">
											<p>
												<a href="blog-single-right.html">Barbecue Party Tips For A Truly Amazing Event</a>
											</p>
											<h6 className="item-meta">
												<i className="fa fa-calendar color-main"></i>
												23 jan, 18
											</h6>

										</div>
									</li>

									<li className="media">
										<a className="media-image" href="blog-single-right.html">
											<img src="/images/events/03.jpg" alt="" />
										</a>
										<div className="media-body">
											<p>
												<a href="blog-single-right.html">The Best Way To Cook Your Freshly Caught Fish</a>
											</p>
											<h6 className="item-meta">
												<i className="fa fa-calendar color-main"></i>
												25 jan, 18
											</h6>

										</div>
									</li>
								</ul>
							</div>
						</div>

						<div className="col-md-6 col-lg-4 animate text-center text-lg-left" data-animation="fadeInUp">
							<div className="widget widget_mailchimp footer_mailchimp">

								<h3 className="widget-title">Subscribe Now</h3>

								<p>
									Enter Email here to be updated. We promise not to send you spam!
								</p>

								<form className="signup" action="/">
									<label htmlFor="mailchimp_email">
										<span className="screen-reader-text">Subscribe:</span>
									</label>

									<input id="mailchimp_email" name="email" type="email" className="form-control mailchimp_email ds" placeholder="Enter Email address" />

									<button type="submit" className="btn btn-maincolor">Subscribe</button>
									<div className="response"></div>
								</form>

							</div>
						</div>

						<div className="divider-20 d-none d-xl-block"></div>

					</div>
				</div>
			</footer>
        )
    }
}

export default Footer
