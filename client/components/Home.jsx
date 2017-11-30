import React, { Component } from 'react'
import { connect } from 'react-redux'
import { func } from 'prop-types';
import { fetchSomething } from '../actions'

const Home = ({ fetchSomething }) => {
  let key, value
  return (
    <div>
      <input placeholder="key" ref={node => (key = node)} />
      <input placeholder="value" ref={node => (value = node)} />

      <button
        onClick={() => {
          let tmp = {}
          tmp[key.value] = value.value
          fetchSomething(tmp)
        }}
      >
        get!
      </button>
    </div>
  )
}

Home.propTypes = {
  fetchSomething: func.isRequired
}

const mapDispatchToProps = { fetchSomething }

export default connect(null, mapDispatchToProps)(Home)
