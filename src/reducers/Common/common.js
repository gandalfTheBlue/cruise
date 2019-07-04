import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'

import {
	APP_SIDER,
	APP_SHOW_LOADING,
	APP_CLOSE_LOADING,
} from 'actions/Common/common'

const loading = handleActions(
	{
		[APP_SHOW_LOADING]: () => true,
		[APP_CLOSE_LOADING]: () => false,
	},
	false,
)

const sider = handleActions(
	{
		[APP_SIDER]: (state, { payload }) => payload,
	},
	'user',
)

export default combineReducers({
	loading,
	sider,
})
