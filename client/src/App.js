import React from 'react';
import { Provider } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store'

import './App.css';
import {Container} from 'reactstrap'

import Posts from './components/posts/readPosts/posts'
import NewPost from './components/posts/createPosts/newPost'
import NavBar from './components/navbar/navbar'

function App() {
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
  );
}

export default App;
