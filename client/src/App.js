import React from 'react';
import { Provider } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import store from './store'

import Posts from './components/posts/readPosts/posts'
import NewPost from './components/posts/createPosts/newPost'
import NavBar from './components/navbar/navbar'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NavBar />
        <NewPost />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
