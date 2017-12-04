import React, { Component } from 'react'
import { connect } from 'react-redux'
import { func } from 'prop-types'
import { fetchSomething } from '../actions/'

const Get = ({ fetchSomething, ...rest }) => {
  let key, value

  return (
    <div>
      <input placeholder="key" ref={input => (key = input)} />
      <input placeholder="value" ref={input => (value = input)} />

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

Get.propTypes = {
  fetchSomething : func.isRequired
}

const mapDispatchToProps = { fetchSomething }

export default connect(null, mapDispatchToProps)(Get)
