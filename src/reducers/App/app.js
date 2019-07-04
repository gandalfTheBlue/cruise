import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'

import { APP_OAUTH_USER } from 'actions/App/app'

export const user = handleActions(
	{
		[APP_OAUTH_USER]: (state, { payload }) => payload,
	},
	{},
)

export default combineReducers({
	user,
})
