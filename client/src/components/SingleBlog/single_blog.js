import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchBlogs } from '../../actions/blogs/blogAction'
import { fetchComments, newComment } from '../../actions/comments/commentsAction'
import { clearErrors } from '../../actions/error/errorAction'

import Title from '../Title/title'

export class SingleBlog extends Component {

	state = {
		content: '',
		msg: null,
		submitted: false
	}

	componentDidMount() {
		this.props.fetchBlogs()
		this.props.fetchComments()
	}

	componentDidUpdate(prevProps) {

		const { error } = this.props
		
        if (error !== prevProps.error) {
            //Check for adding post error
            if (error.id === "ADDCOMMENT_FAIL") {
                this.setState({ msg: error.msg.msg })
            }
		}

		// If successfully added, clear Errors
		if (prevProps.comments.length !== this.props.comments.length) {
			if (this.state.submitted) {
				this.props.clearErrors()
				this.setState({
					content: '',
					msg: 'You have successfully commented to this blog.'
				})
			}
		}
    }

	onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {

		e.preventDefault()
		this.setState({submitted: true})

		if (this.props.isAuthenticated) {
			const newComment = {
				content: this.state.content,
				username: this.props.user.username,
				blogId: this.props.match.params.blogId
			}
	
			this.props.newComment(newComment)
		} else {
			this.setState({msg: 'Please log in to comment to the blog.'})
		}
	}

	showBlog = () => {
		
		const blogs = this.props.blogs
		return blogs.map( blog => {
			if (blog._id === this.props.match.params.blogId) {
				return (
                    <article key={blog._id} className="vertical-item content-padding bordered post type-event status-publish format-standard has-post-thumbnail">
						<div className="item-media post-thumbnail">
							<img src="/images/gallery/04.jpg" alt="" />
							<div className="text-md-left entry-meta item-meta bg-dark-transpatent meta-event">
								<Link to='/'>
									<i className="fa fa-calendar color-main2"></i>
									<span>March 12, 2018</span>
								</Link>
								<Link to='/'>
									<i className="fa fa-map-marker color-main2"></i>
									<span>{blog.username}</span>
								</Link>
								<Link to='/'>
									<i className="fa fa-thumbs-o-up color-main2"></i>
									<span>{blog.likes}</span>
								</Link>
								<Link to='/'>
									<i className="fa fa-thumbs-o-down color-main2"></i>
									<span>{blog.dislikes}</span>
								</Link>
							</div>
						</div>

						<div className="item-content">
							<header className="entry-header">
								<h1 className="entry-title">{blog.title}</h1>
							</header>

							<div className="entry-content">
								<p>{blog.content}</p>
							</div>
						</div>
					</article>
                )
			}
		})
	}
	
	showComments = () => {
		const commentsPerBlog = []
		this.props.comments.map( comment => {
			if ( comment.blogId == this.props.match.params.blogId ) {
				commentsPerBlog.push(comment)
			}
		})
		
		if ( commentsPerBlog.length === 0) {
			return (
				<h4 className="comments-title">
					There are no comments to this blog.<br /> Please leave the first comment here.
				</h4>
			)
		} else {
			const comments = commentsPerBlog.map( comment => (
				<li key={comment._id} className="comment">
					<article className="comment-body">
						<footer className="comment-meta">
							<div className="comment-author vcard">
								<img alt="" src="/images/team/comment-01.jpg" />
								<b className="fn">
									<a href="#" rel="nofollow" className="url">{comment.username}</a>
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
							<p>{comment.content}</p>
						</div>
					</article>
				</li>
			))

			return (
				<Fragment>
					<h4 className="comments-title">
						{commentsPerBlog.length} Comment(s) To This Post
					</h4>
					<ol className="comment-list">
						{comments}
					</ol>
				</Fragment>
			)
		}
	}

    render() {
        return (
			<Fragment>
				<Title pageTitle='See comments to this post.' />
				<section className="ls s-py-75 s-py-lg-100 c-gutter-60">
					<div className="container">
						<div className="row">

							<div className="d-none d-lg-block divider-60"></div>

							<main className="offset-lg-1 col-lg-10">
								{this.showBlog()}
								<div id="comments" className="comments-area bordered">
									{this.showComments()}
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
										<h4 id="reply-title" className="comment-reply-title">Please leave your comment here.</h4>
										<form id="comment-form" className="comment-form" onSubmit={this.onSubmit}>
											<p className="comment-form-comment">
												<label htmlFor="content">Your Comment</label>
												<textarea id="content" name="content" cols="45" rows="8" value={this.state.content} onChange={this.onChange} maxLength="65525" placeholder="Your Comment..." required="required"></textarea>
											</p>
											<p className="form-submit">
												<input name="submit" type="submit" className="submit" value="Comment to this Blog" />
											</p>
										</form>
										{ this.state.msg ? 	<div className="alert alert-danger text-center" role="alert">
																{this.state.msg}
															</div>
														 :  null}
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

const mapStateToProps = state => ({

	blogs: state.blogs.blogItems,
	comments: state.comments.comments,
    isAuthenticated: state.auth.isAuthenticated,
	blogsLoading: state.blogs.loading,
	user: state.auth.user,
	error: state.error
})

SingleBlog.propTypes = {

	fetchBlogs: PropTypes.func.isRequired,
	fetchComments: PropTypes.func.isRequired,
	newComment: PropTypes.func.isRequired,
	clearErrors: PropTypes.func.isRequired,
	blogs: PropTypes.array.isRequired,
	comments: PropTypes.array.isRequired,
    isAuthenticated: PropTypes.bool,
	blogsLoading: PropTypes.bool,
	user: PropTypes.object,
	error: PropTypes.object.isRequired
}


export default connect(mapStateToProps, {fetchBlogs, clearErrors, fetchComments, newComment})(SingleBlog)
