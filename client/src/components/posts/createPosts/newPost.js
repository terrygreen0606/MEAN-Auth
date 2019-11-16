import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { newPost } from '../../../actions/posts/postsAction'

export class NewPost extends Component {

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         title: '',
    //         body: ''
    //     }
    // }

    onSubmit = (e) => {

        e.preventDefault()

        const newPost = {
            title: this.state.title,
            body: this.state.body
        }

        this.props.newPost(newPost)

        this.setState({
            title: '',
            body: ''
        })
    }

    onChange = (e) => {

        this.setState({
            [e.target.name] : e.target.value
        })

    }

    render() {

        return (
            <Container>
                {/* <h2>Create your post</h2>
                <form onSubmit={this.onSubmit}>
                    <label>Title</label><br />
                    <input type="text" name="title" value={this.state.title} onChange={this.onChange} /><br />
                    <label>Body</label><br />
                    <textarea name="body" value={this.state.body} onChange={this.onChange} /><br />
                    <button type="submit">Submit</button>
                </form> */}

                <Button color="success" size="sm" className="mb-3">+ Add your Post</Button>
            </Container>
        )
    }
}

NewPost.propTypes = {
    newPost: PropTypes.func.isRequired
}

export default connect(null, {newPost})(NewPost)
