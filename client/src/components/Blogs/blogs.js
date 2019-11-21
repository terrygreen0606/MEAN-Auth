import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchBlogs, deleteBlog, newBlog } from '../../actions/blogs/blogAction'
import { clearErrors } from '../../actions/error/errorAction'

import Title from '../Title/title'
import Pagination from '../pagination'

export class Blogs extends Component {

	state = {
		title: '',
		content: '',
		msg: null,
		submitted: false,
		currentPage: 1,
        blogsPerPage: 5
	}

	onSubmit = (e) => {

		e.preventDefault()
		this.setState({submitted: true})
		if (this.props.isAuthenticated) {
			const newBlog = {
				title: this.state.title,
				content: this.state.content,
				username: this.props.user.username
			}
	
			this.props.newBlog(newBlog)
		} else {
			this.setState({msg: 'Please log in to post your blog.'})
		}
    }

    onChange = (e) => {

        this.setState({
            [e.target.name] : e.target.value
        })

	}
	
	paginate = (pageNumber) => {
        this.setState({
            currentPage: pageNumber
        })
    }

	componentDidMount() {
		this.props.fetchBlogs()
	}

	componentDidUpdate(prevProps) {

		const { error } = this.props
		
        if (error !== prevProps.error) {
            //Check for adding post error
            if (error.id === "ADDBLOG_FAIL") {
                this.setState({ msg: error.msg.msg })
            }
		}

		// If successfully added, clear Errors
		if (prevProps.blogs.length !== this.props.blogs.length) {
			if (this.state.submitted) {
				this.props.clearErrors()
				this.setState({
					title: '',
					content: '',
					msg: 'Your blog is successfully posted.'
				})
			}
		}

    }

