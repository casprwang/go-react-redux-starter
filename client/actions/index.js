import { REFRESH_RESULT } from './constants.js'
import $ from 'jquery';

// action creators
export const refreshResult = data => ({
  type    : REFRESH_RESULT,
  content : data
})

// async action
export const fetchSomething = condition => dispatch => {
  const request = new Request(`/test?${$.param(condition)}`)

  fetch(request)
    .then(res => res.json())
    .then(data => {
      // dispatch the action
      dispatch(refreshResult(data))
    })
}
