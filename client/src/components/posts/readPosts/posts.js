import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { fetchPosts, deletePost } from '../../../actions/posts/postsAction'

import Pagination from '../../../components/pagination'
import Comments from '../../comments/readComments/comments'


export class Posts extends Component {

    state = {
        currentPage: 1,
        postsPerPage: 2
    }

    componentDidMount() {
        this.props.fetchPosts()   
    }

    onDeleteClick = (id) => {
        this.props.deletePost(id)
    }

    paginate = (pageNumber) => {
        this.setState({
            currentPage: pageNumber
        })
    }

    render() {

        // Get Current Posts
        const { currentPage, postsPerPage } = this.state
        const indexOfLastPost = currentPage * postsPerPage
        const indexOfFirstPost = indexOfLastPost - postsPerPage
        const currentPosts = this.props.posts.slice( indexOfFirstPost, indexOfLastPost )

        const showPosts = currentPosts.map( post => (
            <CSSTransition key={post._id} timeout={500} classNames="fade">
                <ListGroupItem>
                    <h3>Posts</h3>
                    <h5>Title : {post.title}</h5>
                    <p>Content : {post.body}</p>
                    { this.props.isAuthenticated
                    ? <Button color="danger" size="sm" onClick={this.onDeleteClick.bind(this, post._id)}>&times; Delete this Post</Button>
                    : null }
                    <hr />
                    <Comments postId={post._id} />
                </ListGroupItem>
            </CSSTransition>            
        ))

        return (
            <Fragment>
                { this.props.postsLoading 
                ? <h3>Loading...</h3>
                :<ListGroup className="mb-4">
                    <TransitionGroup>
                        {showPosts}
                    </TransitionGroup>
                    <Pagination itemsPerPage={postsPerPage} totalItems={this.props.posts.length} paginate={this.paginate}/>
                </ListGroup>}
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({

    posts: state.posts.postItems,
    isAuthenticated: state.auth.isAuthenticated,
    postsLoading: state.posts.loading
})

Posts.propTypes = {

    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    isAuthenticated: PropTypes.bool,
    postsLoading: PropTypes.bool
}

export default connect( mapStateToProps, {fetchPosts, deletePost} )(Posts)
