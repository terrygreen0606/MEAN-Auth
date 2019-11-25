import React, { Component, Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import dateFormat from 'dateformat'
import axios from 'axios'
import store from '../../store'

import { tokenConfig } from '../../actions/auth/authAction'
import { fetchBlogs } from '../../actions/blogs/blogAction'
import { fetchComments, newComment } from '../../actions/comments/commentsAction'
import { clearErrors } from '../../actions/error/errorAction'

import Title from '../Title/title'
import Pagination from '../pagination'

export class SingleBlog extends Component {

	state = {
		content: '',
		msg: null,
		submitted: false,
		currentPage: 1,
		commentsPerPage: 3
	}

	componentDidMount() {
		this.props.fetchBlogs()
		this.props.fetchComments()
	}

	componentDidUpdate(prevProps) {

		const { error } = this.props
		
        if (error !== prevProps.error) {
            //Check for adding comment error
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
	
	paginate = (pageNumber) => {
        this.setState({
            currentPage: pageNumber
        })
    }

	onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
		e.preventDefault()

		// if (this.props.error.msg === 'Invalid token.') {
		// 	return <Redirect to='/login' />
		// }

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

	likeOrDislike( flag, likeArr, dislikeArr, blogPoster ) {
		if (this.props.isAuthenticated) {
			const username = this.props.user.username
			if (flag) {
				for (let i=0; i<likeArr.length; i++) {
					if (likeArr[i] === username) {
						return console.log('you already LIKED this post.')
					}
				}
			} else {
				for (let i=0; i<dislikeArr.length; i++) {
					if (dislikeArr[i] === username) {
						return console.log('you already DISLIKED this post.')
					}
				}
			}

			if (flag) {
				for (let i=0; i<dislikeArr.length; i++) {
					if (dislikeArr[i] === username) {
						dislikeArr.splice(i, 1)
						likeArr.push(username)
						break
					}
				}
			} else {
				for (let i=0; i<likeArr.length; i++) {
					if (likeArr[i] === username) {
						likeArr.splice(i, 1)
						dislikeArr.push(username)
						break
					}
				}
			}

			const toSend = { likes: likeArr, dislikes: dislikeArr, username: blogPoster }
			axios
				.post('/api/blogs/update', toSend, tokenConfig(store.getState))
				.catch( err => {
					console.log(err)
				})
		} else {
			console.log('login to like or dislike')
		}

		// if (this.props.isAuthenticated) {
		// 	const username = this.props.user.username
		// 	if(flag){
		// 		if(likeArr.includes(username)){
		// 			console.log('you already LIKED this post.');
		// 		}
	
		// 		if(dislikeArr.includes(username)){
		// 			dislikeArr.splice(dislikeArr.findIndex(x => x === username), 1);
		// 		}
		// 		likeArr.push(username);
		// 	}
		// 	else{
		// 		if(dislikeArr.includes(username)){
		// 			console.log('you already DISLIKED this post.')
		// 		}
	
		// 		if(likeArr.includes(username)){
		// 			likeArr.splice(likeArr.findIndex(x => x === username), 1);
		// 		}
		// 		dislikeArr.push(username);
		// 	}        
		// } else {
		// 	console.log('login to like or dislike')
		// }
	}

	

	showBlog = () => {
		
		const {blogs} = this.props
		return blogs.map( blog => {
			if (blog._id === this.props.match.params.blogId) {
				return (
                    <article key={blog._id} className="vertical-item content-padding bordered post type-event status-publish format-standard has-post-thumbnail">
						<div className="item-media post-thumbnail">
							<img src={blog.image} alt="" />
							<div className="text-md-left entry-meta item-meta bg-dark-transpatent meta-event">
								<Link to='#'>
									<i className="fa fa-calendar color-main2"></i>
									<span>{dateFormat(blog.register_date, 'mmmm dS, yyyy')}</span>
								</Link>
								<Link to='#'>
									<i className="fa fa-user-o color-main2"></i>
									<span>{blog.username}</span>
								</Link>
								<Link to='#' onClick={this.likeOrDislike.bind( this, true, blog.likes, blog.dislikes, blog.username)}>
									<i className="fa fa-thumbs-o-up color-main2"></i>
									<span>{blog.likes.length}</span>
								</Link>
								<Link to='#' onClick={this.likeOrDislike.bind( this, false, blog.likes, blog.dislikes, blog.username)}>
									<i className="fa fa-thumbs-o-down color-main2"></i>
									<span>{blog.dislikes.length}</span>
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
		const { currentPage, commentsPerPage } = this.state
		const indexOfLastComment = currentPage * commentsPerPage
		const indexOfFirstComment = indexOfLastComment - commentsPerPage

		const commentsPerBlog = []
		this.props.comments.map( comment => {
			if ( comment.blogId === this.props.match.params.blogId ) {
				commentsPerBlog.push(comment)
			}
		})

		const currentComments = commentsPerBlog.slice(indexOfFirstComment, indexOfLastComment)
		
		if ( commentsPerBlog.length === 0) {
			return (
				<h4 className="comments-title">
					There are no comments to this blog.<br /> Please leave the first comment here.
				</h4>
			)
		} else {
			const comments = currentComments.map( comment => (
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
										{dateFormat(comment.date, 'mmmm dS, yyyy')}
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
					<div id="comments" className="comments-area bordered">
						<h4 className="comments-title">
							{commentsPerBlog.length} Comment(s) To This Post
						</h4>
						<ol className="comment-list">
							{comments}
						</ol>
					</div>
					<Pagination itemsPerPage={commentsPerPage} totalItems={commentsPerBlog.length} paginate={this.paginate} />
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
								{this.showComments()}
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