    render() {

		const { currentPage, blogsPerPage } = this.state
		const indexOfLastBlog = currentPage * blogsPerPage
		const indexOfFirstBlog = indexOfLastBlog - blogsPerPage
		const currentBlogs = this.props.blogs.slice( indexOfFirstBlog, indexOfLastBlog )

		const blogs = currentBlogs.map( blog => (
			<article key={blog._id} className="post side-item content-padding bordered">
				<div className="row">
					<div className="col-xl-4 col-lg-5 col-md-5">
						<div className="item-media post-thumbnail">
							<img src="/images/events/01.jpg" alt="" />
							<div className="media-links">
								<Link className="abs-link" to="/blogs/:blogId"></Link>
							</div>
						</div>
					</div>

					<div className="col-xl-8 col-lg-7 col-md-6">
						<div className="item-content">
							<h6>
								<Link to={"/blogs/" + blog._id}>
									{blog.title}
								</Link>
							</h6>
							<div className="item-meta color-darkgrey">
								<i className="fa fa-calendar color-main"></i>
								<span>March 11, 2018</span>
								<i className="fa fa-map-marker color-main"></i>
								<span>{blog.username}</span>
							</div>
							<p>
								{blog.content}
							</p>
							<div className="item-meta color-darkgrey">
								<i className="fa fa-thumbs-o-up color-main"></i>
								<span>{blog.likes}</span>
								<i className="fa fa-thumbs-o-down color-main"></i>
								<span>{blog.dislikes}</span>
							</div>
						</div>
					</div>
				</div>
				<div className="text-center blog-btn ">
					<Link to={"/blogs/" + blog._id} className="btn btn-outline-maincolor2">Read more</Link>
				</div>
			</article>
		))
        return (
			<Fragment>
				<Title pageTitle='One of the best Blog websites' />
				<section className="ls s-pt-75 s-pb-0 s-py-lg-100 events">
					<div className="container">
						<div className="d-none d-lg-block divider-60"></div>

						<div className="row c-gutter-60">
							<main className="col-lg-7 col-xl-8">
								{blogs}
								<Pagination itemsPerPage={blogsPerPage} totalItems={this.props.blogs.length} paginate={this.paginate} />
								<div className="comment-form-reply ls bordered" id="reply">
									<div id="respond" className="comment-respond">
										<h4 id="reply-title" className="comment-reply-title">Upload your Blog here:</h4>
										<form id="comment-form" className="comment-form" onSubmit={this.onSubmit}>
											<p className="comment-form-comment">
												<label htmlFor="title">Your Blog Title</label>
												<input id="title" name="title" type="text" value={this.state.title} onChange={this.onChange} maxLength="245" required="required" placeholder="Title" />
											</p>
											<p className="comment-form-comment">
												<label htmlFor="content">Your Blog Content</label>
												<textarea id="content" name="content" cols="45" rows="8" value={this.state.content} onChange={this.onChange} maxLength="65525" placeholder="Your Blog Content..." required="required"></textarea>
											</p>
											<p className="form-submit">
												<input name="submit" type="submit" className="submit" value="Post your blog" />
											</p>
										</form>
										{ this.state.msg ? 	<div className="alert alert-danger text-center" role="alert">
																{this.state.msg}
															</div>
														 :  null}
									</div>
								</div>
							</main>

							<aside className="col-lg-5 col-xl-4">
								<div className="widget widget_popular_entries">

									<h3 className="widget-title">Popular Posts</h3>
									<ul className="list-unstyled">
										<li className="media">
											<a className="media-image" href="blog-single-right.html">
												<img src="/images/recent_post1.jpg" alt="" />
											</a>
											<div className="media-body">
												<h4>
													<a href="blog-single-right.html">Eod tempor invidunt labore dolore magna</a>
												</h4>
												<div className="star-rating" title="Rated 5 out of 5">
													<span style={{ width: '100%' }}>
														<strong className="rating">5</strong> out of 5
													</span>
												</div>
											</div>
										</li>

										<li className="media">
											<a className="media-image" href="blog-single-right.html">
												<img src="/images/recent_post2.jpg" alt="" />
											</a>
											<div className="media-body">
												<h4>
													<a href="blog-single-right.html">Aliquyam erat, sed voluptua vero eos </a>
												</h4>
												<div className="star-rating" title="Rated 4.0 out of 5">
													<span style={{ width: '60%' }}>
														<strong className="rating">4</strong> out of 5
													</span>
												</div>

											</div>
										</li>

										<li className="media">
											<a className="media-image" href="blog-single-right.html">
												<img src="/images/recent_post1.jpg" alt="" />
											</a>
											<div className="media-body">
												<h4>
													<a href="blog-single-right.html">Et justo duo dolores et ea rebum</a>
												</h4>
												<div className="star-rating" title="Rated 4.50 out of 5">
													<span style={{ width: '80%' }}>
														<strong className="rating">4.50</strong> out of 5
													</span>
												</div>

											</div>
										</li>

										<li className="media">
											<a className="media-image" href="blog-single-right.html">
												<img src="/images/recent_post2.jpg" alt="" />
											</a>
											<div className="media-body">
												<h4>
													<a href="blog-single-right.html">Stetclita kasd gubergren no sea takimata</a>
												</h4>
												<div className="star-rating" title="Rated 3.00 out of 5">
													<span style={{ width: '40%' }}>
														<strong className="rating">3</strong> out of 5
													</span>
												</div>

											</div>
										</li>

										<li className="media">
											<a className="media-image" href="blog-single-right.html">
												<img src="/images/recent_post1.jpg" alt="" />
											</a>
											<div className="media-body">
												<h4>
													<a href="blog-single-right.html">Lorem ipsum dolor sitmet amet consetetur </a>
												</h4>
												<div className="star-rating" title="Rated 4.50 out of 5">
													<span style={{ width: '90%' }}>
														<strong className="rating">4.50</strong> out of 5
													</span>
												</div>

											</div>
										</li>

									</ul>
								</div>

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
								<div className="widget widget_apsc_widget">
									<div className="apsc-icons-wrapper clearfix apsc-theme-4">
										<div className="apsc-each-profile">
											<a className="apsc-instagram-icon clearfix" href="#">
												<div className="apsc-inner-block">
													<span className="social-icon">
														<i className="fa fa-instagram apsc-instagram"></i>
														<span className="media-name">instagram</span>
													</span>
													<span className="apsc-count">259</span>
												</div>
											</a>
										</div>
										<div className="apsc-each-profile">
											<a className="apsc-post-icon clearfix" href="#">
												<div className="apsc-inner-block">
													<span className="social-icon">
														<i className="fa fa-pencil apsc-post"></i>
														<span className="media-name">post</span>
													</span>
													<span className="apsc-count">10 K</span>
												</div>
											</a>
										</div>
										<div className="apsc-each-profile">
											<a className="apsc-facebook-icon clearfix" href="#">
												<div className="apsc-inner-block">
													<span className="social-icon">
														<i className="apsc-facebook fa fa-facebook"></i>
														<span className="media-name">facebook</span>
													</span>
													<span className="apsc-count">1500</span>
												</div>
											</a>
										</div>
									</div>
								</div>

								<div className="bg-maincolor widget-search">
									<div className="widget widget_search">
										<h5>Search On Website</h5>
										<p>Find more exciting news and offers</p>
										<form role="search" method="get" className="search-form" action="/">
											<label htmlFor="search-form-widget">
												<span className="screen-reader-text">Search for:</span>
											</label>
											<input type="search" id="search-form-widget" className="search-field form-control" placeholder="Type Keyword Here..." value="" name="search" />
											<button type="submit" className="search-submit">
												<span className="screen-reader-text">Type Keyword Here...</span>
											</button>
										</form>
									</div>
								</div>
							</aside>
							<div className="d-none d-lg-block divider-60"></div>
						</div>
					</div>
				</section>
			</Fragment>
        )
    }
}

const mapStateToProps = state => ({

    blogs: state.blogs.blogItems,
    isAuthenticated: state.auth.isAuthenticated,
	blogsLoading: state.blogs.loading,
	user: state.auth.user,
	error: state.error
})

Blogs.propTypes = {

	fetchBlogs: PropTypes.func.isRequired,
	newBlog: PropTypes.func.isRequired,
	deleteBlog: PropTypes.func.isRequired,
	clearErrors: PropTypes.func.isRequired,
    blogs: PropTypes.array.isRequired,
    isAuthenticated: PropTypes.bool,
	blogsLoading: PropTypes.bool,
	user: PropTypes.object,
	error: PropTypes.object.isRequired
}

export default connect(mapStateToProps, {fetchBlogs, deleteBlog, newBlog, clearErrors})(Blogs)
