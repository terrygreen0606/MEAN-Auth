import React, { useEffect } from 'react'
import {useSelector} from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css'

import { loadUser } from './actions/auth/authAction'

import './App.css';
import {Container} from 'reactstrap'
import store from './store'
import Posts from './components/posts/readPosts/posts'
import NewPost from './components/posts/createPosts/newPost'
import NavBar from './components/navbar/navbar'


function App() {

  const isAuthenticated = useSelector( state => state.auth.isAuthenticated)

  useEffect( () => {
    store.dispatch(loadUser())
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Container>
        { isAuthenticated ? <NewPost /> : <h4 className="mb-3 ml-4">Please Login to manage posts and comments.</h4> }
        <Posts />
      </Container>
    </div>
  )
}

export default App