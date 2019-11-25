import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import dateFormat from 'dateformat'

import { fetchBlogs } from '../../actions/blogs/blogAction'

export class RecentBlogs extends Component {

    componentDidMount() {
        this.props.fetchBlogs()
    }

    render() {
        const recentBlogs = this.props.blogs.slice(0, 2)
        const showRecent = recentBlogs.map( blog => (
			<li key={blog._id} className="media">
				<Link to={'/blogs/' + blog._id} className="media-image">
					<img src={blog.image} alt="" />
				</Link>
				<div className="media-body">
					<p>
                        <Link to={"/blogs/" + blog._id}>{blog.title}</Link>
					</p>
					<h6 className="item-meta">
						<i className="fa fa-calendar color-main"></i>
						{dateFormat(blog.register_date, 'mmmm dS, yyyy')}
					</h6>
				</div>
			</li>
        ))

        return (
            <div className="widget widget_recent_posts">
                <h3 className="widget-title">Recent Blogs</h3>
                <ul className="list-unstyled">
                    {showRecent}
                </ul>
            </div>
        )
    }
}

RecentBlogs.propTypes = {
    fetchBlogs: PropTypes.func.isRequired,
    blogs: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    blogs: state.blogs.blogItems
})

export default connect(mapStateToProps, {fetchBlogs})(RecentBlogs)
