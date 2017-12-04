import React, { Component } from 'react'
import { Route, Redirect, Link } from 'react-router-dom'
import Get from './Get.jsx'
import Post from './Post.jsx'

const App = (props) => {
  const { match, push } = props

  return (
    <div>

      <div>
        <Link to="/get">
          <button> to Get </button>
        </Link>

        <Link to="/post">
          <button > to Post </button>
        </Link>

      </div>

      <div>
        { (window.location.hostname === '/' || match.isExact) ? (
          <Redirect to={ '/get' } />
        ) : null }
        <Route path="/get" component={ Get } />
        <Route path="/post" component={ Post } />
      </div>

    </div>
  )
}

export default App
