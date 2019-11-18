import React, { Component } from 'react'
import { Provider } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store'

import { loadUser } from './actions/auth/authAction'

import './App.css';
import {Container} from 'reactstrap'

import Posts from './components/posts/readPosts/posts'
import NewPost from './components/posts/createPosts/newPost'
import NavBar from './components/navbar/navbar'



export class App extends Component {

  componentDidMount() {
    store.dispatch(loadUser())
  }
  
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <NavBar />
          <Container>
            <NewPost />
            <Posts />
          </Container>
        </div>
      </Provider>
    )
  }
}

export default App