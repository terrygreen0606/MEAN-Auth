import React, { Component } from 'react'

export class BLogs extends Component {
    render() {
        return (
            <section className="ls s-py-75 s-py-lg-100 blog">

				<div className="container">

					<div className="d-none d-lg-block divider-20"></div>

					<div className="row c-gutter-60">
						<main className="offset-lg-1 col-lg-10">
							<article className="text-center text-md-left vertical-item content-padding post type-post status-publish format-standard has-post-thumbnail bordered">
								<div className="item-media post-thumbnail">
									<a href="blog-single-full.html">
										<img src="/images/gallery/03.jpg" alt="" />
									</a>
									<div className="text-md-left entry-meta small-text bg-dark-transpatent">
										<span className="byline">
											<span className="posted-on">
												<span className="screen-reader-text">Posted on</span>

												<a href="blog-single-right.html" rel="bookmark">
													<i className="fa fa-calendar color-main2"></i>
													<time dateTime="2017-10-03T08:50:40+00:00" className="entry-date published updated">22 Jan, 18</time>
												</a>
											</span>
											<span className="category-links links-maincolor">
												<span className="screen-reader-text">Categories</span>
												<a href="blog-right.html" rel="category tag">
													<i className="fa fa-tags color-main2"></i>
													coach
												</a>
											</span>
											<span className="author vcard">
												<a className="url fn n" href="blog-right.html">
													<i className="fa fa-user color-main2"></i>
													Admin
												</a>
											</span>
										</span>
									</div>
								</div>
								<div className="item-content">
									<header className="entry-header">
										<h4 className="blog-title">
											<a href="blog-single-full.html" rel="bookmark">
												Sample Post With Image
											</a>
										</h4>
									</header>

									<div className="entry-content">
										<p>
											Frankfurter andouille kevin, sausage spare ribs fatback ham hock pancetta tongue. Jerky flank short ribs kielbasa, bacon alcatra ball tip pork belly pork loin chicken kevin boudin meatloaf drumstick. Rump alcatra ham, shank kielbasa jowl sirloin pancetta
											flank brisket drumstick buffalo shankle landjaeger.
										</p>
									</div>
								</div>
								<div className="text-center blog-btn ">
									<a href="#" className="btn btn-outline-maincolor2">Read more</a>
								</div>
							</article>
							
							<nav className="navigation pagination  justify-content-center" role="navigation">
								<h2 className="screen-reader-text">Posts navigation</h2>
								<div className="nav-links">
									<a className="prev page-numbers" href="blog-right.html">
										<i className="fa fa-angle-left"></i>
										<span className="screen-reader-text">Previous page</span>
									</a>
									<a className="page-numbers" href="blog-right.html">
										<span className="meta-nav screen-reader-text">Page </span>
										1
									</a>
									<span className="page-numbers current">
										<span className="meta-nav screen-reader-text">Page </span>
										2
									</span>
									<a className="page-numbers" href="blog-right.html">
										<span className="meta-nav screen-reader-text">Page </span>
										3
									</a>
									<a className="next page-numbers" href="blog-right.html">
										<span className="screen-reader-text">Next page</span>
										<i className="fa fa-angle-right"></i>
									</a>
								</div>
							</nav>

						</main>

						<div className="d-none d-lg-block divider-60"></div>

					</div>

				</div>
			</section>
        )
    }
}

export default BLogs
