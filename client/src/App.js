import React, { useEffect } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css';

import store from './store'
import { loadUser } from './actions/auth/authAction'

import Preloader from './components/Preloader/preloader'
import Header from './components/Header/header'
import Title from './components/Title/title'
import Homepage from './components/Homepage/homepage'
import Blogs from './components/Blogs/blogs'
import Components from './components/ManageUsers/manage_users'
import Footer from './components/Footer/footer'
import Copyright from './components/Copyright/copyright'


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
            <Title />
            <Route path='/' exact component={Homepage} />
            <Route path='/blogs' exact component={Blogs} />
            <Route path='/login' exact component={Components.Login} />
            <Route path='/signup' exact component={Components.Signup} />
            <Route path='/forgot' exact component={Components.ForgotPassword} />
            <Route path='/reset/:token' exact component={Components.ResetPassword} />
            <Footer />
            <Copyright />
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App