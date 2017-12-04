import { REFRESH_RESULT } from '../actions/'

export default (
  state = {
    result : null
  },
  action
) => {
  const copy = {
    ...state
  }

  const { type, content } = action

  switch (type) {
    case REFRESH_RESULT:
      copy.result = content
      break

    default:
      copy.result = null
  }

  console.log(copy.result)
  return copy
}
