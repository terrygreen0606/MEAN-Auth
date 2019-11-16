import React from 'react';
import { Provider } from 'react-redux'

import './App.css';
import store from './store'

import Posts from './components/posts/readPosts/posts'
import NewPost from './components/posts/createPosts/newPost'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1 className="headerPos">Posts with Comments</h1><hr />
        <NewPost />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
