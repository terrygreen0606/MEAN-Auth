import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

import Title from '../Title/title'

export class SingleBlog extends Component {
    render() {
		console.log(this.props.match.params.blogId)
        return (
			<Fragment>
				<Title pageTitle='See comments to this post.' />
				<section className="ls s-py-75 s-py-lg-100 c-gutter-60">
					<div className="container">
						<div className="row">

							<div className="d-none d-lg-block divider-60"></div>

							<main className="offset-lg-1 col-lg-10">
								<article className="vertical-item content-padding bordered post type-event status-publish format-standard has-post-thumbnail">
									<div className="item-media post-thumbnail">
										<img src="/images/gallery/04.jpg" alt="" />
										<div className="text-md-left entry-meta item-meta bg-dark-transpatent meta-event">
											<Link to='/'>
												<i className="fa fa-calendar color-main2"></i>
												<span>March 12, 2018</span>
											</Link>
											<Link to='/'>
												<i className="fa fa-map-marker color-main2"></i>
												<span>Consetetur sadipscing elitr</span>
											</Link>
											<Link to='/'>
												<i className="fa fa-thumbs-o-up color-main2"></i>
												<span>68</span>
											</Link>
											<Link to='/'>
												<i className="fa fa-thumbs-o-down color-main2"></i>
												<span>10</span>
											</Link>
										</div>
									</div>


									<div className="item-content">
										<header className="entry-header">
											<h1 className="entry-title">Minima molestiae quas quis excepturi non vel</h1>
										</header>

										<div className="entry-content">
											<p className="excerpt">
												At vero eos accusam justo duo dolores et rebum clita kasd gubergren nosea takimata sanctus est dolor sit amet
											</p>

											<p>
												At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor amet consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
											</p>

											<ul className="list-styled">
												<li>Consetetur sadipscing elitr, sed diam nonumy</li>
												<li>Eirmod tempor invidunt ut labore</li>
												<li>Dolore magna aliquyam erat</li>
												<li>Sed diam voluptua. At vero eos accusam</li>
											</ul>

											<p>
												At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctusamet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
											</p>


										</div>
									</div>
								</article>

								<div id="comments" className="comments-area bordered">

									<h4 className="comments-title">
										5 Comments In This Topic:
									</h4>
									<ol className="comment-list">
										<li className="comment">
											<article className="comment-body">
												<footer className="comment-meta">
													<div className="comment-author vcard">
														<img alt="" src="/images/team/comment-01.jpg" />
														<b className="fn">
															<a href="#" rel="nofollow" className="url">Etta Francis</a>
														</b>
													</div>

													<div className="comment-metadata">
														<a href="#" className="color-main2">
															<time dateTime="2018-03-14T07:57:01+00:00">
																19 jan. 18
															</time>
														</a>
													</div>
												</footer>

												<div className="comment-content">
													<p>Etiam pharetra massa auctor, accumsan arcu ut, placerat ipsum. Nunc vitae tincidunt lorem. Fusce condimentum.</p>
												</div>

												<div className="reply">
													<a rel="nofollow" className="comment-reply-link" href="#reply" aria-label="Reply to John Doe">
														<i className="color-darkgrey fa fa-mail-reply" aria-hidden="true"></i>
														Reply
													</a>
												</div>
											</article>
											<ol className="children">
												<li className="comment">
													<article className="comment-body">
														<footer className="comment-meta">
															<div className="comment-author vcard">
																<img alt="" src="/images/team/comment-02.jpg" />
																<b className="fn">
																	<a href="#" rel="nofollow" className="url">Jeremy Rice</a>
																</b>
															</div>

															<div className="comment-metadata">
																<a href="#" className="color-main2">
																	<time dateTime="2018-03-14T08:01:21+00:00">
																		20 jan. 18
																	</time>
																</a>
															</div>

														</footer>

														<div className="comment-content">
															<p>Integer sollicitudin consequat ipsum, vel vehicula sem vestibulum ac. Aliquam scelerisque.</p>
														</div>

														<div className="reply">
															<a rel="nofollow" className="comment-reply-link" href="#reply" aria-label="Reply to John Doe">
																<i className="color-darkgrey fa fa-mail-reply" aria-hidden="true"></i>
																Reply
															</a>
														</div>
													</article>
													<ol className="children">
														<li className="comment">
															<article className="comment-body">
																<footer className="comment-meta">
																	<div className="comment-author vcard">
																		<img alt="" src="/images/team/comment-03.jpg" />
																		<b className="fn">
																			<a href="#" rel="nofollow" className="url">Lloyd Meyer</a>
																		</b>
																	</div>

																	<div className="comment-metadata">
																		<a href="#" className="color-main2">
																			<time dateTime="2018-03-14T08:02:06+00:00">
																				21 jan. 18
																			</time>
																		</a>
																	</div>
																</footer>

																<div className="comment-content">
																	<p>Curabitur semper turpis lacus, nec convallis risus maximus amet.</p>
																</div>
																<div className="reply">
																	<a rel="nofollow" className="comment-reply-link" href="#reply" aria-label="Reply to John Doe">
																		<i className="color-darkgrey fa fa-mail-reply" aria-hidden="true"></i>
																		Reply
																	</a>
																</div>
															</article>

														</li>
													</ol>
												</li>
											</ol>
										</li>

										<li className="comment">
											<article className="comment-body">
												<footer className="comment-meta">
													<div className="comment-author vcard">
														<img alt="" src="/images/team/comment-04.jpg" />
														<b className="fn">
															<a href="#" rel="nofollow" className="url">Olivia Newton</a>
														</b>
													</div>

													<div className="comment-metadata">
														<a href="#" className="color-main2">
															<time dateTime="2018-03-14T07:57:01+00:00">
																23 jan. 18
															</time>
														</a>
													</div>

												</footer>

												<div className="comment-content">
													<p>Maecenas eu leo sed nulla convallis placerat eu eu tellus. Morbi semper risus erat, semper vestibulum leo sed.</p>
												</div>

												<div className="reply">
													<a rel="nofollow" className="comment-reply-link" href="#reply" aria-label="Reply to John Doe">
														<i className="color-darkgrey fa fa-mail-reply" aria-hidden="true"></i>
														Reply
													</a>
												</div>
											</article>
											<ol className="children">
												<li className="comment">
													<article className="comment-body">
														<footer className="comment-meta">
															<div className="comment-author vcard">
																<img alt="" src="/images/team/comment-05.jpg" />
																<b className="fn">
																	<a href="#" rel="nofollow" className="url">Louisa Graves</a>
																</b>
															</div>

															<div className="comment-metadata">
																<a href="#" className="color-main2">
																	<time dateTime="2018-03-14T08:01:21+00:00">
																		30 jan. 18
																	</time>
																</a>
															</div>

														</footer>

														<div className="comment-content">
															<p>Curabitur mollis eget ex et condimentum. Praesent dictum eros vel viverra posuere. Nulla facilisi.</p>
														</div>

														<div className="reply">
															<a rel="nofollow" className="comment-reply-link" href="#reply" aria-label="Reply to John Doe">
																<i className="color-darkgrey fa fa-mail-reply" aria-hidden="true"></i>
																Reply
															</a>
														</div>
													</article>

												</li>
											</ol>
										</li>
									</ol>
								</div>
								<nav className="navigation pagination" role="navigation">
									<h2 className="screen-reader-text">Comments navigation</h2>
									<div className="nav-links">
										<a className="prev page-numbers" href="events-right.html">
											<i className="fa fa-angle-left"></i>
											<span className="screen-reader-text">Previous page</span>
										</a>
										<a className="page-numbers" href="events-right.html">
											<span className="meta-nav screen-reader-text">Page </span>
											1
										</a>
										<span className="page-numbers current">
											<span className="meta-nav screen-reader-text">Page </span>
											2
										</span>
										<a className="page-numbers" href="events-right.html">
											<span className="meta-nav screen-reader-text">Page </span>
											3
										</a>
										<a className="next page-numbers" href="events-right.html">
											<span className="screen-reader-text">Next page</span>
											<i className="fa fa-angle-right"></i>
										</a>
									</div>
								</nav>

								<div className="comment-form-reply ls bordered" id="reply">
									<div id="respond" className="comment-respond">
										<h4 id="reply-title" className="comment-reply-title">Write Feedback Now:</h4>
										<form action="/" method="post" id="comment-form" className="comment-form" noValidate="">
											<div className="row c-gutter-20">
												<div className="col-12 col-lg-4">
													<p className="comment-form-author">
														<label htmlFor="author">Full Name</label>
														<input id="author" name="author" type="text" value="" size="30" maxLength="245" aria-required="true" required="required" placeholder="Full Name" />
													</p>
												</div>
												<div className="col-12 col-lg-4">
													<p className="comment-form-email">
														<label htmlFor="email">Email Adress</label>
														<input id="email" name="email" type="email" value="" size="30" maxLength="100" aria-describedby="email" aria-required="true" required="required" placeholder="Email Adress" />
													</p>
												</div>
												<div className="col-12 col-lg-4">
													<p className="comment-form-phone">
														<label htmlFor="phone">Phone Number</label>
														<input id="phone" name="phone" type="text" value="" size="30" aria-required="true" placeholder="Phone Number" />
													</p>
												</div>
											</div>
											<p className="comment-form-comment">
												<label htmlFor="comment">Your Comment</label>
												<textarea id="comment" name="comment" cols="45" rows="8" maxLength="65525" aria-required="true" placeholder="Your Comment..." required="required"></textarea>
											</p>
											<p className="form-submit">
												<input name="submit" type="submit" className="submit" value="Send now" />
											</p>
										</form>
									</div>
								</div>
							</main>

							<div className="d-none d-lg-block divider-60"></div>
						</div>
					</div>
				</section>
			</Fragment>
        )
    }
}

export default SingleBlog
