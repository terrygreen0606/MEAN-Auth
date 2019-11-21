import React, { useEffect } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import './App.css';

import store from './store'
import { loadUser } from './actions/auth/authAction'

import Preloader from './components/Preloader/preloader'
import Header from './components/Header/header'
import Homepage from './components/Homepage/homepage'
import Blogs from './components/Blogs/blogs'
import SingleBlog from './components/SingleBlog/single_blog'
import Components from './components/ManageUsers/manage_users'
import Footer from './components/Footer/footer'
import Copyright from './components/Copyright/copyright'
import Empty from './components/Empty/empty'


function App() {

  useEffect( () => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Router>
      <div className="App">
        <Preloader />
        <div id="canvas">
          <div id="box_wrapper">
            <Header />
            <Switch>
              <Route path='/' exact component={Homepage} />
              <Route path='/blogs' exact component={Blogs} />
              <Route path='/blogs/:blogId' exact component={SingleBlog} />
              <Route path='/login' exact component={Components.Login} />
              <Route path='/signup' exact component={Components.Signup} />
              <Route path='/forgot' exact component={Components.ForgotPassword} />
              <Route path='/reset/:token' exact component={Components.ResetPassword} />
              <Route component={Empty} />
            </Switch>
            <Footer />
            <Copyright />
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App