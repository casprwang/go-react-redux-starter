import $ from 'jquery'

// constants
export const REFRESH_RESULT = 'REFRESH_RESULT'

// action creators
export const refreshResult = data => ({
  type    : REFRESH_RESULT,
  content : data
})

// async action
export const fetchSomething = condition => dispatch => {
  const request = new Request(`/test?${$.param(condition)}`, {
    method : 'GET'
  })

  fetch(request)
    .then(res => res.json())
    .then(data => {
      // dispatch the action
      dispatch(refreshResult(data))
    })
}

// get the condition and return a function that returns dispatch(data)
export const createSomething = condition => dispatch => {
  const request = new Request('/test/', {
    method : 'POST',
    body   : JSON.stringify(condition)
  })

  fetch(request)
    .then(res => res.json())
    .then(data => {
      dispatch(refreshResult(data))
    })
}
